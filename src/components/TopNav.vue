<template>
  <v-toolbar app class="white">
    <v-spacer class="hidden-sm-and-up brand-spacer"/>
    <v-toolbar-title class="text-xs-center brand-logo">
      <h1>logo</h1>
      <!-- <v-icon x-large class="primary--text hidden-sm-and-down brand-icon">filter_hdr</v-icon>ISLAND<span class="blue--text text--darken-3 accented-text">Civil</span> -->
    </v-toolbar-title>
    <v-spacer/>
    <v-toolbar-items class="hidden-xs-only">
        <v-btn v-for="item in menu" :key="item.name" :href="item.href" flat class="blue--text text--darken-2 accented-text">{{ item.name }}</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  props: ['menu']
}
</script>

<style>

</style>
