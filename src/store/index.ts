/* eslint-disable no-undef */
import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import home from './modules/Home';

const store = createStore({
    modules: { home },
    plugins: [createPersistedState()], // 存储全局
});

export default store;
