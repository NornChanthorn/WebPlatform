<template>
    <Toast />
    <div class="my-3 mx-24">
        <div class="p-fluid formgrid">
            <div class="field">
                <label for="subject" class="mr-3"> {{ $t('Subject') }} </label>
                <InputText id="subject" v-model="email.reject_subject" class="w-96 mr-3 mb-3" />
            </div>
            <div class="field">
                <label for="message"> {{ $t('Message') }} </label>
                <Editor id="message" v-model="email.reject_message" editorStyle="height: 320px" />
            </div>
        </div>
        <div class="items-center justify-center flex flex-col my-3">
            <Button type="submit" class="w-96" @click="saveEmail()" label="Save" />
        </div>
    </div> ​​​​​​​​
</template>

<script>
import { onMounted } from 'vue';
import EmailServices from '../../Composables/EmailServices'
import { useToast } from "primevue/usetoast";

export default {
    setup() {
        const { email, updateEmail, showEmail } = EmailServices()
        const toast = useToast();
        onMounted(() => showEmail())
        const saveEmail = async () => {
            await updateEmail()
            if (errors.value !== '') {
                toast.add({ severity: "error", summary: "Error", detail: errors, life: 5000, });
            }
            else {
                toast.add({ severity: "success", summary: "Successful", detail: "SMTP Setting updated successfully", life: 3000, });
            }
        }
        return { email, saveEmail }
    }
}
</script>


