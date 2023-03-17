 <template>
    <div class="card">
        <div class=" pt-5 ml-12 relative mb-12 w-11/12">
            <Toast></Toast>
             <div class="uppercase w-full bg-blue-500  flex p-2  text-white justify-center rounded-t ">
                  <span class="fa fa-address-book-o fa-sm " style="color: white"> Student Type</span>
            </div>
           <div class="card mt-5">     
                <DataTable :value="StudentTypes" editMode="row" dataKey="id" responsiveLayout="scroll" :resizableColumns="true" 
                    :paginator="true" :rows="10" :filters="filters"  :to="{params: {locale}}"
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rowsPerPageOptions="[5,10,25]"
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" 
                    >
                    <template #header>       
                        <Button :label="$t('add new student type')" :to="{params: {locale}}" icon="pi pi-plus-circle" class="p-button-primary" @click="openAddDialog()"  />
                        <span class="p-input-icon-left float-right">
                              <i class="pi pi-search" />
                              <InputText v-model="filters['global'].value" :placeholder="$t('search...')" :to="{params: {locale}}" />
                        </span>
                    </template>           
                    <Column field="id" :header="$t('id')" style="width:20%" :sortable="true" :to="{params: {locale}}"></Column>
                    <Column field="name" :header="$t('name')" style="width:40%" :sortable="true" class="" :to="{params: {locale}}"></Column>
                    <Column  style="min-width: 8rem " :header="$t('action')" bodyStyle="text-align:center" class=" space-x-2  " :to="{params: {locale}}">
                        <template #body="slotProps">
                            <div class="flex">
                                <Button icon="pi pi-pencil" :label="$t('edit')" :to="{params: {locale}}" class=" p-button-success mr-2 p-button-sm "  @click="editData(slotProps.data)" />
                                <Button icon="pi pi-trash" :label="$t('delete')" :to="{params: {locale}}" class=" p-button-danger p-button-sm " @click="confirmDeleteProduct(slotProps.data)" />
                            </div>    
                       </template>
                    </Column>
                </DataTable>
            </div>
        </div>
  <!-- add  -->
        <Dialog :header="$t('add new student type')" :to="{params: {locale}}" v-model:visible="AddDialog" :style="{ width: '450px' }"  :modal="true"  class="p-fluid">           
            <div class="field inline-flex">
                <div class="flex ">
                    <label for="name" class="w-32" :to="{params: {locale}}">{{$t('name')}} <span class="text-red-500">*</span></label>
                    <InputText id="name" v-model="st_type.name" required="true" autofocus class=""
                    :class="{ 'p-invalid': submitted && !st_type.name }" />
                    <small class="p-error" v-if="submitted && !st_type.name" :to="{params: {locale}}">{{$t('name is required')}}</small>
                </div>
                <div class="ml-2" >
                    <Button :to="{params: {locale}}" :label="$t('save')"  class="p-button-success w-100" @click="addNew" />   
                </div>  
            </div>          
            <div class="field">  
                <div v-if="SubDialog==false">
                    <Button :to="{params: {locale}}" :label="$t('add sub student')" icon="pi pi-plus-circle" class="p-button-primary" @click="ShowSubForm"/>
                </div>
                <div v-if="SubDialog==true" class="w-24 float-right" :to="{params: {locale}}">
                    <Button :label="$t('cancel')" icon="" class="p-button-danger" @click="CloseAdd" />
                </div>
                <!-- ________________________Add Sub Student __________________________--->
                <div v-if="SubDialog==true">   
                    <div class="field inline-flex mt-4 " :to="{params: {locale}}">
                        <div class=" flex">
                            <InputText v-model="subStudent.student_type_id" :value="st_type.name" optionValue="id"></InputText>
                            <label for="name" class="w-32">{{$t('name')}}<span class="text-red-500">*</span></label>
                            <InputText id="name"  required="true" autofocus class="" v-model="subStudent.type_name"/> <br>
                            <small class="p-error" >{{$t('name is required')}}</small>
                        </div>
                        <div class=" ml-28">
                            <Button :label="$t('submit')"  class="p-button-primary w-100" @click="AddSubFunction" />   
                        </div>       
                    </div>
                </div>

                <div class="mt-2">
                    <DataTable :value="subStudents" editMode="row" dataKey="id" responsiveLayout="scroll"  :to="{params: {locale}}" 
                            :paginator="true" >
                        <Column field="id" :header="$t('id')" style="width:10%" :sortable="true"></Column>
                        <Column field="type_name" :header="$t('name')" style="width:20%" :sortable="true" class=""></Column>
                        <Column  style="min-width: 8rem " :header="$t('action')" bodyStyle="text-align:center" class=" space-x-2  " :to="{params: {locale}}">
                            <template #body="slotProps">
                                <div class="flex">
                                    <Button icon="pi pi-pencil" :label="$t('edit')" :to="{params: {locale}}" class=" p-button-success mr-2 p-button-sm "  @click="editData(slotProps.data)" />
                                    <Button icon="pi pi-trash" :label="$t('delete')" :to="{params: {locale}}" class=" p-button-danger p-button-sm " @click="confirmDeleteProduct(slotProps.data)" />
                                </div>    
                            </template>
                        </Column>
                    </DataTable>
                </div>
            </div>   
        </Dialog>       
         <Dialog v-model:visible="deleteDialog" :style="{ width: '500px' }" :header="$t('confirm')" :modal="true" :to="{params: {locale}}">
            <div class="confirmation-content">
                <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
                <span v-if="st_type">{{$t('are you sure to delete')}} <b>{{ st_type.name }}</b>?</span>
            </div>
            <template #footer>
                <Button :label="$t('no')" icon="pi pi-times" class="p-button-secondary" @click="HidedeleteDialog" />
                <Button :label="$t('yes')" icon="pi pi-check" class="p-button-info" @click="DeleteData" />
            </template>
        </Dialog>
      
   
        <Dialog v-model:visible="updateDialog" :style="{ width: '450px' }" :header="$t('update student type')" :modal="true" :to="{params: {locale}}" class="p-fluid">
            <div class="field ">
                <label for="name">{{$t('name')}} <span class="text-red-600">*</span></label>
                <InputText id="name" v-model.trim="st_type.name" required="true" autofocus
                :class="{ 'p-invalid': submitted && !st_type.name }" />
                <small class="p-error" v-if="submitted && !st_type.name">{{$t('name is required')}}</small>
            </div>
            <template #footer>
                <div class="flex justify-between ">
                    <Button :label="$t('cancel')" icon="pi pi-times" class="p-button-secondary" @click="hideDialog" />
                    <Button :label="$t('save')" icon="pi pi-check" class="p-button-info" @click="saveData" />
                </div>
            </template>
        </Dialog>
  </div>  
  </template>
  
  <script >

  import {ref, onMounted}  from 'vue'
  import StudentTypeServices from '../../Composables/StudentTypeServices'
  import { FilterMatchMode } from "primevue/api";
  import { useToast } from "primevue/usetoast";
  
  export default{
  
    setup(){
        const {
            st_types,
            st_type,
            subStudent,
            subStudents,
            errors,
            getSt_types,
            StudentTypes,
            getSt_type,
            storeSt_type,
            updateSt_type,
            destroySt_type,
            getSubStudent,
            storeSubStudent,
            getStudentTypes,
            getSubStudents,
        } = StudentTypeServices();
        const toast = useToast();  
        const submitted = ref(false);
        const SubDialog= ref(false);
        const deleteDialog= ref(false);
        const AddDialog= ref(false);  
        
        
        const updateDialog= ref(false);
        const filters = ref({
           global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        });
  
        const AddSubDialog= ()=>{
          subStudent.value= {}
          SubDialog.value= true
        }
        const CloseAdd= ()=>{
          SubDialog.value= false
        }
        const openAddDialog= ()=>{
          st_type.value= {};
          AddDialog.value= true;
          submitted.value= false
        };
        const ShowSubForm = ()=>{
            subStudent.value= {}
            SubDialog.value= true
        }
        const openUpdateDialog= ()=>{
          updateDialog.value= true
        };
        const confirmDeleteProduct= (prod) =>{
            st_type.value = prod;
            deleteDialog.value= true;
        };
        const editData= (prod)=>{
             st_type.value= prod;
             updateDialog.value=true
        };
        const DeleteData = async () => {
            StudentTypes.value = StudentTypes.value.filter((val) => val.id !== st_type.value.id);
            deleteDialog.value = false;
            await destroySt_type(st_type.value.id);
            st_type.value = {};
           toast.add({ severity: "success", summary: "Successful", detail: "Student type deleted", life: 3000, });
        };
        const HidedeleteDialog= ()=>{
            deleteDialog.value= false
        }

        // ________add student type____________
        const addNew = async() =>{
             submitted.value = true;
             let message
             if(st_type.value != null){
                await storeSt_type(st_type.value)
                await getStudentTypes();
             
                message= "Student type created"
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
            if (st_type.value != null) {
                if (st_type.value.id) {
                await updateSt_type(st_type.value.id)
                await getStudentTypes()
                message = "Student type Updated"
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
        //   _____________________add subStudent______________
        const AddSubFunction= async()=>{
             submitted.value = true;
             await storeSt_type(st_type.value)
             await storeSubStudent(subStudent.value)
             await getSubStudents(); 
        }
        onMounted(getStudentTypes)
        onMounted(getSubStudents);
  
        return {
            st_types,
            st_type,
            subStudent,
            subStudents,
            StudentTypes,
            errors,
            submitted,
            filters,
            AddDialog,
            SubDialog,
            updateDialog,
            deleteDialog,
            ShowSubForm,
            HidedeleteDialog,
            confirmDeleteProduct,
            openAddDialog,
            AddSubDialog,
            CloseAdd,
            openUpdateDialog,
            hideDialog,
            DeleteData,
            addNew,
            editData,
            saveData,
            storeSt_type,
            updateSt_type,
            getStudentTypes,
            getSt_type,
            getSubStudent,
            getSubStudents,
            AddSubFunction,
            destroySt_type,
        }
    },

    data(){
        return { 
        //   subStudent_type: {
        //       type_name: '',
        //       student_type_id: '',
  
        //   },
        //   subStudent: [],
        //   studentType: []      
        }
    },
  
    methods:{
     
    } 
  }
  </script>
  
  