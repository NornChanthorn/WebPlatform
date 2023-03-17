<template>
    <Toast />
    <div class="card">
      <!-- ADD NEW APPLICANT ACADEMIC TYPE & SEARCH FILTER -->
      <Toolbar class="mb-4">
        <template #start>
          <Button :label="$t('Add New Applicant Academic Type')" icon="pi pi-plus-circle" class="p-button-info mr-2"
            @click="openNew" />
        </template>
        <template #end>
          <div class=" table-header flex flex-column md:flex-row md:justiify-content-between">
            <span class="p-input-icon-left">
              <i class="pi pi-search" />
              <InputText v-model="filters['global'].value" placeholder="Search" />
            </span>
          </div>
        </template>
      </Toolbar>
  
      <!-- Display Data from API as Table -->
      <DataTable ref="dt" :value="ApplicantAcademicTypes" dataKey="id" :resizableColumns="true" columnResizeMode="expand"
        showGridlines responsiveLayout="scroll" :paginator="true" :rows="10" :filters="filters"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        :rowsPerPageOptions="[5, 10, 25]"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} Applicant Academic Types">
  
        <Column field="id" header="Id" :sortable="true"></Column>
        <Column field="student_type_name" header="Student Type" :sortable="true"></Column>
        <Column field="sub_student_name" header="Sub Student Type" :sortable="true"></Column>
        <Column field="applicant_type_name" header="Applicant Type" :sortable="true"></Column>
        <Column field="display_name" header="Display Name" :sortable="true"></Column>
        <Column field="dt_registration_deadline" header="Registration Deadline" :sortable="true"></Column>
        <Column field="is_active" header="Active" :sortable="true">
          <template #body="slotProps">
            <Badge class="p-badge-info" v-if="slotProps.data.is_active">Yes</Badge>
            <Badge class="p-badge-danger" v-else>No</Badge>
          </template>
        </Column>
        <Column field="is_selectable" header="isSelectable" :sortable="true">
          <template #body="slotProps">
            <Badge class="p-badge-info" v-if="slotProps.data.is_selectable">Yes</Badge>
            <Badge class="p-badge-danger" v-else>No</Badge>
          </template>
        </Column>
        <Column field="action" header="Action" :exportable="false" style="min-width: 8rem">
          <template #body="slotProps">
            <Button v-can="'department edit'" :label="$t('Edit')" icon="pi pi-pencil"
              class="p-button p-button-success mr-2" @click="editAAT(slotProps.data)" />
            <Button label="Delete" icon="pi pi-trash" class="p-button p-button-danger"
              @click="confirmDeleteAAT(slotProps.data)" />
          </template>
        </Column>
      </DataTable>
  
      <Dialog v-model:visible="AATDialog" :maximizable="true" :breakpoints="{'960px': '75vw', '640px': '90vw'}" :style="{ width: '90vw' }" :header="$t('Applicant Academic Type Details')"
        :modal="true">
        <div class="p-fluid grid formgrid">
  
          <div class="field col-12 md:col-6">
            <div class="md:col-10">
              <div class="field">
                <label for="student_type_id"> Student Type <span class="text-red-600">*</span></label>
                <Dropdown id="student_type_id" v-model="ApplicantAcademicType.student_type_id" :options="StudentTypes"
                  optionLabel="name" optionValue="id" placeholder="Select a Student Type First"
                  @change="onSelected_1(ApplicantAcademicType.student_type_id)" required="true" autofocus
                  :class="{ 'p-invalid': submitted && !ApplicantAcademicType.student_type_id }" />
                <small class="p-error" v-if="submitted && !ApplicantAcademicType.student_type_id">
                  {{ $t('Student Type is required.') }}
                </small>
              </div>
  
              <div class="field">
                <label for="sub_student_type_id"> Sub Student Type <span class="text-red-600">*</span></label>
                <Dropdown id="sub_student_type_id" v-model="ApplicantAcademicType.sub_student_type_id"
                  :options="SubStudentTypes" optionLabel="type_name" optionValue="id"
                  placeholder="Select a Sub Student Type First" required="true" autofocus
                  :class="{ 'p-invalid': submitted && !ApplicantAcademicType.sub_student_type_id }"
                  :disabled="!ApplicantAcademicType.student_type_id" />
                <small class="p-error" v-if="submitted && !ApplicantAcademicType.sub_student_type_id">
                  {{ $t('Sub Student Type is required.') }}
                </small>
              </div>
  
              <div class="field">
                <label for="applicant_type_id"> Applicant Type <span class="text-red-600">*</span></label>
                <Dropdown id="applicant_type_id" v-model="ApplicantAcademicType.applicant_type_id"
                  :options="ApplicantTypes" optionLabel="type_name" optionValue="id"
                  placeholder="Select an Applicant Type" required="true" autofocus
                  :class="{ 'p-invalid': submitted && !ApplicantAcademicType.applicant_type_id }" />
                <small class="p-error" v-if="submitted && !ApplicantAcademicType.applicant_type_id">
                  {{ $t('Applicant Type is required.') }}
                </small>
              </div>
  
              <div class="field">
                <label for="display_name"> Display Name <span class="text-red-600">*</span></label>
                <InputText id="display_name" v-model="ApplicantAcademicType.display_name" autofocus
                  :class="{ 'p-invalid': submitted && !ApplicantAcademicType.display_name }" />
                <small class="p-error" v-if="submitted && !ApplicantAcademicType.display_name">
                  {{ $t('Display Name is required.') }}
                </small>
              </div>
  
              <div class="field">
                <label for="academic_year_id"> Academic Year</label>
                <Dropdown id="academic_year_id" v-model="ApplicantAcademicType.academic_year_id" :options="AcademicYears"
                  optionLabel="academic_year" optionValue="id" placeholder="Select an Academic Year" required="true" />
              </div>
  
              <div class="field">
                <label for="dt_registration_deadline"> Registration Deadline <span class="text-red-600">*</span></label>
                <Calendar inputId="dt_registration_deadline" v-model="ApplicantAcademicType.dt_registration_deadline"
                  :showTime="true" :showSeconds="true" />
              </div>
  
              <div class="field ">
                <label for="nu_max_registration_count"> Max Registration Count </label>
                <InputText id="nu_max_registration_count" v-model="ApplicantAcademicType.nu_max_registration_count" />
              </div>
  
              <div class="field">
                <label for="r_type">Registration Count Type</label>
                <Dropdown id="r_type" v-model="ApplicantAcademicType.registration_type" :options="r_type"
                  optionLabel="name" optionValue="value" placeholder="Count on Submit" />
              </div>
  
              <div class="field">
                <label for="department_id"> Department</label>
                <Dropdown id="department_id" v-model="ApplicantAcademicType.department_id" :options="departments"
                  optionLabel="name" optionValue="id" placeholder="Select a Department First"
                  @change="onSelected_2(ApplicantAcademicType.department_id)" />
              </div>
  
              <div class="field">
                <label for="section_id">Section</label>
                <Dropdown id="r_type" v-model="ApplicantAcademicType.section_id" :options="Sections"
                  optionLabel="section_name" optionValue="id" placeholder="Select a Section"
                  :disabled="!ApplicantAcademicType.department_id" />
              </div>
  
              <div class="block my-3">
                <Checkbox id="is_active" class="mr-3" inputId="binary" v-model="ApplicantAcademicType.is_active"
                  :binary="true" />
                <label for="is_active">Active</label>
              </div>
  
              <div class="block my-3">
                <Checkbox id="is_selectable" class="mr-3" inputId="binary" v-model="ApplicantAcademicType.is_selectable"
                  :binary="true" />
                <label for="is_selectable">Is Seclectable</label>
              </div>
  
              <div class="block my-3">
                <Checkbox id="is_allow_to_print_fact_sheet" class="mr-3" inputId="binary"
                  v-model="ApplicantAcademicType.is_allow_applicant_print_fact_sheet" :binary="true" />
                <label for="is_allow_to_print_fact_sheet">Allow Applicant to print សលាកបត្រឯកត្តជន</label>
              </div>
  
              <div class="block my-3">
                <Checkbox id="is_show_photo_in_fact_sheet" class="mr-3" inputId="binary"
                  v-model="ApplicantAcademicType.is_show_photo_in_fact_sheet" :binary="true" />
                <label for="is_show_photo_in_fact_sheet">Show photo on សលាកបត្រឯកត្តជន</label>
              </div>
  
              <div class="field">
                <label for="option_order"> Option Order </label>
                <InputText id="option_order" v-model="ApplicantAcademicType.option_order" autofocus
                  :class="{ 'p-invalid': submitted && !ApplicantAcademicType.option_order }" />
                <small class="p-error" v-if="submitted && !ApplicantAcademicType.option_order">
                  {{ $t('Option Order is required.') }}
                </small>
              </div>
  
              <div class="field">
                <label for="note"> Application Form Note </label>
                <Editor id="note" v-model="ApplicantAcademicType.note" editorStyle="height: 320px" />
              </div>
            </div>
          </div>
  
          <div class="field col-12 md:col-6">
            <div class="md:col-12">
              <Fieldset legend="File Attachments" class="border-solid border-2 border-sky-500 px-4 py-2">
                
                <div class="field">
                  <div class="inline-block w-9/12">
                    <label for="file1"> File 1 </label>
                    <InputText class="mt-2" id="file1" v-model="ApplicantAcademicType.file1" />
                  </div>
                  <div class="inline-block">
                    <label class="inline-block mx-3" for="file1"> Required </label>
                    <Checkbox id="file1" inputId="binary" v-model="ApplicantAcademicType.is_file1_required"
                      :binary="true" />
                  </div>
                </div>
  
                <div class="field">
                  <div class="inline-block w-9/12">
                    <label for="file2"> File 2 </label>
                    <InputText class="mt-2" id="file2" v-model="ApplicantAcademicType.file2" />
                  </div>
                  <div class="inline-block">
                    <label class="inline-block mx-3" for="file2"> Required </label>
                    <Checkbox id="file2" inputId="binary" v-model="ApplicantAcademicType.is_file2_required"
                      :binary="true" />
                  </div>
                </div>
  
                <div class="field">
                  <div class="inline-block w-9/12">
                    <label for="file3"> File 3 </label>
                    <InputText class="mt-2" id="file3" v-model="ApplicantAcademicType.file3" />
                  </div>
                  <div class="inline-block">
                    <label class="inline-block mx-3" for="file3"> Required </label>
                    <Checkbox id="file3" inputId="binary" v-model="ApplicantAcademicType.is_file3_required"
                      :binary="true" />
                  </div>
                </div>
  
                <div class="field">
                  <div class="inline-block w-9/12">
                    <label for="file4"> File 4 </label>
                    <InputText class="mt-2" id="file4" v-model="ApplicantAcademicType.file4" />
                  </div>
                  <div class="inline-block">
                    <label class="inline-block mx-3" for="file4"> Required </label>
                    <Checkbox id="file4" inputId="binary" v-model="ApplicantAcademicType.is_file4_required"
                      :binary="true" />
                  </div>
                </div>
  
                <div class="field">
                  <div class="inline-block w-9/12">
                    <label for="file4"> File 5 </label>
                    <InputText class="mt-2" id="file4" v-model="ApplicantAcademicType.file5" />
                  </div>
                  <div class="inline-block">
                    <label class="inline-block mx-3" for="file5"> Required </label>
                    <Checkbox id="file5" inputId="binary" v-model="ApplicantAcademicType.is_file5_required"
                      :binary="true" />
                  </div>
                </div>
  
                <div class="field">
                  <div class="inline-block w-9/12">
                    <label for="file6"> File 6 </label>
                    <InputText class="mt-2" id="file6" v-model="ApplicantAcademicType.file6" />
                  </div>
                  <div class="inline-block">
                    <label class="inline-block mx-3" for="file6"> Required </label>
                    <Checkbox id="file6" inputId="binary" v-model="ApplicantAcademicType.is_file6_required"
                      :binary="true" />
                  </div>
                </div>
  
                <div class="field">
                  <div class="inline-block w-9/12">
                    <label for="file7"> File 7 </label>
                    <InputText class="mt-2" id="file7" v-model="ApplicantAcademicType.file7" />
                  </div>
                  <div class="inline-block">
                    <label class="inline-block mx-3" for="file7"> Required </label>
                    <Checkbox id="file7" inputId="binary" v-model="ApplicantAcademicType.is_file7_required"
                      :binary="true" />
                  </div>
                </div>
  
                <div class="field">
                  <div class="inline-block w-9/12">
                    <label for="file8"> File 8 </label>
                    <InputText class="mt-2" id="file8" v-model="ApplicantAcademicType.file8" />
                  </div>
                  <div class="inline-block">
                    <label class="inline-block mx-3" for="file8"> Required </label>
                    <Checkbox id="file8" inputId="binary" v-model="ApplicantAcademicType.is_file8_required"
                      :binary="true" />
                  </div>
                </div>
  
                <div class="field">
                  <div>
                    <label for="profile_printout"> Profile Printout </label>
                    <Dropdown id="profile_printout" class="mt-2" v-model="ApplicantAcademicType.file_id" :options="file"
                      optionLabel="name" optionValue="value" required="true" />
                  </div>
                </div>
  
              </Fieldset>
              
              <div class="field mt-4">
                <label for="approved_email_template"> Approved Email Template </label>
                <Editor id="approved_email_template" v-model="ApplicantAcademicType.approved_email_template"
                  editorStyle="height: 320px" />
              </div>
            </div>
          </div>
  
        </div>
  
        <div>
          <CustomField />
        </div>
  
        <template #footer>
          <Button :label="$t('Cancel')" icon="pi pi-times" class="p-button-secondary mt-2" @click="hideDialog" />
          <Button :label="$t('Save')" icon="pi pi-check" class="p-button-info" @click="saveAAT" />
        </template>
  
      </Dialog>
  
      <!-- CONFIRM DELETE DEPARTMENT -->
      <Dialog v-model:visible="deleteAATDialog" :style="{ width: '450px' }" header="Confirm" :modal="true">
        <div class="confirmation-content">
          <i class="pi pi-exclamation-triangle text-red-600 mb-3 mr-3 mt-4" style="font-size: 2rem" />
          <span v-if="ApplicantAcademicType"> {{ $t('Are you sure you want to delete') }} <b>{{
              ApplicantAcademicType.display_name
          }}</b> ? </span>
        </div>
        <template #footer>
          <Button :label="$t('No')" icon="pi pi-times" class="p-button-secondary mt-2" @click="deleteAATDialog = false" />
          <Button :label="$t('Yes')" icon="pi pi-check" class="p-button-info" @click="deleteAAT" />
        </template>
      </Dialog>
    </div>
  </template>
      
  <script setup>
  import { onMounted, ref } from "vue";
  import { FilterMatchMode } from "primevue/api";
  import { useToast } from "primevue/usetoast";
  import AATServices from "../../Composables/AATServices";
  import StudentTypeServices from '../../Composables/StudentTypeServices';
  import SubStudentTypeServices from "../../Composables/SubStudentTypeServices";
  import ApplicantTypeServices from '../../Composables/ApplicantTypeServices';
  import SectionServices from '../../Composables/SectionServices';
  import DepartmentServices from '../../Composables/DepartmentServices';
  import AcademicYearServices from '../../Composables/AcademicYearServices';
  
  const {
    errors,
    ApplicantAcademicType,
    ApplicantAcademicTypes,
    destroyApplicantAcademicType,
    getApplicantAcademicTypes,
    storeApplicantAcademicType,
    updateApplicantAcademicType,
    getFiles,
    Files,
  } = AATServices();
  
  onMounted(getApplicantAcademicTypes);
  
  const {
    StudentTypes,
    getStudentTypes,
  } = StudentTypeServices();
  onMounted(getStudentTypes)
  
  const {
    ApplicantTypes,
    getApplicantTypes
  } = ApplicantTypeServices();
  onMounted(getApplicantTypes)
  
  const {
    AcademicYears,
    getAcademicYears
  } = AcademicYearServices();
  onMounted(getAcademicYears);
  
  const {
    departments,
    getDepartments
  } = DepartmentServices();
  onMounted(getDepartments)
  
  const toast = useToast();
  const deleteAATDialog = ref(false);
  const dt = ref();
  
  const submitted = ref(false);
  const AATDialog = ref(false);
  
  const openNew = () => {
    ApplicantAcademicType.value = {};
    ApplicantAcademicType.value.is_active = true;
    ApplicantAcademicType.value.is_allow_applicant_print_fact_sheet = true;
    ApplicantAcademicType.value.is_selectable = true;
    ApplicantAcademicType.value.is_show_photo_in_fact_sheet = true;
    ApplicantAcademicType.value.file_id = 0;
    submitted.value = false;
    AATDialog.value = true;
  };
  
  const hideDialog = () => {
    AATDialog.value = false;
    submitted.value = false;
  };
  
  const saveAAT = async () => {
    submitted.value = true;
    let message;
    if (ApplicantAcademicType.value.display_name.trim()) {
      if (ApplicantAcademicType.value.id) {
        await updateApplicantAcademicType(ApplicantAcademicType.value.id)
        await getApplicantAcademicTypes()
        message = "Applicant Academic Type Updated"
      }
      else {
        await storeApplicantAcademicType(ApplicantAcademicType.value)
        await getApplicantAcademicTypes()
        message = "Applicant Academic Type Created";
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
  
  const filters = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });
  
  const confirmDeleteAAT = (prod) => {
    ApplicantAcademicType.value = prod;
    deleteAATDialog.value = true;
  };
  
  const deleteAAT = async () => {
    ApplicantAcademicTypes.value = ApplicantAcademicTypes.value.filter((val) => val.id !== ApplicantAcademicType.value.id);
    deleteAATDialog.value = false;
    await destroyApplicantAcademicType(ApplicantAcademicType.value.id);
    ApplicantAcademicType.value = {};
    toast.add({ severity: "success", summary: "Successful", detail: "Applicant Academic Type Deleted", life: 3000, });
  };
  
  const editAAT = async (prod) => {
    ApplicantAcademicType.value = { ...prod };
    await getFiles(prod.id)
    ApplicantAcademicType.value.file_id = Files.value[0].file_id
    onMounted(getSubStudentTypes(ApplicantAcademicType.value.student_type_id))
    onMounted(getSectionByDepartment(ApplicantAcademicType.value.student_type_id))
    AATDialog.value = true;
  };
  
  const {
    SubStudentTypes,
    getSubStudentTypes
  } = SubStudentTypeServices();
  
  const {
    Sections,
    getSectionByDepartment
  } = SectionServices();
  
  let onSelected_1 = (id) => {
    onMounted(getSubStudentTypes(id))
  };
  
  const onSelected_2 = (id) => {
    onMounted(getSectionByDepartment(id))
  }
  
  const r_type = ref([
    { name: 'Count on Submit', value: 'Count on Submit' },
    { name: 'Count on Registration', value: 'Count on Registration' },
  ])
  
  const file = ref([
    { value: 0, name: 'N/A' },
    { value: 1, name: 'File 1' },
    { value: 2, name: 'File 2' },
    { value: 3, name: 'File 3' },
    { value: 4, name: 'File 4' },
    { value: 5, name: 'File 5' },
    { value: 6, name: 'File 6' },
    { value: 7, name: 'File 7' },
    { value: 8, name: 'File 8' },
  ])
  
  </script>
  