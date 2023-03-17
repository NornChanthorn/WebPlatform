<template>
    <div class="w-full " :to="{params: {locale}}">
        <div class="ml-12 relative mb-12 w-11/12">
            <Toast></Toast>
           <div class="card">          
                <DataTable :value="academics" editMode="row" dataKey="id" responsiveLayout="scroll" v-model:selection="selectedProducts" 
                    :paginator="true" :rows="10" :filters="filters" :resizableColumns="true"
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rowsPerPageOptions="[5,10,25]"
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" 
                    >
                    <template #header>       
                        <Button :label="$t('add new academic year')" icon="pi pi-plus-circle" class="p-button-primary" @click="openAddDialog()"  />
                        <span class="p-input-icon-left float-right">
                            <i class="pi pi-search" />
                            <InputText v-model="filters['global'].value" :placeholder="$t('search...')" />
                        </span>
                    </template>       
                    <Column field="id" :header="$t('id')" style="width:10%" :sortable="true"></Column>
                    <Column field="academic_year" :header="$t('name')" style="width:20%" :sortable="true" class=""></Column>
                    <Column  style="width:15%;  min-width:8rem; " :header="$t('action')" bodyStyle="text-align:center" class=" space-x-2  ">
                        <template #body="slotProps">
                            <div class="flex">
                                <Button icon="pi pi-pencil" :label="$t('edit')" class=" p-button-success mr-2 p-button-sm "  @click="editData(slotProps.data)" />
                                <Button icon="pi pi-trash" :label="$t('delete')" class=" p-button-danger p-button-sm " @click="confirmDeleteProduct(slotProps.data)" />
                            </div>    
                       </template>
                    </Column>
                </DataTable>
            </div>
        </div>
    <!-- ______________Add new Data Dialog_____________ -->
            <Dialog :header="$t('add new academic year')" v-model:visible="AddDialog" :modal="true"  :filters="filters"   :style="{ width: '450px' }" class="p-fluid">
                <div class="field ml-12">
                    <label for="name" class="w-24">{{$t('name')}} <span class="text-red-600">*</span></label>
                    <InputText id="name" v-model.trim="academic.academic_year" required="true" autofocus
                    :class="{ 'p-invalid': submitted && !academic.academic_year }" /> <br>
                    <small class="p-error" v-if="submitted && !academic.academic_year">{{$t('name is required')}}</small>
                </div>
                <template #footer>
                    <div class="justify-between flex w-75 ml-16">
                         <Button :label="$t('cancel')" icon="pi pi-times" class="p-button-secondary" @click="hideDialog" />
                         <Button :label="$t('save')" icon="pi pi-check" class="p-button-success" @click="addNew" />
                    </div>  
                </template>
            </Dialog> 
  <!-- ______________Delete Data Dialog_____________ -->
         <Dialog v-model:visible="deleteDialog" :style="{ width: '500px' }" :header="$t('confirm')" :modal="true">
            <div class="confirmation-content">
                <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
                <span v-if="academic">{{$t('are you sure to delete')}} <b>{{ academic.academic_year }}</b>?</span>
            </div>
            <template #footer>
                <Button :label="$t('no')" icon="pi pi-times" class="p-button-secondary" @click="HidedeleteDialog" />
                <Button :label="$t('yes')" icon="pi pi-check" class="p-button-info" @click="DeleteData" />
            </template>
        </Dialog>
        <!-- ______________Update data_____________ -->
        <Dialog v-model:visible="updateDialog"  :style="{ width: '450px' }" class="p-fluid" :header="$t('academic year')" :modal="true">
            <div class="field ml-12">
                <label for="name" class="w-24">{{$t('name')}}<span class="text-red-600">*</span></label>
                <InputText id="name" v-model.trim="academic.academic_year" required="true" autofocus class="w-50"
                :class="{ 'p-invalid': submitted && !academic.academic_year }" /> <br>
                <small class="p-error " v-if="submitted && !academic.academic_year">{{$t('name is required')}}</small>
            </div>
            <template #footer>
                <div class="justify-between flex w-75 ml-16">
                    <Button :label="$t('cancel')" icon="pi pi-times" class="p-button-secondary" @click="hideDialog" />
                    <Button :label="$t('save')" icon="pi pi-check" class="p-button-success"  @click="saveData" />
                </div>      
            </template>
        </Dialog>
    
  </div>  
</template>

<script >
import {ref, onMounted}  from 'vue'
import useAcademic from '../../Composables/AcademicYearServices'
import { FilterMatchMode } from "primevue/api";
import { useToast } from "primevue/usetoast";
 export default{
    setup(){
        const {
            academics,
            academic,
            errors,
            getAcademics,
            getAcademic,
            storeAcademic,
            updateAcademic,
            destroyAcademic,
        } = useAcademic();
        const toast = useToast();  
        const submitted = ref(false);
        const deleteDialog= ref(false);
        const AddDialog= ref(false);
        const updateDialog= ref(false);
        const filters = ref({
           global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        });

        const openAddDialog= ()=>{
          academic.value= {}
          AddDialog.value= true
        };
        const openUpdateDialog= ()=>{
          updateDialog.value= true
        };
        const confirmDeleteProduct= (prod) =>{
            academic.value = prod;
            deleteDialog.value= true;
        };
        const editData= (prod)=>{
             academic.value= prod;
             updateDialog.value=true
        };
        const DeleteData = async () => {
            academics.value = academics.value.filter((val) => val.id !== academic.value.id);
            deleteDialog.value = false;
            await destroyAcademic(academic.value.id);
            academic.value = {};
           toast.add({ severity: "success", summary: "Successful", detail: "Academic deleted", life: 3000, });
        };
        const HidedeleteDialog= ()=>{
            deleteDialog.value= false
        }
        const hideDialog = () => {
            updateDialog.value = false;
            submitted.value = false;
        };
        const addNew = async()=>{
            submitted.value= true;
            let message;
            if(academic.value != null){
                 await storeAcademic(academic.value);
                 await getAcademics()
                 AddDialog.value= false
                 message= "Academic year Created"
            }
            if (errors.value == '') {
                toast.add({ severity: 'success', summary: 'Successful', detail: message, life: 3000 });
                hideDialog();
            }
            else {
                toast.add({ severity: 'error', summary: 'Error Message', detail: errors, life: 10000 });
            }         
        }
        const saveData= async()=>{
            submitted.value = true;
            let message;
            if (academic.value != null) {
                if (academic.value.id) {
                await updateAcademic(academic.value.id)
                await getAcademics()
                message = "Academic Updated"
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
        onMounted(getAcademics);

        return {
            academics,
            academic,
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
            storeAcademic,
            updateAcademic,
            getAcademics,
            getAcademic,
            destroyAcademic,  
        }
    },
 }
</script>