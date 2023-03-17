import {
    ref
} from 'vue'
import axios from 'axios'
import {
    useRouter
} from 'vue-router'

export default function TranslationServices() {
    const translation = ref([])
    const translations = ref([])

    const errors = ref('')
    const router = useRouter()

    const getTranslations = async () => {
        let response = await axios.get('/api/translations')
        translations.value = response.data.data
    }

    const showTranslation = async (id) => {
        let response = await axios.get(`/api/translations/${id}`)
        translation.value = response.data.data
    }

    const storeTranslation = async (data) => {
        errors.value = ''
        try {
            await axios.post('/api/translations', data)
            await router.push({
                name: 'translations'
            })
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value += e.response.data.errors[key][0] + ' ';
                }
            }
        }

    }

    const updateTranslation = async (id) => {
        errors.value = ''
        try {
            await axios.patch(`/api/translations/${id}`, translation.value)
            await router.push({
                name: 'translations'
            })
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value += e.response.data.errors[key][0] + ' ';
                }
            }
        }
    }


    const destroyTranslation = async (id) => {
        await axios.delete(`/api/translations/${id}`)
    }


    return {
        errors,
        translation,
        translations,
        getTranslations,
        storeTranslation,
        showTranslation,
        updateTranslation,
        destroyTranslation,
    }
}
