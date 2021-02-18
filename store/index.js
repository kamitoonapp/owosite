export const state = () => ({
    webtoons: [],
    users: [],
    user: null,
    genres: {},
});

export const mutations = {
    setWebtoons(state, webtoons) {
        state.webtoons = webtoons;
    },

    setUsers(state, users) {
        state.users = users;
    },

    setUser(state, user) {
        state.user = user;
    },

    setGenres(state, genres) {
        state.genres = genres;
    },
};

export const getters = {
    getWebtoon(state) {
        return state.webtoons;
    },
};