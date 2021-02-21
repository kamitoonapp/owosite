<template>
  <section>
    <!-- Carousel -->
    <!--<b-carousel id="carousel-main" v-model="slide" :interval="4e3" controls indicators img-width="1024" img-height="480">
      <b-carousel-slide img-src="/example/a.jpg" img-height="400" style="height: 30rem" />
      <b-carousel-slide img-src="/example/b.png" img-height="400" style="height: 30rem" />
      <b-carousel-slide img-src="/example/b.jpg" img-height="400" style="height: 30rem" />
    </b-carousel>-->

    <!--<div class="k-slideshow-container">
      <div v-for="(slide, index) of slides" :key="index" class="k-slides k-fade">
        <div class="k-numberText">{{ index+1 / slides.length }}</div>
        <img class="k-img" :src="slide.url" />
        <div class="k-text">{{slide.text}}</div>
      </div>

      <a class="k-prev" onclick="plusSlides(-1)">&#10094;</a>
      <a class="k-next" onclick="plusSlides(1)">&#10095;</a>
    </div>

    <div style="text-align:center">
      <span class="k-dot" onclick="currentSlide(1)"></span>
      <span class="k-dot" onclick="currentSlide(2)"></span>
      <span class="k-dot" onclick="currentSlide(3)"></span>
    </div>--->

    <div class="k-slides">

      <div class="k-slides-content">
        <div v-for="(slide, index) of slides" :key="index" class="k-fade k-slide">
          <img :src="slide.url" />
        </div>

        <div id="k-back">&#10094;</div>
        <div id="k-next">&#10095;</div>
      </div>

    </div>

    <b-container fluid>
      <b-row>
        <b-col cols="12">
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
                        <b-card img-src="/example/_a.png" img-left img-width="100" class="webtoon-card selected">

                          <b-card-text><span style="font-size: x-large;">isma</span></b-card-text>
                        </b-card>

                        <b-card img-src="/example/_b.jpg" img-left img-width="100" class="webtoon-card selected">

                          <b-card-text><span style="font-size: x-large;">yû</span></b-card-text>

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
                        <b-card img-src="/example/_c.png" img-left img-width="100" class="webtoon-card selected">

                          <b-card-text><span style="font-size: x-large;">picu</span></b-card-text>

                        </b-card>

                        <b-card img-src="/example/_d.jpg" img-left img-width="100" class="webtoon-card selected">

                          <b-card-text><span style="font-size: x-large;">nico</span></b-card-text>

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
                      <b-col xl="4" md="6">
                        <b-card img-src="/example/0.png" img-left img-width="100" class="webtoon-card selected">
                        <div style="display: flex;justify-content: space-between">
                          <b-card-text>
                            <span style="font-size: x-large;">Hey (true card)</span>
                            <br />
                            <div class="k-card-items">
                              <div>
                                24 <font-awesome-icon icon="thumbs-up" style="color: cornflowerblue" />
                              </div>
                              <div>
                                <b-badge variant="success">Romance</b-badge>
                                <b-badge variant="danger">OPPAI !</b-badge>
                              </div>
                            </div>
                          </b-card-text>
                          <div>
                            <b-badge variant="warning" style="margin-right: -36px;" class="k-new-badge">New !</b-badge>
                          </div>
                        </div>
                        </b-card>
                      </b-col>
                      <b-col xl="4" md="6">
                        <b-card img-src="/example/1.png" img-left img-width="100" class="webtoon-card selected">
                        <div style="display: flex;justify-content: space-between">
                          <b-card-text>
                            <span style="font-size: x-large;">dolor (true card)</span>
                            <br />
                            <div class="k-card-items">
                              <div>
                                2M <font-awesome-icon icon="thumbs-up" style="color: cornflowerblue" />
                              </div>
                              <div>
                                <b-badge variant="success">Romance</b-badge>
                                <b-badge variant="danger">OPPAI !</b-badge>
                              </div>
                            </div>
                          </b-card-text>
                          <div>
                            <b-badge variant="warning" style="margin-right: -36px;" class="k-new-badge">New !</b-badge>
                          </div>
                        </div>
                        </b-card>
                      </b-col>
                      <b-col xl="4" md="6">
                        <b-card img-src="/example/2.jpg" img-left img-width="100" class="webtoon-card selected">
                        <div style="display: flex;justify-content: space-between">
                          <b-card-text>
                            <span style="font-size: x-large;">dolor (true card)</span>
                            <br />
                            <div class="k-card-items">
                              <div>
                                6.12k <font-awesome-icon icon="thumbs-up" style="color: cornflowerblue" />
                              </div>
                              <div>
                                <b-badge variant="success">Romance</b-badge>
                                <b-badge variant="danger">OPPAI !</b-badge>
                              </div>
                            </div>
                          </b-card-text>
                          <div>
                            <b-badge variant="warning" style="margin-right: -36px;" class="k-new-badge">New !</b-badge>
                          </div>
                        </div>
                        </b-card>
                      </b-col>
                      <b-col xl="4" md="6">
                        <b-card img-src="/example/3.jpg" img-left img-width="100" class="webtoon-card selected">
                        <div style="display: flex;justify-content: space-between">
                          <b-card-text>
                            <span style="font-size: x-large;">dolor (true card)</span>
                            <br />
                            <div class="k-card-items">
                              <div>
                                50k <font-awesome-icon icon="thumbs-up" style="color: cornflowerblue" />
                              </div>
                              <div>
                                <b-badge variant="success">Romance</b-badge>
                                <b-badge variant="danger">OPPAI !</b-badge>
                              </div>
                            </div>
                          </b-card-text>
                          <div>
                            <b-badge variant="warning" style="margin-right: -36px;" class="k-new-badge">New !</b-badge>
                          </div>
                        </div>
                        </b-card>
                      </b-col>
                      <b-col xl="4" md="6">
                        <b-card img-src="/example/4.png" img-left img-width="100" class="webtoon-card selected">
                        <div style="display: flex;justify-content: space-between">
                          <b-card-text>
                            <span style="font-size: x-large;">dolor (true card)</span>
                            <br />
                            <div class="k-card-items">
                              <div>
                                0 <font-awesome-icon icon="thumbs-up" style="color: cornflowerblue" />
                              </div>
                              <div>
                                <b-badge variant="success">Romance</b-badge>
                                <b-badge variant="danger">OPPAI !</b-badge>
                              </div>
                            </div>
                          </b-card-text>
                          <div>
                            <b-badge variant="warning" style="margin-right: -36px;" class="k-new-badge">New !</b-badge>
                          </div>
                        </div>
                        </b-card>
                      </b-col>
                    </b-row>
                  </b-col>
                </b-row>
              </b-container>
            </div>
          </div>
        </b-col>
        <b-col class="k-pub">
          
        </b-col>
      </b-row>
    </b-container>

  </section>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        {url: '/example/a.jpg', text: 'Hello world !'},
        {url: '/example/b.jpg', text: 'Hello world !'},
        {url: '/example/c.png', text: 'Hello world !'}
      ],
    };
  },
  mounted() {
    // Get slides
    let slides = document.getElementsByClassName('k-slide');

    if (slides.length < 1) return;

    let index = 0;
    let time = 1000 * 5;

    const handler = () => {
      slides = document.getElementsByClassName('k-slide');

      if (slides.length < 1) return clearInterval(window.autoSlide);

      nextIndex();
      index = nextIndex();
      slides.item(backIndex()).className = 'k-slide';
      showSlide(index);
    };

    if (!window.autoSlide || window.autoSlide._destroyed) window.autoSlide = setInterval(handler, time);

    function backIndex() {
      let i;
      if (index == 0) i = slides.length - 1;
      else i = index - 1;
      return i;
    };

    function nextIndex() {
      let i;
      if (index >= slides.length - 1) i = 0;
      else i = index + 1;
      return i;
    };

    function showSlide(i) {
      slides.item(i).className += ' k-show';
    };

    // Display first slide
    slides.item(index).className += ' k-show';

    // setup button
    const next = document.getElementById('k-next');
    const back = document.getElementById('k-back');

    next.onclick = () => {
      index = nextIndex();
      slides.item(backIndex()).className = 'k-fade k-slide';
      showSlide(index);
      clearInterval(window.autoSlide);
    };

    back.onclick = () => {
      console.log('back');
      slides.item(index).className = 'k-fade k-slide';
      index = backIndex();
      showSlide(index);
      clearInterval(window.autoSlide);
    };

    // Setup pause auto slide
    let slide = document.getElementsByClassName('k-slides');
    slide = slide.item(0);

    slide.onmouseenter = () => {
      clearInterval(window.autoSlide);
    };

    slide.onmouseleave = () => {
      window.autoSlide = setInterval(handler, time);
    };
  },
};
</script>

