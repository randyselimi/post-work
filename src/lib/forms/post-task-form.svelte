<script lang="ts">
	import { enhance } from '$app/forms';
	import SkillChipInput from '$lib/chips/skill-chip-input.svelte';
	import * as db from '$lib/db';
	import { loggedUser } from '$lib/db';
	import Modal from '$lib/modals/modal.svelte';

	$: showModal = false;
	$: billable = false;
	const currentDate = new Date();
	const formattedDate = `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`;
</script>

<button on:click={() => (showModal = true)}> Post Task </button>

<Modal bind:showModal>
	<form
		method="POST"
		use:enhance={({ formData }) => {
			const task = {
				id: 2000 + Math.floor(Math.random() * 1000),
				title: formData.get('title'),
				description: formData.get('description'),
				skills: formData.get('skills').split(','),
				role: formData.get('role'),
				hours: Number(formData.get('hours')),
				billable: formData.get('billable') === 'true' ? true : false,
				billingInfo: {
					billingType: formData.get('billingType'),
					projectFolder: formData.get('projectFolder'),
					projectCode: formData.get('projectCode')
				},
				postedBy: $loggedUser.id,
				assignedTo: null,
				applicants: [],
				status: 'Pending',
				startDate: formData.get('startDate'),
				endDate: formData.get('endDate')
			};
			db.postTask(task);
		}}
	>
		<fieldset id="post-task">
			<legend>Post Task</legend>
			<div class="row">
				<div class="column">
					<div>
						<label for="description">Description</label>
						<textarea id="description" name="description" />
					</div>
					<div>
						<label for="title">Title</label>
						<input id="title" name="title" />
					</div>
					<div>
						<label for="role">Role</label>
						<select id="role" name="role">
							<option value="Associate">Associate</option>
							<option value="Senior Associate">Senior Associate</option>
							<option value="Supervisor">Supervisor</option>
							<option value="Manager">Manager</option>
							<option value="Senior Manager">Senior Manager</option>
							<option value="Director">Director</option>
						</select>
					</div>
					<div>
						<label for="skills">Skills</label>
						<SkillChipInput></SkillChipInput>
					</div>
				</div>
				<div class="column">
					<div class="form-container">
						<div style="display: flex; flex-direction: column;">
							<label for="hours">Hours</label>
							<input value="0" style="width: 3rem;" type="number" id="hours" name="hours" />
						</div>
						<div style="display: flex; flex-direction: column; ">
							<label for="billable">Billable</label>
							<input
								style="margin-top: .3rem; height: .8rem"
								type="checkbox"
								id="billable"
								name="billable"
								bind:checked={billable}
							/>
						</div>
					</div>
					<div>
						<div>
							<label for="billingType">Billing Type</label>
							<select disabled={!billable} id="billingType" name="billingType">
								<option value="SolidBill">SolidBill</option>
								<option value="RSSupport">RSSupport</option>
							</select>
						</div>
						<div>
							<label for="projectFolder">Project Folder</label>
							<input disabled={!billable} id="projectFolder" name="projectFolder" />
						</div>
						<div>
							<label for="projectCode">Project Code</label>
							<input disabled={!billable} id="projectCode" name="projectCode" />
						</div>
					</div>
				</div>
				<div class="column">
					<div>
						<label for="startDate">Start Date</label>
						<input type="date" value="2024-04-22" id="startDate" name="startDate" />
					</div>
					<div>
						<label for="endDate">Due Date</label>
						<input type="date" id="endDate" name="endDate" />
					</div>
					<div>
						<fieldset class="form-container">
							<legend>Posting Type</legend>
							<div style="display: flex; flex-direction: column; margin-right: .5rem">
								<label style="font-size: .8rem" for="radio1">Instant</label>
								<input checked id="radio1" name="radio" type="radio" />
							</div>
							<div style="display: flex; flex-direction: column; margin-left: .5rem">
								<label style="font-size: .8rem" for="radio2">Request</label>
								<input disabled id="radio2" name="radio" type="radio" />
							</div>
						</fieldset>
					</div>

					<button type="button">Submit</button>
				</div>
			</div>
		</fieldset>
	</form>
</Modal>

<style>
	.header {
		text-align: center;
	}
	.form-container {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.column {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.row {
		display: flex;
		justify-content: space-between;
	}
</style>
