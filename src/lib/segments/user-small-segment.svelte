<script lang="ts">
		import { preloadData, pushState, goto } from '$app/navigation';
	import { page } from '$app/stores';
	import UserModal from '../modals/user-modal.svelte';
	import SmallSegment from './small-segment.svelte';

	export let user: any;
	let showModal = false;
</script>

<SmallSegment
	on:click={async (e) => {
		// prevent navigation
		e.preventDefault();

		// run `load` functions (or rather, get the result of the `load` functions
		// that are already running because of `data-sveltekit-preload-data`)
		const result = await preloadData('/user/' + user.id);

		if (result.type === 'loaded' && result.status === 200) {
			pushState('/user/' + user.id, { selected: result.data });
			showModal = true
		} else {
			// something bad happened! try navigating
			goto('/user/' + user.id);
		}
	}}
>
	<!-- <img src={user.avatar} alt="avatar" />
	<div> -->
		<h4>{user.firstName}</h4>
		<!-- <p>{user.email}</p>
	</div> -->
</SmallSegment>


