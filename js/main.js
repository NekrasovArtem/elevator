const { createApp } = Vue

const app = {
    data() {
        return {
            message: 'Welcome! There will be an elevator here soon.',
        }
    },
}

createApp(app).mount('#app')