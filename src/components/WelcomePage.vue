<template>
	<div v-if="showWelcomePage">
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
  