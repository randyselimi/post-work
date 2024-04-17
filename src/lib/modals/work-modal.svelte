<script lang="ts">
	import type { Task } from '$lib/Task';
	import type { User } from '$lib/User';
	import TallAvatarChip from '$lib/chips/tall-avatar-chip.svelte';
	import DetailModal from './detail-modal.svelte';
	import Modal from './modal.svelte';

	export let work: Task;
	export let showModal = false;
	const postedBy = work.postedBy as User;
	const assignedTo = work.assignedTo as User;
	const detailOptions = [
		{ title: 'Communications', position: 0 },
		{ title: 'History', position: 1 }
	];
	console.log(work);
</script>

<DetailModal {detailOptions} bind:showModal>
	<div slot="content">
		<h2>{work.title}</h2>
		<div style="display: flex; flex-direction: row;">
			<div>
				<h3>Posted by</h3>
				<TallAvatarChip user={postedBy} />
			</div>
			<div>
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
		<p>Communications</p>
	</div>
	<div slot="folder1">
		<p>History</p>
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
