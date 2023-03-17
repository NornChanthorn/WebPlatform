<template >
	<Toast />
	<div class="p-fluid flex flex-3 flex-col justify-center items-center my-3">
		<form v-on:submit.prevent="saveEmail">
			<div class="field w-96">
				<label for="smtp_host">Smtp Host</label>
				<InputText name="smtp_host" type="text" v-model="email.smtp_host" required />
			</div>
			<div class="field w-96">
				<label for="smtp_port">Smtp Port</label>
				<InputText name="smtp_port" type="text" v-model="email.smtp_port" required />
			</div>
			<div class="field w-96">
				<label for="smtp_encryption">Encryption</label>
				<InputText name="smtp_encryption" type="text" v-model="email.smtp_encryption" required />
			</div>
			<div class="field w-96">
				<label for="smtp_user">Smpt Email</label>
				<InputText name="smtp_user" type="text" v-model="email.smtp_user" required />
			</div>
			<div class="field w-96">
				<label for="smtp_password">Smpt Password</label>
				<InputText name="smtp_password" type="password" v-model="email.smtp_password" required />
			</div>
			<div class="field w-96">
				<label for="smtp_from">From Email</label>
				<InputText name="smtp_from" type="email" v-model="email.smtp_from" required />
			</div>
			<div class="field w-96">
				<label for="shcool_name">School Name</label>
				<InputText name="school_name" type="text" v-model="email.school_name" required />
			</div>
			<div class="w-96">
				<Button type="submit" label="Save" class="p-button-info" />
			</div>
		</form>
	</div>
</template>

<script setup>
import EmailServices from '../../Composables/EmailServices'
import { onMounted } from 'vue';
import { useToast } from "primevue/usetoast";

const { errors, email, updateEmail, showEmail } = EmailServices()
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
</script>
