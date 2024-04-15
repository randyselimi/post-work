<script lang="ts">
	import { preloadData, pushState, goto } from '$app/navigation';
	import LargeSegment from './large-segment.svelte';

	export let user: any;
</script>

<LargeSegment
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
	<h4>{user.fullName}</h4>
	<!-- <img width="100px" height="100px" src={user.avatar} alt="avatar" /> -->
	<p>{user.email}</p>
</LargeSegment>

