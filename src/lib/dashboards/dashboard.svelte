<script lang="ts">
	import { goto } from '$app/navigation';

	export let title = '';
	export let redirect = '';
</script>

<div class="dashboard">
	<div
		class="dashboard-title"
		style="margin-top: 1rem"
		tabindex="0"
		role="button"
		on:keydown={() => goto('/' + redirect)}
		on:click={() => goto('/' + redirect)}
	>
		<h2 class="dashboard-title">{title}</h2>

		{#if redirect}<span
				style="padding: .1rem .1rem; font-size: 1.7rem"
				class="material-symbols-outlined"
			>
				more_vert
			</span>
		{/if}
	</div>
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
		display: flex;
		align-items: center;
		margin-top: 00rem;
		margin-bottom: 0;
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
