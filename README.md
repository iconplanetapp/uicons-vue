# <img src="https://iconplanet.app/images/logo.svg" height="28" style="vertical-align:middle"> IconPlanet &nbsp;<img src="https://iconplanet.app/images/uicons-logo.svg" height="28" style="vertical-align:middle">

## Source and search

You can find thousands uicon in [IconPlanet website](https://iconplanet.app/). 

## About

Vue.js V3 components, Created to make [IconPlanet Uicons](https://github.com/iconplanetapp/uicons) easier to use in [Vue.js](https://vuejs.org/) web applications. 

# Get Started

## Installation

Install latest version of IconPlanet uicons vue package with ```npm``` package manager:

``` js
npm i @iconplanet/uicons-vue
```

## Dependencies

This package need to installed ```@iconplanet/uicons``` package as dependency:

``` js
npm i @iconplanet/uicons
```

You can find our ```@iconplanet/uicons``` package on ```npm``` from link [here]([https](https://www.npmjs.com/package/@iconplanet/uicons)).

Also mention that need to install ```Vue.js V3``` to use this plugin.

# Add to project

Simply import and add our vue plugin into the project. Only check config you prefer to use and get start to use.

## Preview types

## 1. Webfont uicons

In this type, vue components will render ```<i class="ip-brands-iconplanet"></i>``` tags with certain class names to show your Uicons on browser.

**Make sure import stylesheets** for your selected uicon packages from ```@iconplanet/uicons```.

You can find more about how to import webfont stylesheets from [npm](https://www.npmjs.com/package/@iconplanet/uicons) or [GitHub](https://github.com/iconplanetapp/uicons)

``` js
// --> app.js

import { createApp } from 'vue'
import IconPlanet from '@iconplanet/uicons-vue'
import App from 'app.vue'
import '@iconplanet/uicons/css/ip-brands.css'
import '@iconplanet/uicons/css/ip-awesome-regular.css'

const app = createApp(App)

// Add IconPlanet plugin to your Vue app
app.use(IconPlanet, {
  // Customize component name. 
  // Default is : 'iconplanet-uicon'
  componentName: 'uicon', 

  // Set preview type to webfont
  // Default is -> webfont
  previewType: 'webfont', 
})

app.mount('#app')
```

## 2. SVG uicons

This type will render ```<svg>``` tags with your icons data.

**Note:** SVG preview type could **minimize your uicons total size of data** and only import exact uicons data you need to use in your project. Also, you don't need to import ant ```.css``` file to use this method.

First import plugin and create an ```index.js``` file inside ```/uicons``` directory in root of your project.

Then import exact Uicons you need to use in your Vue web application here and export all of them as an array:

``` js
// --> /uicons/index.js

import { IpInstagram } from '@iconplanet/uicons/icons/brands'
import { IpVuejs as Vuejs } from '@iconplanet/uicons/icons/brands'

export default [IpInstagram, Vuejs]
```

Now your ```app.js``` could be like this:

``` js
// --> app.js

import { createApp } from 'vue'
import IconPlanet from '@iconplanet/uicons-vue'
import App from 'app.vue'
import uicons from './uicons'

const app = createApp(App)

// Add IconPlanet plugin to your Vue app
app.use(IconPlanet, {
  // Customize component name. 
  // Default is : 'iconplanet-uicon'
  componentName: 'uicon', 

  // Set preview type to svg
  // Default is -> webfont
  previewType: 'svg', 

  // pass all your uicons here to use in plugin components
  icons: uicons
})

app.mount('#app')
```

## Add uicons

Simply add icons with passing uicons package name and icon name as props on selected component name in plugin config object:

``` js
// --> App.vue

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

# Custom styles

You can customize your uicon component render result with passing props to it.

There is some useful props can use as props:

``` js
// --> App.vue

<template>
  <div>
    <h1>My Vue.js Application</h1>

    <!-- transform props -->
    <iconplanet-uicon package="brands" name="vuejs" scale="2" translateX="10px" translateY="-5px" rotate="10deg"/>

    <!-- color and margins -->
    <!-- You can use single margin prop or directional margins like below -->
    <iconplanet-uicon package="awesome-regular" name="user" color="#ff5252" margin-left="10px" margin="10px 0" margin-top="5px"/>

  <div>
</template>
```

# Custom class name

Simply can change component default class name from ```ip-uicon``` to everything you want, just pass ```className``` in your plugin config at plugin use method:

``` js
// --> app.js

import { createApp } from 'vue'
import IconPlanet from '@iconplanet/uicons-vue'
import App from 'app.vue'
import uicons from './uicons'

const app = createApp(App)

// Add IconPlanet plugin to your Vue app
app.use(IconPlanet, {
  // Customize component name. 
  // Default is : 'iconplanet-uicon'
  componentName: 'uicon', 

  // Set components default class name
  // default is -> ip-uicon
  className: 'app-uicon'
})

app.mount('#app')
```

# Premium Uicon packages

All Uicons packages published on ```@iconplanet/uicons``` are Free licensed ones.

If you want to use our ```Premium Uicon Packages``` you need to download them directly from [IconPlanet website](https://iconplanet.app/), then add files in your project and import icons and stylesheets manualy.

Other steps are completly simular to API explaind in this documentation.

# Changelog

## 1.1.3

Make svg view and webfont view dynamic when app change [name] or [package] props of each icon. 

## 1.1.2

upgrade to vue 3 🎉