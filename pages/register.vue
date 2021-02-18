<template>
  <div>
      <section class="lg-header">
          <div class="lg-title">
              <h1>KamiToon</h1>
              <p class="lg-subtitle">Inscription</p>
          </div>
      </section>

      <section class="lg-fields">
          <b-container>
              <b-row>
                  <b-col>
                    <b-form @submit="onSubmit">
                        <b-overlay :show="show" rounded="sm" bg-color="#111D2B" style="color: tomato">
                            <div style="color: #fff">
                                <b-form-group id="input-group-1" label="Pseudonyme:" label-for="input-1">
                                    <b-form-input id="input-1" v-model="form.pseudo" type="text" placeholder="Votre pseudo" required />
                                </b-form-group>

                                <b-form-group id="input-group-2" label="Adresse mail:" label-for="input-1">
                                    <b-form-input id="input-2" v-model="form.email" type="email" autocomplete="username" placeholder="Votre email" required />
                                </b-form-group>

                                <b-form-group id="input-group-3" label="Mot de passe:" label-for="input-2">
                                    <b-form-input id="input-3" v-model="form.password" type="password" autocomplete="new-password" placeholder="Votre mot de passe" required />
                                </b-form-group>
                            </div>
                        </b-overlay>

                        <b-button to="/login" variant="secondary">Connexion</b-button>
                        <b-button type="submit" variant="info" class="lg-submit-btn">Inscription</b-button>
                    </b-form>
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
            form: {
                pseudo: null,
                email: null,
                password: null,
            },
            show: false,
        };
    },
    methods: {
        onSubmit(event) {
            event.preventDefault();
            this.show = true,
            setTimeout(() => {
                this.$bvToast.toast(`Welcome ${this.form.pseudo}`, {
                    title: '(*/ω＼*)',
                    toaster: 'b-toaster-bottom-left',
                    solid: true,
                    appendToast: true,
                    variant: 'success',
                });
                this.show = false;
            }, 5000);
        },
    },
};
</script>

<style>
.lg-header {
    display: flex;
    min-width: 100%;
    justify-content: center;
    margin: 5rem 0 5rem;
}

.lg-title {
    line-height: 0;
}

.lg-submit-btn:hover {
    background-color: #2e4d72;
}

.lg-fields {
    margin: 5rem 0 5rem 0;
}
</style>