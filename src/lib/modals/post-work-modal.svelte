<script lang="ts">
	import Modal from './modal.svelte';

	let showModal = false;
</script>

<button on:click={() => (showModal = true)}> Post Work </button>

<Modal bind:showModal>
	<div class="header" slot="header">
		<h2>Post Work</h2>
	</div>
	<form slot="content">
		<fieldset id="post-work">
			<legend>Post Work</legend>
			<div class="row">
				<div class="column">
					<label for="description">Description</label>
					<textarea id="description" name="description" />
					<label for="title">Title</label>
					<input id="title" name="title" />
					<label for="level">Level</label>
					<select id="level" name="level">
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
					</select>
					<label for="skills">Skills</label>
					<input id="skills" name="skills" />
				</div>
				<div class="column">
					<label for="hours">Hours</label>
					<input type="number" id="hours" name="hours" />
					<label for="billable">Billable</label>
					<input type="checkbox" id="billable" name="billable" />
					<label for="folder">Project Folder</label>
					<input id="folder" name="folder" />
					<label for="code">Project Code</label>
					<input id="code" name="code" />
				</div>
				<div class="column">
					<label for="startDate">Start Date</label>
					<input type="date" id="startDate" name="startDate" />
					<label for="endDate">Due Date</label>
					<input type="date" id="endDate" name="endDate" />
					<fieldset>
						<legend>Posting Type</legend>
						<label for="radio1">Instant</label>
						<input id="radio1" name="radio" type="radio" />
						<label for="radio2">Request</label>
						<input id="radio2" name="radio" type="radio" />
					</fieldset>
					<button>Submit</button>
				</div>
			</div>
		</fieldset>
	</form>
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
