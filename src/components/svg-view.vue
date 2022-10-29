<template>
    <svg
        v-if="icon"
        class="ip-uicon"
        :style="style"
        :data-name="icon.name"
        :data-package="icon.packageName"
        :viewBox="icon.viewBox">
        <path :d="icon.path"/>
    </svg>
</template>

<script>
import mixins from '../mixins'
export default {
    data() {
        return {
            icon: null
        }
    },
    mixins: [mixins],
    props: {
        name: {
            type: String,
            required: true,
        },
        package: {
            type: String,
            default: "custom"
        },
    },
    mounted() {
        this.icon = this.$IconPlanet.library.getIcon(this.name, this.package)
    }
}
</script>