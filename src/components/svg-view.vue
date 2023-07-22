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
    computed: {
        icon() {
            return this.$IconPlanet?.library?.getIcon(this.name, this.package)
        }
    }
}
</script>