<template>
  <v-parallax :src="getImgUrl('dam3.jpg')">
    
  </v-parallax>
</template>

<script>
export default {
  methods: {
    getImgUrl (img) {
      return require('@/assets/' + img)
    }
  }
}
</script>

<style>
.hero-text-header {
  font-family: 'Zilla Slab', serif;
}
.hero-text-sub {
  font-family: 'Raleway', sans-serif;
}
.brand-text {
  font-weight: bold;
}
</style>
