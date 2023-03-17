<template>
    <div>
        <div class="ml-12 relative mb-12 w-11/12">
            <Toast/>
           <div class="card">
                <DataTable :value="institutes" editMode="row" dataKey="id" responsiveLayout="scroll" v-model:selection="selectedProducts" 
                    :paginator="true" :rows="10" :filters="filters" :resizableColumns="true"
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rowsPerPageOptions="[5,10,25]"
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" 
                    >
                    <template #header>       
                        <Button :label="$t('add new institute')" icon="pi pi-plus-circle" class="p-button-primary" @click="openAddDialog()"  />
                        <span class="p-input-icon-left float-right">
                                <i class="pi pi-search" />
                                <InputText v-model="filters['global'].value" :placeholder="$t('search...')" />
                        </span>
                    </template>
                    <Column field="id" :header="$t('Id')" style="width: 10%;"   :sortable="true" ></Column>
                    <Column field="name" :header="$t('Name')" style="width: 20%;"  :sortable="true" ></Column>
                    <Column field="name_kh" :header="$t('Local name')" style="width: 20%;" :sortable="true"  > </Column>
                    <Column field="abbrev" :header="$t('abbreviation')" style="width: 15%;"  :sortable="true"> </Column>
                    <Column field="description" :header="$t('description')" style="width: 15%;"   :sortable="true"> </Column>
                    <Column   style="width: 20%;"  :header="$t('Action')" bodyStyle="text-align:center" class=" space-x-2  ">
                        <template #body="slotProps">
                            <div class="flex">
                                <Button icon="pi pi-pencil" :label="$t('Edit')" class=" p-button-success mr-2 p-button-sm "  @click="editData(slotProps.data)" />
                                <Button icon="pi pi-trash" :label="$t('Delete')" class=" p-button-danger p-button-sm " @click="confirmDeleteProduct(slotProps.data)" />
                            </div>    
                       </template>
                    </Column>
                </DataTable>
            </div>
        </div>

    <!-- ______________Add new Data Dialog_____________ -->
        <Dialog :header="$t('add new institute')" v-model:visible="AddDialog" :modal="true"  :filters="filters"  :breakpoints="{'960px': '75vw', '640px': '90vw'}" :style="{width: '50vw'}">
                <div class="field ml-16">
                    <label for="name" class="w-28">{{$t('name')}} <span class="text-red-600 ">*</span></label>
                    <InputText id="name" v-model.trim="institute.name" required="true" autofocus 
                    :class="{ 'p-invalid': submitted && !institute.name }" /> <br>
                    <small class="p-error ml-16" v-if="submitted && !institute.name">{{$t('name is required')}} </small><br>
                    <br>
                    <label for="name" class="w-28">{{$t('local name')}} <span class="text-red-600 ">*</span></label>
                    <InputText id="name" v-model.trim="institute.name_kh" required="true" autofocus 
                    :class="{ 'p-invalid': submitted && !institute.name_kh }" /> <br>
                    <small class="p-error ml-16" v-if="submitted && !institute.name_kh">{{$t('local name is required')}} </small><br>
                    <br>
                    <label for="name" class="w-28">{{$t('abbreviation')}} </label>
                    <InputText id="name" v-model.trim="institute.abbrev" required="true" autofocus /> <br>
                    <br>
                    <label for="name" class="w-28">{{$t('description')}} </label>
                    <InputText id="name" v-model.trim="institute.description" required="true" autofocus /> <br>
                   
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
                <span v-if="institute">{{$t('are you sure to delete')}}<b>{{ institute.name }}</b>?</span>
            </div>
            <template #footer>
                <Button :label="$t('no')" icon="pi pi-times" class="p-button-secondary" @click="HidedeleteDialog" />
                <Button :label="$t('yes')" icon="pi pi-check" class="p-button-info" @click="DeleteData" />
            </template>
        </Dialog>

    
        <!-- ______________Update data_____________ -->
        <Dialog v-model:visible="updateDialog" :style="{ width: '450px' }" :header="$t('institute')" :modal="true"
                class="p-fluid">
            <div class="field">
                <label for="name">{{$t('Name')}}<span class="text-red-600">*</span></label>
                <InputText id="name" v-model.trim="institute.name" required="true" autofocus
                :class="{ 'p-invalid': submitted && !institute.name }" />
                <small class="p-error" v-if="submitted && !institute.name">{{$t('name is required')}}</small><br>

                <label for="name" class="mt-2">{{$t('local name')}}<span class="text-red-600">*</span></label>
                <InputText id="name" v-model.trim="institute.name_kh" required="true" autofocus
                :class="{ 'p-invalid': submitted && !institute.name_kh}" />
                <small class="p-error" v-if="submitted && !institute.name_kh">{{$t('local name is required')}}</small><br>

                <label for="name" class="mt-2">{{$t('abbreviation')}}</label>
                <InputText id="name" v-model.trim="institute.abbrev"  autofocus
                  :class="{ 'p-invalid': submitted && !institute.abbrev}" />
                <small class="p-error" v-if="submitted && !institute.abbrev">{{$t('abbreviation is required')}}</small><br>
               
                <label for="name" class="mt-2">{{$t('description')}}</label>
                <InputText id="name" v-model.trim="institute.description"  autofocus/>
            </div>
            <template #footer>
                <Button :label="$t('cancel')" icon="pi pi-times" class="p-button-secondary" @click="hideDialog" />
                <Button :label="$t('save')" icon="pi pi-check" class="p-button-info" @click="saveData" />
            </template>
        </Dialog>
  </div>
