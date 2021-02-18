import {author} from './../props/user';

function parseCookie(str) {
    return Object.fromEntries(str.split(/\;/g).map((v) => v.trim().split('=')))
};

export default function(context) {
    if (!(process.server ? context.req.headers['cookie'] : document.cookie)) return;
    
    const cookie = parseCookie(process.server ? context.req.headers['cookie'] : document.cookie);
    
    if (!cookie) return;
    if (!cookie._token) return;
    if (cookie._token != author.token) return;

    context.app.store.commit('setUser', author);
};