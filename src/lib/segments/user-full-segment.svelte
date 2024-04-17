<script lang="ts">
	import { preloadData, pushState, goto } from '$app/navigation';
	import Avatar from '$lib/avatar.svelte';
	import TallAvatarChip from '$lib/chips/tall-avatar-chip.svelte';
	import FullSegment from './full-segment.svelte';

	export let user: any;
	let showModal = false;
</script>

<FullSegment>
	<div
		on:click={async (e) => {
			// prevent navigation
			e.preventDefault();

			// run `load` functions (or rather, get the result of the `load` functions
			// that are already running because of `data-sveltekit-preload-data`)
			const result = await preloadData('/user/' + user.id);

			if (result.type === 'loaded' && result.status === 200) {
				pushState('/user/' + user.id, { selected: result.data });
			} else {
				// something bad happened! try navigating
				goto('/user/' + user.id);
			}
		}}
	>
		<TallAvatarChip {user} />
	</div>
</FullSegment>

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
