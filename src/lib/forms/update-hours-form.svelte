<script lang="ts">
	import Modal from '../modals/modal.svelte';

	let showModal = false;
</script>

<button on:click={() => (showModal = true)}> Update Hours </button>

<Modal bind:showModal>
	<div style="display: flex">
		<fieldset class="container" id="updateHour">
			<legend>By Day</legend>
			<div class="row">
				<label for="monday1">Monday</label>
				<label for="tuesday1">Tuesday</label>
				<label for="wednesday1">Wednesday</label>
				<label for="thursday1">Thursday</label>
				<label for="friday1">Friday</label>
			</div>
			<div class="row">
				<input type="number" id="monday1" name="hours" />
				<input type="number" id="tuesday1" name="hours" />
				<input type="number" id="wednesday1" name="hours" />
				<input type="number" id="thursday1" name="hours" />
				<input type="number" id="friday1" name="hours" />
			</div>
			<div class="row">
				<input type="number" id="monday2" name="hours" />
				<input type="number" id="tuesday2" name="hours" />
				<input type="number" id="wednesday2" name="hours" />
				<input type="number" id="thursday2" name="hours" />
				<input type="number" id="friday2" name="hours" />
			</div>
			<div class="row">
				<input type="number" id="monday3" name="hours" />
				<input type="number" id="tuesday3" name="hours" />
				<input type="number" id="wednesday3" name="hours" />
				<input type="number" id="thursday3" name="hours" />
				<input type="number" id="friday3" name="hours" />
			</div>
			<div class="row">
				<input type="number" id="monday4" name="hours" />
				<input type="number" id="tuesday4" name="hours" />
				<input type="number" id="wednesday4" name="hours" />
				<input type="number" id="thursday4" name="hours" />
				<input type="number" id="friday4" name="hours" />
			</div>
		</fieldset>
		<div class="container">
			<h3>Week 22</h3>
			<h3>Week 23</h3>
			<h3>Week 24</h3>
			<h3>Week 25</h3>
		</div>
		<fieldset class="container">
			<legend>By Week</legend>

			<input type="number" id="week1" name="hours" />
			<input type="number" id="week2" name="hours" />
			<input type="number" id="week3" name="hours" />
			<input type="number" id="week4" name="hours" />
		</fieldset>
	</div>

	<!-- svelte-ignore a11y-autofocus -->
</Modal>

<style>
	.container {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.row {
		display: flex;
	}
</style>
