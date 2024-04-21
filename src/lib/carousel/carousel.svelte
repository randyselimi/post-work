<script lang="ts">
	export let items: any[];
	let index = 0;
	let size = 5;
	$: current = getSlice(index);
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
	<svg
		on:click={() => previous()}
		class="left-chevron"
		xmlns="http://www.w3.org/2000/svg"
		height="1em"
		viewBox="0 0 320 512"
		><style>
			svg {
				fill: #000000;
			}
		</style><path
			d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
		/></svg
	>
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

	<svg
		on:click={() => next()}
		class="right-chevron"
		xmlns="http://www.w3.org/2000/svg"
		height="1em"
		viewBox="0 0 320 512"
		><style>
			svg {
				fill: #000000;
			}
		</style><path
			d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
		/></svg
	>
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
	.left-chevron {
		margin: 0px 6px 0px 10px;
	}

	.right-chevron {
		margin: 0px 10px 0px 6px;
	}
</style>
