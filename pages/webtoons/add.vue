<template>
  <div>
      <b-container style="margin-top: 2rem">
          <b-row align-h="center">
              <b-col cols="12">
                  <h1>Ajouter un webtoon</h1>
              </b-col>

              <b-col cols="12">
                    <b-breadcrumb>
                        <b-breadcrumb-item @click="index = 0" :active="index == 0">Informations</b-breadcrumb-item>
                        <b-breadcrumb-item @click="index = 1" :active="index == 1" :disabled="!next[0]">Complémentaire</b-breadcrumb-item>
                    </b-breadcrumb>
              </b-col>
          </b-row>

          <b-row v-if="index == 0" style="margin-top: 3rem">
              <b-col>
                  <h2>Informations</h2>
              </b-col>

              <b-col cols="12">
                <b-form-group id="input-group-1" label="Nom de votre webtoon:" label-for="input-1">
                    <b-form-input id="input-1" v-model="form.name" type="text" placeholder="Entrée le nom" required />
                </b-form-group>
              </b-col>

              <b-col cols="12">
                <b-form-group id="input-group-2" label="Synopsis de votre webtoon:" label-for="textarea-1">
                    <b-form-textarea id="textarea-1" v-model="form.synopsis" placeholder="Entrée votre synopsis ..." rows="3" max-rows="6" />
                </b-form-group>
              </b-col>

              <b-col cols="12">
                <b-form-group id="input-group-3" label="Genres de votre webtoon:" label-for="checkbox-group-3">
                    <b-form-checkbox-group id="checkbox-group-3" v-model="form.genres" :options="genres" name="flavour-1" />
                </b-form-group>
              </b-col>

              <b-col cols="12" style="margin-top: 5rem">
                  <b-row>
                      <b-col cols="12">
                        <h3>Preface</h3>
                        <b-form-file v-model="files.preface" :state="Boolean(files.preface)" placeholder="Choisissez un fichier ou déposez-le ici ..." drop-placeholder="Déposer le fichier ici ..." />
                      </b-col>

                      <b-col cols="12" class="s-preview-preface-wrapper">
                        <img v-if="!!files.preface" :src="form.preface" class="s-preview-preface" />
                      </b-col>
                  </b-row>
              </b-col>

          </b-row>

          <b-row>

          </b-row>

          <b-row>
              <b-col>
                  <b-button @click="index++" :disabled="!next[index] || index >= totalPage-1">Suivant</b-button>
              </b-col>
          </b-row>
      </b-container>
  </div>
</template>

<script>

function hanlerNext() {
    if (!!this.form.name && !!this.form.synopsis && (this.form.genres.length > 0) && this.form.preface) {
        this.next[0] = true;
    };
};

export default {
    watch: {
        async 'files.preface'(file) {
            const arrBuffer = await file.arrayBuffer();
            this.form.preface = `data:${file.type};base64,${Buffer.from(arrBuffer).toString('base64')}`;
            hanlerNext.call(this);
        },
        'form.name'() {
            hanlerNext.call(this);
        },
        'form.synopsis'() {
            hanlerNext.call(this);
        },
        'form.genres'() {
            hanlerNext.call(this);
        },
    },
    data() {
        return {
            index: 0,
            form: {
                name: null,
                synopsis: null,
                genres: [],
                preface: null,
            },
            next: {
                0: false,
                1: false,
            },
            files: {
                preface: null,
            },
            totalPage: 2,
        };
    },
    computed: {
        genres() {
            return Object.entries(this.$store.state.genres).map(([k, v]) => ({value: k, text: v}));
        },
    },
};
</script>

<style>
.s-preview-preface-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
}

.s-preview-preface {
    width: 20rem;
}
</style>