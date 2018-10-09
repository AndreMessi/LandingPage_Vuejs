<template>
  <v-container grid-list-md mt-2>
    <v-divider class="mb-5"/>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 lg5 offset-md1>
        
      </v-flex>
      <v-flex xs12 sm6 md5 lg4 offset-md1 offset-lg2 xl3>
        
      </v-flex>
    </v-layout>
  </v-container>
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
.demo-title {
  font-family: 'Raleway', sans-serif;
  font-size: 36px;
  font-weight: bold;
}
.demo-text {
  font-family: 'Raleway', sans-serif;
  font-size: 16px;
  font-weight: bold;
}
.demo-icon {
  margin-top: -5px;
}
</style>
