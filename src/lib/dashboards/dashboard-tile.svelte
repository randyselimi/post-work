<script lang="ts">
	export let title = '';
</script>

<div class="dashboard-tile">
	<h3 class="dashboard-tile-title">{title}</h3>
	<slot />
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
	.dashboard-tile-title {
		text-align: center;
	}
</style>
