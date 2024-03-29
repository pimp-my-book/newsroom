// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import './assets/tailwind.css'
import DefaultLayout from '~/layouts/Default.vue'


export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

    //Setting Up fonts
    head.link.push({
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Kanit|Rubik+Mono+One&display=swap'
    })
  
}
