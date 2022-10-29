import Icon from './icon'
import UiconsException from '../exception'

export default class Package {
    constructor(name) {
        this.name = Package.validate(name)
        this.icons = {}
    }

    addIcon(icon) {
        if (!icon instanceof Icon) 
            throw new UiconsException('Icon must be an instance of Icon class', 'Invalid icon format')

        this.icons[icon.name] = icon
    }

    removeIcon(iconName) {
        if (this.icons.hasOwnProperty(iconName))
            delete this.icon[iconName]
    }

    getIcon(name) {
        return this.icons.hasOwnProperty(name) ? this.icons[name] : null
    }

    static validate(name) {
        const equals = {
            ar: 'awesome-regular',
            al: 'awesome-light',
            at: 'awesome-thin',
            as: 'awesome-solid',
        }

        const valid = ['brands', 'awesome-regular', 'awesome-light', 'awesome-thin', 'awesome-solid', 'custom']

        if (!name || typeof name != 'string')
            throw new UiconsException('Package name must be a string. name = ' + name, 'Invalid package name')

        name = equals.hasOwnProperty(name) ? equals[name] : name
        
        if (!valid.includes(name))
            throw new UiconsException('Package name is not supported. name = ' + name, 'Invalid package name')

        return name
    }
}