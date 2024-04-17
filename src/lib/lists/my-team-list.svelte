<script lang="ts">
	import Dashboard from '../dashboards/dashboard.svelte';
	import DashboardTile from '../dashboards/dashboard-tile.svelte';
	import UpdateHoursModal from '$lib/modals/update-hours-modal.svelte';
	import UserTable from '$lib/tables/user-table.svelte';
	export let myTeamUsers: any;
</script>

<Dashboard title="My Team List View">
	<div slot="actions">
		<button>View Team</button>
		<button>Invite User</button>
		<button disabled>Export</button>
	</div>
	<div class="get-work-list-content" slot="content">
		<DashboardTile title="27 Members">
			<UserTable users={myTeamUsers}></UserTable>
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
