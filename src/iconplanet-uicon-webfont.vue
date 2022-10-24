<template>
    <i v-if="type == 'webfont'" :class="`ip-${pack}-${name}`"></i>
</template>

<script>
export default {
    data() {
        return {
            pack: ''
        }
    },
    props: {
        package: {
            type: String,
            default: null
        },
        name: {
            type: String,
            required: true
        }
    },
    mounted() {
        this.pack = this.package ? this.package : this.$IconPlanet.defaultPackage
    }
}
</script>