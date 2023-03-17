<template>
    <Toast />
    <div>
        <div class="card">
            <!-- ADD NEW FOREIGN-LANG & SEARCH FILTER -->
            <Toolbar class="mb-4">
                <template #start>
                    <Button v-can="'foreign-languages create'" :label="$t('Add New Language')" icon="pi pi-plus-circle"
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
            <DataTable ref="dt" :value="foreignlangs" dataKey="id" :resizableColumns="true" columnResizeMode="expand"
                showGridlines :paginator="true" :rows="10" :filters="filters"
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                :rowsPerPageOptions="[5, 10, 25, 50 , 100]"
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords} Languages"
                responsiveLayout="scroll">

                <Column field="id" :header="$t('Id')" :sortable="true"></Column>
                <Column field="name" :header="$t('Name')" :sortable="true"></Column>
                <Column field="name_kh" :header="$t('Name in Khmer')" :sortable="true"></Column>
                <Column field="action" :header="$t('Action')" :exportable="false" style="min-width: 8rem">
                    <template #body="slotProps">
                        <Button v-can="'foreign-languages edit'" :label="$t('Edit')" icon="pi pi-pencil"
                            class="p-button p-button-success mr-2" @click="editForeignLang(slotProps.data)" />
                        <Button v-can="'foreign-languages delete'" :label="$t('Delete')" icon="pi pi-trash"
                            class="p-button p-button-danger" @click="confirmDeleteForeignLang(slotProps.data)" />
                    </template>
                </Column>

            </DataTable>
        </div>

        <!-- DELETE FOREIGN-LANG & EDIT FOREIGN-LANG -->
        <Dialog v-model:visible="langDialog" :style="{ width: '450px' }" :header="$t('Language Details')" :modal="true"
            class="p-fluid">

            <div class="field mt-3">
                <label for="name">{{ $t('Name') }} <span class="text-red-600">*</span></label>
                <InputText id="name" v-model.trim="foreignlang.name" required="true" autofocus
                    :class="{ 'p-invalid': submitted && !foreignlang.name }" />
                <small class="p-error" v-if="submitted && !foreignlang.name">{{ $t('Name is required.') }}</small>
            </div>

            <div class="field">
                <label for="name">{{ $t('Name in Khmer') }} <span class="text-red-600">*</span></label>
                <InputText id="name" v-model="foreignlang.name_kh" required="true" autofocus
                    :class="{ 'p-invalid': submitted && !foreignlang.name_kh }" />
                <small class="p-error" v-if="submitted && !foreignlang.name_kh">{{ $t('Name in Khmer is required.')}}</small>
            </div>

            <template #footer>
                <Button :label="$t('Cancel')" icon="pi pi-times" class="p-button-secondary mt-2" @click="hideDialog" />
                <Button :label="$t('Save')" icon="pi pi-check" class="p-button-info" @click="saveLang" />
            </template>

        </Dialog>

        <!-- CONFIRM DELETE FOREIGN-LANG -->
        <Dialog v-model:visible="deleteLangDialog" :style="{ width: '450px' }" :header="$t('Confirm')" :modal="true">
            <div class="confirmation-content">
                <div class="mt-4">
                    <i class="pi pi-exclamation-triangle text-red-600 mb-3 mr-3 mt-4" style="font-size: 2rem" />
                    <span v-if="foreignlang">{{ $t('Are you sure you want to delete') }} <b>{{ foreignlang.name }}</b>
                        ?</span>
                </div>
            </div>
            <template #footer>
                <div class="mt-2">
                    <Button :label="$t('No')" icon="pi pi-times" class="p-button-secondary mt-2"
                        @click="deleteLangDialog = false" />
                    <Button :label="$t('Yes')" icon="pi pi-check" class="p-button-info" @click="deleteForeignLang" />
                </div>
            </template>
        </Dialog>

    </div>
</template>
    
<script setup>
import { onMounted, ref } from "vue";
import ForeignLangServices from "../../Composables/ForeignLangServices";
import { useToast } from "primevue/usetoast";
import { FilterMatchMode } from "primevue/api";

const {
    errors,
    foreignlang,
    foreignlangs,
    getForeignLangs,
    storeForeignLang,
    destroyForeignLang,
    updateForeignLang,
} = ForeignLangServices();

onMounted(getForeignLangs);

const submitted = ref(false);
const toast = useToast();
const langDialog = ref(false);
const deleteLangDialog = ref(false);
const dt = ref();

const filters = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
});

const openNew = () => {
    foreignlang.value = {};
    submitted.value = false;
    langDialog.value = true;
};

const hideDialog = () => {
    langDialog.value = false;
    submitted.value = false;
};

const saveLang = async () => {
    submitted.value = true;
    let message;
    if (foreignlang.value.name.trim()) {
        if (foreignlang.value.id) {
            await updateForeignLang(foreignlang.value.id)
            await getForeignLangs()
            message = "Language Updated"
        }
        else {
            await storeForeignLang(foreignlang.value)
            await getForeignLangs()
            message = "Language Created";
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

const confirmDeleteForeignLang = (prod) => {
    foreignlang.value = prod;
    deleteLangDialog.value = true;
};

const deleteForeignLang = async () => {
    foreignlangs.value = foreignlangs.value.filter((val) => val.id !== foreignlang.value.id);
    deleteLangDialog.value = false;
    await destroyForeignLang(foreignlang.value.id);
    foreignlang.value = {};
    toast.add({ severity: "success", summary: "Successful", detail: "Province Deleted", life: 3000, });
};

const editForeignLang = (prod) => {
    foreignlang.value = { ...prod };
    langDialog.value = true;
};

</script>