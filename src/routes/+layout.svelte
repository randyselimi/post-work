<script>
	import './styles.css';
	import PostWorkModal from '$lib/post-work-modal.svelte';
	import UpdateHoursModal from '$lib/update-hours-modal.svelte';
</script>

<div class="container">
	<div class="header">
		<div class="header-element">
			<h1>Post Work</h1>
		</div>
		<div class="row">
			<a class="home-button" href="/">Home</a>
			<a class="button" href="/post-work">Post Work</a>
			<a class="button" href="/get-work">Get Work</a>
			<a class="button" href="/network">Network</a>
		</div>
		<div class="header-element">
			<a class="button" href="/profile">Randy Selimi</a>
		</div>
	</div>
	<slot />
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
	}
	.row {
		display: flex;
	}
	.header {
		color: black;
		background-color: white;
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
	}
	.header-element {
		width: 10em;
	}
	.home-button {
		font-weight: bold;
		border-width: 2px 2px 0px 2px;
		background-color: #ebebeb;
		border-color: white;
		border-style: solid;
		text-decoration: none;
		border-radius: 4px 4px 0px 0px;
		border: 0px;
		color: #313131;
		cursor: pointer;
		font-family: arial, sans-serif;
		font-size: 14px;
		height: 36px;
		line-height: 27px;
		min-width: 54px;
		padding: 0 16px;
		text-align: center;
		user-select: none;
		-webkit-user-select: none;
		touch-action: manipulation;
		white-space: pre;
	}
	.button {
		background-color: #202123;
		text-decoration: none;
		border-radius: 4px 4px 0px 0px;
		border: 0px;
		color: white;
		cursor: pointer;
		font-family: arial, sans-serif;
		font-size: 14px;
		height: 36px;
		line-height: 27px;
		min-width: 54px;
		padding: 0 16px;
		text-align: center;
		user-select: none;
		-webkit-user-select: none;
		touch-action: manipulation;
		white-space: pre;
	}

	.button:hover {
		opacity: 0.75;
	}
</style>
