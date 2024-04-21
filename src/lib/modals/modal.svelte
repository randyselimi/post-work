<script lang="ts">
	import { replaceState } from '$app/navigation';
	import { mainRoute } from '$lib/db';
	export let showModal: boolean;
	let dialog: HTMLDialogElement; // HTMLDialogElement

	$: if (dialog) showModal ? dialog.showModal() : dialog.close();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->

<dialog
	bind:this={dialog}
	on:close={() => {
		replaceState($mainRoute, {});
		showModal = false;
	}}
	on:click|self={() => dialog.close()}
>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div style="height: 100%;" on:click|stopPropagation>
		<div class="modal">
			<div class="detail-modal-header">
				<div><slot name="actions" /></div>
				<div><slot name="header" /></div>
				<span
					on:click={() => (showModal = false)}
					style="color: red; font-size: 1.7rem;"
					class="material-symbols-outlined"
				/>
			</div>
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
	.detail-modal-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	dialog {
		width: 40%;
		height: 42%;

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
