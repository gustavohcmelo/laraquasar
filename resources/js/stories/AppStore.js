import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
    state: () =>({
        appName: localStorage.getItem('appName') ? localStorage.getItem('appName') : 'LARAQUASAR'
    }),
    getters: {
        getAppName (state) {
            return state.appName
        }
    },
    actions: {
        changeAppName (newName) {
            this.appName = newName
            localStorage.setItem('appName', newName)
        }
    },
})
