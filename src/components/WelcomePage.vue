<template>
	<div class="container" v-if="showWelcomePage">
		<h1>Welcome {{ username }}!</h1>
	</div>
</template>
  
<script>
	export default {
		props: ['username'],
		data() {
			return {
		showWelcomePage: true
		};
	}
};
</script>
  
<style>
.container {
  background: linear-gradient(to bottom, #FFC0CB, #FF5733);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
}
</style>