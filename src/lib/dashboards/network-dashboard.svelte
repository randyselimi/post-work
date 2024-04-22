<script lang="ts">
	import type { Team } from '$lib/Team';
	import Dashboard from './dashboard.svelte';
	import DashboardTile from './dashboard-tile.svelte';
	import UserCarousel from '../carousel/user-carousel.svelte';
	import TeamCarousel from '../carousel/team-carousel.svelte';
	import TeamColorChipLarge from '$lib/chips/team-color-chip-large.svelte';
	export let myTeam: Team;
	export let connectedTeams: Team[];
</script>

<Dashboard title="Network">
	<div slot="actions"></div>
	<div class="network-content" slot="content">
		<DashboardTile title="" redirect="my-team">
			<div slot="title">
				<TeamColorChipLarge team={myTeam.id}></TeamColorChipLarge>{myTeam.name}
			</div>
			<p slot="subtext" style="margin-top: 0; margin-bottom: .5rem" class="dashboard-tile-subtitle">
				{myTeam.members.length} team members
			</p>
			<div slot="actions">
				<button>View Team</button>
				<button disabled>Invite User</button>
			</div>
			<UserCarousel users={myTeam.getMembers().slice(0, 5)} />
		</DashboardTile>
		<DashboardTile title="Connected Teams" redirect="connected-teams">
			<p slot="subtext" style="margin-top: 0; margin-bottom: .5rem" class="dashboard-tile-subtitle">
				{connectedTeams.length} connected team(s)
			</p>
			<div slot="actions">
				<button disabled>Connect Team</button>
			</div>
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
