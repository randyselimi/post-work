<script lang="ts">
	import { preloadData, pushState, goto } from '$app/navigation';
	import { page } from '$app/stores';
	import Avatar from '$lib/avatar.svelte';
	import WideAvatarChip from '$lib/chips/wide-avatar-chip.svelte';
	import UserModal from '../modals/user-modal.svelte';
	import SmallSegment from './small-segment.svelte';

	export let user: any;
	let showModal = false;
</script>

<SmallSegment>
	<div
		on:click={async (e) => {
			// prevent navigation
			e.preventDefault();

			// run `load` functions (or rather, get the result of the `load` functions
			// that are already running because of `data-sveltekit-preload-data`)
			const result = await preloadData('/user/' + user.id);

			if (result.type === 'loaded' && result.status === 200) {
				pushState('/user/' + user.id, { selected: result.data });
				showModal = true;
			} else {
				// something bad happened! try navigating
				goto('/user/' + user.id);
			}
		}}
	>
		<WideAvatarChip {user}></WideAvatarChip>
	</div>
</SmallSegment>
