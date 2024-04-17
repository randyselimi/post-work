<script lang="ts">
	import { goto } from '$app/navigation';

	export let title = '';
	export let redirect = '';
</script>

<div class="dashboard">
	<h2 class="dashboard-title" on:click={goto('/' + redirect)}>
		{title}
		{#if redirect}<span class="material-symbols-outlined"> more_vert </span>
		{/if}
	</h2>
	<slot name="actions" />
	<div class="dashboard-content">
		<slot name="content" />
	</div>
</div>

<style>
	.dashboard {
		margin: 10px;
		flex: 1;
		display: flex;
		flex-direction: column;
		height: 100%;
	}
	.dashboard-title {
		margin-bottom: 10px;
	}
	.dashboard-content {
		border-radius: 0 10px 10px;
		padding: 10px;
		flex: 1;
		background-color: white;
		height: 100%;
		box-shadow:
			rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
			rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
	}
</style>
