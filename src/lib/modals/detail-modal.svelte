<script lang="ts">
	import Modal from './modal.svelte';

	export let showModal: boolean;
	export let detailOptions: { title: string; position: number }[];
	let selectedDetail = 0;
	let dialog: HTMLDialogElement; // HTMLDialogElement

	$: if (dialog) showModal ? dialog.showModal() : dialog.close();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->

<Modal bind:showModal>
	<div>
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
	<div class="work-detail-container">
		<slot name="content"></slot>
		<div class="folder">
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
	.modal {
		display: flex;
		flex-direction: column;
		align-items: stretch;
	}
	.above-modal {
		border: none;
		padding: 0;
		background: rgba(0, 0, 0, 0.3);
		display: flex;
		justify-content: space-between;
	}
	dialog {
		width: 85rem;
		height: 60rem;

		border-radius: 0.2em;
		border: none;
		padding: 0;
	}
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.3);
	}
	dialog > div {
		padding: 1em;
	}
	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
