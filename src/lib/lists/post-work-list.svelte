<script lang="ts">
	import PostWorkModal from '../modals/post-work-modal.svelte';
	import Dashboard from '../dashboards/dashboard.svelte';
	import DashboardTile from '../dashboards/dashboard-tile.svelte';
	import WorkTable from '../tables/work-table.svelte';
	export let postWorkItems: any;
</script>

<Dashboard title="Post Work List View">
	<div slot="actions">
		<PostWorkModal />
		<button disabled>Export</button>
	</div>
	<div class="post-work-list-content" slot="content">
		<DashboardTile title="27 Active Items">
			<WorkTable work={postWorkItems}></WorkTable>
		</DashboardTile>
	</div>
</Dashboard>

<style>
	.post-work-list-content {
		display: flex;
		flex-direction: column;
		height: 100%;
	}
</style>
