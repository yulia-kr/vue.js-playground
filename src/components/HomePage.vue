<template>
	<div>
		<h1>Hello Coder</h1>
		<label for="nameInput">Write your name here:</label>
		<input id="nameInput" v-model="username" type="text" />
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

			// Emit the usernameEntered event if the name is valid
			this.$emit('usernameEntered', this.username);
		}
	}
};
</script>
  