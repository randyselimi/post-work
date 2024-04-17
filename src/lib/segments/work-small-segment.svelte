<script lang="ts">
	import { preloadData, pushState, goto } from '$app/navigation';
	import { page } from '$app/stores';
	import WorkModal from '../modals/work-modal.svelte';
	import SmallSegment from './small-segment.svelte';

	export let work: any;
	let showModal = false;
</script>

<SmallSegment>
	<div
		on:click={async (e) => {
			// prevent navigation
			e.preventDefault();

			// run `load` functions (or rather, get the result of the `load` functions
			// that are already running because of `data-sveltekit-preload-data`)
			const result = await preloadData('/work/' + work.id);

			if (result.type === 'loaded' && result.status === 200) {
				pushState('/work/' + work.id, { selected: result.data });
				showModal = true;
			} else {
				// something bad happened! try navigating
				goto('/work/' + work.id);
			}
		}}
	>
		<h4 class="segment-title">{work.title}</h4>
		<p class="segment-element">Hours: {work.hours} Due: {work.endDate}</p>
	</div>
</SmallSegment>

<style>
	.segment-title {
		font-size: 0.7rem;
		margin-top: 0;
		margin-bottom: 0;
	}
	.segment-container {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		white-space: nowrap;
	}
	.segment-element {
		font-size: 0.7rem;
		margin-top: 0;
		margin-bottom: 0;
		text-overflow: clip;
		overflow: hidden;
	}
</style>
