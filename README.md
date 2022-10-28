# <img src="https://iconplanet.app/images/logo.svg" height="28" style="vertical-align:middle"> IconPlanet &nbsp;<img src="https://iconplanet.app/images/uicons-logo.svg" height="28" style="vertical-align:middle">

## Source and search

You can find thousands uicon in [IconPlanet website](https://iconplanet.app/). 

## About

Vue.js (v2 and v3) components, Created to make [IconPlanet Uicons](https://github.com/iconplanetapp/uicons) easier to use in [Vue.js](https://vuejs.org/) web applications. 

# Get Started

## Installation

Install latest version of IconPlanet uicons vue package with ```npm``` package manager:

``` js
npm i @iconplanet/uicons-vue
```

## Add to project

Simply import and add our vue plugin into the project:

make sure import stylesheets for your selected uicon packages from ```@iconplanet/uicons```.

You can find more about how to import webfont stylesheets from [npm](https://www.npmjs.com/package/@iconplanet/uicons) or [GitHub](https://github.com/iconplanetapp/uicons)

``` js
import { createApp } from 'vue'
import IconPlanet from '@iconplanet/uicons-vue'
import App from 'app.vue'
import '@iconplanet/uicons/css/ip-brands.css'
import '@iconplanet/uicons/css/ip-awesome-regular.css'

const app = createApp(App)

// Add IconPlanet plugin to your Vue app
app.use(IconPlanet, {
  // customize component name. 
  // Default is : 'iconplanet-uicon'
  componentName: 'uicon', 
})

app.mount('#app')
```

## Add uicons

Simply add icons with passing uicons package name and icon name as props on selected component name in plugin config object:

``` js
// App.vue v3

<template>
  <div>
    <h1>My Vue.js Application</h1>

    <!-- add uicons / custom component name -->
    <uicon package="brands" name="vuejs"/>

    <!-- add uicons / default component name -->
    <iconplanet-uicon package="awesome-regular" name="user"/>

  <div>
</template>
```