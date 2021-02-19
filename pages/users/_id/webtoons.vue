<template>
  <div class="bump">
      <section class="uw-section">
            <div class="uw-mywebtoon">
                <div>
                    <h1>Webtoons de {{user.username}}</h1>
                </div>

                <div class="uw-webtoons">
                    <div v-for="(webtoon, index) of webtoons" :key="index" class="selected">
                        <nuxt-link :to="`/webtoons/${webtoon.id}`" style="text-decoration: none;">
                            <b-card  :img-src="`/example/${webtoon.preface}`" img-width="60" img-left class="mb-3">
                                <b-card-text>
                                    {{webtoon.name}}
                                </b-card-text>
                            </b-card>
                        </nuxt-link>
                    </div>
                </div>
            </div>
            <div class="uw-mywebtoon">
                <div>
                    <h1>Abonnements</h1>
                </div>

                <div class="uw-subscribes">
                    <div v-for="(subscribe, index) of subscribes" :key="index" class="selected">
                        <nuxt-link :to="`/webtoons/${subscribe.id}`" style="text-decoration: none;">
                            <b-card :img-src="`/example/${subscribe.preface}`" img-width="60" img-left class="mb-3">
                                <b-card-text>
                                    {{subscribe.name}}
                                </b-card-text>
                            </b-card>
                        </nuxt-link>
                    </div>
                </div>
            </div>
      </section>
  </div>
</template>

<script>
import copyObject from '~/lib/copyObject';

export default {
    props: {
        user: Object,
    },
    computed: {
        activity() {
            const user = copyObject(this.user);
            return user.activity.map((v) => {
                let copy = copyObject(v);
                if (copy.type == 'like') {
                    copy.data = this.$store.state.webtoons.find((w) => w.id == copy.target);
                } else if (copy.type == 'post') {
                    copy.data = user.post.find((p) => p.id == v.target);
                };

                return copy
            }).filter((v) => !!v);
        },
        webtoons() {
            const user = copyObject(this.user);
            return user.webtoons.map((v) => {
                return this.$store.state.webtoons.find((w) => w.id == v);
            }).filter((v) => !!v);
        },
        subscribes() {
            const user = copyObject(this.user);
            return user.subscribes.map((v) => {
                return this.$store.state.webtoons.find((w) => w.id == v);
            }).filter((v) => !!v);
        },
    },
};
</script>

<style>
.uw-section {
    width: 100%;
    display: grid;
    column-gap: 2rem;
    padding: 5rem;
    grid-template-columns: 50% 50%;
    justify-content: center;
}

@media (max-width: 768px) {
    .uw-section {
        padding: 1rem;
        grid-template-columns: 100%;
    }

    .uw-section > div {
        width: 100%;
    }
}
</style>