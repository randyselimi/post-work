<script lang="ts">
</script>

<div class="login-container">
	<h1 class="login-title">PostWork</h1>
	<form method="POST">
		<fieldset id="login">
			<legend>Login</legend>
			<label for="email">Email:</label>
			<input type="text" id="email" name="email" required />
			<label for="password">Password:</label>
			<input type="password" id="password" name="password" required />
			<button>Login</button>
		</fieldset>
	</form>
	<button disabled>Register With Code</button>
	<button disabled>Create New Team</button>

	<h2>Notice:</h2>
	<p>This is a pre-alpha version of PostWork developed by Randy Selimi.</p>
	<p>
		It is important to note various functions of this service have been mocked or disabled for this
		demo.
	</p>
	<!-- <p>All content contained within is the sole intellectual property of its creator</p> -->
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
