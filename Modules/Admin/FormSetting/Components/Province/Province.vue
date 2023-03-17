<template>
  <Toast />
  <div>
    <div class="card">
      <!-- ADD NEW PROVINCE & SEARCH FILTER -->
      <Toolbar class="mb-4">
        <template #start>
          <Button v-can="'province create'" :label="$t('Add New Province')" icon="pi pi-plus-circle"
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
      <DataTable ref="dt" :value="provinces" dataKey="id" :resizableColumns="true" columnResizeMode="expand"
        showGridlines :paginator="true" :rows="10" :filters="filters"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        :rowsPerPageOptions="[5, 10, 25, 50 , 100]"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} provinces" responsiveLayout="scroll">

        <Column field="id" :header="$t('Id')" :sortable="true"></Column>
        <Column field="name" :header="$t('Name')" :sortable="true"></Column>
        <Column field="abbreviation" :header="$t('Abbreviation')" :sortable="true"></Column>
        <Column field="description" :header="$t('Description')" :sortable="true"></Column>
        <Column field="action" :header="$t('Action')" :exportable="false" style="min-width: 8rem">
          <template #body="slotProps">
            <Button v-can="'province edit'" :label="$t('Edit')" icon="pi pi-pencil"
              class="p-button p-button-success mr-2" @click="editProvince(slotProps.data)" />
            <Button v-can="'province delete'" :label="$t('Delete')" icon="pi pi-trash" class="p-button p-button-danger"
              @click="confirmDeleteProvince(slotProps.data)" />
          </template>
        </Column>

      </DataTable>
    </div>

    <!-- DELETE PROVINCE & EDIT PROVINCE -->
    <Dialog v-model:visible="provinceDialog" :style="{ width: '450px' }" :header="$t('Province Details')" :modal="true"
      class="p-fluid">

      <div class="field mt-3">
        <label for="name"> {{ $t('Name') }} <span class="text-red-600">*</span></label>
        <InputText id="name" v-model.trim="province.name" required="true" autofocus
          :class="{ 'p-invalid': submitted && !province.name }" />
        <small class="p-error" v-if="submitted && !province.name">{{ $t('Name is required.') }}</small>
      </div>

      <div class="field">
        <label for="abb"> {{ $t('Abbreviation') }} <span class="text-red-600">*</span></label>
        <InputText id="abb" v-model="province.abbreviation" required="true" autofocus
          :class="{ 'p-invalid': submitted && !province.abbreviation }" />
        <small class="p-error" v-if="submitted && !province.abbreviation">{{ $t('Abbreviation is required.') }}</small>
      </div>

      <div class="field">
        <label for="des"> {{ $t('Description') }} </label>
        <InputText id="des" v-model="province.description" />
      </div>

      <template #footer>
        <Button :label="$t('Cancel')" icon="pi pi-times" class="p-button-secondary mt-2" @click="hideDialog" />
        <Button :label="$t('Save')" icon="pi pi-check" class="p-button-info" @click="saveProvince" />
      </template>

    </Dialog>

    <!-- CONFIRM DELETE PROVINCE -->
    <Dialog v-model:visible="deleteProvinceDialog" :style="{ width: '450px' }" header="Confirm" :modal="true">
      <div class="confirmation-content">
        <i class="pi pi-exclamation-triangle text-red-600 mb-3 mr-3 mt-4" style="font-size: 2rem" />
        <span v-if="province"> {{ $t('Are you sure you want to delete') }} <b>{{ province.name }}</b> ? </span>
      </div>
      <template #footer>
        <Button :label="$t('No')" icon="pi pi-times" class="p-button-secondary mt-2"
          @click="deleteProvinceDialog = false" />
        <Button :label="$t('Yes')" icon="pi pi-check" class="p-button-info" @click="deleteProvince" />
      </template>
    </Dialog>

  </div>
</template>
  
<script setup>
import { onMounted, ref } from "vue";
import { useToast } from "primevue/usetoast";
import { FilterMatchMode } from "primevue/api";
import ProvinceServices from "../../Composables/ProvinceServices";

const {
  errors,
  province,
  provinces,
  getProvinces,
  storeProvince,
  destroyProvince,
  updateProvince,
} = ProvinceServices();

onMounted(getProvinces);

const submitted = ref(false);
const toast = useToast();
const provinceDialog = ref(false);
const deleteProvinceDialog = ref(false);
const dt = ref();

const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
});

const openNew = () => {
  province.value = {};
  submitted.value = false;
  provinceDialog.value = true;
};

const hideDialog = () => {
  provinceDialog.value = false;
  submitted.value = false;
};

const saveProvince = async () => {
  submitted.value = true;
  let message;
  if (province.value.name.trim()) {
    if (province.value.id) {
      await updateProvince(province.value.id)
      await getProvinces()
      message = "Province Updated"
    }
    else {
      await storeProvince(province.value)
      await getProvinces()
      message = "Province Created";
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

const confirmDeleteProvince = (prod) => {
  province.value = prod;
  deleteProvinceDialog.value = true;
};

const deleteProvince = async () => {
  provinces.value = provinces.value.filter((val) => val.id !== province.value.id);
  deleteProvinceDialog.value = false;
  await destroyProvince(province.value.id);
  province.value = {};
  toast.add({ severity: "success", summary: "Successful", detail: "Province Deleted", life: 3000, });
};

const editProvince = (prod) => {
  province.value = { ...prod };
  provinceDialog.value = true;
};

</script>