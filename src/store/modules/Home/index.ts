export interface HomeInfo {
    name: string;
}
const state: HomeInfo = {
    name: '',
};

const home = {
    namespaced: true,
    state,
    actions: {},
    mutations: {
        // 设置姓名
        setName: (state: { name: string }, info: any) => {
            state.name = info;
        },
    },
};

export default home;
