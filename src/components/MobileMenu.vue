<template>
  <v-list>
    <v-layout column align-center justify-center>
      <v-list-tile v-for="item in menu" :key="item.name">
        <v-list-tile-content>
          <v-btn :href="item.href" flat class="blue--text text--darken-2 accented-text">{{ item.name }}</v-btn>
        </v-list-tile-content>
      </v-list-tile>
    </v-layout>
  </v-list>
</template>

<script>
export default {
  props: ['menu']
}
</script>

<style>

</style>
