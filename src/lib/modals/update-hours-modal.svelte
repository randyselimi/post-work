<script>
	import Modal from './modal.svelte';

	let showModal = false;
</script>

<button on:click={() => (showModal = true)}> Update Hours </button>

<Modal bind:showModal>
	<div slot="header">
		<h2>Update Hours</h2>
	</div>

	<div slot="content">
		<p>Enter Availability Details</p>
	</div>

	<div slot="footer">
		<!-- svelte-ignore a11y-autofocus -->
		<button autofocus on:click={() => (showModal = false)}>Submit</button>
	</div>
</Modal>
