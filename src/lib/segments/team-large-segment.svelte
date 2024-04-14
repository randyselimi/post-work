<script lang="ts">
	import TeamModal from '../modals/team-modal.svelte';

	export let team: any;
	let showModal = false;
</script>

<div on:click={() => (showModal = true)} class="container">
	<h4>{team.title}</h4>
	<div>
		<p>Members: {team.members}</p>
		<p>Hours: {team.hours}</p>
	</div>
</div>

<TeamModal {team} {showModal} />

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
