import {
    ref
} from 'vue'
import axios from 'axios'

export default function PermissionServices() {
    const permission = ref([])
    const permissions = ref([])
    const Allpermissions = ref([])

    const errors = ref('')

    const getPermissions = async () => {
        let response = await axios.get('/api/permissions')
        permissions.value = response.data.data
        for(let i=0;i<permissions.value.length;i++){
            Allpermissions.value.push({
                name : permissions.value[i].name
            })
        }
    }

    return {
        errors,
        permission,
        Allpermissions,
        getPermissions,
    }
}
