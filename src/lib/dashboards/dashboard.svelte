<script lang="ts">
	export let title = '';
</script>

<div class="dashboard">
	<h2 class="dashboard-title">
		{title} <span class="material-symbols-outlined"> more_vert </span>
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
		/* display: flex; */
		padding: 10px;
		flex: 1;
		/* flex-direction: column; */
		/* align-items: stretch; */
		background-color: white;
		height: 100%;
		box-shadow:
			rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
			rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
	}
</style>
