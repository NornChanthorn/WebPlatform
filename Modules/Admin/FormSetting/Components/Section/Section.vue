<template>
    <div class="  w-full">
        <!-- <div class="uppercase w-11/12 bg-blue-500  flex p-2 mt-6 text-white justify-center rounded-t ml-12">
            <span class="fa fa-address-book-o fa-sm " style="color: blue"> Section</span>
        </div> -->
        <div class=" pt-5 ml-12 relative mb-12 w-11/12">
           <Toast></Toast>
           <div class="card">            
                <DataTable :value="sections" editMode="row" dataKey="id" responsiveLayout="scroll" v-model:selection="selectedProducts" :resizableColumns="true"
                    :paginator="true" :rows="10" :filters="filters" 
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rowsPerPageOptions="[5,10,25]"
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords}">
                    <template #header>       
                        <Button v-can="'section create'" :label="$t('add new section')" icon="pi pi-plus-circle" class="p-button-primary" @click="openAddDialog()"  />
                        <span class="p-input-icon-left float-right">
                            <i class="pi pi-search" />
                            <InputText v-model="filters['global'].value" :placeholder="$t('search...')" />
                        </span>
                    </template>           
                    <Column field="id" :header="$t('Id')" style="width:20%" :sortable="true"></Column>
                    <Column field="section_name" :header="$t('Name')" style="width:40%" :sortable="true" class=""></Column>
                    <Column field="action" :header="$t('Action')" :exportable="false" style="min-width: 8rem " class=" text-center sm:spance-x-0">
                        <template #body="slotProps">
                            <div class="sm:flex md:flex">
                                <Button v-can="'section edit'" :label="$t('Edit')" icon="pi pi-pencil"
                                class="p-button p-button-success mr-2" @click="editData(slotProps.data)" />
                                <Button v-can="'section delete'" :label="$t('Delete')" icon="pi pi-trash"
                                class="p-button p-button-danger" @click="confirmDeleteProduct(slotProps.data)" />
                            </div>
                        </template>
                    </Column>
                </DataTable>
            </div>
        </div>

    <!-- ______________Add new Data Dialog_____________ -->
            <Dialog :header="$t('add new section')" v-model:visible="AddDialog" :style="{ width: '450px' }"  :modal="true"
                class="p-fluid">
                <div class="field mt-3 ">
                    <label for="section"> {{ $t('department') }} <span class="text-red-600">*</span></label>
                    <Dropdown id="section" v-model="section.department_id" :options="department" optionLabel="name"
                        optionValue="id" :placeholder="$t('select department')" required="true" autofocus
                        :class="{ 'p-invalid': submitted && !section.department_id }" />
                    <small class="p-error" v-if="submitted && !section.department_id">{{ $t('department is required.') }}</small>
                </div>
                <div class="field">
                    <label for="name">{{$t('name')}} <span class="text-red-600">*</span></label>
                    <InputText id="name" v-model.trim="section.section_name" required="true" autofocus
                    :class="{ 'p-invalid': submitted && !section.section_name }" />
                    <small class="p-error" v-if="submitted && !section.section_name">{{$t('name is required')}}</small>
                </div>
                <template #footer>
                     <div class="justify-between flex w-75 ml-16">
                    <Button :label="$t('cancel')" icon="pi pi-times" class="p-button-secondary" @click="hideDialog" />
                    <Button :label="$t('save')" icon="pi pi-check pi-success" class="p-button-success" @click="addNew" />
                    </div>         
                </template>
            </Dialog> 
  <!-- ______________Delete Data Dialog_____________ -->
         <Dialog v-model:visible="deleteDialog" :style="{ width: '500px' }" :header="$t('confirm')" :modal="true">
            <div class="confirmation-content">
                <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
                <span v-if="section">{{$t('are you sure to delete')}} <b>{{ section.section_name }}</b>?</span>
            </div>
            <template #footer>
                <Button :label="$t('no')" icon="pi pi-times" class="p-button-secondary" @click="HidedeleteDialog" />
                <Button :label="$t('yes')" icon="pi pi-check" class="p-button-info" @click="DeleteData" />
            </template>
        </Dialog>   
        <!-- ______________ Update data_____________ -->
        <Dialog v-model:visible="updateDialog" :style="{ width: '450px' }" header="Section" :modal="true" class="p-fluid">
            <div class="field mt-3">
                <label for="section"> {{ $t('name') }} <span class="text-red-600">*</span></label>
                <Dropdown id="section" v-model="section.department_id" :options="department" optionLabel="name"
                    optionValue="id"  required="true" autofocus
                    :class="{ 'p-invalid': submitted && !section.department_id }" />
                   <small class="p-error" v-if="submitted && !section.department_id">{{ $t('department is required.') }}</small>
            </div>
            <div class="field">
                <label for="name">{{$t('name')}} <span class="text-red-600">*</span></label>
                <InputText id="name" v-model.trim="section.section_name" required="true" autofocus
                :class="{ 'p-invalid': submitted && !section.section_name }" />
                <small class="p-error" v-if="submitted && !section.section_name">{{$t('name is required')}}</small>
            </div>
            <template #footer>
                <Button :label="$t('cancel')" icon="pi pi-times" class="p-button-secondary" @click="hideDialog" />
                <Button :label="$t('save')" icon="pi pi-check" class="p-button-info" @click="saveData" />
            </template>
        </Dialog>   
  </div>    
