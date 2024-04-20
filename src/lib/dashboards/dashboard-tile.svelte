<script lang="ts">
	import { goto } from '$app/navigation';

	export let title = '';
	export let redirect = '';
</script>

<div class="dashboard-tile">
	<div class="dashboard-title-header">
		<div
			style="margin-bottom: 0"
			class="dashboard-tile-title"
			tabindex="0"
			role="button"
			on:keydown={() => goto('/' + redirect)}
			on:click={() => goto('/' + redirect)}
		>
			{#if redirect}<span
					style="font-size: 1.4rem; padding: .2rem .2rem; color: transparent"
					class="material-symbols-outlined"
				>
					more_vert
				</span>
			{/if}
			<h3 class="dashboard-tile-title">{title}</h3>

			{#if redirect}<span
					style="padding: .2rem .2rem; font-size: 1.4rem"
					class="material-symbols-outlined"
				>
					more_vert
				</span>
			{/if}
		</div>
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
		display: flex;
		align-items: center;
		margin-top: 0;
		margin-bottom: 0;
	}
	.dashboard-tile-subtitle {
		text-align: center;
	}
	.dashboard-tile-actions {
		width: 40%;
	}
</style>
