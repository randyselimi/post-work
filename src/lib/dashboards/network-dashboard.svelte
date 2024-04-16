<script lang="ts">
	import type { Team } from '$lib/Team';
	import Dashboard from './dashboard.svelte';
	import DashboardTile from './dashboard-tile.svelte';
	import UserCarousel from '../carousel/user-carousel.svelte';
	import TeamCarousel from '../carousel/team-carousel.svelte';
	export let myTeam: Team;
	export let connectedTeams: Team[];
</script>

<Dashboard title="Network">
	<div slot="actions"></div>
	<div class="network-content" slot="content">
		<DashboardTile title="My Team">
			<!-- <h2>Integrations Team</h2>
			<p>Members: 5</p>
			<p>Projects: 3</p>
			<p>Tasks: 10</p>-->
			<UserCarousel users={myTeam.members.slice(0, 5)} />
		</DashboardTile>
		<DashboardTile title="Connected Teams">
			<TeamCarousel teams={connectedTeams} />
		</DashboardTile>
		<DashboardTile title="Organization">
			<h1 style="text-align: center;">Please Add An Organization</h1>
		</DashboardTile>
	</div>
</Dashboard>

<style>
	.network-content {
		display: flex;
		justify-content: space-around;
		height: 100%;
	}
</style>
