<script lang="ts">
	import type { Team } from '$lib/Team';
	import Modal from './modal.svelte';

	export let team: Team;
	export let showModal = false;
</script>

<Modal bind:showModal>
	<div>
		<h2>{team.name}</h2>

		<p>Team Details</p>
	</div>
	<div></div>
	<!-- <p>Members: {team.members.length}</p>
		<p>Connected Teams: {team.connectedTeams.length}</p> -->

	<!-- svelte-ignore a11y-autofocus -->
</Modal>
