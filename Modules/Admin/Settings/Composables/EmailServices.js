import {
    ref
} from 'vue'
import axios from 'axios'
import {
    useRouter
} from 'vue-router'

export default function EmailServices() {
    const email = ref([])
    const errors = ref('')
    const router = useRouter()

    const showEmail = async () => {
        let response = await axios.get(`/api/emails/1`)
        email.value = response.data.data
    }

    const storeEmail = async (data) => {
        errors.value = ''
        try {
            await axios.post('/api/emais', data)
            await router.push({
                name: 'smtps'
            })
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value += e.response.data.errors[key][0] + ' ';
                }
            }
        }
    }

    const updateEmail = async () => {
        errors.value = ''
        try {
            await axios.patch(`/api/emails/1`, email.value)
            await router.push({
                name: 'smtps'
            })
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value += e.response.data.errors[key][0] + ' ';
                }
            }
        }
    }

    return {
        errors,
        email,
        showEmail,
        updateEmail,
        storeEmail
    }
}
