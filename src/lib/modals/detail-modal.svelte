<script lang="ts">
	import Modal from './modal.svelte';

	export let showModal: boolean;
	export let detailOptions: { title: string; position: number }[];
	let selectedDetail = 0;
	let dialog: HTMLDialogElement; // HTMLDialogElement

	$: if (dialog) showModal ? dialog.showModal() : dialog.close();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<button>Test</button>
<Modal bind:showModal>
	<div class="detail-modal-header">
		<div>Back Button</div>
		<div>Detail View</div>
		<span
			on:click={() => (showModal = false)}
			style="color: red; font-size: 1.7rem;"
			class="material-symbols-outlined"
		>
			close
		</span>
	</div>
	<div class="detail-modal-content">
		<div class="detail-modal-content-element">
			<slot name="content"></slot>
		</div>
		<div class="detail-modal-content-element detail-modal-folders">
			<div>
				<div>
					{#each detailOptions as detailOption}
						<button on:click={() => (selectedDetail = detailOption.position)}
							>{detailOption.title}</button
						>
					{/each}
				</div>
				{#if selectedDetail === 0}
					<slot name="folder0"></slot>
				{:else if selectedDetail === 1}
					<slot name="folder1"></slot>
				{:else if selectedDetail === 2}
					<slot name="folder2"></slot>
				{:else if selectedDetail === 3}
					<slot name="folder3"></slot>
				{:else if selectedDetail === 4}
					<slot name="folder4"></slot>
				{/if}
			</div>
		</div>
	</div>

	<!-- svelte-ignore a11y-autofocus -->
</Modal>

<style>
	.detail-modal-header {
		display: flex;
		justify-content: space-between;
		align-items: stretch;
	}
	.detail-modal-content {
		display: flex;
		align-items: stretch;
	}
	.detail-modal-content-element {
		width: 50%;
	}
</style>
