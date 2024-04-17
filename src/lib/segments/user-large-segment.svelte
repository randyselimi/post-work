<script lang="ts">
	import { preloadData, pushState, goto } from '$app/navigation';
	import Avatar from '$lib/avatar.svelte';
	import LargeSegment from './large-segment.svelte';

	export let user: any;
</script>

<LargeSegment>
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
		<div class="segment-container">
			<h4 class="segment-title">{user.fullName}</h4>
			<Avatar size={75} email={user.email} />
			<p class="segment-element">{user.role}</p>
		</div>
	</div>
</LargeSegment>

<style>
	.segment-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		white-space: nowrap;
	}
	.segment-title {
		font-size: 0.7rem;
		margin-top: 0;
		margin-bottom: 0;
	}
	.segment-element {
		font-size: 0.7rem;
		margin-top: 0;
		margin-bottom: 0;
		text-overflow: clip;
		overflow: hidden;
	}
</style>
