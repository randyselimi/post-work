<script lang="ts">
	import { preloadData, pushState, goto } from '$app/navigation';
	import LargeSegment from './large-segment.svelte';

	export let team: any;
	let showModal = false;
</script>

<LargeSegment
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
>
	<h4>{team.title}</h4>
	<div>
		<p>Members: {team.members}</p>
		<p>Hours: {team.hours}</p>
	</div>
</LargeSegment>
