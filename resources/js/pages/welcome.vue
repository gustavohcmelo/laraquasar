<template>
    <Layout>
        <q-page class="column flex-center">
            <q-card :style="{ width: '500px' }">
                <q-card-section class="text-center">
                    <q-form @submit.prevent="changeName">
                        <q-img :src="logoSrcImage" width="100px"></q-img>
                        <div>
                            <h3 class="q-mt-none">{{ appStore.appName }}</h3>
                            <div>
                                <q-input label="Insert the new name" filled v-model="newAppName" class="q-mb-md"></q-input>
                                <q-btn label="Save Name" @click="changeName" color="primary" class="full-width"></q-btn>
                            </div>
                        </div>
                    </q-form>
                </q-card-section>
            </q-card>
        </q-page>
    </Layout>
</template>
<script setup>
import Layout from "../layouts/MainLayout.vue";
import { useAppStore } from "../stories/AppStore";
import { ref } from 'vue'

const appStore = useAppStore()
const newAppName = ref('')
const logoSrcImage = `${import.meta.env.VITE_APP_URL}/images/logo.svg`
function changeName() {
    appStore.changeAppName(newAppName.value)
    newAppName.value = ''
}
</script>
