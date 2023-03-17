import {
    ref
} from 'vue'
import axios from 'axios'
import {
    useRouter
} from 'vue-router'

export default function RoleServices() {
    const role = ref([])
    const roles = ref([])

    const errors = ref('')
    const router = useRouter()

    let permissions = ref([])
    let Allroles = ref([])
    
    const getRoles = async () => {
        let response = await axios.get('/api/roles')
        roles.value = response.data.data
        for (let i = 0; i < roles.value.length; i++) {
            roles.value[i].permissions = []
            let res = await axios.get(`/api/roles/${roles.value[i].id}`)
            permissions = res.data.data
            for (let k = 0; k < permissions.length; k++) {
                roles.value[i].permissions.push({
                    name: permissions[k].name
                })
            }
        }
    }

    //use in Users.vue
    const getAllRoles = async () => {
        let response = await axios.get('/api/roles')
        roles.value = response.data.data
        for(let i=0;i<roles.value.length;i++){
            Allroles.value.push({
                name : roles.value[i].name
            })
        }
    }

    const showRole = async (id) => {
        let response = await axios.get(`/api/roles/${id}`)
        role.value = response.data.data
    }

    const storeRole = async (data) => {
        errors.value = ''
        try {
            await axios.post('/api/roles', data)
            await router.push({
                name: 'roles'
            })
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value += e.response.data.errors[key][0] + ' ';
                }
            }
        }

    }

    const updateRole = async (id) => {
        errors.value = ''
        try {
            await axios.patch(`/api/roles/${id}`, role.value)
            await router.push({
                name: 'roles'
            })
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value += e.response.data.errors[key][0] + ' ';
                }
            }
        }
    }

    const destroyRole = async (id) => {
        await axios.delete(`/api/roles/${id}`)
    }

    return {
        errors,
        role,
        roles,
        Allroles,
        getRoles,
        storeRole,
        showRole,
        updateRole,
        destroyRole,
        getAllRoles
    }
}
