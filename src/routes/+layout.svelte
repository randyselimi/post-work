<script>
	import PostWorkModal from '$lib/post-work-modal.svelte';
	import UpdateHoursModal from '$lib/update-hours-modal.svelte';
</script>

<div class="container">
	<div class="header">
		<div class="header-element">
			<h1>Post Work</h1>
		</div>
		<div>
			<a href="/">Home</a>
			<a href="/post-work">Post Work</a>
			<a href="/get-work">Get Work</a>
			<a href="/network">Network</a>
		</div>
		<div class="header-element">
			<a href="/profile">Randy Selimi</a>
		</div>
	</div>
	<div class="subheader">
		<PostWorkModal />
		<UpdateHoursModal />
	</div>
	<slot />
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
	}
	.header {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
	}
	.header-element {
		width: 10em;
	}
	.subheader {
		display: flex;
		justify-content: center;
	}
</style>
