<template>
  <div>
    <section>
        <b-container fluid>
            <b-row>
                <b-col sm="12">
                    <b-form @submit="onSubmit">
                        <b-form-group
                            id="input-group-1"
                            label="Votre mot de passe actuel:"
                            label-for="input-1"
                        >
                            <b-form-input
                            id="input-1"
                            v-model="form.password"
                            type="password"
                            autocomplete="current-password"
                            required
                            ></b-form-input>
                        </b-form-group>

                        <b-form-group
                            id="input-group-2"
                            label="Votre nouveau mot de passe:"
                            label-for="input-2"
                            style="margin-top: 3rem"
                        >
                            <b-form-input
                            id="input-2"
                            v-model="form.newPassword"
                            type="password"
                            autocomplete="new-password"
                            required
                            ></b-form-input>
                        </b-form-group>

                        <b-form-group
                            id="input-group-3"
                            label="Retaper votre nouveau mot de passe:"
                            label-for="input-3"
                        >
                            <b-form-input
                            id="input-3"
                            v-model="form.checkNewPassword"
                            type="password"
                            autocomplete="new-password"
                            required
                            ></b-form-input>
                        </b-form-group>

                        <b-button type="submit" variant="secondary">Enregistrer</b-button>
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
                password: null,
                newPassword: null,
                checkNewPassword: null,
            }
        };
    },
};
</script>

<style>

</style>