</template>

<script >
import axios from 'axios';
import {ref, onMounted}  from 'vue'
import useSection from '../../Composables/SectionServices.js'
import { FilterMatchMode } from "primevue/api";
import { useToast } from "primevue/usetoast";
 export default{

    setup(){
        const {
            sections,
            section,
            errors,
            getSections,
            getSection,
            storeSection,
            updateSection,     
            destroySection,
        } = useSection();
        const department= ref([]);
        const toast = useToast();  
        const submitted = ref(false);
        const deleteDialog= ref(false);
        const AddDialog= ref(false);
        const updateDialog= ref(false);
        const filters = ref({
           global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        });
        const openAddDialog= ()=>{
          section.value= {};
          submitted.value= false
          AddDialog.value= true
        };
        const openUpdateDialog= ()=>{
          updateDialog.value= true
        };
        const confirmDeleteProduct= (prod) =>{
            section.value = prod;
            deleteDialog.value= true;
        };
        const editData= (prod)=>{
             section.value= prod;
             updateDialog.value=true
        };

        const DeleteData = async () => {
            sections.value = sections.value.filter((val) => val.id !== section.value.id);
            deleteDialog.value = false;
            await destroySection(section.value.id);
            section.value = {};
            toast.add({ severity: "success", summary: "Successful", detail: "Section deleted", life: 3000, });
        };
        const HidedeleteDialog= ()=>{
            deleteDialog.value= false
        }

        const addNew = async() =>{
            submitted.value= true
            let message;
            await storeSection(section.value)    
            await getSections()
            AddDialog.value= false
            message= "Section created"
            if(errors.value== ''){
                toast.add({ severity: 'success', summary: 'Successful', detail: message, life: 3000 });
                hideDialog();
            }
            else {
                toast.add({ severity: 'error', summary: 'Error Message', detail: errors, life: 10000 });
            }
        }
        const hideDialog = () => {
            updateDialog.value = false;
            submitted.value = false;
        };
        const saveData= async()=>{
            submitted.value = true;
            let message;
            if (section.value != null) {
                if (section.value.id) {
                await updateSection(section.value.id)
                await getSections()
                message = "Section Updated"
                }
            }
            if (errors.value == '') {
                toast.add({ severity: 'success', summary: 'Successful', detail: message, life: 3000 });
                hideDialog();
            }
            else {
                toast.add({ severity: 'error', summary: 'Error Message', detail: errors, life: 10000 });
            }

            
        }
        const getDepartment= ()=>{
           axios.get('http://127.0.0.1:8000/api/departments').then(
             res=>{
               department.value= res.data
             }
           )
        }

        onMounted(getSections);
        onMounted(getDepartment);

        return {
            sections,
            section,
            department,
            errors,
            submitted,
            filters,
            AddDialog,
            updateDialog,
            deleteDialog,
            HidedeleteDialog,
            confirmDeleteProduct,
            openAddDialog,
            openUpdateDialog,
            hideDialog,
            DeleteData,
            addNew,
            editData,
            saveData,
            storeSection,
            updateSection,
            getSections,
            getSection,
            getDepartment,
            destroySection,            
        }
    },
  }

</script>