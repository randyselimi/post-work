<script lang="ts">
	export let title = '';
</script>

<div class="dashboard-tile">
	<div class="dashboard-title-header">
		<h3 style="margin-bottom: 0" class="dashboard-tile-title">
			{title} <span class="material-symbols-outlined"> more_vert </span>
		</h3>
		<p style="margin-top: 0; margin-bottom: .5rem" class="dashboard-tile-subtitle">
			1 Available 4 Test
		</p>
		<div class="dashboard-tile-actions">
			<!-- <button style="margin-bottom: 0">Export</button> -->
			<button>Add</button>
			<button disabled>Test</button>
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
