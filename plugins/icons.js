import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faCheckCircle,
    faCogs,
    faPen,
    faStar,
    faThumbsUp,
    faTrashAlt,
    faPlusCircle,
} from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faDiscord, faInstagram, faPinterest, faYoutube, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
//import {} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(
    faCheckCircle,
    faCogs,
    faTwitter,
    faDiscord,
    faInstagram,
    faPinterest,
    faYoutube,
    faFacebook,
    faPen,
    faStar,
    faThumbsUp,
    faTrashAlt,
    faTimesCircle,
    faPlusCircle,
);

Vue.component('font-awesome-icon', FontAwesomeIcon)