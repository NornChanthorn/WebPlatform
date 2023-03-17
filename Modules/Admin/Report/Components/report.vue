<template>
    <Toast />
    <div>
        <div class="card">
            <!-- ADD NEW DEPARTMENT & SEARCH FILTER -->
            <div class="mb-4 text-4xl">
                របាយការណ៍បេក្ខជនដែលបានបង់ប្រាក់និងពិនិត្យឯកសារ
            </div>
            <Toolbar class="mb-4">
                <template #start>
                    <div class="p-fluid grid">
                        <div class="field col-12 md:col-6">
                            <Dropdown id="course" v-model="ApplicantAcademicType" :options="ApplicantAcademicTypes"
                                optionLabel="display_name" optionValue="id" placeholder="ជ្រេីសរេីសវគ្គសិក្សា" />
                        </div>
                        <div class="field col-12 md:col-6">
                            <Dropdown id="applicantStatus" v-model="selectedApplicantStatus" :options="applicantStatus"
                                optionLabel="status" optionValue="value" placeholder="ជ្រេីសរេីសស្ថានភាពបេក្ខជន" />
                        </div>
                        <div class="field col-12 md:col-6">
                            <Dropdown id="documentCheckStatus" v-model="selectedDocumentCheckStatus"
                                :options="documentCheckStatus" optionLabel="status" optionValue="value"
                                placeholder="ជ្រេីសរេីសស្ថានភាពពិនិត្យឯកសារ" />
                        </div>
                        <div class="field col-12 md:col-6">
                            <Dropdown id="paymentStatus" v-model="selectedPaymentStatus" :options="paymentStatus"
                                optionLabel="status" optionValue="value" placeholder="ជ្រេីសរេីសស្ថានភាពបង់ប្រាក់" />
                        </div>
                        <div class="field col-12 md:col-6">
                            <div class=" table-header flex flex-column md:flex-row md:justiify-content-between">
                                <span class="p-input-icon-left">
                                    <i class="pi pi-search" />
                                    <InputText class=" w-72" v-model="filters['global'].value"
                                        :placeholder="$t('Search')" />
                                </span>
                            </div>
                        </div>
                    </div>
                </template>
                <template #end>
                    <div class="p-field grid">
                        <div class="field col-12 md:col-12">
                            <div style="text-align: left">
                                <Button icon="pi pi-external-link" label="Export" @click="exportCSV($event)" />
                            </div>
                        </div>
                    </div>
                </template>
            </Toolbar>

            <!-- Display Data from API as Table -->
            <DataTable ref="dt" :value="payments" dataKey="id" :resizableColumns="true" columnResizeMode="expand"
                showGridlines :paginator="true" :rows="10" :filters="filters"
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                :rowsPerPageOptions="[5, 10, 25, 50, 100]"
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords} Applicants"
                responsiveLayout="scroll">

                <Column field="account_number" :header="$t('Account Number')" :sortable="true"></Column>
                <Column field="applicant_code" :header="$t('Applicant Code')" :sortable="true"></Column>
                <Column field="name_kh" :header="$t('Name')" :sortable="true"></Column>
                <Column field="name" :header="$t('Name in English')" :sortable="true"></Column>
                <Column field="gender" :header="$t('Gender')" :sortable="true"></Column>
                <Column field="dob" :header="$t('Date of Birth')" :sortable="true"></Column>
                <Column field="doc_check" :header="$t('Document Check')" :sortable="true"></Column>
                <Column field="payment_status" :header="$t('Payment Status')" :sortable="true"></Column>
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

const exportCSV = () => {
    dt.value.exportCSV();
};

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

const selectedApplicantStatus = ref();
const applicantStatus = ref([
    { status: "មិនទាន់បានដាក់ស្នេី", value: 0 },
    { status: "បានដាក់ស្នេីតែមិនទាន់បានអនុម័ត", value: 1 },
    { status: "បានអនុម័ត", value: 2 }
])

const selectedDocumentCheckStatus = ref();
const documentCheckStatus = ref([
    { status: "បានពិនិត្យឯកសាររួចរាល់", value: true },
    { status: "មិនទាន់បានពិនិត្យឯកសារ", value: false },
])

const filters = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
});

</script>