<script lang="ts">
	import type { User } from '$lib/User';
	import type { Team } from '$lib/Team';
	import Modal from './modal.svelte';
	import TallAvatarChip from '$lib/chips/tall-avatar-chip.svelte';

	export let user: User;
	export let showModal = false;
	let team = user.team as Team;
</script>

<Modal bind:showModal>
	<TallAvatarChip {user} />

	<p>{team.name}</p>

	<!-- svelte-ignore a11y-autofocus -->
</Modal>
