<template>
  <Toast />
  <div>
    <div class="card">
      <!-- ADD NEW USER & SEARCH FILTER -->
      <Toolbar class="mb-4">
        <template #start>
          <Button :label="$t('Add New User')" icon="pi pi-plus-circle" class="p-button-info mr-2" @click="openNew" />
        </template>
        <template #end>
          <div class=" table-header flex flex-column md:flex-row md:justiify-content-between">
            <span class="p-input-icon-left">
              <i class="pi pi-search" />
              <InputText class="w-72" v-model="filters['global'].value" :placeholder="$t('Search')" />
            </span>
          </div>
        </template>
      </Toolbar>

      <!-- DISPLAY DATA FROM API AS TABLE -->
      <DataTable ref="dt" :value="users" dataKey="id" :resizableColumns="true" columnResizeMode="expand" showGridlines
        :paginator="true" :rows="10" :filters="filters"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        :rowsPerPageOptions="[5, 10, 25, 50 , 100]" currentPageReportTemplate="Showing {first} to {last} of {totalRecords} users"
        responsiveLayout="scroll">

        <Column field="id" :header="$t('Id')" :sortable="true"></Column>
        <Column field="name" :header="$t('Name')" :sortable="true"></Column>
        <Column field="email" :header="$t('Email')" :sortable="true"></Column>
        <Column field="phone_number" :header="$t('Phone Number')" :sortable="true"></Column>
        <Column field="roles" :header="$t('Role')" :sortable="true">
          <template #body="slotProps">
            <div v-for="role in slotProps.data.roles">
              <Badge class="p-badge-primary mb-1" :for="role.name">{{ role.name }}</Badge>
            </div>
          </template>
        </Column>
        <Column field="status" :header="$t('Status')" :sortable="true">
          <template #body="slotProps">
            <Badge class="p-badge-info" v-if="slotProps.data.status == 'Active'">{{ slotProps.data.status }}</Badge>
            <Badge class="p-badge-danger" v-else="slotProps.data.status == 'Inactive'">{{ slotProps.data.status }}
            </Badge>
          </template>
        </Column>
        <Column field="action" :header="$t('Action')" :exportable="false" style="min-width: 8rem">
          <template #body="slotProps">
            <Button icon="pi pi-pencil" :label="$t('Edit')" class="p-button p-button-success mr-2"
              @click="editUser(slotProps.data)" />
            <Button icon="pi pi-trash" :label="$t('Delete')" class="p-button p-button-danger"
              @click="confirmDeleteUser(slotProps.data)" />
          </template>
        </Column>

      </DataTable>
    </div>

    <!-- EDIT AND DELETE USER -->
    <Dialog v-model:visible="userDialog" :style="{ width: '450px' }" header="User Details" :modal="true"
      class="p-fluid">

      <div class="field mt-3">
        <label for="name">{{ $t('Name') }} <span class="text-red-600">*</span></label>
        <InputText id="name" name="name" v-model.trim="user.name" required="true" autofocus
          :class="{ 'p-invalid': submitted && !user.name }" />
        <small class="p-error" v-if="submitted && !user.name">{{ $t('Name is required.') }}</small>
      </div>

      <div class="field">
        <label for="email">{{ $t('Email') }} <span class="text-red-600">*</span></label>
        <InputText type="email" id="email" v-model="user.email" required="true" autofocus
          :class="{ 'p-invalid': submitted && !user.email }" />
        <div class="p-error" v-if="submitted && !user.email">{{ $t('Email is required.') }}</div>
      </div>

      <div class="field">
        <label for="password">{{ $t('Password') }} <span class="text-red-600">*</span></label>
        <Password id="password" v-model="user.password" :feedback="false" toggleMask autofocus
          :class="{ 'p-invalid': submitted && !user.password }" />
        <small class="p-error" v-if="submitted && !user.password">{{ $t('Password is required') }}</small>
      </div>

      <div class="field">
        <label for="phone_number">{{ $t('Phone Number') }} </label>
        <InputText id="phone_number" v-model="user.phone_number" />
      </div>

      <div class="field">
        <label for="roles">{{ $t('Select Roles') }} <span class="text-red-600">*</span></label>
        <DataTable :value="Allroles" v-model:selection="user.roles" dataKey="name" :resizableColumns="true"
          columnResizeMode="expand" showGridlines responsiveLayout="scroll" required="true" autofocus
          :class="{ 'p-invalid': submitted && !user.roles }">
          <Column selectionMode="multiple" headerStyle="width: 3em"></Column>
          <Column field="name" :header="$t('All Roles')"></Column>
        </DataTable>
        <small class="p-error" v-if="submitted && !user.roles">{{ $t('Role is required.') }}</small>
      </div>

      <div class="field">
        <label for="status">{{ $t('Status') }}</label>
        <Dropdown id="status" v-model="user.status" :options="status" optionLabel="name" optionValue="value"/>
      </div>

      <template #footer>
        <Button :label="$t('Cancel')" icon="pi pi-times" class="p-button-secondary mt-2" @click="hideDialog" />
        <Button :label="$t('Save')" icon="pi pi-check" class="p-button-info" @click="saveUser" />
      </template>

    </Dialog>

    <!-- COMFIRM DELETE USER -->
    <Dialog v-model:visible="deleteUserDialog" :style="{ width: '450px' }" :header="$t('Confirm')" :modal="true">
      <div class="confirmation-content">
        <i class="pi pi-exclamation-triangle mr-3 mb-3 mt-4 text-red-600" style="font-size: 2rem" />
        <span v-if="user">$t{{ ('Are you sure you want to delete') }} <b>{{ user.name }}</b> ?</span>
      </div>
      <template #footer>
        <Button :label="$t('No')" icon="pi pi-times" class="p-button-secondary mt-2"
          @click="deleteUserDialog = false" />
        <Button :label="$t('Yes')" icon="pi pi-check" class="p-button-info" @click="deleteUser" />
      </template>
    </Dialog>
  </div>
