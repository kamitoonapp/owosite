<template>
    <section v-if="$fetchState.pending">
        <Loading />
    </section>
    <section v-else-if="!webtoon">
        <p>Webtoon not found</p>
    </section>
    <section v-else class="hero">
        <b-container fluid>
            <div class="hero-body">
                <b-row>
                    <b-col sm="12" md="6" lg="4" xl="3">
                        <b-img :src="`/example/${webtoon.preface}`" fluid />
                    </b-col>
                    <b-col>
                        <h1>{{webtoon.name}}</h1>
                        <span style="font-size: large;">{{webtoon.rate}} / 5 <font-awesome-icon icon="star" style="color: #ffc107;" /></span>
                        <p style="font-size: large;">{{webtoon.like}} <font-awesome-icon icon="thumbs-up" style="color: cornflowerblue" /></p>
                        <br />
                        <h5>Author: <nuxt-link :to="`/users/${webtoon.author.id}`" class="author">{{webtoon.author.username}}</nuxt-link></h5>
                        <h5>Genres: <span style="font-variant: all-small-caps; color: slategrey">{{webtoon.genre.map((v) => type[v]).join(', ')}}</span></h5>
                        <div>

                        </div>
                        <h4>Synopsis</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt et nostrum quasi, nemo quae ipsam minima quos reprehenderit placeat nulla. Animi facilis debitis nemo explicabo non optio natus excepturi amet?</p>
                        <b-button v-if="isAuthor" :to="`/webtoons/${webtoon.id}/update`">Modifier</b-button>
                        <b-button v-if="isAuthor" id="addpage">Ajouter un chapitre</b-button>
                    </b-col>
                </b-row>
                <hr style="background-color: rgb(134 134 134)" />
                <b-row>
                    <b-col xl="3" lg="4" md="5" style="margin-bottom: 2%">
                        <label for="category"></label>
                        <b-form-select v-model="view">
                            <template #first>
                                <b-form-select-option :value="null" disabled>-- Sélectionner une categorie --</b-form-select-option>
                            </template>

                            <b-form-select-option v-for="(season, index) of webtoon.seasons.map((v) => v.name)" :key="index" :value="season">
                                Season {{index+1}} - {{season}}
                            </b-form-select-option>
                        </b-form-select>
                    </b-col>

                    <b-col cols="12">
                        <h2>Chapitres</h2>

                        <div v-for="(chapter, _index) of chapters" :key="_index">
                            <div @click="nextPage(`/webtoons/${$route.params.id}/reader/${index+1}/${_index+1}`)">
                                <b-card :img-src="`/example/${chapter.preface}`" img-left img-width="100" class="webtoon-card selected" style="height: 93px;margin-top: 10px;">
                                    <b-card-text>
                                        <div style="display: flex;justify-content: space-between;">
                                            <div>
                                                <span style="font-size: x-large;">{{ chapter.name }}</span>
                                                <br>
                                                {{chapter.like}} <font-awesome-icon icon="thumbs-up" style="color: cornflowerblue" />
                                            </div>
                                            <div>
                                                <font-awesome-icon icon="trash-alt" class="k-trash" @click="trash(chapter)" />
                                            </div>
                                        </div>
                                    </b-card-text>
                                </b-card>
                            </div>
                        </div>
                    </b-col>
                </b-row>
            </div>
        </b-container>
    </section>
</template>

<script>
import humanize from 'humanize';
import copyObject from './../../../lib/copyObject';

export default {
    fetch() {
        // fetch data
        let webtoon = this.$store.getters.getWebtoon.find((wb) => wb.id == this.$route.params.id);
        if (!webtoon) return this.webtoons = null;
        webtoon = copyObject(webtoon);
        webtoon.author = this.$store.state.users[0];
        webtoon.like = humanize.intword(webtoon.like);

        this.view = !!webtoon.seasons[0] ? webtoon.seasons[0].name : null;

        this.index = 0;

        this.chapters = webtoon.seasons[this.index] ?
            webtoon.seasons[this.index].chapters.map((v, i) =>
                Object.assign(copyObject(v), {
                name: `${i+1}. ${v.name}`,
                like: humanize.intword(v.like),
            })) : [];

        this.webtoon = webtoon;

        this.isAuthor = !!this.$store.state.user || this.$store.state.user.id == this.webtoon.author.id;
    },
    data() {
        return {
            webtoon: null,
            type: {
                'k-0': 'Comedie',
                'k-1': 'Romance',
            },
            view: null,
            chapters: [],
            index: 0,
            isAuthor: null,
            nextLink: true,
        };
    },
    watch: {
        view(a) {
            let index = this.webtoon.seasons.findIndex((s) => s.name == a);

            if (index == -1) return this.index = 0;

            return this.index = index;
        },

        index(a) {
            this.chapters = this.webtoon.seasons[this.index].chapters.map((v, i) =>
                Object.assign(copyObject(v), {
                name: `${i+1}. ${v.name}`,
                like: humanize.intword(v.like),
            }));
        },

    },
    methods: {        
        nextPage(url) {
            if (this.nextLink) this.$router.push(url);
            else this.nextLink = true;
        },

        trash(chap) {
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
.author {
    color: #87cefa;
}

.author:hover {
    color: #49b9ff;
}
</style>