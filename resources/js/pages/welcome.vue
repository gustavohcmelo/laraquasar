<template>
    <Layout>
        <q-page class="column flex-center">
            <q-card :style="{ width: '500px' }">
                <q-card-section>
                    <q-form @submit.prevent="changeName">
                        <div  class="text-center">
                            <h3>{{ appStore.appName }}</h3>
                            <div>
                                <q-input label="Qual nome deseja ?" filled v-model="newAppName" class="q-mb-md"></q-input>
                                <q-btn label="salvar nome" @click="changeName" color="primary" class="full-width"></q-btn>
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

function changeName() {
    appStore.changeAppName(newAppName.value)
}
</script>
