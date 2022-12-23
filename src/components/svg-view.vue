<template>
    <svg
        v-if="icon"
        :class="classes"
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
            pack: '',
            icon: null
        }
    },
    mixins: [mixins],
    props: {
        package: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true,
        },
    },
    mounted() {
        this.icon = this.$IconPlanet.library.getIcon(this.name, this.package)
    }
}
</script>