<template>
  <Toast />
  <div>
    <div class="card">
      <!-- ADD NEW DEPARTMENT & SEARCH FILTER -->
      <Toolbar class="mb-4">
        <template #start>
          <Button v-can="'department create'" :label="$t('Add New Department')" icon="pi pi-plus-circle"
            class="p-button-info mr-2" @click="openNew" />
        </template>
        <template #end>
          <div class=" table-header flex flex-column md:flex-row md:justiify-content-between">
            <span class="p-input-icon-left">
              <i class="pi pi-search" />
              <InputText class=" w-72" v-model="filters['global'].value" :placeholder="$t('Search')" />
            </span>
          </div>
        </template>
      </Toolbar>

      <!-- Display Data from API as Table -->
      <DataTable ref="dt" :value="departments" dataKey="id" :resizableColumns="true" columnResizeMode="expand"
        showGridlines :paginator="true" :rows="10" :filters="filters"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        :rowsPerPageOptions="[5, 10, 25, 50 , 100]"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} Departments" responsiveLayout="scroll">

        <Column field="id" :header="$t('Id')" :sortable="true"></Column>
        <Column field="name" :header="$t('Name')" :sortable="true"></Column>
        <Column field="action" :header="$t('Action')" :exportable="false" style="min-width: 8rem">
          <template #body="slotProps">
            <Button v-can="'department edit'" :label="$t('Edit')" icon="pi pi-pencil"
              class="p-button p-button-success mr-2" @click="editDepartment(slotProps.data)" />
            <Button v-can="'department delete'" :label="$t('Delete')" icon="pi pi-trash"
              class="p-button p-button-danger" @click="confirmDeleteDepartment(slotProps.data)" />
          </template>
        </Column>

      </DataTable>
    </div>

    <!-- ADD DEPARTMENT & EDIT DEPARTMENT -->
    <Dialog v-model:visible="departmentDialog" :style="{ width: '450px' }" :header="$t('Department Details')"
      :modal="true" class="p-fluid">

      <div class="field mt-3">
        <label for="name"> {{ $t('Name') }} <span class="text-red-600">*</span></label>
        <InputText id="name" v-model.trim="department.name" required="true" autofocus
          :class="{ 'p-invalid': submitted && !department.name }" />
        <small class="p-error" v-if="submitted && !department.name">{{ $t('Name is required.') }}</small>
      </div>

      <template #footer>
        <Button :label="$t('Cancel')" icon="pi pi-times" class="p-button-secondary mt-2" @click="hideDialog" />
        <Button :label="$t('Save')" icon="pi pi-check" class="p-button-info" @click="saveDepartment" />
      </template>

    </Dialog>

    <!-- CONFIRM DELETE DEPARTMENT -->
    <Dialog v-model:visible="deleteDepartmentDialog" :style="{ width: '450px' }" header="Confirm" :modal="true">
      <div class="confirmation-content">
        <i class="pi pi-exclamation-triangle text-red-600 mb-3 mr-3 mt-4" style="font-size: 2rem" />
        <span v-if="department"> {{ $t('Are you sure you want to delete') }} <b>{{ department.name }}</b> ? </span>
      </div>
      <template #footer>
        <Button :label="$t('No')" icon="pi pi-times" class="p-button-secondary mt-2"
          @click="deleteDepartmentDialog = false" />
        <Button :label="$t('Yes')" icon="pi pi-check" class="p-button-info" @click="deleteDepartment" />
      </template>
    </Dialog>

  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useToast } from "primevue/usetoast";
import { FilterMatchMode } from "primevue/api";
import DepartmentServices from "../../Composables/DepartmentServices";

const {
  errors,
  department,
  departments,
  getDepartments,
  storeDepartment,
  destroyDepartment,
  updateDepartment,
} = DepartmentServices();

onMounted(getDepartments);

const submitted = ref(false);
const toast = useToast();
const departmentDialog = ref(false);
const deleteDepartmentDialog = ref(false);
const dt = ref();

const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
});

const openNew = () => {
  department.value = {};
  submitted.value = false;
  departmentDialog.value = true;
};

const hideDialog = () => {
  departmentDialog.value = false;
  submitted.value = false;
};

const saveDepartment = async () => {
  submitted.value = true;
  let message;
  if (department.value.name.trim()) {
    if (department.value.id) {
      await updateDepartment(department.value.id)
      await getDepartments()
      message = "Department Updated"
    }
    else {
      await storeDepartment(department.value)
      await getDepartments()
      message = "Department Created";
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

const confirmDeleteDepartment = (prod) => {
  department.value = prod;
  deleteDepartmentDialog.value = true;
};

const deleteDepartment = async () => {
  departments.value = departments.value.filter((val) => val.id !== department.value.id);
  deleteDepartmentDialog.value = false;
  await destroyDepartment(department.value.id);
  department.value = {};
  toast.add({ severity: "success", summary: "Successful", detail: "Department Deleted", life: 3000, });
};

const editDepartment = (prod) => {
  department.value = { ...prod };
  departmentDialog.value = true;
};

</script>