<script lang="ts">
	import type { Team } from '$lib/Team';
	import DetailModal from './detail-modal.svelte';
	const detailOptions = [
		{ title: 'Members', position: 0 },
		{ title: 'Connected Teams', position: 1 },
		{ title: 'Posted', position: 2 },
		{ title: 'Assigned', position: 3 }
	];
	export let team: Team;
	export let showModal = false;
</script>

<DetailModal {detailOptions} bind:showModal>
	<div slot="content">
		<h2>{team.name}</h2>

		<p>Team Details</p>
	</div>
	<div slot="folder0">
		<p>Skills</p>
	</div>
	<div slot="folder1">
		<p>Skills</p>
	</div>
	<div slot="folder2">
		<p>Skills</p>
	</div>
	<div slot="folder3">
		<p>Contact</p>
	</div>
</DetailModal>
