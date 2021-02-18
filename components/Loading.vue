<template>
  <section class="k-loader">
    <div class="k-loader-content">
      <div class="k-circle">{{emote}}</div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    const emotes = [
      '╰(*°▽°*)╯', '╰(*°▽°*)╯', 'ಥ_ಥ',
      '(*/ω＼*)', '( •_•)>⌐■-■', '(❁´◡`❁)',
      'ಠ_ಠ', '(╯°□°）╯︵ ┻━┻', '(●\'◡\'●)',
      '☆*: .｡. o', '(≧▽≦)', 'o .｡.:*☆',
      '(^///^)', ':-)', '^_^',
      ':-D', 'ᓚᘏᗢ', '(┬┬﹏┬┬)',
      '( ´･･)ﾉ', '(._.`)', '༼ つ ◕_◕ ༽つ',
      '(ˉ﹃ˉ)', '(•_•)', ':-(',
      ':-P', ';-)', '(☞ﾟヮﾟ)☞',
      '☜(ﾟヮﾟ☜)', '(¬‿¬)', '(¬_¬ )',
      '¯\_(ツ)_/¯', '(T_T)', '(⊙_⊙;)',
      '(╯°□°）╯︵ ┻━┻', '┬─┬ ノ( ゜-゜ノ)'];
    
    return {
      emote: emotes[Math.floor(Math.random() * emotes.length)],
    };
  },
};
</script>

<style>
.k-loader {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.k-circle {
  animation: circle 2.8s linear infinite;
}

@keyframes circle{
  0% {transform:rotate(0deg);}
  100%{transform:rotate(360deg);}
}
</style>