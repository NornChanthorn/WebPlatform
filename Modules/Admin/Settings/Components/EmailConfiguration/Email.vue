<template>
    <div class="card">
        <TabView>
            <TabPanel :header="$t('SMTP Setting')">
                <Smtp />
            </TabPanel>
            <TabPanel :header="$t('Confirm Email Template')">
                <ConfirmEmailTemplate />
            </TabPanel>
            <TabPanel :header="$t('Reject Email Template')">
                <RejectEmailTemplate />
            </TabPanel>
            <TabPanel :header="$t('Approve Email Template')">
                <ApproveEmailTemplate />
            </TabPanel>
        </TabView>
    </div>
</template>

<script>
import Smtp from '../../Components/EmailConfiguration/Smtp.vue';
import ConfirmEmailTemplate from '../../Components/EmailConfiguration/ConfirmEmailTemplate.vue';
import RejectEmailTemplate from '../../Components/EmailConfiguration/RejectEmailTemplate.vue';
import ApproveEmailTemplate from '../../Components/EmailConfiguration/ApproveEmailTemplate.vue';

export default {
    components: {
        Smtp,
        ConfirmEmailTemplate,
        RejectEmailTemplate,
        ApproveEmailTemplate
    },
}
</script>
