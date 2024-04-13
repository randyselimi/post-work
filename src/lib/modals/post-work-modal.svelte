<script lang="ts">
	import Modal from './modal.svelte';

	let showModal = false;
</script>

<button on:click={() => (showModal = true)}> Post Work </button>

<Modal bind:showModal>
	<div class="header" slot="header">
		<h2>Post Work</h2>
	</div>

	<div class="row" slot="content">
		<div class="column">
			<label for="name">Title</label>
			<input id="name" name="name" />
			<label for="name">Description</label>
			<input id="name" name="name" />
			<label for="name">Level</label>
			<input id="name" name="name" />
			<label for="name">Skills</label>
			<input id="name" name="name" />
		</div>
		<div class="column">
			<label for="name">Hours</label>
			<input id="name" name="name" />
			<label for="name">Billable</label>
			<input id="name" name="name" />
			<label for="name">Project Folder</label>
			<input id="name" name="name" />
			<label for="name">Project Code</label>
			<input id="name" name="name" />
		</div>
		<div class="column">
			<label for="name">Start Date</label>
			<input id="name" name="name" />
			<label for="name">Due Date</label>
			<input id="name" name="name" />
			<label for="name">Posting Type</label>
			<input id="name" name="name" />
			<button>Submit</button>
		</div>
	</div>

	<div slot="footer">
		<!-- svelte-ignore a11y-autofocus -->
		<!-- <button autofocus on:click={() => (showModal = false)}>Submit</button> -->
	</div>
</Modal>

<style>
	.header {
		text-align: center;
	}
	.column {
		display: flex;
		flex-direction: column;
	}
	.row {
		display: flex;
		justify-content: space-between;
	}
</style>