</template>
  
<script setup>

import { onMounted, ref } from "vue";
import UserServices from "../../Composables/UserServices";
import RoleServices from '../../Composables/RoleServices';
import { useToast } from "primevue/usetoast";
import { FilterMatchMode } from "primevue/api";

const {
  user,
  users,
  getUsers,
  storeUser,
  destroyUser,
  updateUser,
  errors
} = UserServices();

onMounted(getUsers);

const submitted = ref(false);
const toast = useToast();
const userDialog = ref(false);
const deleteUserDialog = ref(false);
const dt = ref();

const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
});

const { Allroles, getAllRoles } = RoleServices();
onMounted(getAllRoles);

const status = ref([
  { name: 'Active', value: 'Active' },
  { name: 'Inactive', value: 'Inactive' },
]);

const openNew = () => {
  user.value = {};
  user.value.status = 'Active';
  submitted.value = false;
  userDialog.value = true;
};

const hideDialog = () => {
  userDialog.value = false;
  submitted.value = false;
};

const saveUser = async () => {
  submitted.value = true;
  let message;
  if (user.value.name.trim()) {
    if (user.value.id) {
      await updateUser(user.value.id)
      await getUsers()
      message = "User Updated"
    }
    else {
      await storeUser(user.value)
      await getUsers()
      message = "User Created";
    }
  }
  if (errors.value == '') {
    toast.add({ severity: 'success', summary: 'Successful', detail: message, life: 3000 });
    hideDialog();
  }
  else {
    toast.add({ severity: 'error', summary: 'Error Message', detail: errors, life: 10000 });
  }
};

const confirmDeleteUser = (prod) => {
  user.value = prod;
  deleteUserDialog.value = true;
};

const deleteUser = async () => {
  users.value = users.value.filter((val) => val.id !== user.value.id);
  deleteUserDialog.value = false;
  await destroyUser(user.value.id);
  user.value = {};
  toast.add({ severity: "success", summary: "Successful", detail: "User Deleted", life: 3000, });
};

const editUser = (prod) => {
  user.value = { ...prod };
  userDialog.value = true;
};

</script>
  
  