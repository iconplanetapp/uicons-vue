<template>
    <i 
        v-if="pack && name"
        :class="classes"
        :data-name="name"
        :data-package="pack"
        :style="style">
    </i>
</template>

<script>
import Package from '../models/package'
import mixins from '../mixins'
export default {
    data() {
        return {
            pack: ''
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
            required: true
        }
    },
    mounted() {
        this.pack = Package.validate(this.package)
    }
}
</script>