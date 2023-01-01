// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: "Nuxt dojo",
            meta: [
                {
                    name: 'description',
                    content: 'This app was built by caxton muthoni'
                }
            ],

            link: [
                {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/icon?family=Material+Icons"
                }
            ]
        }
    },
    modules: ['@nuxtjs/tailwindcss']
})
