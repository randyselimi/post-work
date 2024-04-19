<script lang="ts">
	import Dashboard from '../dashboards/dashboard.svelte';
	import UpdateHoursForm from '$lib/forms/update-hours-form.svelte';
	import DashboardTile from '../dashboards/dashboard-tile.svelte';
	import WorkTable from '../tables/work-table.svelte';
	export let getWorkItems: any;
</script>

<Dashboard title="Get Work List View">
	<div slot="actions">
		<UpdateHoursForm />
		<button disabled>Export</button>
	</div>
	<div class="get-work-list-content" slot="content">
		<DashboardTile title="27 Active Items">
			<WorkTable work={getWorkItems}></WorkTable>
		</DashboardTile>
	</div>
</Dashboard>

<style>
	.get-work-list-content {
		display: flex;
		flex-direction: column;
		height: 100%;
	}
</style>
