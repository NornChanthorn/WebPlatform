import {
    ref
} from 'vue'
import axios from 'axios'
import {
    useRouter
} from 'vue-router'

export default function UserServices() {

    const user = ref([])
    const users = ref([])

    const errors = ref('')
    const router = useRouter()

    let roles = ref([])

    const getUsers = async () => {
        let response = await axios.get('/api/users')
        users.value = response.data.data
        for (let i = 0; i < users.value.length; i++) {
            users.value[i].roles = []
            let res = await axios.get(`/api/users/${users.value[i].id}`)
            roles = res.data.data
            for (let k = 0; k < roles.length; k++) {
                users.value[i].roles.push({
                    name: roles[k].name
                })
            }
        }
    }

    const showUser = async (id) => {
        let response = await axios.get(`/api/users`)
        user.value = response.data.data
    }

    const storeUser = async (data) => {
        errors.value = ''
        try {
            await axios.post('/api/users', data)
            await router.push({
                name: 'users'
            })
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value += e.response.data.errors[key][0] + ' ';
                }
            }
        }
    }

    const updateUser = async (id) => {
        errors.value = ''
        try {
            await axios.patch(`/api/users/${id}`, user.value)
            await router.push({
                name: 'users'
            })
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value += e.response.data.errors[key][0] + ' ';
                }
            }
        }
    }

    const destroyUser = async (id) => {
        await axios.delete(`/api/users/${id}`);
    }

    return {
        errors,
        user,
        users,
        getUsers,
        storeUser,
        showUser,
        updateUser,
        destroyUser,
    }
}
