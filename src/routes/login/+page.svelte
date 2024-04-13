<script lang="ts">
	import { onMount } from 'svelte';
	import { loggedIn } from '$lib/stores';
	import { browser } from '$app/environment';
	const login = async () => {
		loggedIn.set(true);
	};
</script>

<form>
	<fieldset id="login">
		<legend>Login</legend>
		<label for="username">Username:</label>
		<input type="text" id="username" name="username" required />
		<label for="password">Password:</label>
		<input type="password" id="password" name="password" required />
		<button on:click={login}>Login</button>
	</fieldset>
</form>
<button disabled>Register</button>
<button disabled>Forgot Password</button>

<h2>Notice:</h2>
<p>This is a prototype version of PostWork developed by Randy Selimi</p>
<p>It is important to note various functions of this service are disabled for this demo</p>
<p>This platform currently handles all data in-memory. It does not connect to a back-end</p>
