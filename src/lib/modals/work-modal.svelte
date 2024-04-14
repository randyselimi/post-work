<script lang="ts">
	import type { Task } from '$lib/Task';
	import type { User } from '$lib/User';
	import Modal from './modal.svelte';

	export let work: Task;
	export let showModal = false;
	const postedBy = work.postedBy as User
	const assignedTo = work.assignedTo as User
</script>

<Modal bind:showModal>
	<div slot="header">
		<h2>{work.title}</h2>
		<h3>{postedBy.fullName}</h3>
		<h3>{assignedTo?.fullName || 'Unassigned'}</h3>
	</div>

	<div slot="content">
		<p>{work.description}</p>
	</div>

	<div slot="footer">
		<!-- svelte-ignore a11y-autofocus -->
		<button autofocus on:click={() => (showModal = false)}>Close</button>
	</div>
</Modal>
