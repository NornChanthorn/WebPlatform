<template>
    <Toast />
    <div>
        <div class="card">
            <div class="card border-double border-4">
                <span class="mr-2 text-xl">Applicant : </span>
                <div v-for="applicant of allApplicants" :key="applicant.key"
                    class="field-radiobutton inline-block mr-3 my-3">
                    <RadioButton class="text-xl ml-2" :inputId="applicant.key" :value="applicant.name"
                        v-model="selectedApplicant" @change="onSelected(applicant.key)" />
                    <label class="text-xl" :for="applicant.key">{{ applicant.name }}</label>
                </div>
            </div>
            <Toolbar class="mb-4">
                <template #start>
                    <Dropdown id="course" v-model="applicant.id" :options="ApplicantAcademicTypes"
                        optionLabel="display_name" optionValue="id" placeholder="ជ្រេីសរេីសវគ្គសិក្សា"
                        @change="onSelected_id(applicant.id)" />
                    <Dropdown v-if="selected == 'L'" id="paymentStatus" v-model="selectedPaymentStatus"
                        :options="paymentStatus" optionLabel="status" optionValue="value"
                        placeholder="ជ្រេីសរេីសស្ថានភាពបេក្ខជន" class="mx-5" />
                    <Dropdown v-if="selected == 'R'" id="emailStatus" v-model="selectedEmailStatus"
                        :options="emailStatus" optionLabel="status" optionValue="value"
                        placeholder="ជ្រេីសរេីសស្ថានភាពផ្ទៀងផ្ទាត់អុីមែល" class="mx-5" />
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
            <DataTable ref="dt" :value="applicants" dataKey="id" :resizableColumns="true" columnResizeMode="expand"
                showGridlines :paginator="true" :rows="10" :filters="filters"
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                :rowsPerPageOptions="[5, 10, 25, 50, 100]"
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords} Applicant payments"
                responsiveLayout="scroll">
                <Column v-if="selected !== 'R'" field="applicant_status" :header="$t('Status')" :sortable="true">
                </Column>
                <Column field="applicant_id" :header="$t('Applicant ID')" :sortable="true"></Column>
                <Column field="kh_name" :header="$t('Name')" :sortable="true"></Column>
                <Column field="name" :header="$t('Name in English')" :sortable="true"></Column>
                <Column field="gender" :header="$t('Gender')" :sortable="true"></Column>
                <Column field="dob" :header="$t('Date of Birth')" :sortable="true"></Column>
                <Column field="email" :header="$t('Email')" :sortable="true"></Column>
                <Column v-if="selected == 'R'" field="email_status" :header="$t('Email Status')" :sortable="true">
                </Column>
                <Column v-if="selected == 'L'" field="dt_submit" :header="$t('Submit Date')" :sortable="true"></Column>
                <Column v-if="selected == 'R'" field="created_at" :header="$t('Created Date')" :sortable="true">
                </Column>
                <Column field="action" :header="$t('Action')" :exportable="false" style="min-width: 8rem">
                    <template >
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
import ApplicantServices from '../Composables/ApplicantServices'

const {
    ApplicantAcademicTypes,
    getApplicantAcademicTypes
} = AATServices();
onMounted(getApplicantAcademicTypes)

const {
    applicants,
    applicant,
    getRegisteredApplicants
} = ApplicantServices();

const dt = ref();

const selectedPaymentStatus = ref();
const paymentStatus = ref([
    { status: 'Pending', value: 2 },
    { status: 'Approved', value: 1 },
    { status: 'Rejected', value: 0 },
]);

const selectedEmailStatus = ref();
const emailStatus = ref([
    { status: 'Pending', value: false },
    { status: 'Confirm', value: true },
]);


const filters = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
});

const allApplicants = ref([
    { name: 'List', key: 'L' },
    { name: 'Draft', key: 'D' },
    { name: 'Registered', key: 'R' },
]);

const selected = ref('L');

const onSelected = (key) => {
    selected.value = key;
}

const course_id = ref('');

let onSelected_id = async (id) => {
    course_id.value = id;
    if (selected.value == 'R') {
        await getRegisteredApplicants(course_id.value)
    }
    else{

    }
}

const selectedApplicant = ref(allApplicants.value[0].name);

</script>
