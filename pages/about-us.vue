<template>
    <main>
        <h1>About Us</h1>
        {{first_name}}

        <input type="text" v-model="form.username" />

        <!-- <ul>
            <li v-for="(user, i) in users" :key="i">{{user.login}}</li>
        </ul> -->

        <div class="grid text-sm lg:text-xl grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 xl:grid-cols-12">
            <div class="flex-1" v-for="d in 12" :key="d">{{d}}</div>
        </div>
    </main>
</template>

<script>
export default {
    data() {
        return {
            form: {
                username: '',
                password: '',
            },
        }
    },
    computed: {
        first_name() {
            return this.$store.state.first_name;
        },
        users() {
            return this.$store.state.users;
        }
    },
    async created() {
        ///MUTATION
        //correct
        this.$store.commit('UPDATE_FIRSTNAME', 'JL')
        // //wrong
        // this.$store.state.first_name = 'Jl1';


        ///ACTIONS
        await this.$store.dispatch('LOAD_USERS');
    },
    // methods: {
    //     async save() {
    //         await this.$axios.post('/login', this.form)
    //     }
    // },
    // watch: {
    //     "form.username"(newVal, old) {
    //         console.log(newVal, old);
    //     }
    // }

    // /**
    //  * LIFECYCLE
    //  */
    // created() {
    //     //CALL API
    // },
    // mounted() {
    //     //CALL API
    //     //BEST WAY TO RENDER UI
    // },
    // unmounted() {
        
    // },
    // beforeDestroy() {

    // },
    // destroyed() {

    // }
}
</script>