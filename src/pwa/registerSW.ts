import { registerSW } from 'virtual:pwa-register'

export const updateServiceWorker = registerSW({
  onNeedRefresh() {
    console.log('New content is available, please refresh.')
  },
  onOfflineReady() {
    console.log('App is ready to work offline.')
  }
})
