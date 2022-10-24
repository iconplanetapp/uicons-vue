import Component from './component.vue'
import Exception from './exception'

export default {
    install(app, config) {
        try {
            // component name
            let componentName = 'iconplanet-uicon'
            if (config.componentName) {
                if (typeof config.componentName === 'string') {
                    componentName = config.componentName
                } else
                    throw new Exception('"componentName" must be a string.', 'Invalid config value')
            }

            app.component(componentName, Component)
        } catch(e) {
            console.warn(`[@iconplanet/uicons-vue]: ${e.message}`);
        }
    }
}