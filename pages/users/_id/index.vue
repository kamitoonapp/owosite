<template>
  <div class="bump">
      <section class="ua-activity">
          <div class="ua-title">
              <h1>Activité</h1>
          </div>

          <div class="ua-content">
                <b-card v-for="(ac, index) of activity" :key="index" :img-src="ac.type == 'like' ? `/example/${ac.data.preface}` : undefined" img-width="60" img-left class="mb-3">
                    <b-card-text v-if="ac.type == 'like'">
                        {{user.username}} liked <nuxt-link :to="`/webtoons/${ac.data.id}`">{{ac.data.name}}</nuxt-link>
                    </b-card-text>
                    <div v-if="ac.type == 'post'">
                        <b-card-title>Poste de shaynlink</b-card-title>
                        <b-card-text>
                            {{ac.data.content}}
                        </b-card-text>
                    </div>
                </b-card>
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
            const user =  copyObject(this.user);
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
    },
};
</script>

<style>
.ua-activity {
    display: flex;
    flex-direction: column;
    padding: 5rem;
    width: 100%;
}

@media (max-width: 768px) {
    .ua-activity {
        padding: 1rem;
    }
}

</style>