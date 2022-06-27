<template>
    <div>
        <h1>My Modal</h1>

        <ModalConfirm />
        <ModalDelete />

        <button @click="showModal">Show Modal</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    methods: {
        showModal() {
            //trigger
            this.$root.$emit('show_modal_confirm');
            this.$root.$emit('show_modal_delete');
        }
    }
}
</script>