</template>
<script >
import {ref, onMounted}  from 'vue'
import InstituteServices from '../../Composables/InstituteServices'
import { FilterMatchMode } from "primevue/api";
import { useToast } from "primevue/usetoast";

export default{
    setup(){
        const {
            institutes,
            institute,
            errors,
            getInstitutes,
            getInstitute,
            storeInstitute,
            updateInstitute,
            destroyInstitute,
        } = InstituteServices();
        const toast = useToast();  
        const submitted = ref(false);
        const deleteDialog= ref(false);
        const AddDialog= ref(false);
        const updateDialog= ref(false);
        const filters = ref({
           global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        })
        const openAddDialog= ()=>{
            institute.value= {}
            AddDialog.value= true
        };
        const openUpdateDialog= ()=>{
          updateDialog.value= true
        };
        const confirmDeleteProduct= (prod) =>{
            institute.value = prod;
            deleteDialog.value= true;
        };
        const editData= (prod)=>{
             institute.value= prod;
             updateDialog.value=true
        };
        const DeleteData = async () => {
            institutes.value = institutes.value.filter((val) => val.id !== institute.value.id);
            deleteDialog.value = false;
            await destroyInstitute(institute.value.id);
            institute.value = {};
           toast.add({ severity: "success", summary: "Successful", detail: "Institute deleted", life: 3000, });
        };
        const HidedeleteDialog= ()=>{
            deleteDialog.value= false
        }

        const addNew = async() =>{
            submitted.value=true
            let message;
            if(institute.value != null){
                 await storeInstitute(institute.value)    
                await getInstitutes()
                AddDialog.value= false 
                message= "Institute created"
            }
            if(errors.value == ''){
               toast.add({ severity: 'success', summary: 'Successful', detail: message, life: 3000 });
            }else{
               toast.add({ severity: 'error', summary: 'Error', detail: errors, life: 3000 });
            }    
           
        }
        const hideDialog = () => {
            updateDialog.value = false;
            submitted.value = false;
        };
        const saveData= async()=>{
            submitted.value = true;
            let message;
            if (institute.value !=null) {
                if (institute.value.id) {
                await updateInstitute(institute.value.id)
                await getInstitutes()
                message = "Institute Updated"              
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

        onMounted(getInstitutes);
    
        return {
            institutes,
            institute,
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
            storeInstitute,
            updateInstitute,
            getInstitute,
            getInstitutes,
            destroyInstitute,
        }
    },
  }
</script >