<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-navbar-brand to="/">KamiToon</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Accueil</b-nav-item>
          <b-nav-item to="/webtoons">Webtoons</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">

          <b-nav-form>
            <b-form-input size="sm" placeholder="🔎 Rechercher"></b-form-input>
          </b-nav-form>

          <b-button class="login-btn">Connexion</b-button>

        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <Nuxt />
    <footer>
      <!--<div class="align-middle k-footer-main">
        <b-container fluid>
          <b-row>
            <b-col>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse assumenda harum expedita, nobis asperiores voluptas deleniti iusto quisquam quia nemo incidunt vel repudiandae est culpa exercitationem quidem, porro maiores ducimus.
            </b-col>
            <b-col class="text-center">
                <b-nav vertical class="w-25">
                  <b-nav-item active>Active</b-nav-item>
                  <b-nav-item>Link</b-nav-item>
                  <b-nav-item>Another Link</b-nav-item>
                  <b-nav-item disabled>Disabled</b-nav-item>
                </b-nav>
            </b-col>
            <b-col class="text-center">
                <b-nav vertical class="w-25">
                  <b-nav-item active>Active</b-nav-item>
                  <b-nav-item>Link</b-nav-item>
                  <b-nav-item>Another Link</b-nav-item>
                  <b-nav-item disabled>Disabled</b-nav-item>
                </b-nav>
            </b-col>
          </b-row>
        </b-container>  
      </div>-->
      <div class="k-footer-secondary text-center" style="padding: 1rem;">
        2021 &copy; - Kamitoon
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    const author = {username: 'shaynlink', discriminitator: '0000', id: '45485418549594165', avatar: 'me.png'};

    this.$store.commit('setWebtoons', [
        {
          name: 'isma',
          genre: ['k-0'],
          preface: '_a.png',
          id: '15619801056159',
          rate: 4.5,
          like: Date.now(),
          comments: [
            {
              author,
              content: 'Hello world',
              timestamp: Date.now(),
              spoil: true,
            },
          ]
        },
    ]);

    this.$store.commit('setUsers', [
      author,
    ]);
    return {};
  },
};
</script>

<style>
.login-btn {
  border-radius: 10rem;
  margin: 0 0 0 1rem;
  padding: 0.375rem 1.75rem;
}

.k-footer-main {
  background-color: #1e3147;
}

.k-footer-secondary {
  background-color: #223852;;
}
</style>