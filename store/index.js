export const state = () => ({
    first_name: '',
    users: [],
})
  
export const mutations = {
    UPDATE_FIRSTNAME(state, payload) {
        state.first_name =  payload;
    },
    UPDATE_USERS(state, payload) {
        state.users =  payload;
    },
}

export const actions = {
    async LOAD_USERS(context) {
        await this.$axios.get('https://api.github.com/users')
                .then(res => {
                    const { data } = res;
                    context.commit('UPDATE_USERS', data)
                })
                .catch(err => {
                    console.error(err);
                })
    }
}