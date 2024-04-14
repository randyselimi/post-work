<script lang="ts">
	import Modal from './modal.svelte';

	export let team: string;
	export let showModal = false;
</script>

<Modal bind:showModal>
	<div slot="header">
		<h2>{team}</h2>
	</div>

	<div slot="content">
		<p>Team Details</p>
	</div>

	<div slot="footer">
		<!-- svelte-ignore a11y-autofocus -->
		<button autofocus on:click={() => (showModal = false)}>Close</button>
	</div>
</Modal>
