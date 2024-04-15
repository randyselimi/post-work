<script lang="ts">
	import { preloadData, pushState, goto } from '$app/navigation';
	import { page } from '$app/stores';
	import WorkModal from '../modals/work-modal.svelte';
	import LargeSegment from './large-segment.svelte';

	export let work: any;
	let showModal = false;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<LargeSegment
	on:click={async (e) => {
		// prevent navigation
		e.preventDefault();

		// run `load` functions (or rather, get the result of the `load` functions
		// that are already running because of `data-sveltekit-preload-data`)
		const result = await preloadData('/work/' + work.id);

		if (result.type === 'loaded' && result.status === 200) {
			showModal = true;
			pushState('/work/' + work.id, { selected: result.data });
		} else {
			// something bad happened! try navigating
			goto('/work/' + work.id);
		}
	}}
>
	<h4>{work.title}</h4>
	<!-- <div>
		<p>Hours: {work.hours}</p>
		<p>Skills: {work.skills}</p>
		<p>Due: {work.endDate}</p>
	</div> -->
</LargeSegment>
