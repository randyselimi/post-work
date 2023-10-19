<script>
	import Modal from './modal.svelte';

	let showModal = false;
</script>

<button on:click={() => (showModal = true)}> Post Work </button>

<Modal bind:showModal>
	<div slot="header">
		<h2>Post Work</h2>
	</div>

	<div slot="content">
		<p>Enter Work Details</p>
	</div>

	<div slot="footer">
		<!-- svelte-ignore a11y-autofocus -->
		<button autofocus on:click={() => (showModal = false)}>Submit</button>
	</div>
</Modal>
