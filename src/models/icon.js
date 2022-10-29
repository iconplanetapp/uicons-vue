import UiconsException from "../exception"

export default class Icon {
    constructor(iconData) {
        try {
            let i = Icon.validate(iconData)

            this.name        = i[0]
            this.packageName = i[1]
            this.viewBox     = `0 0 ${i[2]} ${i[3]}`
            this.path        = i[4]
        } catch (e) {
            this.name        = null
            this.packageName = null
            this.path        = null
            console.warn(`[@iconplanet/uicons-vue]: ${e.message}`);
        }
        
    }

    static validate(icon) {
        if (!Array.isArray(icon)
            || icon.length !== 5
            || typeof icon[0] !== 'string' // name
            || typeof icon[1] !== 'string' // package name
            || typeof icon[2] !== 'number' // width
            || typeof icon[3] !== 'number' // height
            || typeof icon[4] !== 'string') // path
            throw new UiconsException('Icon format is not supported. Icon = ' + JSON.stringify(icon), 'Invalid icon format')
        else
            return icon
    }
}