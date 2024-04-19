<script lang="ts">
	import Modal from '../modals/modal.svelte';

	let showModal = false;
</script>

<button on:click={() => (showModal = true)}> Update Hours </button>

<Modal bind:showModal>
	<h2>Update Hours</h2>

	<fieldset id="updateHour">
		<legend>By Day</legend>
		<div class="column">
			<div class="row">
				<label for="monday">Monday</label>
				<input type="number" id="monday" name="hours" />
				<label for="tuesday">Tuesday</label>
				<input type="number" id="tuesday" name="hours" />
				<label for="wednesday">Wednesday</label>
				<input type="number" id="wednesday" name="hours" />
				<label for="thursday">Thursday</label>
				<input type="number" id="thursday" name="hours" />
				<label for="friday">Friday</label>
				<input type="number" id="friday" name="hours" />
			</div>
			<div class="row">
				<label for="monday">Monday</label>
				<input type="number" id="monday" name="hours" />
				<label for="tuesday">Tuesday</label>
				<input type="number" id="tuesday" name="hours" />
				<label for="wednesday">Wednesday</label>
				<input type="number" id="wednesday" name="hours" />
				<label for="thursday">Thursday</label>
				<input type="number" id="thursday" name="hours" />
				<label for="friday">Friday</label>
				<input type="number" id="friday" name="hours" />
			</div>
			<div class="row">
				<label for="monday">Monday</label>
				<input type="number" id="monday" name="hours" />
				<label for="tuesday">Tuesday</label>
				<input type="number" id="tuesday" name="hours" />
				<label for="wednesday">Wednesday</label>
				<input type="number" id="wednesday" name="hours" />
				<label for="thursday">Thursday</label>
				<input type="number" id="thursday" name="hours" />
				<label for="friday">Friday</label>
				<input type="number" id="friday" name="hours" />
			</div>
		</div>
	</fieldset>

	<fieldset id="updateWeek">
		<legend>By Week</legend>
		<div class="column">
			<div class="row">
				<label for="week1">Week 1</label>
				<input type="number" id="week1" name="hours" />
			</div>
			<div class="row">
				<label for="week2">Week 2</label>
				<input type="number" id="week2" name="hours" />
			</div>
			<div class="row">
				<label for="week3">Week 3</label>
				<input type="number" id="week3" name="hours" />
			</div>
		</div>
	</fieldset>

	<!-- svelte-ignore a11y-autofocus -->
</Modal>
