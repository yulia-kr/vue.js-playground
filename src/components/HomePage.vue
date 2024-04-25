<template>
	<div class="container">
		<h1>Hello Coder</h1>
		<label for="nameInput">Write your name here:</label>
			<input id="nameInput" v-model="username" type="text" autofocus />
		<button @click="checkName">Submit</button>
	</div>
</template>
  
<script>
export default {
	data() {
		return {
			username: '',
		};
	},
	methods: {
		checkName() {
			const nameRegex = /^[A-Za-z]+$/;

			if (!nameRegex.test(this.username.trim())) {
				alert('Please enter a valid name with alphabetic characters only.');
				return;
			}
			
			this.$emit('usernameEntered', this.username);
		}
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
  