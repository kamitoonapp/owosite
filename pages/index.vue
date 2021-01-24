<template>
  <section>
    <!-- Carousel -->
    <b-carousel id="carousel-main" v-model="slide" :interval="4e3" controls indicators img-width="1024" img-height="480">
      <b-carousel-slide img-src="/example/a.jpg" img-height="400" style="height: 30rem" />
      <b-carousel-slide img-src="/example/b.png" img-height="400" style="height: 30rem" />
      <b-carousel-slide img-src="/example/b.jpg" img-height="400" style="height: 30rem" />
    </b-carousel>

    <b-container fluid>
      <b-row>
        <b-col cols="9">
          <!-- Webtoons filter -->
          <div class="hero k-large">
            <div class="hero-body">
              <b-container fluid>
                <b-row>
                  <b-col sm="12" md="6">
                    <b-row>
                      <b-col cols="12" style="margin-bottom: 2%">
                        <h2>Top webtoons</h2>
                      </b-col>
                      <b-col cols="12">
                        <b-card img-src="/example/_a.png" img-left img-width="100" class="webtoon-card">

                          <b-card-text><span style="font-size: x-large;">isma</span></b-card-text>

                          <a href="#" class="card-link">Card link</a>
                          <b-link href="#" class="card-link">Another link</b-link>
                        </b-card>

                        <b-card img-src="/example/_b.jpg" img-left img-width="100" class="webtoon-card">

                          <b-card-text><span style="font-size: x-large;">yû</span></b-card-text>

                          <a href="#" class="card-link">Card link</a>
                          <b-link href="#" class="card-link">Another link</b-link>
                        </b-card>
                      </b-col>
                    </b-row>
                  </b-col>
                  <b-col sm="12" md="6">
                    <b-row>
                      <b-col cols="12" style="margin-bottom: 2%">
                        <h2>Recommandé</h2>
                      </b-col>
                      <b-col cols="12">
                        <b-card img-src="/example/_c.png" img-left img-width="100" class="webtoon-card">

                          <b-card-text><span style="font-size: x-large;">picu</span></b-card-text>

                          <a href="#" class="card-link">Card link</a>
                          <b-link href="#" class="card-link">Another link</b-link>
                        </b-card>

                        <b-card img-src="/example/_d.jpg" img-left img-width="100" class="webtoon-card">

                          <b-card-text><span style="font-size: x-large;">nico</span></b-card-text>

                          <a href="#" class="card-link">Card link</a>
                          <b-link href="#" class="card-link">Another link</b-link>
                        </b-card>
                      </b-col>
                    </b-row>
                  </b-col>
                </b-row>
              </b-container>
            </div>
          </div>

          <!-- New webtoon -->
          <div class="hero">
            <div class="hero-bpdy">
              <b-container fluid style="padding: 2rem">
                <b-row>
                  <b-col cols="12" style="margin-bottom: 2%">
                    <h2>Nouveauté</h2>
                  </b-col>
                  <b-col cols="12">
                    <b-row>
                      <b-col xl="4" lg="6" md="12">
                        <b-card img-src="/example/0.png" img-left img-width="100" class="webtoon-card">
                          <b-card-text><span style="font-size: x-large;">Lorem</span></b-card-text>

                          <a href="#" class="card-link">Card link</a>
                          <b-link href="#" class="card-link">Another link</b-link>
                        </b-card>
                      </b-col>
                      <b-col xl="4" lg="6" md="12">
                        <b-card img-src="/example/1.png" img-left img-width="100" class="webtoon-card">
                          <b-card-text><span style="font-size: x-large;">ipsum</span></b-card-text>

                          <a href="#" class="card-link">Card link</a>
                          <b-link href="#" class="card-link">Another link</b-link>
                        </b-card>
                      </b-col>
                      <b-col xl="4" lg="6" md="12">
                        <b-card img-src="/example/2.jpg" img-left img-width="100" class="webtoon-card">
                          <b-card-text><span style="font-size: x-large;">dolor</span></b-card-text>

                          <a href="#" class="card-link">Card link</a>
                          <b-link href="#" class="card-link">Another link</b-link>
                        </b-card>
                      </b-col>
                      <b-col xl="4" lg="6" md="12">
                        <b-card img-src="/example/3.jpg" img-left img-width="100" class="webtoon-card">
                          <b-card-text><span style="font-size: x-large;">sit</span></b-card-text>

                          <a href="#" class="card-link">Card link</a>
                          <b-link href="#" class="card-link">Another link</b-link>
                        </b-card>
                      </b-col>
                      <b-col xl="4" lg="6" md="12">
                        <b-card img-src="/example/4.png" img-left img-width="100" class="webtoon-card">
                          <b-card-text><span style="font-size: x-large;">sitizen</span></b-card-text>

                          <a href="#" class="card-link">Card link</a>
                          <b-link href="#" class="card-link">Another link</b-link>
                        </b-card>
                      </b-col>
                    </b-row>
                  </b-col>
                </b-row>
              </b-container>
            </div>
          </div>
        </b-col>
        <b-col>
          
        </b-col>
      </b-row>
    </b-container>

  </section>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
    };
  },
};
</script>

<style scoped>
.webtoon-card {
  margin-bottom: 1rem;
}


</style>