import WebFontComponent from './iconplanet-uicon-webfont.vue'
import SvgComponent from './iconplanet-uicon-svg.vue'
import Exception from './exception'

export default {
    install(app, config) {
        try {
            let $IconPlanet = {
                icons: [],
                packages: [],
                defaultPackage: ''
            }
            
            // component name
            let componentName = 'iconplanet-uicon'
            if (config.componentName) {
                if (typeof config.componentName === 'string') {
                    componentName = config.componentName
                } else
                    throw new Exception('"componentName" must be a string.', 'Invalid config value')
            }

            // preview type
            let previewType = 'webfont';
            if (config.previewType) {
                if (['webfont', 'svg'].includes(config.previewType)) 
                    previewType = config.previewType
                else
                    throw new Exception('Please select a valid "previewType". It could be on of: "webfont" or "svg".', 'Invalid config value')
            }

            if (type == 'webfont') {
                let packages = []
                const validPackages = ['*', 'all', 'brands', 'awesome-regular', 'ar']
                if (config.packages) {
                    if (Array.isArray(config.packages)) {
                        config.packages.map(i => {
                            i = i === '*' ? 'all' : i
                            if (validPackages.includes(i))
                                packages.push(i)
                            else 
                                new Exception(`"packages" item "${i}" is not supported on this version.`, 'Invalid config value')
                        })
                    } else
                        throw new Exception('"packages" must be an array.', 'Invalid config value')
                }

                if (!packages.length)
                    packages = ['all']

                $IconPlanet.packages = packages

                let defaultPackage = packages[0]
                if (config.defaultPackage) {
                    config.defaultPackage = config.defaultPackage === '*' ? 'all' : config.defaultPackage
                    if (validPackages.includes(config.defaultPackage))
                        defaultPackage = config.defaultPackage
                    else
                        throw new Exception(`"defaultPackage" "${defaultPackage}" is not supported on this version.`, 'Invalid config value')
                }

                $IconPlanet.defaultPackage = defaultPackage

                packages.map(i => {
                    try {
                        import('@iconplanet/uicons/css/ip-' + i)
                    } catch (e) {
                        throw new Exception(`Webfont stylesheet file for "${i}" package, did not exist.`, 'File not found')
                    }
                })

                app.component(componentName, WebFontComponent)
            } else {
                app.component(componentName, SvgComponent)
            }

            app.config.globalProperties.$IconPlanet = $IconPlanet
            
        } catch(e) {
            console.warn(`[@iconplanet/uicons-vue]: ${e.message}`);
        }
    }
}