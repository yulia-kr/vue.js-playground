<template>
  <div>
    <HomePage v-if="!showWelcomePage" @usernameEntered="handleUsernameEntered" />
    <WelcomePage v-else :username="username" />
  </div>
</template>

<script>
import HomePage from './components/HomePage.vue';
import WelcomePage from './components/WelcomePage.vue';

export default {
  components: {
    HomePage,
    WelcomePage
  },
  data() {
    return {
      username: '',
      showWelcomePage: false
    };
  },
  methods: {
    handleUsernameEntered(username) {
      this.username = username;
      this.showWelcomePage = true;
    }
  }
};
</script>
