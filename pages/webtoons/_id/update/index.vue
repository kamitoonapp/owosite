<template>
<section v-if="$fetchState.pending">
    <Loading />
</section>
<div v-else-if="!webtoon">
    Webtoon not found
</div>
  <div v-else>
      <b-container style="margin-top: 2rem" fluid>
          <b-row align-h="center" style="text-align: center">
              <b-col cols="12" align-self="center">
                  <h1>Modifier {{webtoon.name}}</h1>
              </b-col>
          </b-row>

          <b-row style="margin-top: 3rem">
              <b-col lg="6">
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
                            <b-form-file v-model="files.preface" :state="Boolean(files.preface)" placeholder="Choisissez un fichier ou déposez-le ici ..." drop-placeholder="Déposer le fichier ici ..." accept="image/jpeg, image/png, image/gif" />
                        </b-col>

                        <b-col cols="12" class="s-preview-preface-wrapper">
                            <img v-if="!!form.preface" :src="form.preface" class="s-preview-preface" />
                        </b-col>
                    </b-row>
                </b-col>
              </b-col>

              <!-- Seasons -->
              <b-col lg="6">
                <!-- Title -->
                <b-col>
                    <h2>Saisons</h2>
                </b-col>

                <!-- Generate seasons -->
                <b-col>
                    <div v-for="(season, index) of webtoon.seasons" :key="index">
                        <div style="display: flex;justify-content: space-between;">
                            <div>
                                <p style="font-size: x-large;font-weight: 600;">{{index+1}}. {{season.name}}</p>
                            </div>
                            <div style="display: flex;column-gap: 1rem;">
                                <font-awesome-icon icon="pen" class="k-trash" />
                                <font-awesome-icon icon="trash-alt" class="k-trash" @click="trash(chapter)" />
                            </div>
                        </div>
                        <div style="margin-left: 2rem">
                            <div v-for="(chapter, i) of season.chapters" :key="i" style="margin: .8rem">
                                <b-card :img-src="`/example/${chapter.preface}`" img-left img-width="100">
                                    <b-card-text>
                                        <div style="display: flex;justify-content: space-between;">
                                            <div>
                                                <span style="font-size: x-large;">{{ chapter.name }}</span>
                                                <br>
                                                {{chapter.like}} <font-awesome-icon icon="thumbs-up" style="color: cornflowerblue" />
                                            </div>
                                            <div style="display: flex;column-gap: 1rem;">
                                                <font-awesome-icon icon="pen" class="k-trash" />
                                                <font-awesome-icon icon="trash-alt" class="k-trash" @click="trash(chapter)" />
                                            </div>
                                        </div>
                                    </b-card-text>
                                </b-card>
                            </div>
                        </div>
                    </div>
                </b-col>
              </b-col>
          </b-row>

          <b-row style="margin-top: 1rem; margin-bottom: 1rem">
              <b-col>
                  <b-button :disabled="!ok" @click="saveWebtoon">
                      Terminer
                  </b-button>
              </b-col>
          </b-row>
      </b-container>
  </div>
</template>

<script>
import copyObject from './../../../../lib/copyObject';

function hanlerNext() {
    if (
        (!!this.form.name && this.form.name.length > 0) &&
        (!!this.form.synopsis && this.form.synopsis.length > 0) &&
        (this.form.genres.length > 0)
        && this.form.preface
    ) {
        this.ok = true;
    } else this.ok = false;
};

export default {
    fetch() {
        let webtoon = this.$store.getters.getWebtoon.find((wb) => wb.id == this.$route.params.id);
        if (!webtoon) return this.webtoons = null;
        this.webtoon = copyObject(webtoon);

        this.form.name = this.webtoon.name;
        this.form.synopsis = this.webtoon.synopsis;
        this.form.genres = this.webtoon.genre;
        this.form.preface = '/example/' + this.webtoon.preface;

        console.log(this.webtoon);
    },
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
            form: {
                name: null,
                synopsis: null,
                genres: [],
                preface: null,
            },
            files: {
                preface: null,
            },
            webtoon: null,
            ok: false,
        };
    },
    computed: {
        genres() {
            return Object.entries(this.$store.state.genres).map(([k, v]) => ({value: k, text: v}));
        },
    },
    methods: {
        saveWebtoon() {
            this.$bvToast.toast(`${this.form.name} enregistré`, {
                title: '(*/ω＼*)',
                toaster: 'b-toaster-bottom-left',
                solid: true,
                appendToast: true,
                variant: 'success',
            });
        },
        triggerModify() {
            this.modify = !this.modify;
        },
        trash(chap = {name: 'flemme'}) {
            this.nextLink = false;
            this.$bvToast.toast(`Chapitre ${chap.name} supprimé !`, {
                title: '(*/ω＼*)',
                toaster: 'b-toaster-bottom-left',
                solid: true,
                appendToast: true,
                variant: 'success',
            });
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

.k-preview {
    display: flex;
    background: #223852;
    border-radius: 7px;
    column-gap: 1rem;
    row-gap: 1rem;
    flex-wrap: wrap;
    padding: 1.2rem;
}
</style>