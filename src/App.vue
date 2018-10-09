<template>
  <v-app>
    <top-nav :menu="menu"/>
    <v-content>
      <hero/>
      <mobile-menu :menu="menu" class="hidden-sm-and-up"/>
      <painpoint id="earthworks"/>
      <products/>
      <demo id="features"/>
      <consulting/>
      <ic-footer/>
    </v-content>
  </v-app>
</template>

<script>
import TopNav from '@/components/TopNav'
import MobileMenu from '@/components/MobileMenu'
import Hero from '@/components/Hero'
import Painpoint from '@/components/SectionPainpoint'
import Products from '@/components/SectionProducts'
import Demo from '@/components/SectionDemo'
import Consulting from '@/components/SectionConsulting'
import Footer from '@/components/SectionFooter'

export default {
  data () {
    return {
      menu: [
        {
          name: 'Home',
          href: '#Home'
        },
        {
          name: 'About',
          href: '#About'
        },
        {
          name: 'Screenshot',
          href: '#Screenshot'
        },
        {
          name: 'Pricing',
          href: '#Pricing'
        },
        {
          name: 'Newslatter',
          href: '#earthworks'
        },
        {
          name: 'Contact',
          href: '#contact'
        }
      ]
    }
  },
  name: 'App',
  components: {
    'top-nav': TopNav,
    'mobile-menu': MobileMenu,
    'hero': Hero,
    'products': Products,
    'painpoint': Painpoint,
    'consulting': Consulting,
    'demo': Demo,
    'ic-footer': Footer
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Zilla+Slab');
@import url('https://fonts.googleapis.com/css?family=Raleway');
.brand-logo {
  font-family: 'Zilla Slab', serif;
  font-size: 36px!important;
  font-weight: bold!important;
  color: #2c3e50;
}
.brand-spacer {
  margin-left: -10px!important;
}
.brand-icon {
  margin-top: -3px;
}
.accented-text {
  font-family: 'Raleway', sans-serif;
}
.product-title {
  font-family: 'Raleway', sans-serif;
  font-weight: bold!important;
  color: #2c3e50;
}
p {
  font-family: 'Raleway', sans-serif;
}
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
