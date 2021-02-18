<template>
  <div>
      <section>
        <b-container fluid>
          <b-row>
            <b-col class="s-title" cols="12">
              <h1>{{$route.path == '/settings' ? 'Vos paramètres de compte' : 'Votre paramètre de mot de passe'}}</h1>
            </b-col>

            <b-col md="2">
              <b-nav class="s-nav">
                <b-nav-item :active="$route.path == '/settings'" to="/settings">Compte</b-nav-item>
                <b-nav-item :active="$route.path == '/settings/password'" to="/settings/password">Mot de passe</b-nav-item>
                <b-nav-item to="/settings/developer" disabled>Developpeur</b-nav-item>
              </b-nav>
            </b-col>

            <b-col>
              	<nuxt-child :user="user" />
            </b-col>
          </b-row>
        </b-container>
      </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: this.$store.state.user,
      form: {
        username: this.$store.state.user.username,
        email: this.$store.state.user.email,
      },
    };
  },
  methods: {
    onSubmit(evt) {
      ect.preventDefault();
    },
  }
};
</script>

<style>
.s-nav {
  width: 100% !important;
  flex-direction: column !important;
}

.s-title {
  padding: 2rem;
}

@media (max-width: 768px) {
  .s-nav {
    width: 100% !important;
    flex-direction: row !important;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
}
</style>