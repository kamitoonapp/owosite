<template>
  <div v-if="!user">

  </div>
  <div v-else>
      <section>
        <b-container fluid>
          <b-row>
            <b-col xl="2" lg="3" md="3" sm="12" style="display: flex;justify-content: center;">
              <div class="u-avatar" :style="`background: url('/example/${user.avatar}') center center no-repeat; background-size: cover;`" oncontextmenu="return false" />
            </b-col>

            <b-col xl="10" lg="9" md="9" class="u-zebilamouche" style="background: url('https://images7.alphacoders.com/808/808037.jpeg') center center no-repeat; border-radius: 1.1rem 0 0 1.1rem;">
              <div class="u-named">
                <div>
                  <span style="font-size: xxx-large;color: cornflowerblue;">{{user.username}}
                    <span style="color: #fff;font-size: 1.3rem;-webkit-text-stroke-width: 0.1px;-webkit-text-stroke-color: black;">
                      #{{user.discriminator}}
                    </span>
                  </span>
                </div>
                <div>
                  
                  <font-awesome-icon id="verified" icon="check-circle" style="color: #55B8F5" />
                  <font-awesome-icon icon="cogs" style="color: rgb(249 134 53)" />
                  <font-awesome-icon icon="pen" style="color: rgb(94 220 185)" />

                  <b-tooltip target="verifified" title="Online!"></b-tooltip>
                </div>
                <div class="u-badge">
                    <a href="https://twitter.com/Shaynl3nk" style="color: azure;"><font-awesome-icon size="lg" :icon="['fab', 'twitter']" /></a>
                    <a href="https://discord.gg/2Akw3qdB5F" style="color: azure;"><font-awesome-icon size="lg" :icon="['fab', 'discord']" /></a>
                    <a href="#" style="color: azure;"><font-awesome-icon size="lg" :icon="['fab', 'instagram']" /></a>
                    <a href="#" style="color: azure;"><font-awesome-icon size="lg" :icon="['fab', 'pinterest']" /></a>
                    <a href="#" style="color: azure;"><font-awesome-icon size="lg" :icon="['fab', 'youtube']" /></a>
                    <a href="#" style="color: azure;"><font-awesome-icon size="lg" :icon="['fab', 'facebook']" /></a>
                </div>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </section>

      <section class="u-nav">
        <div class="u-pagename">
          {{$route.path.endsWith('webtoons') ? 'Webtoons' : $route.path.endsWith('stats') ? 'Statistique' : 'Aperçu'}}
        </div>
        <div class="u-body-nav">
          <div class="u-list">
            <nuxt-link to="/users/@me/" style="text-decoration: none;">Aperçu</nuxt-link>
          </div>
          <div class="u-list">
            <nuxt-link to="/users/@me/webtoons" style="text-decoration: none;">Webtoons</nuxt-link>
          </div>
          <div class="u-list">
            <nuxt-link to="/users/@me/stats" style="text-decoration: none;">Statistique</nuxt-link>
          </div>
        </div>
      </section>

      <section class="u-container">
        <nuxt-child :user="user"/>
      </section>
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      if (this.$route.params.id == '@me') {
        return this.$store.state.user;
      };

      return null;
    },
  },
};
</script>

<style>
.u-avatar {
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
}

.u-named {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  width: 100%;
}

.u-badge {
  display: flex;
  column-gap: 1rem;
  margin: 2rem 0 2rem;
}

.u-nav {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top:  2rem;
}

.u-pagename {
  text-align: center;
  width: 100%;
  align-self: center;
  font-size: xx-large;
  text-decoration: underline rgb(13, 84, 177);
}

.u-body-nav {
  display: flex;
  column-gap: 1rem;
  background: #35557c;
  padding: 1rem 50rem 1rem 2rem;
  border-radius: 20rem 0 0 20rem;
}

@media (max-width: 768px) {
  .u-named {
    align-items: center;
  }
  .u-zebilamouche {
    border-radius: 0px 0px 0px 0px !important;
  }
}

@media (max-width: 1050px) {
  .u-nav {
    justify-content: flex-start;
    margin-top: 0rem;
  }
  .u-body-nav {
    justify-content: center;
    padding: 1rem 0 1rem 1rem;
    border-radius: 0;
    width: 100%;
  }
}

@media (max-width: 1166px) {
  .u-pagename {
    display: none;
  }
}

.u-container {
  width: 100%;
  display: flex;
}
</style>