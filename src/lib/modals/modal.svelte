<script lang="ts">
	export let showModal: boolean;
	export let actions: string[] = [];
	let dialog: HTMLDialogElement; // HTMLDialogElement

	$: if (dialog) showModal ? dialog.showModal() : dialog.close();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->

<dialog
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => dialog.close()}
>
	<div class="above-modal">
		{#each actions as action}
			<button style="margin-bottom: 0;">{action}</button>
		{/each}
	</div>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div on:click|stopPropagation>
		<div class="modal">
			<slot />
		</div>
	</div>
</dialog>

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
		/* display: flex;
		justify-content: space-between; */
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
