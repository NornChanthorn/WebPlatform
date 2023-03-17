<template>
    <div class=" w-full" :to="{ params: { locale } }">
        <div class="ml-12 relative mb-12 w-11/12">
            <Toast></Toast>
            <div class="card">
                <DataTable :value="app_types" editMode="row" dataKey="id" responsiveLayout="scroll"
                    :resizableColumns="true" :paginator="true" :rows="10" :filters="filters"
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                    :rowsPerPageOptions="[5, 10, 25]"
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords}">
                    <template #header>
                        <Button :label="$t('add new applicant type')" icon="pi pi-plus-circle" class="p-button-primary"
                            @click="openAddDialog()" />
                        <span class="p-input-icon-left float-right">
                            <i class="pi pi-search" />
                            <InputText v-model="filters['global'].value" :placeholder="$t('search...')" />
                        </span>
                    </template>
                    <Column field="id" :header="$t('id')" style="width:10%" :sortable="true"></Column>
                    <Column field="type_name" :header="$t('name')" style="width:20%" :sortable="true" class=""></Column>
                    <Column style="width:15%;  min-width:8rem; " :header="$t('action')" bodyStyle="text-align:center"
                        class=" space-x-2  ">
                        <template #body="slotProps">
                            <div class="flex">
                                <Button icon="pi pi-pencil" :label="$t('edit')"
                                    class=" p-button-success mr-2 p-button-sm " @click="editData(slotProps.data)" />
                                <Button icon="pi pi-trash" :label="$t('delete')" class=" p-button-danger p-button-sm "
                                    @click="confirmDeleteProduct(slotProps.data)" />
                            </div>
                        </template>
                    </Column>
                </DataTable>
            </div>
        </div>

        <!-- ______________Add new Data Dialog_____________ -->

        <Dialog :header="$t('add new applicant type')" v-model:visible="AddDialog" :modal="true" :filters="filters"
            :style="{ width: '450px' }" class="p-fluid">
            <div class="field ml-16">
                <label for="name" class="w-24">{{ $t('name') }} <span class="text-red-600 ">*</span></label>
                <InputText id="name" v-model.trim="app_type.type_name" required="true" autofocus
                    :class="{ 'p-invalid': submitted && !app_type.type_name }" /> <br>
                <small class="p-error " v-if="submitted && !app_type.type_name">{{ $t('name is required') }} </small>
            </div>
            <template #footer>
                <div class="justify-between flex w-75 ml-16">
                    <Button :label="$t('cancel')" icon="pi pi-times" class="p-button-secondary"
                        @click="HideAddDialog" />
                    <Button :label="$t('save')" icon="pi pi-check pi-success" class="p-button-success"
                        @click="addNew" />
                </div>
            </template>
        </Dialog>

        <!-- ______________Delete Data Dialog_____________ -->

        <Dialog v-model:visible="deleteDialog" :style="{ width: '500px' }" :header="$t('confirm')" :modal="true">
            <div class="confirmation-content">
                <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
                <span v-if="app_type">{{ $t('are you sure to delete') }}<b>{{ app_type.type_name }}</b>?</span>
            </div>
            <template #footer>
                <Button :label="$t('no')" icon="pi pi-times" class="p-button-secondary" @click="HidedeleteDialog" />
                <Button :label="$t('yes')" icon="pi pi-check" class="p-button-info" @click="DeleteData" />
            </template>
        </Dialog>

        <!-- ______________ Update data_____________ -->
        <Dialog v-model:visible="updateDialog" :style="{ width: '450px' }" :header="$t('applicant type')" :modal="true"
            class="p-fluid">
            <div class="field">
                <label for="name">{{ $t('name') }}<span class="text-red-600">*</span></label>
                <InputText id="name" v-model.trim="app_type.type_name" required="true" autofocus
                    :class="{ 'p-invalid': submitted && !app_type.type_name }" />
                <small class="p-error" v-if="submitted && !app_type.type_name">{{ $t('name is required') }}</small>
            </div>
            <template #footer>
                <Button :label="$t('cancel')" icon="pi pi-times" class="p-button-secondary" @click="hideDialog" />
                <Button :label="$t('save')" icon="pi pi-check" class="p-button-info" @click="saveData" />
            </template>
        </Dialog>
    </div>
</template> 
<script >


import { ref, onMounted } from 'vue'
import useApplicantType from '../../Composables/ApplicantTypeServices'
import { FilterMatchMode } from "primevue/api";
import { useToast } from "primevue/usetoast";

export default {
    setup() {
        const {
            app_types,
            app_type,
            errors,
            getApp_types,
            getApp_type,
            storeApp_type,
            updateApp_type,
            destroyApp_type,
        } = useApplicantType();
        const toast = useToast();
        const submitted = ref(false);
        const deleteDialog = ref(false);
        const AddDialog = ref(false);
        const updateDialog = ref(false);
        const filters = ref({
            global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        });
        //
        const openAddDialog = () => {
            app_type.value = {}
            AddDialog.value = true
        };
        const HideAddDialog = () => {
            submitted.value = false;
            AddDialog.value = false
        }
        const openUpdateDialog = () => {
            updateDialog.value = true
        };
        const confirmDeleteProduct = (prod) => {
            app_type.value = prod;
            deleteDialog.value = true;
        };
        const editData = (prod) => {
            app_type.value = prod;
            updateDialog.value = true
        };

        const DeleteData = async () => {
            app_types.value = app_types.value.filter((val) => val.id !== app_type.value.id);
            deleteDialog.value = false;
            await destroyApp_type(app_type.value.id);
            app_type.value = {};
            toast.add({ severity: "success", summary: "Successful", detail: "Applicant type deleted", life: 3000, });
        };
        const HidedeleteDialog = () => {
            deleteDialog.value = false
        }

        const addNew = async () => {
            submitted.value = true;
            let message;
            if (app_type.value != null) {
                await storeApp_type(app_type.value)
                await getApp_types();
                HideAddDialog();
                message = "Applicant type Created"
            }
            if (errors.value == '') {
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
        const closeAddDialog = () => {
            AddDialog.value = false;
            submitted.value = false;
        }
        const saveData = async () => {
            submitted.value = true;
            let message;
            if (app_type.value != null) {
                if (app_type.value.id) {
                    await updateApp_type(app_type.value.id)
                    await getApp_types()
                    message = "Applicant type Updated"
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
        onMounted(getApp_types);
        return {
            app_types,
            app_type,
            errors,
            submitted,
            filters,
            AddDialog,
            updateDialog,
            deleteDialog,
            HidedeleteDialog,
            confirmDeleteProduct,
            openUpdateDialog,
            HideAddDialog,
            openAddDialog,
            hideDialog,
            closeAddDialog,
            DeleteData,
            addNew,
            editData,
            saveData,
            storeApp_type,
            updateApp_type,
            getApp_types,
            getApp_type,
            destroyApp_type,
        }
    },
}

</script>