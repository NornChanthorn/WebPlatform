<template>
  <Toast />
  <div>
    <div class="card">
      <!-- ADD NEW TRANSLATION & SEARCH FILTER -->
      <Toolbar class="mb-4">
        <template #start>
          <Button v-can="'translation create'" :label="$t('Add New Translation')" icon="pi pi-plus-circle"
            class="p-button-info mr-2" @click="openNew" />
        </template>
        <template #end>
          <div class="table-header flex flex-column md:flex-row md:justiify-content-between">
            <span class="p-input-icon-left">
              <i class="pi pi-search" />
              <InputText class="w-72" v-model="filters['global'].value" :placeholder="$t('Search')" />
            </span>
          </div>
        </template>
      </Toolbar>

      <!-- Display Data from API as Table -->
      <DataTable ref="dt" :value="translations" dataKey="id" :resizableColumns="true" columnResizeMode="expand"
        showGridlines :paginator="true" :rows="10" :filters="filters"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        :rowsPerPageOptions="[5, 10, 25]"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} Translations" responsiveLayout="scroll">

        <Column field="id" :header="$t('Id')" :sortable="true"></Column>
        <Column field="default_phrase" :header="$t('Default Phrase')" :sortable="true"></Column>
        <Column field="en" :header="$t('English')" :sortable="true"></Column>
        <Column field="kh" :header="$t('Khmer')" :sortable="true"></Column>
        <Column field="action" header="Action" :exportable="false" style="min-width: 8rem">
          <template #body="slotProps">
            <Button v-can="'translation edit'" :label="$t('Edit')" icon="pi pi-pencil"
              class="p-button p-button-success mr-2" @click="editTranslation(slotProps.data)" />
            <Button v-can="'translation delete'" :label="$t('Delete')" icon="pi pi-trash"
              class="p-button p-button-danger" @click="confirmDeleteTranslation(slotProps.data)" />
          </template>
        </Column>

      </DataTable>
    </div>

    <!-- DELETE TRANSLATION & EDIT TRANSLATION -->
    <Dialog v-model:visible="translationDialog" :style="{ width: '450px' }" :header="$t('Translation Details')"
      :modal="true" class="p-fluid">

      <div class="field mt-3">
        <label for="default_phrase">{{ $t('Default Phrase') }} <span class="text-red-600">*</span></label>
        <InputText id="default_phrase" v-model.trim="translation.default_phrase" required="true" autofocus
          :class="{ 'p-invalid': submitted && !translation.default_phrase }" />
        <small class="p-error" v-if="submitted && !translation.default_phrase">{{ $t('Default Phrase is required.')}}</small>
      </div>

      <div class="field">
        <label for="en">{{ $t('English') }} <span class="text-red-600">*</span></label>
        <InputText id="en" v-model="translation.en" required="true" autofocus
          :class="{ 'p-invalid': submitted && !translation.en }" />
        <small class="p-error" v-if="submitted && !translation.en">{{ $t('English Language is required.') }}</small>
      </div>

      <div class="field">
        <label for="kh">{{ $t('Khmer ') }}<span class="text-red-600">*</span></label>
        <InputText id="kh" v-model="translation.kh" required="true" autofocus
          :class="{ 'p-invalid': submitted && !translation.kh }" />
        <small class="p-error" v-if="submitted && !translation.kh">{{ $t('Khmer Language is required.') }}</small>
      </div>

      <div class="field">
        <label for="status">{{ $t('Status') }}</label>
        <Dropdown id="status" v-model="translation.status" :options="Status" optionLabel="name" optionValue="value"
          placeholder="Active" />
      </div>

      <template #footer>
        <Button :label="$t('Cancel')" icon="pi pi-times" class="p-button-secondary mt-2" @click="hideDialog" />
        <Button :label="$t('Save')" icon="pi pi-check" class="p-button-info" @click="saveTranslation" />
      </template>

    </Dialog>

    <!-- CONFIRM DELETE TRANSLATION -->
    <Dialog v-model:visible="deleteTranslationDialog" :style="{ width: '450px' }" :header="('Confirm')" :modal="true">
      <div class="confirmation-content">
        <i class="pi pi-exclamation-triangle text-red-600 mb-3 mr-3 mt-4" style="font-size: 2rem" />
        <span v-if="translation">{{ $t('Are you sure you want to delete') }} <b>{{ translation.default_phrase }}</b>
          ?</span>
      </div>
      <template #footer>
        <Button :label="$t('No')" icon="pi pi-times" class="p-button-secondary mt-2"
          @click="deleteTranslationDialog = false" />
        <Button :label="$t('Yes')" icon="pi pi-check" class="p-button-info" @click="deleteTranslation" />
      </template>
    </Dialog>


  </div>
</template>
  
<script setup>
import { onMounted, ref } from "vue";
import TranslationServices from "../../Composables/TranslationServices";
import { useToast } from "primevue/usetoast";
import { FilterMatchMode } from "primevue/api";

const {
  errors,
  translation,
  translations,
  getTranslations,
  storeTranslation,
  destroyTranslation,
  updateTranslation,
} = TranslationServices();

onMounted(getTranslations);

const submitted = ref(false);
const toast = useToast();
const translationDialog = ref(false);
const deleteTranslationDialog = ref(false);
const dt = ref();

const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
});

const openNew = () => {
  translation.value = {};
  submitted.value = false;
  translationDialog.value = true;
};

const hideDialog = () => {
  translationDialog.value = false;
  submitted.value = false;
};

const saveTranslation = async () => {
  submitted.value = true;
  let message;
  if (translation.value.default_phrase.trim()) {
    if (translation.value.id) {
      await updateTranslation(translation.value.id)
      await getTranslations()
      message = "Translation Updated"
    }
    else {
      await storeTranslation(translation.value)
      await getTranslations()
      message = "Translation Created";
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

const confirmDeleteTranslation = (prod) => {
  translation.value = prod;
  deleteTranslationDialog.value = true;
};

const deleteTranslation = async () => {
  translations.value = translations.value.filter((val) => val.id !== translation.value.id);
  deleteTranslationDialog.value = false;
  await destroyTranslation(translation.value.id);
  translation.value = {};
  toast.add({ severity: "success", summary: "Successful", detail: "Translation Deleted", life: 3000, });
};

const editTranslation = (prod) => {
  translation.value = { ...prod };
  translationDialog.value = true;
};


const Status = ref([
  { name: 'Active', value: 'Active' },
  { name: 'Inactive', value: 'Inactive' },
]);

</script>