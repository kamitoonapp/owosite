export const state = () => ({
    webtoons: [],
    users: [],
});

export const mutations = {
    setWebtoons(state, webtoons) {
        state.webtoons = webtoons;
    },

    setUsers(state, users) {
        state.users = users;
    },
};