# <img src="https://iconplanet.app/images/logo.svg" height="28" style="vertical-align:middle"> IconPlanet &nbsp;<img src="https://iconplanet.app/images/uicons-logo.svg" height="28" style="vertical-align:middle">

Vue.js (v2 and v3) components, Created to make [IconPlanet Uicons](https://github.com/iconplanetapp/uicons) easier to use in [Vue.js](https://vuejs.org/) web applications. 

# Get Started

## Installation

Install latest version of IconPlanet uicons vue package with ```npm``` package manager:

``` js
npm i @iconplanet/uicons-vue
```

## Add to project

Simply import and add our vue plugin into the project:

``` js
import { createApp } from 'vue'
import IconPlanet from '@iconplanet/uicons-vue'
import App from 'app.vue'

const app = createApp(App)

// Add IconPlanet plugin to your Vue app
app.use(IconPlanet, {
  // customize component name. 
  // Default is : 'iconplanet-uicon'
  componentName: 'uicon', 
  // select preview type from 'webfont' or 'svg' mode
  // Default is: 'webfont'
  previewType: 'webfont',
  // select packages you want to use here
  packages: ['brands', 'awesome-regular'], 
  // select default package if not select any package component will use this package as default. 
  // Default is: first package in "packages" config item
  defaultPackage: 'awesome-regular' 
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

    <!-- add uicons -->
    <uicon package="brands" name="vuejs"/>

    <!-- with default component name -->
    <iconplanet-uicon package="ar" name="user"/>

    
    <!-- icon with default package name. default is 'awesome-regular' package here! -->
    <iconplanet-uicon name="home"/>
  <div>
</template>

```