<template>
    <Toast />
    <div>
        <div class="card">
            <!-- ADD NEW DEPARTMENT & SEARCH FILTER -->
            <Toolbar class="mb-4">
                <template #start>
                    <Dropdown id="course" v-model="ApplicantAcademicType" :options="ApplicantAcademicTypes"
                        optionLabel="display_name" optionValue="id" placeholder="ជ្រេីសរេីសវគ្គសិក្សា" />
                    <Dropdown id="paymentStatus" v-model="selectedPaymentStatus" :options="paymentStatus"
                        optionLabel="status" optionValue="value" placeholder="ជ្រេីសរេីសស្ថានភាពបង់ប្រាក់"
                        class="mx-5" />
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
            <DataTable ref="dt" :value="payments" dataKey="id" :resizableColumns="true" columnResizeMode="expand"
                showGridlines :paginator="true" :rows="10" :filters="filters"
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                :rowsPerPageOptions="[5, 10, 25, 50, 100]"
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords} Applicant payments"
                responsiveLayout="scroll">

                <Column field="account_number" :header="$t('Account Number')" :sortable="true"></Column>
                <Column field="applicant_code" :header="$t('Applicant Code')" :sortable="true"></Column>
                <Column field="name_kh" :header="$t('Name')" :sortable="true"></Column>
                <Column field="name" :header="$t('Name in English')" :sortable="true"></Column>
                <Column field="gender" :header="$t('Gender')" :sortable="true"></Column>
                <Column field="dob" :header="$t('Date of Birth')" :sortable="true"></Column>
                <Column field="doc_check" :header="$t('Document Check')" :sortable="true"></Column>
                <Column field="name" :header="$t('Payment Status')" :sortable="true"></Column>
                <Column field="dt_pay" :header="$t('Date of Payment')" :exportable="false" style="min-width: 8rem">
                    <template #body="slotProps">
                        <Button :label="$t('បោះពុម្ពបង្កាន់ដៃ')" icon="pi pi-pencil"
                            class="p-button p-button-success mr-2" />
                    </template>
                </Column>

            </DataTable>
        </div>

    </div>
</template>
  
<script setup>
import { onMounted, ref } from "vue";
import { FilterMatchMode } from "primevue/api";
import AATServices from '../../FormSetting/Composables/AATServices';

const {
    ApplicantAcademicType,
    ApplicantAcademicTypes,
    getApplicantAcademicTypes
} = AATServices();
onMounted(getApplicantAcademicTypes)
const dt = ref();

const selectedPaymentStatus = ref();
const paymentStatus = ref([
    { status: 'បានបង់ប្រាក់រួចរាល់', value: true },
    { status: 'មិនទាន់បានបង់ប្រាក់', value: false },
]);

const filters = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
});

</script>
