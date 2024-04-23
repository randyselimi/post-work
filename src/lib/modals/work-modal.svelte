<script lang="ts">
	import { softRoute } from '$lib/SoftRoute';
	import * as db from '$lib/db';
	import type { Task } from '$lib/Task';
	import type { User } from '$lib/User';
	import TallAvatarChip from '$lib/chips/tall-avatar-chip.svelte';
	import DetailModal from './detail-modal.svelte';
	import Modal from './modal.svelte';
	import { loggedUser } from '$lib/db';
	export let work: Task;
	export let showModal = false;
	const postedBy = work.getPostedBy() as User;
	const assignedTo = work.getAssignedTo() as User;
	const detailOptions = [{ title: 'Feed', position: 0 }];
	const actions = ['Edit', 'Delete'];
</script>

<DetailModal {actions} {detailOptions} bind:showModal>
	<div slot="content">
		<h2>{work.title}</h2>
		<div style="display: flex; flex-direction: row;">
			<div on:click={(e) => softRoute(e, 'user', postedBy.id)}>
				<h3>Posted by</h3>
				<TallAvatarChip user={postedBy} />
			</div>
			<div on:click={(e) => softRoute(e, 'user', assignedTo.id)}>
				<h3>Assigned to</h3>
				{#if assignedTo !== null}
					<TallAvatarChip user={assignedTo} />
				{:else}
					<h3>Unassigned</h3>
				{/if}
			</div>
		</div>
		<p>Hours {work.hours}</p>
		<p>Started {work.startDate}</p>
		<p>Billing Folder {work.billingInfo.projectFolder}</p>
		<p>Billing Code {work.billingInfo.projectCode}</p>
		<p>Due {work.endDate}</p>
		<p>Skills {work.skills}</p>
		<p>{work.description}</p>
	</div>
	<div slot="folder0">
		<h2>This feature is not enabled in the pre-alpha</h2>
	</div>
	<div slot="footer">
		{#if work.status === 'Sign-off'}
			<button on:click={() => db.updateState(work.id, 'Complete')}>Sign Off</button>
		{:else if work.status === 'Assigned'}
			<button on:click={() => db.updateState(work.id, 'Sign-off')}>Complete</button>
		{:else if work.status === 'Pending' && work.postedBy !== $loggedUser.id}
			<button on:click={() => db.assignTask(work.id, $loggedUser.id)}>Accept</button>
		{/if}
		{#if work.postedBy === $loggedUser.id}
			<button on:click={() => console.log('Delete')}>Delete</button>
			<button on:click={() => console.log('Cancel')}>Cancel</button>
		{/if}
	</div>
</DetailModal>

<style>
	.work-detail-container {
		display: flex;
	}
	.work-detail-element {
		flex: 1;
	}
	.work-detail-content {
		display: flex;
		flex-direction: column;
	}
</style>
