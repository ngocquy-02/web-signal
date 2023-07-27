<template>
  <HomeBody />

  <HomeWhySignal />

  <HomeInformation />

  <HomeFeatures />

  <HomeAdvertise />
</template>

<script>
import HomeBody from '@/components/homepage/HomeBody.vue';
import HomeWhySignal from '@/components/homepage/HomeWhySignal.vue';
import HomeInformation from '@/components/homepage/HomeInformation.vue';
import HomeFeatures from '@/components/homepage/HomeFeatures.vue';
import HomeAdvertise from '@/components/homepage/HomeAdvertise.vue';

export default {
  name: 'HomeView',
  components: {
    HomeBody,
    HomeWhySignal,
    HomeInformation,
    HomeFeatures,
    HomeAdvertise
  }
}
</script>

<style>
.section {
  padding: 48px 24px;
}

p.body1 {
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
}

p.body2 {
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
}

h1 {
  font-size: 60px;
  font-weight: 800;
  line-height: 64px;
}

h2 {
  font-size: 40px;
  font-weight: 800;
  line-height: 44px;
}

h3 {
  font-size: 28px;
  font-weight: 800;
  line-height: 32px;
}

h4 {
  font-size: 20px;
  font-weight: 800;
  line-height: 24px;
}

img {
  height: auto;
  max-width: 100%;
}

img,
video {
  height: auto;
  max-width: 100%;
}

ul {
  list-style: none;
}

a {
  color: #3273dc;
  cursor: pointer;
  text-decoration: none;
}

.button:hover {
  background-color: #1851B4;
  color: #fff;
  text-decoration: none;
}

@media (max-width: 768px) {
  p.body1 {
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
  }

  h1 {
    font-size: 40px;
    font-weight: 800;
    line-height: 44px;
  }

  h2 {
    font-size: 28px;
    font-weight: 800;
    line-height: 32px;
  }

  h3 {
    font-size: 20px;
    font-weight: 800;
    line-height: 24px;
  }
}
</style>
