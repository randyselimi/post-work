<script lang="ts">
	import WorkModal from './work-modal.svelte';

	export let work: any;
	let showModal = false;
</script>

<div on:click={() => (showModal = true)} class="container">
	<h4>{work.title}</h4>
	<p>Hours: {work.hours} Due: {work.due}</p>
</div>

<WorkModal {work} {showModal} />

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
