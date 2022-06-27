<template>
    <main>
        <h1>About Us</h1>
        <input type="text" v-model="form.username" />
        Value: {{form.username}}

        <button @click="save">Save</button>
    </main>
</template>

<script>
export default {
    data() {
        return {
            form: {
                username: '',
                password: '',
            }
        }
    },
    methods: {
        async save() {
            await this.$axios.post('/login', this.form)
        }
    }
}
</script>