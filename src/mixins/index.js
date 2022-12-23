export default {
    computed: {
        classes() {
            var default_class_name = this.$IconPlanet.className
            return [
                default_class_name,
            ]
        },
        style() {
            let style = {
                display: 'inline-block',
                verticalAlign: this.verticalAlign,
                height: '1em',
            }
            
            if (this.display == 'block') {
                style.display = 'block'
                style.width = '100%'
                style.height = '100%'
            }

            if (this.width)
                style.width = this.width

            if (this.height)
                style.height = this.height

            if (this.translateX || this.translateY || this.rotate || this.scale) {
                let transform = ''

                if (this.translateX || this.translateY)
                    transform = `translate(${this.translateX}, ${this.translateY})`

                if (this.rotate)
                    transform += ` rotate(${this.rotate})`

                if (this.scale)
                    transform += ` scale(${this.scale})`

                style.transform = transform
            }

            if (this.color) {
                style.fill = this.color
                style.color = this.color
            }

            if (this.margin)
                style.margin = this.margin

            if (this.marginLeft)
                style.marginLeft = this.marginLeft

            if (this.marginRight)
                style.marginRight = this.marginRight

            if (this.marginTop)
                style.marginTop = this.marginTop

            if (this.marginBottom)
                style.marginBottom = this.marginBottom

            return style
        }
    },
    props: {
        display: {
            type: String,
            default: "inline-block"
        },
        width: {
            type: String,
            default: ''
        },
        height: {
            type: String,
            default: ''
        },
        color: {
            type: String,
            default: ''
        },
        verticalAlign: {
            type: String,
            default: 'middle'
        },
        translateX: {
            type: String,
            default: ''
        },
        translateY: {
            type: String,
            default: ''
        },
        rotate: {
            type: String,
            default: ''
        },
        scale: {
            type: String,
            default: ''
        },
        margin: {
            type: String,
            default: ''
        },
        marginTop: {
            type: String,
            default: ''
        },
        marginLeft: {
            type: String,
            default: ''
        },
        marginRight: {
            type: String,
            default: ''
        },
        marginBottom: {
            type: String,
            default: ''
        },
    }
}