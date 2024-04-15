<script lang="ts">

</script>

<div class="login-container">
	<h1 class="login-title">PostWork</h1>
	<form method="POST">
		<fieldset id="login">
			<legend>Login</legend>
			<label for="username">Username:</label>
			<input type="text" id="username" name="username" required />
			<label for="password">Password:</label>
			<input type="password" id="password" name="password" required />
			<button>Login</button>
		</fieldset>
	</form>
	<button disabled>Register</button>
	<button disabled>Forgot Password</button>

	<h2>Notice:</h2>
	<p>This is a prototype version of PostWork developed by Randy Selimi</p>
	<p>It is important to note various functions of this service are disabled for this demo</p>
	<p>This platform currently handles all data in-memory. It does not connect to a back-end</p>
</div>


<style>
.login-title {
	font-size: 10rem;
}
.login-container {
	display: flex;
	flex-direction: column;
	align-items: center;
}
</style>