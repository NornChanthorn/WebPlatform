<template>
  <Toast />
  <div>
    <div class="card">
      <!-- ADD NEW ROLE & SERACH FILTERS -->
      <Toolbar class="mb-4">
        <template #start>
          <Button v-can="'role create'" :label="$t('Add New Role')" icon="pi pi-plus-circle" class="p-button-info mr-2"
            @click="openNew" />
        </template>
        <template #end>
          <div class=" table-header flex flex-column md:flex-row md:justiify-content-between">
            <span class="p-input-icon-left">
              <i class="pi pi-search text-blue-600" />
              <InputText class="w-72" v-model="filters['global'].value" :placeholder="$t('Search')" />
            </span>
          </div>
        </template>
      </Toolbar>

      <!-- DISPLAY DATA FROM API AS TABLE -->
      <DataTable ref="dt" :value="roles" :resizableColumns="true" columnResizeMode="expand" showGridlines dataKey="id"
        :paginator="true" :rows="10" :filters="filters"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        :rowsPerPageOptions="[5, 10, 25]" currentPageReportTemplate="Showing {first} to {last} of {totalRecords} Roles"
        responsiveLayout="scroll">
        <Column field="id" :header="$t('Id')"></Column>
        <Column field="name" :header="$t('Name')" :sortable="true"></Column>
        <Column field="action" :header="$t('Action')" :exportable="false" style="min-width: 8rem">
          <template #body="slotProps">
            <Button :label="$t('Permission')" icon="pi pi-tag" class="text-white p-button p-button-warning mr-2"
              @click.prevent="openPermission(slotProps.data)" />
            <Button v-can="'role edit'" :label="$t('Edit')" icon="pi pi-pencil" class="p-button p-button-success mr-2"
              @click="editRole(slotProps.data)" />
            <Button v-can="'role delete'" :label="$t('Delete')" icon="pi pi-trash" class="p-button p-button-danger"
              @click="confirmDeleteRole(slotProps.data)" />
          </template>
        </Column>

      </DataTable>
    </div>

    <!-- EDIT ROLE & DELETE ROLE -->
    <Dialog v-model:visible="roleDialog" :style="{ width: '450px' }" :header="$t('Role Details')" :modal="true"
      class="p-fluid">

      <div class="field mt-3">
        <label for="name">{{ $t('Name') }} <span class="text-red-600">*</span></label>
        <InputText id="name" v-model.trim="role.name" required="true" autofocus
          :class="{ 'p-invalid': submitted && !role.name }" />
        <small class="p-error" v-if="submitted && !role.name">{{ $t('Name is required.') }}</small>
      </div>

      <div class="field">
        <label for="permission" class="text-blue-900 mt-3 mb-2 " required="true" autofocus
          :class="{ 'p-invalid': submitted && !role.name }">{{ $t('Assign Permission') }} <span
            class="text-red-600">*</span></label>
        <small class="p-error ml-2" v-if="submitted && !role.permissions">{{ $t('Permission is required.') }}</small>
        <DataTable :value="Allpermissions" v-model:selection="role.permissions" dataKey="name"
          responsiveLayout="scroll">
          <Column selectionMode="multiple" headerStyle="width: 3em"></Column>
          <Column field="name" :header="$t('All Permissions')"></Column>
        </DataTable>
      </div>

      <template #footer>
        <Button :label="$t('Cancel')" icon="pi pi-times" class="p-button-secondary mt-2" @click="hideDialog" />
        <Button :label="$t('Save')" icon="pi pi-check" class="p-button-info" @click="saveRole" />
      </template>

    </Dialog>

    <!-- COMFIRM DELETE ROLE-->
    <Dialog v-model:visible="deleteRoleDialog" :style="{ width: '450px' }" header="Confirm" :modal="true">
      <div class="confirmation-content">
        <i class="pi pi-exclamation-triangle mr-3 mb-3 mt-4 text-red-600" style="font-size: 2rem" />
        <span v-if="role">{{ $t('Are you sure you want to delete') }} <b>{{ role.name }}</b> ?</span>
      </div>
      <template #footer>
        <Button :label="$t('No')" icon="pi pi-times" class="p-button-secondary mt-2"
          @click="deleteRoleDialog = false" />
        <Button :label="$t('Yes')" icon="pi pi-check" class="p-button-info" @click="deleteRole" />
      </template>
    </Dialog>

    <!-- SHOW ROLE PERMISSION -->
    <Dialog v-model:visible="showPerDialog" :style="{ width: '450px' }" :modal="true">
      <div class="confirmation-content">
        <Button class="p-button-warning my-2"> <b>{{ role.name }}'s Permissions : </b> </Button>
        <div v-if="role" id="permission" v-for="(permission, index) in role.permissions" :index="index"
          :key="permission">
          <div class="grid p-dir-col" :for="permission.id"><span class="col-1">{{ index + 1 }}. </span> <b
              class="col">{{ permission.name }}</b></div>
        </div>
      </div>
    </Dialog>

  </div>
</template>
  
<script setup>
import { onMounted, ref } from "vue";
import RoleServices from "../../Composables/RoleServices";
import PermissionServices from "../../Composables/PermissionServices";
import { useToast } from "primevue/usetoast";
import { FilterMatchMode } from "primevue/api";

const {
  role,
  roles,
  getRoles,
  storeRole,
  destroyRole,
  updateRole,
  errors
} = RoleServices();

onMounted(getRoles);

const submitted = ref(false);
const toast = useToast();
const roleDialog = ref(false);
const deleteRoleDialog = ref(false);
const showPerDialog = ref(false);
const dt = ref();

const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
});

const openPermission = (prod) => {
  role.value = { ...prod };
  showPerDialog.value = true;
};

const openNew = () => {
  role.value = {};
  submitted.value = false;
  roleDialog.value = true;
};

const hideDialog = () => {
  roleDialog.value = false;
  submitted.value = false;
};

const saveRole = async () => {
  submitted.value = true;
  let message;
  if (role.value.name.trim()) {
    if (role.value.id) {
      await updateRole(role.value.id)
      await getRoles()
      message = "Role Updated"
    }
    else {
      await storeRole(role.value)
      await getRoles()
      message = "Role Created";
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

const confirmDeleteRole = (prod) => {
  role.value = prod;
  deleteRoleDialog.value = true;
};

const deleteRole = async () => {
  roles.value = roles.value.filter((val) => val.id !== role.value.id);
  deleteRoleDialog.value = false;
  await destroyRole(role.value.id);
  role.value = {};
  toast.add({ severity: "success", summary: "Successful", detail: "Role Deleted", life: 3000, });
};

const editRole = async (prod) => {
  role.value = { ...prod };
  roleDialog.value = true;
};

const {
  Allpermissions,
  getPermissions,
} = PermissionServices();
onMounted(getPermissions)

const onSelected = (id) => {
  console.log(id)
}

</script>       
  