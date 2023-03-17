import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

export default function ForeignLangServices() {
    const foreignlang = ref([])
    const foreignlangs = ref([])

    const errors = ref('')
    const router = useRouter()

    const getForeignLangs = async () => {
        let response = await axios.get('/api/foreignlangs')
        foreignlangs.value = response.data.data
    }

    const showForeignLang = async (id) => {
        let response = await axios.get(`/api/foreignlangs/${id}`)
        foreignlang.value = response.data.data
    }

    const storeForeignLang = async (data) => {
        errors.value = ''
        try {
            await axios.post('/api/foreignlangs', data)
            await router.push({
                name: 'foreignlangs'
            })
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value += e.response.data.errors[key][0] + ' ';
                }
            }
        }
    }

    const updateForeignLang = async (id) => {
        errors.value = ''
        try {
            await axios.patch(`/api/foreignlangs/${id}`, foreignlang.value)
            await router.push({
                name: 'provinces'
            })
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value += e.response.data.errors[key][0] + ' ';
                }
            }
        }
    }

    const destroyForeignLang = async (id) => {
        await axios.delete(`/api/foreignlangs/${id}`)
    }

    return {
        errors,
        foreignlang,
        foreignlangs,
        getForeignLangs,
        storeForeignLang,
        showForeignLang,
        updateForeignLang,
        destroyForeignLang,
    }
}
