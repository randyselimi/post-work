<script lang="ts">
	import type { User } from '$lib/User';
	import type { Team } from '$lib/Team';
	import Modal from './modal.svelte';

	export let user: User;
	export let showModal = false;
	let team = user.team as Team
</script>

<Modal bind:showModal>
	<div slot="header">
		<h2>{user.fullName}</h2>
		<h3>{user.email}</h3>
	</div>

	<div slot="content">
		<p>{team.name}</p>
	</div>

	<div slot="footer">
		<!-- svelte-ignore a11y-autofocus -->
		<button autofocus on:click={() => (showModal = false)}>Close</button>
	</div>
</Modal>
