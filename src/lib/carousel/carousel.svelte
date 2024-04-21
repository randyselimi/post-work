<script lang="ts">
	import BackButton from '$lib/buttons/back-button.svelte';
	import ForwardButton from '$lib/buttons/forward-button.svelte';

	export let items: any[];
	let index = 0;
	let size = 5;
	$: current = items.length && getSlice(index);
	$: canGoBack = index - size >= 0;
	$: canGoForward = index + size < items.length;
	function getSlice() {
		let sliceAmount = size;
		if (items.length < index + size) {
			sliceAmount = items.length;
		}
		return items.slice(index, index + sliceAmount);
	}
	function next() {
		if (index + size < items.length) {
			index += size;
		}
		console.log(index);
	}
	function previous() {
		if (index - size >= 0) {
			index -= size;
		}
		console.log(index);
	}
</script>

<div class="carousel">
	<BackButton disabled={!canGoBack} on:click={() => previous()} />
	<!-- <fieldset> -->
	<div class="carousel-content">
		{#if current && current.length > 0}
			{#each current as item}
				<slot {item} />
			{/each}
		{:else}
			<p>No items to display</p>
		{/if}
	</div>
	<!-- </fieldset> -->
	<ForwardButton disabled={!canGoForward} on:click={() => next()} />
</div>

<style>
	.carousel {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.carousel-content {
		flex: 2;
		overflow-x: auto;
		overflow-y: hidden;
		display: flex;
		justify-content: center;
	}
</style>
