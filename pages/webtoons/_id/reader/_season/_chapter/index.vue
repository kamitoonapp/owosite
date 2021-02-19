<template>
  <div v-if="!chapter">
    <div style="display: flex; min-width: 100vh; justify-content: center;">
      <h1>Not found !</h1>
    </div>
  </div>
  <div v-else>
    <section class="view-nav">
      <div class="view-navigation">
        <b-button v-if="getPrev" class="view-btn" :to="getPrev">Précédent</b-button>
        <h5>ep. {{$route.params.chapter}}</h5>
        <b-button v-if="getNext" class="view-btn" :to="getNext">Suivant</b-button>
      </div>
    </section>

    <section class="view">
        <div class="img-section" v-for="(img, index) of images" :key="index" oncontextmenu="return false" onclick="window.scroll(0, window.scrollY + 300)">
          <img class="viewer" :src="`/example/content/${img}`" decoding="async" importance="high" loading="lazy">
        </div>
    </section>

    <section class="view-nav">
      <div class="view-navigation">
        <b-button v-if="getPrev" class="view-btn" :to="getPrev">Précédent</b-button>
        <h5>ep. {{$route.params.chapter}}</h5>
        <b-button v-if="getNext" class="view-btn" :to="getNext">Suivant</b-button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  fetch() {
    const webtoon = this.$store.getters.getWebtoon.find((wb) => wb.id == this.$route.params.id);

    if (!webtoon) this.notFound = true;

    const season = webtoon.seasons[parseFloat(this.$route.params.season)-1];

    if (!season) this.notFound = true;

    const chapter = season.chapters[parseFloat(this.$route.params.chapter)-1];

    if (!chapter) this.notFound = true;

    this.chapter = chapter;
    this.season = season;
    this.webtoon = webtoon;

    this.images = chapter.images;
  },
  data() {
    return {
      chapter: null,
      season: null,
      webtoon: null,
      notFound: false,
      images: [],
    };
  },
  computed: {
    getPrev() {
      if (this.$route.params.chapter == '1') {
        if (this.$route.params.season != '1') return `/webtoons/${
          this.$route.params.id
          }/reader/${
            parseInt(this.$route.params.season)-1
          }/${
            this.webtoon.seasons[this.webtoon.seasons.length-1].chapters.length-1
          }`;
        else return false;
      } else return `/webtoons/${
        this.$route.params.id
      }/reader/${
        this.$route.params.season
      }/${
        parseInt(this.$route.params.chapter)-1
      }`;
    },
    getNext() {
      if (this.$route.params.chapter == this.season.chapters.length) {
        if (this.$route.params.season == this.webtoon.seasons.length) return false;
        else return `/webtoons/${
          this.$route.params.id
        }/reader/${
          parseInt(this.$route.params.season)+1
        }/1`;
      } else return `/webtoons/${
          this.$route.params.id
        }/reader/${
          this.$route.params.season
        }/${
          parseInt(this.$route.params.chapter)+1
        }`;
    },
  },
  mounted() {
    const viewers = document.getElementsByClassName('viewer');

    viewers.forEach((element) => {
      if (window.screen.width <= 500) {
        element.width = window.screen.width;
      } else element.width = window.screen.width / 2.5;
    });
  },
};
</script>

<style>
  .view-header {
    display: flex;
  }

  .view {
    display: flex;
    flex-direction: column;
    align-content: center;
  }

  .img-section {
    display: flex;
    justify-content: center;
  }

  .img-section, .viewer {
    margin-top: 0;
    margin-bottom: 0;
    padding-top: 0;
    padding-bottom: 0;
  }

  .view-nav {
    min-width: 100%;
    padding: 2rem;
    display: flex;
  }

  .view-navigation {
    display: flex;
    min-width: 100%;
    justify-content: center;
    align-items: baseline;
  }

  .view-btn {
    margin: .5em;
  }

  .view-btn:hover {
    background: #2d4364;
  }
</style>