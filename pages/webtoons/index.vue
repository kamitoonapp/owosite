<template>
  <section class="hero">
    <b-container class="hero-body" fluid>
      <b-row>
        <b-col cols="12" style="padding: 0rem 4% 5%;">
          <b-row>
            <b-col md="2">
              <b-form-select v-model="order_selected" :options="order" style="margin: .5%" />
            </b-col>

            <b-col md="3">
              <b-form-select v-model="genre_selected" :options="genre" style="margin: .5%" />
            </b-col>

            <b-col>
              <b-form-input v-model="name" placeholder="🔎 Rechercher un webtoon" debounce="500" style="margin: .5%"></b-form-input>
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="12">
          <b-row>
            <b-col v-for="(webtoon, index) of webtoons" :key="index" md="4" sm="6" lg="3" xl="2">
              <NuxtLink :to="`/webtoons/${webtoon.id}`">
                <b-card
                  :title="webtoon.name"
                  :img-src="`/example/${webtoon.preface}`"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 20rem;"
                  class="mb-2 selected"
                >
                    <b-card-text>
                      <span style="font-variant: all-small-caps;">{{webtoon.genre.map((v) => type[v]).join(', ')}}</span>
                    </b-card-text>

                </b-card>
              </NuxtLink>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  watch: {
    order_selected(newer, older) {
      if (newer == older) return;
      if (this.order_selected == 1) {
        this.webtoons = this.webtoons.sort((a, b) => {
            if(a.name.toLowerCase() < b.name.toLowerCase()) { return -1; }
            if(a.name.toLowerCase() > b.name.toLowerCase()) { return 1; }
            return 0;
        });
      } else {
        this.webtoons = this.webtoons.sort((a, b) => {
            if(a.name.toLowerCase() < b.name.toLowerCase()) { return 1; }
            if(a.name.toLowerCase() > b.name.toLowerCase()) { return -1; }
            return 0;
        });
      };
    },

    genre_selected(newer, older) {
      if (newer == older) return;
      this.search();
    },

    name(newer, older) {
      if (newer == older) return;
      this.search();
    },
  },
  data() {
    this.base = this.$store.state.webtoons;
  
    return {
      order_selected: 1,
      order: [
        {value: 1, text: 'Trier de a - z'},
        {value: 2, text: 'Trier de z - a'},
      ],

      genre_selected: null,
      genre: [
        {value: null, text: 'Selctionner un genre'},
        {value: 'k-0', text: 'Comedie'},
        {value: 'k-1', text: 'Romance'},
      ],

      name: '',

      webtoons: this.base.map((v) => v).sort((a, b) => {
                if(a.name.toLowerCase() < b.name.toLowerCase()) { return -1; }
                if(a.name.toLowerCase() > b.name.toLowerCase()) { return 1; }
                return 0;
            }),

      type: {
        'k-0': 'Comedie',
        'k-1': 'Romance',
      },
    };
  },

  methods: {
    search() {
      // request
      let copyBase = this.base.map((v) => v);
      if (this.genre_selected) {
          copyBase = copyBase.filter((wb) => wb.genre.includes(this.genre_selected));
      };

      if (this.name && this.name.length > 0) {
        copyBase = copyBase.filter((wb) => new RegExp(`${this.name}`, 'gi').test(wb.name));
      };

      if (this.order_selected == 1) {
        copyBase = copyBase.sort((a, b) => {
            if(a.name.toLowerCase() < b.name.toLowerCase()) { return -1; }
            if(a.name.toLowerCase() > b.name.toLowerCase()) { return 1; }
            return 0;
        });
      } else {
        copyBase = copyBase.sort((a, b) => {
            if(a.name.toLowerCase() < b.name.toLowerCase()) { return 1; }
            if(a.name.toLowerCase() > b.name.toLowerCase()) { return -1; }
            return 0;
        });
      };

      this.webtoons = copyBase;
    },
  },
};
</script>