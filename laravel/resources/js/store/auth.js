const state = {
  user: null
};

const getters = {
  isLoggedIn: state => !!state.user,
  username: state => (state.user ? state.user.name : '')
};

const mutations = {
  setUser(state, user) {
    state.user = user;
  }
};

const actions = {
  async register(context, data) {
    const response = await axios.post('/api/register', data);
    context.commit('setUser', response.data);
  },
  async login(context, data) {
    const response = await axios.post('/api/login', data);
    context.commit('setUser', response.data);
  },
  async logout(context) {
    await axios.post('/api/logout');
    context.commit('setUser', null);
  },
  async currentUser(context) {
    const response = await axios.get('/api/user');
    context.commit('setUser', response.data || null);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
