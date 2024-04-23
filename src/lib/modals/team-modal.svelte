<script lang="ts">
	import type { Team } from '$lib/Team';
	import TeamTable from '$lib/tables/team-table.svelte';
	import UserTable from '$lib/tables/user-table.svelte';
	import DetailModal from './detail-modal.svelte';
	const detailOptions = [
		{ title: 'Feed', position: 0 },
		{ title: 'Members', position: 1 },
		{ title: 'Connected Teams', position: 2 }
		// { title: 'Posted', position: 2 },
		// { title: 'Assigned', position: 3 }
	];
	export let team: Team;
	export let showModal = false;
</script>

<DetailModal {detailOptions} bind:showModal>
	<div slot="content">
		<h2>{team.name}</h2>

		<p>Team Details</p>
	</div>
	<div slot="folder0">
		<h2>This feature is not enabled in the pre-alpha</h2>
	</div>
	<div slot="folder1">
		<UserTable users={team.getMembers()}></UserTable>
	</div>
	<div slot="folder2">
		<TeamTable teams={team.getConnectedTeams()}></TeamTable>
	</div>
	<!-- <div slot="folder2">
		<p>Skills</p>
	</div>
	<div slot="folder3">
		<p>Contact</p>
	</div> -->
</DetailModal>
