<template>
  <div>
    <!-- <Navbar /> -->
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-navbar-brand to="/">KamiToon</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Accueil</b-nav-item>
          <b-nav-item to="/webtoons">Webtoons</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">

          <!--<b-nav-form style="width: 100%">
            <b-form-input size="sm" placeholder="🔎 Rechercher" style="width: 100%" />
          </b-nav-form>-->

          <div v-if="!$store.state.user">
            <b-button class="login-btn" to="/login">Connexion</b-button>
          </div>

          <div v-else>
            <b-nav-item-dropdown size="lg" variant="link" toggle-class="text-decoration-none" no-caret>
              <template #button-content>
                <div class="nav-login">
                  <div class="avatar-elipse" :style="`background: url('/example/${$store.state.user.avatar}') center center no-repeat; background-size: cover;`" />
                  <div style="font-family: -webkit-pictograph;font-size: large;">{{$store.state.user.username}}</div>
                </div>
              </template>
              <b-dropdown-item to="/users/@me">Profil</b-dropdown-item>
              <b-dropdown-item to="/webtoons/add">Ajouter un webtoon</b-dropdown-item>
              <b-dropdown-item to="/settings">Settings</b-dropdown-item>
              <b-dropdown-divider />
              <b-dropdown-item @click="logout">Deconnexion</b-dropdown-item>
            </b-nav-item-dropdown>
          </div>

        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div class="principal">
      <Nuxt class="k-content" />
      <footer>
        2021 &copy; - Kamitoon
      </footer>
    </div>
  </div>
</template>

<script>
import * as jsCookie from 'js-cookie';
import {author} from './../props/user';

export default {
  data() {
    
    const authorOther = {username: '^^', discriminator: '0000', id: '159419564981941', avatar: 'uwu.jpg'}

    const comments = [
      {
        author,
        content: 'Hello world',
        timestamp: Date.now(),
        spoil: true,
        id: '57637653573'
      },
      {
        authorOther,
        content: 'uwu',
        timestamp: Date.now() + 50,
        spoil: false,
        id: '853437573564378354'
      },
      {
        author,
        content: 'UwU',
        timestamp: Date.now() + 1000,
        spoil: false,
        id: '3783857468654787457'
      },
    ];

    this.$store.commit('setWebtoons', [
        {
          name: 'isma',
          genre: ['k-0'],
          preface: '_a.png',
          synopsis: 'hdofhguiosdhguofhdgbohqfgvfiqohgneorfihgqoijiqoshdgnfdjihjqfepoigbfnjioqnjbdqopbnifdhndjinogjdhsoijvfripqngof ngoi ghniojfoshngor jgijgiosgjn rijisj,giorj ifji^p fjip jgiofg',
          id: '15619801056159',
          rate: 4.5,
          forAdult: false,
          violence: false,
          acceptCGU: false,
          like: Date.now(),
          comments,
          seasons: [
            {
              name: 'Hey Hey',
              comments,
              chapters: [
                {
                  name: 'Ok MEC',
                  preface: '_a.png',
                  images: ['001.jpg', '002.jpg', '003.jpg', '004.jpg', '005.jpg', '006.jpg', '007.jpg'],
                  musics: null,
                  like: Date.now(),
                },
                {
                  name: 'AaAaAaAa',
                  preface: '_b.jpg',
                  images: ['001.jpg', '002.jpg', '003.jpg', '004.jpg', '005.jpg', '006.jpg', '007.jpg'],
                  musics: {
                    
                  },
                  like: 1541556,
                }
              ],
            },

            {
              name: 'Mimamou',
              comments,
              chapters: [
                {
                  name: 'tic tac toe',
                  preface: '_c.png',
                  images: ['001.jpg', '002.jpg', '003.jpg', '004.jpg', '005.jpg', '006.jpg', '007.jpg'],
                  musics: null,
                  like: 548648651,
                },
                {
                  name: 'tok te',
                  preface: '_d.jpg',
                  images: ['001.jpg', '002.jpg', '003.jpg', '004.jpg', '005.jpg', '006.jpg', '007.jpg'],
                  musics: null,
                  like: 516,
                },
                {
                  name: 'hohi',
                  preface: '0.png',
                  images: ['001.jpg', '002.jpg', '003.jpg', '004.jpg', '005.jpg', '006.jpg', '007.jpg'],
                  musics: null,
                  like: 1000000
                }
              ],
            },
          ],
        },
    ]);

    this.$store.commit('setUsers', [
      author,
      authorOther,
    ]);

    this.$store.commit('setGenres', {
        'k-0': 'Action',
        'k-1': 'Romance',
        'k-2': 'Comedie',
        'k-3': 'Slice of life',
      });
    return {};
  },
  methods: {
    logout() {
      jsCookie.remove('_token');
      this.$store.commit('setUser', null);
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

.k-content {
  min-height: fit-content;
}

.principal {
  min-height: 100vh;
  display: grid;
  flex-direction: column;
}

.login-btn {
  border-radius: 10rem;
  margin: 0 0754 0 1rem;
  padding: 0.375rem 1.75rem;
}

footer {
  bottom: 0;
  position: relative;
  background-color: #223852;
  padding: 1rem;
  min-width: 100%;
  text-align: center;
  align-self: flex-end;
}

.avatar-elipse {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  margin: 0 .8rem 0 .8rem;
}

.nav-login {
  display: flex;
  align-items: center;
}

@media (max-width: 991px) {
  .navbar {
    padding: 0.2rem 2rem;
  }
}
</style>