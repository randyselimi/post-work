<script lang="ts">
	import Modal from '../modals/modal.svelte';
	import * as db from '$lib/db';
	import { loggedUser } from '$lib/db';

	let showModal = false;
	$: weeks = $loggedUser && $loggedUser.availability;
</script>

<button on:click={() => (showModal = true)}> Update Hours </button>

<Modal bind:showModal>
	<div style="display: flex">
		<fieldset class="container" id="updateHour">
			<legend>By Day</legend>
			<div class="row">
				<div class="hour-week-container">
					<label for="monday1">Monday</label>
					<input
						bind:value={weeks[0].days[0].hours}
						class="hours-input"
						type="number"
						id="monday1"
						name="hours"
					/>
				</div>
				<div class="hour-week-container">
					<label for="tuesday1">Tuesday</label>
					<input
						bind:value={weeks[0].days[1].hours}
						class="hours-input"
						type="number"
						id="tuesday1"
						name="hours"
					/>
				</div>
				<div class="hour-week-container">
					<label for="wednesday1">Wednesday</label>
					<input
						bind:value={weeks[0].days[2].hours}
						class="hours-input"
						type="number"
						id="wednesday1"
						name="hours"
					/>
				</div>
				<div class="hour-week-container">
					<label for="thursday1">Thursday</label>
					<input
						bind:value={weeks[0].days[3].hours}
						class="hours-input"
						type="number"
						id="thursday1"
						name="hours"
					/>
				</div>
				<div class="hour-week-container">
					<label for="friday1">Friday</label>
					<input
						bind:value={weeks[0].days[4].hours}
						class="hours-input"
						type="number"
						id="friday1"
						name="hours"
					/>
				</div>
			</div>
			<div class="row">
				<input
					bind:value={weeks[1].days[0].hours}
					class="hours-input"
					type="number"
					id="monday2"
					name="hours"
				/>
				<input
					bind:value={weeks[1].days[1].hours}
					class="hours-input"
					type="number"
					id="tuesday2"
					name="hours"
				/>
				<input
					bind:value={weeks[1].days[2].hours}
					class="hours-input"
					type="number"
					id="wednesday2"
					name="hours"
				/>
				<input
					bind:value={weeks[1].days[3].hours}
					class="hours-input"
					type="number"
					id="thursday2"
					name="hours"
				/>
				<input
					bind:value={weeks[1].days[4].hours}
					class="hours-input"
					type="number"
					id="friday2"
					name="hours"
				/>
			</div>
			<div class="row">
				<input
					bind:value={weeks[2].days[0].hours}
					class="hours-input"
					type="number"
					id="monday3"
					name="hours"
				/>
				<input
					bind:value={weeks[2].days[1].hours}
					class="hours-input"
					type="number"
					id="tuesday3"
					name="hours"
				/>
				<input
					bind:value={weeks[2].days[2].hours}
					class="hours-input"
					type="number"
					id="wednesday3"
					name="hours"
				/>
				<input
					bind:value={weeks[2].days[3].hours}
					class="hours-input"
					type="number"
					id="thursday3"
					name="hours"
				/>
				<input
					bind:value={weeks[2].days[4].hours}
					class="hours-input"
					type="number"
					id="friday3"
					name="hours"
				/>
			</div>
			<div class="row">
				<input
					bind:value={weeks[3].days[0].hours}
					class="hours-input"
					type="number"
					id="monday4"
					name="hours"
				/>
				<input
					bind:value={weeks[3].days[1].hours}
					class="hours-input"
					type="number"
					id="tuesday4"
					name="hours"
				/>
				<input
					bind:value={weeks[3].days[2].hours}
					class="hours-input"
					type="number"
					id="wednesday4"
					name="hours"
				/>
				<input
					bind:value={weeks[3].days[3].hours}
					class="hours-input"
					type="number"
					id="thursday4"
					name="hours"
				/>
				<input
					bind:value={weeks[3].days[4].hours}
					class="hours-input"
					type="number"
					id="friday4"
					name="hours"
				/>
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

			<input
				value={weeks[0].days.reduce((acc, day) => acc + day.hours, 0)}
				on:input={(e) => {
					const newValue = Number(e.target.value);
					const averageValue = Math.floor(newValue / 5);
					const remainder = newValue % 5;

					weeks[0].days.forEach((day) => {
						day.hours = averageValue;
					});

					for (let i = 0; i < remainder; i++) {
						weeks[0].days[i].hours += 1;
					}
					weeks[0].days[4].hours += 1;
				}}
				class="hours-input"
				type="number"
				id="week1"
				name="hours"
			/>
			<input
				value={weeks[1].days.reduce((acc, day) => acc + day.hours, 0)}
				on:input={(e) => {
					const newValue = Number(e.target.value);
					const averageValue = Math.floor(newValue / 5);
					const remainder = newValue % 5;

					weeks[1].days.forEach((day) => {
						day.hours = averageValue;
					});

					for (let i = 0; i < remainder; i++) {
						weeks[1].days[i].hours += 1;
					}
					weeks[1].days[4].hours += 1;
				}}
				class="hours-input"
				type="number"
				id="week2"
				name="hours"
			/>
			<input
				value={weeks[2].days.reduce((acc, day) => acc + day.hours, 0)}
				on:input={(e) => {
					const newValue = Number(e.target.value);
					const averageValue = Math.floor(newValue / 5);
					const remainder = newValue % 5;

					weeks[2].days.forEach((day) => {
						day.hours = averageValue;
					});

					for (let i = 0; i < remainder; i++) {
						weeks[2].days[i].hours += 1;
					}
					weeks[2].days[4].hours += 1;
				}}
				class="hours-input"
				type="number"
				id="week3"
				name="hours"
			/>
			<input
				value={weeks[3].days.reduce((acc, day) => acc + day.hours, 0)}
				on:input={(e) => {
					const newValue = Number(e.target.value);
					const averageValue = Math.floor(newValue / 5);
					const remainder = newValue % 5;
					debugger;

					weeks[3].days.forEach((day) => {
						day.hours = averageValue;
					});

					for (let i = 0; i < remainder; i++) {
						weeks[3].days[i].hours += 1;
					}
					weeks[3].days[4].hours += 1;
				}}
				class="hours-input"
				type="number"
				id="week4"
				name="hours"
			/>
		</fieldset>
	</div>
	<div style="display: flex; align-items: center; flex-direction: column" slot="footer">
		<button
			on:click={() => {
				db.updateAvailability($loggedUser.id, $loggedUser.availability);
				showModal = false;
			}}>Update</button
		>
	</div>
	<!-- svelte-ignore a11y-autofocus -->
</Modal>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-evenly;
	}
	.hours-input {
		width: 3rem;
		height: 2rem;
		margin: 1rem;
	}
	.hour-week-container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.row {
		display: flex;
	}
</style>
