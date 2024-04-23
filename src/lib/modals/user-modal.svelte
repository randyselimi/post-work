<script lang="ts">
	import type { User } from '$lib/User';
	import type { Team } from '$lib/Team';
	import TallAvatarChip from '$lib/chips/tall-avatar-chip.svelte';
	import DetailModal from './detail-modal.svelte';
	import WorkTable from '../tables/work-table.svelte';
	import { softRoute } from '$lib/SoftRoute';

	export let user: User;
	export let showModal = false;
	let team = user.team as Team;

	const detailOptions = [
		{ title: 'Feed', position: 0 },
		{ title: 'Assigned', position: 1 },
		{ title: 'Posted', position: 2 }
	];
</script>

<DetailModal {detailOptions} bind:showModal>
	<div slot="content">
		<TallAvatarChip {user} />
		<button on:click={(e) => softRoute(e, 'team', user.team)}>{user.getTeam().name}</button>
		<h2>{user.email}</h2>
		<p>Skills: {user.skills}</p>
	</div>

	<div slot="folder0">
		<h2>This feature is not enabled in the pre-alpha</h2>
	</div>
	<div slot="folder1">
		<WorkTable work={user.getWorkAssigned()}></WorkTable>
	</div>
	<div slot="folder2">
		<WorkTable work={user.getWorkPosted()}></WorkTable>
	</div>
</DetailModal>
