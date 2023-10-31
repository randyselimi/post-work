<script lang="ts">
	import Modal from './modal.svelte';

	export let user: string;
	export let showModal = false;
</script>

<Modal bind:showModal>
	<div slot="header">
		<h2>{user}</h2>
	</div>

	<div slot="content">
		<p>User Details</p>
	</div>

	<div slot="footer">
		<!-- svelte-ignore a11y-autofocus -->
		<button autofocus on:click={() => (showModal = false)}>Close</button>
	</div>
</Modal>
