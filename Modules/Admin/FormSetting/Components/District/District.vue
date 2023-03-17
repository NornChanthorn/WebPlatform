<template>
    <Toast />
    <div>
        <div class="card">
            <!-- ADD NEW DISTRICT & SEARCH FILTER -->
            <Toolbar class="mb-4">
                <template #start>
                    <Button v-can="'district create'" :label="$t('Add New District')" icon="pi pi-plus-circle"
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
            <DataTable ref="dt" :value="districts" dataKey="id" :resizableColumns="true" columnResizeMode="expand"
                showGridlines :paginator="true" :rows="10" :filters="filters"
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                :rowsPerPageOptions="[5, 10, 25, 50 , 100]"
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords} Districts"
                responsiveLayout="scroll">

                <Column field="id" :header="$t('Id')" :sortable="true"></Column>
                <Column field="provinces" :header="$t('Province')" :sortable="true"></Column>
                <Column field="local_name" :header="$t('Local Name')" :sortable="true"></Column>
                <Column field="code" :header="$t('Code')" :sortable="true"></Column>
                <Column field="description" :header="$t('Description')" :sortable="true"></Column>
                <Column field="action" :header="$t('Action')" :exportable="false" style="min-width: 8rem">
                    <template #body="slotProps">
                        <Button v-can="'district edit'" :label="$t('Edit')" icon="pi pi-pencil"
                            class="p-button p-button-success mr-2" @click="editDistrict(slotProps.data)" />
                        <Button v-can="'district delete'" :label="$t('Delete')" icon="pi pi-trash"
                            class="p-button p-button-danger" @click="confirmDeleteDistrict(slotProps.data)" />
                    </template>
                </Column>

            </DataTable>
        </div>

        <!-- DELETE DISTRICT & EDIT DISTRICT-->
        <Dialog v-model:visible="districtDialog" :style="{ width: '450px' }" :header="$t('District Details')"
            :modal="true" class="p-fluid">

            <div class="field mt-3">
                <label for="provinces"> {{ $t('Name') }} <span class="text-red-600">*</span></label>
                <Dropdown id="provinces" v-model="district.province_id" :options="provinces" optionLabel="name"
                    optionValue="id" placeholder="Select a City" required="true" autofocus
                    :class="{ 'p-invalid': submitted && !district.province_id }" />
                <small class="p-error" v-if="submitted && !district.province_id">{{ $t('Name is required.') }}</small>
            </div>

            <div class="field">
                <label for="localname">{{ $t('Local Name') }} <span class="text-red-600">*</span></label>
                <InputText id="localname" v-model.trim="district.local_name" required="true" autofocus
                    :class="{ 'p-invalid': submitted && !district.local_name }" />
                <small class="p-error" v-if="submitted && !district.local_name">{{ $t('Local Name is required.')}}</small>
            </div>

            <div class="field">
                <label for="code">{{ $t('Code') }} <span class="text-red-600">*</span></label>
                <InputText id="code" v-model="district.code" required="true" autofocus
                    :class="{ 'p-invalid': submitted && !district.local_name }" />
                <small class="p-error" v-if="submitted && !district.local_name">{{ $t('Code is required.')}}</small>
            </div>

            <div class="field">
                <label for="des">{{ $t('Description') }}</label>
                <InputText id="des" v-model="district.description" />
            </div>

            <template #footer>
                <Button :label="$t('Cancel')" icon="pi pi-times" class="p-button-secondary mt-2" @click="hideDialog" />
                <Button :label="$t('Save')" icon="pi pi-check" class="p-button-info" @click="saveDistrict" />
            </template>

        </Dialog>

        <!-- CONFIRM DELETE DISTRICT-->
        <Dialog v-model:visible="deleteDistrictDialog" :style="{ width: '450px' }" :header="$t('Confirm')"
            :modal="true">
            <div class="confirmation-content">
                <i class="pi pi-exclamation-triangle text-red-600 mb-3 mr-3 mt-4" style="font-size: 2rem" />
                <span v-if="district">{{ $t('Are you sure you want to delete') }} <b>{{ district.local_name }}</b>
                    ?</span>
            </div>
            <template #footer>
                <Button :label="$t('No')" icon="pi pi-times" class="p-button-secondary mt-2"
                    @click="deleteDistrictDialog = false" />
                <Button :label="$t('Yes')" icon="pi pi-check" class="p-button-info" @click="deleteDistrict" />
            </template>
        </Dialog>

    </div>
</template>
    
<script setup>
import { onMounted, ref } from "vue";
import { useToast } from "primevue/usetoast";
import { FilterMatchMode } from "primevue/api";
import DistrictServices from "../../Composables/DistrictServices";
import ProvinceServices from "../../Composables/ProvinceServices";

const {
    errors,
    district,
    districts,
    getDistricts,
    storeDistrict,
    destroyDistrict,
    updateDistrict,
} = DistrictServices();

onMounted(getDistricts);

const submitted = ref(false);
const toast = useToast();
const districtDialog = ref(false);
const deleteDistrictDialog = ref(false);
const dt = ref();

const { provinces, getProvinces } = ProvinceServices();
onMounted(getProvinces);


const filters = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
});

const openNew = () => {
    district.value = {};
    submitted.value = false;
    districtDialog.value = true;
};

const hideDialog = () => {
    districtDialog.value = false;
    submitted.value = false;
};

const saveDistrict = async () => {
    submitted.value = true;
    let message;
    if (district.value.local_name.trim()) {
        if (district.value.id) {
            await updateDistrict(district.value.id)
            await getDistricts()
            message = "District Updated"
        }
        else {
            await storeDistrict(district.value)
            await getDistricts()
            message = "District Created";
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

const confirmDeleteDistrict = (prod) => {
    district.value = prod;
    deleteDistrictDialog.value = true;
};

const deleteDistrict = async () => {
    districts.value = districts.value.filter((val) => val.id !== district.value.id);
    deleteDistrictDialog.value = false;
    await destroyDistrict(district.value.id);
    district.value = {};
    toast.add({ severity: "success", summary: "Successful", detail: "Province Deleted", life: 3000, });
};

const editDistrict = (prod) => {
    district.value = { ...prod };
    districtDialog.value = true;
};

</script>