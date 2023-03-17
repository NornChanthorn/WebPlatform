<template>
    <div class="w-full">
        <div class="ml-12 relative mb-12 w-11/12">
           <Toast></Toast>
           <div class="card">     
                <DataTable :value="degrees" editMode="row" dataKey="id" responsiveLayout="scroll" 
                    :paginator="true" :rows="10" :filters="filters" :resizableColumns="true"
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rowsPerPageOptions="[5,10,25]"
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" 
                    >
                    <template #header>       
                        <Button :label="$t('add new degree')" icon="pi pi-plus-circle" class="p-button-primary" @click="openAddDialog()"  />
                        <span class="p-input-icon-left float-right">
                            <i class="pi pi-search" />
                            <InputText v-model="filters['global'].value" :placeholder="$t('search...')" />
                        </span>
                    </template>             
                    <Column field="id" :header="$t('id')" style="width:10%" :sortable="true"></Column>
                    <Column field="name" :header="$t('name')" style="width:20%" :sortable="true" class=""></Column>
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
        <Dialog :header="$t('add new degree')" v-model:visible="AddDialog" :modal="true"  :filters="filters" :style="{ width: '450px' }" class="p-fluid" >
            <div class="field ml-16">
                <label for="name" class="w-24">{{$t('name')}} <span class="text-red-600">*</span></label>
                <InputText id="name" v-model.trim="degree.name" required="true" autofocus
                :class="{ 'p-invalid': submitted && !degree.name }" /> <br>
                <small class="p-error ml-24" v-if="submitted && !degree.name">{{$t('name is required')}} </small>
            </div>
            <template #footer>
                <div class="justify-between flex w-75 ml-16">
                    <Button :label="$t('cancel')" icon="pi pi-times" class="p-button-secondary" @click="AddDialog=false" />
                    <Button :label="$t('save')" icon="pi pi-check" class="p-button-success" @click="addNew" />
                </div>
            </template>
        </Dialog> 
  <!-- ______________Delete Data Dialog_____________ -->
         <Dialog v-model:visible="deleteDialog" :style="{ width: '500px' }" :header="$t('confirm')" :modal="true">
            <div class="confirmation-content">
                <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
                <span v-if="degree">{{$t('are you sure to delete')}} <b>{{ degree.name }}</b>?</span>
            </div>
            <template #footer>
                <Button :label="$t('no')" icon="pi pi-times" class="p-button-secondary" @click="HidedeleteDialog" />
                <Button :label="$t('yes')" icon="pi pi-check" class="p-button-info" @click="DeleteData" />
            </template>
        </Dialog>
  
        <!-- ______________Update data_____________ -->
        <Dialog v-model:visible="updateDialog"  :header="$t('degree')" :modal="true" :style="{ width: '450px' }" class="p-fluid">
            <div class="field ml-16">
                <label for="name" class="w-24">{{$t('name')}}<span class="text-red-600">*</span></label>
                <InputText id="name" v-model.trim="degree.name" required="true" autofocus class="w-50"
                :class="{ 'p-invalid': submitted && !degree.name }" />
                <small class="p-error" v-if="submitted && !degree.name">{{$t('name is required')}}</small>
            </div>
            <template #footer>
                <div class="justify-between flex w-75 ml-16">
                    <Button :label="$t('cancel')" icon="pi pi-times" class="p-button-secondary" @click="hideDialog" />
                    <Button :label="$t('save')" icon="pi pi-check" class="p-button-info" @click="saveData" />
                </div> 
            </template>
        </Dialog>
  </div>
    
</template>

<script >
import {ref, onMounted, reactive}  from 'vue'
import useDegree from '../../Composables/DegreeServices'
import { FilterMatchMode } from "primevue/api";
import { useToast } from "primevue/usetoast";

 export default{

    setup(){
        const {
            degrees,
            degree,
            errors,
            getDegrees,
            getDegree,
            storeDegree,
            updateDegree,
            destroyDegree,
        } = useDegree();
        const toast = useToast();  
        const submitted = ref(false);
        const deleteDialog= ref(false);
        const AddDialog= ref(false);
        const updateDialog= ref(false);
        const filters = ref({
           global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        });

        const openAddDialog= ()=>{
           degree.value= {}
           AddDialog.value= true
        };

        const openUpdateDialog= ()=>{
          updateDialog.value= true
        };
        const confirmDeleteProduct= (prod) =>{
            degree.value = prod;
            deleteDialog.value= true;
        };
        const editData= (prod)=>{
             degree.value= prod;
             updateDialog.value=true
        };

        const DeleteData = async () => {
            degrees.value = degrees.value.filter((val) => val.id !== degree.value.id);
            deleteDialog.value = false;
            await destroyDegree(degree.value.id);
            degree.value = {};
           toast.add({ severity: "success", summary: "Successful", detail: "Degree deleted", life: 3000, });
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
            if(degree.value!= null){      
                await storeDegree(degree.value);
                await getDegrees()
                AddDialog.value= false  
                message= "Degree created"       
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
            if (degree.value!= null) {
                if (degree.value.id ) {
                await updateDegree(degree.value.id)
                await getDegrees()
                message = "Degree Updated"
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
        
        onMounted(getDegrees);

        return {
            degrees,
            degree,
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
            storeDegree,
            updateDegree,
            getDegrees,
            getDegree,
            destroyDegree,
        }
    },
  }

</script>