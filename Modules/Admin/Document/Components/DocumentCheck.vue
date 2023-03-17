<template>
    <div class="card mt-2">
       <div class="bg-blue-500 text-center rounded-t-md p-2 uppercase text-white">
    {{$t('document check')}}
       </div>
       <div class="space-x-4 sm:flex mt-5 w-full ">
            <Dropdown :placeholder="$t('choose academic year')" class="w-60"></Dropdown>
            <Dropdown placeholder="Select here" class="w-60"></Dropdown>
            <Button :label="$t('show')" class=""></Button>
            <Button :label="$t('report')" class="p-2"></Button>
            <span class="p-input-icon-left float-right">
                <InputText v-model="filters['global'].value" :placeholder="$t('Search...')"/>
                <i class="pi pi-search" />
            </span>
       </div>
        <div class="card mt-5">
            <DataTable ref="dt" :value="departments" dataKey="id" :resizableColumns="true" columnResizeMode="expand"
                showGridlines :paginator="true" :rows="10" :filters="filters"
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                :rowsPerPageOptions="[5, 10, 25, 50 , 100]"
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords} Departments" responsiveLayout="scroll">

                <Column field="id" :header="$t('Id')" :sortable="true"></Column>
                <Column field="name" :header="$t('Name')" :sortable="true"></Column>
                <Column field="kh_name" :header="$t('english name')" :sortable="true"></Column>
                <Column field="gender" :header="$t('gender')" :sortable="true"></Column>
                <Column field="dob" :header="$t('date of birth')" :sortable="true"></Column>
                <Column field="file" :header="$t('file')" :sortable="true"></Column>
                <Column field="payment_status" :header="$t('payment status')" :sortable="true"></Column>
                <Column field="status" :header="$t('status')" :sortable="true"></Column>
                <Column field="action" :header="$t('Action')" :exportable="false" style="min-width: 8rem">
                    <template #body="slotProps">
                        <Button v-can="'department edit'" :label="$t('Edit')" icon="pi pi-pencil"
                            class="p-button p-button-success mr-2" @click="editDepartment(slotProps.data)" />
                        <Button v-can="'department delete'" :label="$t('Delete')" icon="pi pi-trash"
                            class="p-button p-button-danger" @click="confirmDeleteDepartment(slotProps.data)" />
                    </template>
                </Column>
            </DataTable>

        </div>
    </div>
</template>
<script>
import { FilterMatchMode } from "primevue/api";
import {ref } from 'vue'
export default{
    setup(){
        const filters = ref({
           global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        });
        return {
            filters
        }
    }
}
</script>