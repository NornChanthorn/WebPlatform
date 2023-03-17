<template>
    <div>      
        <div class="  ml-12 relative mb-12 w-11/12">
            <Toast></Toast>
           <div class="card">     
                <DataTable :value="ministries" editMode="row" dataKey="id" responsiveLayout="scroll" :resizableColumns="true"
                    :paginator="true" :rows="10" :filters="filters" 
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rowsPerPageOptions="[5,10,25]"
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" 
                    >
                    <template #header class="flex">       
                        <Button :label="$t('add new ministry')" icon="pi pi-plus-circle" class="p-button-primary" @click="openAddDialog()"  />
                        <span class="p-input-icon-left float-right">
                                <i class="pi pi-search" />
                                <InputText v-model="filters['global'].value" :placeholder="$t('search...')" />
                        </span>
                    </template>

                    
                    <Column field="id" :header="$t('id')" style="width:10%" :sortable="true"></Column>
                    <Column field="name" :header="$t('name')" style="width:20%" :sortable="true" class=""></Column>
                    <Column field="name_kh" :header="$t('local name')" style="width:20%" :sortable="true" class=""></Column>
                    <Column field="abbrev" :header="$t('abbreviation')" style="width:20%" :sortable="true" class=""></Column>
                    <Column field="description" :header="$t('description')" style="width:10%" :sortable="true" class=""></Column>
                    <Column  style="width:20%;  min-width:8rem; " :header="$t('action')" bodyStyle="text-align:center" class=" space-x-2  ">
                        <template #body="slotProps">
                            <div class="md:flex sm:flex">                                    
                              <Button icon="pi pi-pencil" :label="$t('edit')" class=" p-button-success mr-2 p-button-sm "  @click="editData(slotProps.data)" />
                              <Button icon="pi pi-trash" :label="$t('delete')" class=" p-button-danger p-button-sm" @click="confirmDeleteProduct(slotProps.data)" /> 
                            </div>
                       </template>
                    </Column>
                </DataTable>
            </div>
        </div>

    <!-- ______________Add new Data Dialog_____________ -->
            <Dialog :header="$t('add new ministry')" v-model:visible="AddDialog" :modal="true"  :filters="filters"   :style="{ width: '450px' }" class="p-fluid" >
                <div class="field ml-16">
                    <label for="name" class="w-32">{{$t('name')}} <span class="text-red-600">*</span></label>
                    <InputText id="name" v-model.trim="ministry.name" required="true" autofocus
                    :class="{ 'p-invalid': submitted && !ministry.name }" /> <br>
                    <small class="p-error " v-if="submitted && !ministry.name">{{$t('name is required')}}</small><br>

                    <label for="name" class="">{{$t('local name')}}<span class="text-red-600">*</span></label>
                    <InputText id="name" v-model.trim="ministry.name_kh" required="true" autofocus
                    :class="{ 'p-invalid': submitted && !ministry.name_kh}" /> <br>
                    <small class="p-error  " v-if="submitted && !ministry.name_kh">{{$t('local name is required')}}</small><br>

                    <label for="name" class="w-32">{{$t('abbreviation')}}<span class="text-red-600">*</span></label>
                    <InputText id="name" v-model.trim="ministry.abbrev" required="true" autofocus />
    
                    <label for="name" class="w-32">{{$t('description')}}<span class="text-red-600">*</span></label>
                    <InputText id="name" v-model.trim="ministry.description"  autofocus
                    />
                   
                </div>
                <template #footer>
                    <div class="flex justify-between">
                         <Button :label="$t('cancel')" icon="pi pi-times" class="p-button-secondary" @click="hideAddDialog" />
                         <Button :label="$t('save')" icon="pi pi-check" class="p-button-success" @click="addNew" />
                    </div>       
                </template>
            </Dialog> 
  <!-- ______________Delete Data Dialog_____________ -->
         <Dialog v-model:visible="deleteDialog" :style="{ width: '500px' }" :header="$t('confirm')" :modal="true">

            <div class="confirmation-content">
                <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
            <span v-if="ministry">{{$t('are you sure to delete')}}<b>{{ ministry.name }}</b>?</span>
            </div>

            <template #footer>
                <Button :label="$t('no')" icon="pi pi-times" class="p-button-secondary" @click="HidedeleteDialog" />
                <Button :label="$t('yes')" icon="pi pi-check" class="p-button-info" @click="DeleteData" />
            </template>

        </Dialog>

    
        <!-- ______________Update data_____________ -->
        <Dialog v-model:visible="updateDialog" :style="{ width: '450px' }" :header="$t('ministry')" :modal="true"
                class="p-fluid">
            <div class="field ml-12" >
                <label for="name" class="w-32">{{$t('name')}} <span class="text-red-600">*</span></label>
                <InputText id="name" v-model.trim="ministry.name" required="true" autofocus class="w-50"
                :class="{ 'p-invalid': submitted && !ministry.name }" /> <br>
                <small class="p-error" v-if="submitted && !ministry.name">{{$t('name is required')}} </small><br>

                <label for="name" class="w-32">{{$t('local name')}}  <span class="text-red-600">*</span></label>
                <InputText id="name" v-model.trim="ministry.name_kh" required="true" autofocus class="w-50"
                :class="{ 'p-invalid': submitted && !ministry.name_kh}" /> <br>
                <small class="p-error" v-if="submitted && !ministry.name_kh">{{$t('local name is required')}} </small><br>

                <label for="name" class="w-32">{{$t('abbreviation')}}  <span class="text-red-600">*</span></label>
                <InputText id="name" v-model.trim="ministry.abbrev" required="true" autofocus class="w-50"/> <br>
                <!-- <small class="p-error" v-if="submitted && !ministry.abbrev">Name is required.</small><br><br> -->

                <label for="name" class="w-32">{{$t('description')}} </label>
                <InputText id="name" v-model.trim="ministry.description" required="true" autofocus class="w-50"/>        
                
            </div>
            <template #footer>
                    <div class="justify-between flex w-75 ml-16">
                         <Button :label="$t('cancel')" icon="pi pi-times" class="p-button-secondary" @click="hideDialog" />
                         <Button :label="$t('save')" icon="pi pi-check" class="p-button-success" @click="saveData" />
                    </div>       
            </template>
        </Dialog> 
  </div>
    
