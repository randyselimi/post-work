<script lang="ts">
	import Modal from './modal.svelte';

	export let work: string;

	let showModal = false;
</script>

<p on:click={() => (showModal = true)}>{work}</p>

<Modal bind:showModal>
	<div slot="header">
		<h2>{work}</h2>
	</div>

	<div slot="content">
		<p>Work Details</p>
	</div>

	<div slot="footer">
		<!-- svelte-ignore a11y-autofocus -->
		<button autofocus on:click={() => (showModal = false)}>Close</button>
	</div>
</Modal>
