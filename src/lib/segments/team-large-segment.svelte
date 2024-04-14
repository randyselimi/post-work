<script lang="ts">
	import { preloadData, pushState, goto } from '$app/navigation';
	import { page } from '$app/stores';
	import TeamModal from '../modals/team-modal.svelte';

	export let team: any;
	let showModal = false;
</script>

<div
	on:click={async (e) => {
		// prevent navigation
		e.preventDefault();

		// run `load` functions (or rather, get the result of the `load` functions
		// that are already running because of `data-sveltekit-preload-data`)
		const result = await preloadData('/team/' + team.id);

		if (result.type === 'loaded' && result.status === 200) {
			pushState('/team/' + team.id, { selected: result.data });
			showModal = true;
		} else {
			// something bad happened! try navigating
			goto('/team/' + team.id);
		}
	}}
	class="container"
>
	<h4>{team.title}</h4>
	<div>
		<p>Members: {team.members}</p>
		<p>Hours: {team.hours}</p>
	</div>
</div>

{#if $page.state.selected && showModal}
	<TeamModal
		team={$page.state.selected.team}
		{showModal}
		on:close={() => {
			showModal = false;
			history.back();
		}}
	/>
{/if}

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