</template>

<script >
import {ref, onMounted}  from 'vue'
import useMinistry from '../../Composables/MinistryServices'
import { FilterMatchMode } from "primevue/api";
import { useToast } from "primevue/usetoast";

 export default{

    setup(){
        const {
            ministries,
            ministry,
            errors,
            getMinistries,
            getMinistry,
            storeMinistry,
            updateMinistry,
            destroyMinistry,
        } = useMinistry();
        const toast = useToast();  
        const submitted = ref(false);
        const deleteDialog= ref(false);
        const AddDialog= ref(false);
        const updateDialog= ref(false);
        const filters = ref({
           global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        });

        const openAddDialog= ()=>{
            ministry.value= {}
            AddDialog.value= true
        };
        const hideAddDialog=()=>{
            submitted.value= false;
            AddDialog.value= false
        }
        const openUpdateDialog= ()=>{
          updateDialog.value= true
        };
        const confirmDeleteProduct= (prod) =>{
            ministry.value = prod;
            deleteDialog.value= true;
        };
        const editData= (prod)=>{
             ministry.value= prod;
             updateDialog.value=true
        };
        const DeleteData = async () => {
            ministries.value = ministries.value.filter((val) => val.id !== ministry.value.id);
            deleteDialog.value = false;
            await destroyMinistry(ministry.value.id);
            ministry.value = {};
           toast.add({ severity: "success", summary: "Successful", detail: "Ministry deleted", life: 3000, });
        };
        const HidedeleteDialog= ()=>{
            deleteDialog.value= false
        }
        const addNew = async() =>{
            submitted.value= true;
            let message;
            if(ministry.value != null){
                await storeMinistry(ministry.value);
                await getMinistries()
                AddDialog.value= false
                message= "Ministry created"
            }
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
            if (ministry.value !=null) {
                if (ministry.value.id) {
                await updateMinistry(ministry.value.id)
                await getMinistries()
                message = "Ministry Updated"
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

        onMounted(getMinistries);

        return {
            ministries,
            ministry,
            errors,
            submitted,
            filters,
            AddDialog,
            updateDialog,
            deleteDialog,
            HidedeleteDialog,
            confirmDeleteProduct,
            openAddDialog,
            hideAddDialog,
            openUpdateDialog,
            hideDialog,
            DeleteData,
            addNew,
            editData,
            saveData,
            storeMinistry,
            updateMinistry,
            getMinistries,
            getMinistry,
            destroyMinistry,            
        }
    },
  }

</script>