<style scoped>
.webtoon-card {
  margin-bottom: 1rem;
}

.k-slides {
  min-width: 100%;
}

.k-slides-content {
  display: flex;
}

.k-slide {
  width: 100%;
  display: none;
}

.k-slide > img {
  width: 100%;
  max-height: 30rem;
}

.k-show {
  display: block;
}

#k-next, #k-back {
  z-index: 999;
  position: absolute;
  width: auto;
  padding: 16px;
  /*background: aqua;*/
  align-self: center;
  justify-self: center;
  border-radius: 0 3px 3px 0;
  user-select: none;
  color: white;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.2);
}

#k-next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

.k-back:hover, .k-next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}


.k-fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: .4s;
  animation-name: fade;
  animation-duration: .4s;
}

@-webkit-keyframes fade {
  from {opacity: .3;}
  to {opacity: 1;}
}

@keyframes fade {
  from {opacity: .3;}
  to {opacity: 1;}
}

.k-new-badge {
  animation: float 2s linear infinite;
}

@keyframes float{
  0% {
    transform: translateY(0px);
  }
  20% {
    transform: translateY(-1px);
  }
  50% {
    transform: translateY(-8px);
  }
  90% {
    transform: translateY(-1px);
  }
  100% {
    transform: translateY(0px);
  }
}

.k-card-items {
  display: flex;
  column-gap: 1rem;
}

@media (max-width: 768px) {
  .k-pub {
    display: none;
  }
  .k-card-items {
    display: grid;
  }
  .webtoon-card {
    height: 10rem;
  }
}
</style>