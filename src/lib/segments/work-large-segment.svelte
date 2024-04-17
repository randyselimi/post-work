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
<LargeSegment>
	<div
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
		<h4 class="segment-title">{work.title}</h4>
		<div>
			<div class="segment-container">
				<div>
					<p class="segment-element">Hours</p>
					<p class="segment-element">{work.hours}</p>
				</div>
				<div>
					<p class="segment-element">Due</p>
					<p class="segment-element">{work.endDate}</p>
				</div>
			</div>
			<p class="segment-element">Skills {work.skills}</p>
		</div>
	</div>
</LargeSegment>

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
