<template>
  <div>
      <section>
        <b-container fluid>
          <b-row>
            <b-col sm="12">
              <b-form @submit="onSubmit" >
                <b-form-group id="input-group-1" label="Votre pseudo:" label-for="input-1">
                  <b-form-input
                    id="input-1"
                    v-model="form.username"
                    placeholder="Entrée votre pseudo"
                    required
                  />
                </b-form-group>

                <b-form-group
                  id="input-group-2"
                  label="Votre email:"
                  label-for="input-2"
                >
                  <b-form-input
                    id="input-2"
                    v-model="form.email"
                    type="email"
                    placeholder="Entrée votre email"
                    required
                  ></b-form-input>
                </b-form-group>


                <b-button type="submit" variant="secondary">Enregistrer</b-button>
              </b-form>
            </b-col>

            <b-col class="s-imgs">
                <b-row class="s-imgs-wrapper">
                    <b-col class="s-img" xl="4" lg="5" md="12">
                        <img :src="`/example/${this.user.avatar}`" class="s-avatar">
                        <b-form-file accept="image/jpeg, image/png, image/gif" v-model="form.avatar" placeholder="Choisissez une photo de profil ou déposez-le ici ..." drop-placeholder="Déposer le fichier ici ..." />
                    </b-col>
                    <b-col class="s-img">
                        <img src="https://images7.alphacoders.com/808/808037.jpeg" class="s-banner">
                        <b-form-file accept="image/jpeg, image/png, image/gif" v-model="form.banner" placeholder="Choisissez une banniere ou déposez-le ici ..." drop-placeholder="Déposer le fichier ici ..." />
                    </b-col>

                    <b-col cols="12" style="margin-top: 1.2rem">
                        <b-button variant="secondary" @click="onSend">Enregistrer</b-button>
                    </b-col>
                </b-row>
            </b-col>
          </b-row>
        </b-container>
      </section>
  </div>
</template>

<script>
export default {
  props: {
      user: Object,
  },
  data() {
      return {
          form: {
              username: this.user.username,
              email: this.user.email,
              avatar: null,
              banner: null,
          }
      };
  },
  methods: {
    onSubmit(evt) {
        evt.preventDefault();
    },
    onSend(evt) {
        evt.preventDefault();
    },
  }
};
</script>

<style>
.s-imgs {
    margin-top: 2rem;
}

.s-imgs-wrapper {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.s-img {
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
    align-items: center;
}

.s-avatar {
    width: 20rem;
    height: 20rem;
}

.s-banner {
    width: 100%;
    height: 20rem;
}

@media (max-width: 1290px) {
    .s-banner {
        width: 100%;
        height: 20rem;
    }
}

@media (max-width: 992px) {
    .s-img {
        justify-content: center;
        margin-top: 2rem;
    }
}

@media (max-width: 600px) {
    .s-banner {
        height: 10rem;
    }
}
</style>