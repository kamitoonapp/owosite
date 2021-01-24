<template>
    <section v-if="$fetchState.pending">
        <Loading />
    </section>
    <section v-else class="hero">
        <div class="hero-body">
            <b-container fluid>
                <b-row>
                    <b-col cols="3">
                        <b-img :src="`/example/${webtoons.preface}`" fluid />
                    </b-col>
                    <b-col>
                        <h1>{{webtoons.name}}</h1>
                        <span style="font-size: large;">{{webtoons.rate}} / 5 <b-icon icon="star-fill" variant="warning" /></span>
                        <p style="font-size: large;">{{webtoons.like}} <b-icon icon="hand-thumbs-up" /></p>
                        <br />
                        <h5>Author: <nuxt-link :to="`/users/${webtoons.author.id}`" class="author">{{webtoons.author.username}}</nuxt-link></h5>
                        <h5>Genres: <span style="font-variant: all-small-caps; color: slategrey">{{webtoons.genre.map((v) => type[v]).join(', ')}}</span></h5>
                        <h4>Synopsis</h4>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt et nostrum quasi, nemo quae ipsam minima quos reprehenderit placeat nulla. Animi facilis debitis nemo explicabo non optio natus excepturi amet?
                    </b-col>
                </b-row>
            </b-container>
        </div>
    </section>
</template>

<script>
import humanize from 'humanize';

export default {
    fetch() {
        // fetch data
        this.webtoons = Object.create(this.$store.state.webtoons.find((wb) => wb.id == this.$route.params.id));
        this.webtoons.author = this.$store.state.users[0];
        this.webtoons.like = humanize.intword(this.webtoons.like);
    },
    data() {
        return {
            webtoons: null,
            type: {
                'k-0': 'Comedie',
                'k-1': 'Romance',
            },
        };
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