<template>
    <i :class="`ip-${pack}-${name}`"></i>
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
            required: true
        },
        name: {
            type: String,
            required: true
        }
    },
    mounted() {
        this.pack = this.package
    }
}
</script>