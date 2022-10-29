import UiconsException from "../exception"
import Icon from "./icon"
import Package from "./package"

export default class Library {
    constructor() {
        this.packages = {}
        this.packages.custom = new Package('custom')
    }

    add(icon) {
        // validate and parse icon
        icon = new Icon(icon)
        
        // create package if not exists
        if (!this.packages.hasOwnProperty(icon.packageName))
            this.packages[icon.packageName] = new Package(icon.packageName)

        // add icon to package icons list
        this.packages[icon.packageName].addIcon(icon)
    }

    addAll(icons) {
        if (typeof icons === 'array')
            throw new UiconsException('Icons must be an array.', 'Invalid icons type')

        icons.forEach(icon => this.add(icon))
    }

    getIcon(name, packageName) {
        if (this.packages.hasOwnProperty(packageName))
            return this.packages[packageName].getIcon(name)
        else 
            return this.packages.custom.getIcon('not-found')
    }
}