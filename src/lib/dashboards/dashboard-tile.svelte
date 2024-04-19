<script lang="ts">
	import { goto } from '$app/navigation';

	export let title = '';
	export let redirect = '';
</script>

<div class="dashboard-tile">
	<div class="dashboard-title-header">
		<h3 style="margin-bottom: 0" class="dashboard-tile-title" on:click={goto('/' + redirect)}>
			{title}
			{#if redirect}<span class="material-symbols-outlined"> more_vert </span>
			{/if}
		</h3>
		<slot name="subtext" />
		<div class="dashboard-tile-actions">
			<slot name="actions" />
			<hr style="margin-top: 0" />
		</div>
	</div>
	<div class="dashboard-tile-content">
		<slot />
	</div>
</div>

<style>
	.dashboard-tile {
		/* display: flex;
		flex-direction: column; */
		border-radius: 10px;
		/* align-items: center;
		justify-content: space-between; */
		padding: 5px 0px;
		flex: 1;
	}
	.dashboard-title-header {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.dashboard-tile-title {
		text-align: center;
	}
	.dashboard-tile-subtitle {
		text-align: center;
	}
	.dashboard-tile-actions {
		width: 40%;
	}
</style>
