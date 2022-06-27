<template>
    <h1 v-if="show">
        Sample Delete Modal 

        <button @click="close">Close</button>
    </h1>
</template>

<script>
export default {
    data() {
        return {
            show: false,
        }
    },
    created() {
        this.$root.$on('show_modal_delete', () => {
            this.showModal();
        })
    },
    methods: {
        showModal() {
            this.show = true;
        },
        close() {
            this.show = false;
        }
    }
}
</script>