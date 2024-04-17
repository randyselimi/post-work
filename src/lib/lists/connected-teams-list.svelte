<script lang="ts">
	import Dashboard from '../dashboards/dashboard.svelte';
	import DashboardTile from '../dashboards/dashboard-tile.svelte';
	import TeamTable from '$lib/tables/team-table.svelte';
	export let connectedTeams: any;
</script>

<Dashboard title="Connected Teams List View">
	<div slot="actions">
		<button>Connect Team</button>
		<button disabled>Export</button>
	</div>
	<div class="get-work-list-content" slot="content">
		<DashboardTile title="1 Team">
			<TeamTable teams={connectedTeams}></TeamTable>
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
