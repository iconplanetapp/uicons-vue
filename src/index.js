import WebfontView from './components/webfont-view.vue'
import SvgView from './components/svg-view.vue'
import Library from './models/library'

const detectPreviewType = (config) => {
    const valid = ['webfont', 'svg']
    const def = 'webfont'
    if (config && typeof config == 'object' && config.hasOwnProperty('previewType') && typeof config.previewType == 'string' && valid.includes(config.previewType)) 
        return config.previewType
    else
        return def
}

const detectComponentName = (config) => {
    const def = 'iconplanet-uicon'
    if (config && typeof config == 'object' && config.hasOwnProperty('componentName') && typeof config.componentName == 'string')
        return config.componentName
    else
        return def
}

const detectClassName = (config) => {
    const def = 'ip-uicon'
    if (config && typeof config == 'object' && config.hasOwnProperty('className') && typeof config.componentName == 'string')
        return config.className
    else
        return def
}

const detectLibraryIcons = (config) => {
    const def = []
    if (config && typeof config == 'object' && config.hasOwnProperty('icons') && Array.isArray(config.icons))
        return config.icons
    else
        return def
}

export default {
    install(app, config) {
        try {
            const previewType = detectPreviewType(config)
            const componentName = detectComponentName(config)
            const className = detectClassName(config)

            let $IconPlanet = {
                previewType,
                componentName,
                className,
                library: new Library()
            } 

            // set global component
            // based on previewType
            // 1. webfont
            if (previewType == 'webfont') 
                app.component(componentName, WebfontView)

            // 2. SVG
            else {
                const icons = detectLibraryIcons(config)
                $IconPlanet.library.addAll(icons)
                app.component(componentName, SvgView)
            }

            app.config.globalProperties.$IconPlanet = $IconPlanet

            console.log(`[@iconplanet/uicons-vue]: Installed successfully.`);

        } catch(e) {
            console.warn(`[@iconplanet/uicons-vue]: ${e.message}`);
        }
    }
}