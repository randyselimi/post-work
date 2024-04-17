<script lang="ts">
	import type { User } from '$lib/User';
	import type { Team } from '$lib/Team';
	import TallAvatarChip from '$lib/chips/tall-avatar-chip.svelte';
	import DetailModal from './detail-modal.svelte';
	import WorkTable from '../tables/work-table.svelte';

	export let user: User;
	export let showModal = false;
	let team = user.team as Team;

	const detailOptions = [
		{ title: 'Details', position: 0 },
		{ title: 'Assigned', position: 1 },
		{ title: 'Posted', position: 2 },
		{ title: 'Skills', position: 3 },
		{ title: 'Contact', position: 4 }
	];
</script>

<DetailModal {detailOptions} bind:showModal>
	<div slot="content">
		<h2>{user.fullName}</h2>
		<TallAvatarChip {user} />
		<p>{team.name}</p>
	</div>

	<div slot="folder0">
		<WorkTable work={user.workAssigned}></WorkTable>
	</div>
	<div slot="folder1">
		<WorkTable work={user.workPosted}></WorkTable>
	</div>
	<div slot="folder2">
		<p>Skills</p>
	</div>
	<div slot="folder3">
		<p>Contact</p>
	</div>
</DetailModal>
