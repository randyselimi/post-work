<script lang="ts">
	import BackButton from '$lib/buttons/back-button.svelte';
	import ForwardButton from '$lib/buttons/forward-button.svelte';
	import Modal from './modal.svelte';
	import { mainRoute, previousRoutes } from '$lib/db';
	import { page } from '$app/stores';
	import { softRoute, softRouteBack, softRouteNext } from '$lib/SoftRoute';

	export let showModal: boolean;
	export let detailOptions: { title: string; position: number }[];
	$: canGoBack = $previousRoutes && $previousRoutes.previous.length > 0;
	$: canGoForward =
		$previousRoutes && $previousRoutes.current && $previousRoutes.current.next !== null;
	let selectedDetail = 0;
	let dialog: HTMLDialogElement; // HTMLDialogElement

	$: if (dialog) showModal ? dialog.showModal() : dialog.close();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<Modal bind:showModal>
	<div slot="actions">
		<div style="display: flex;">
			<BackButton disabled={!canGoBack} on:click={(e) => softRouteBack(e)} />
			<ForwardButton disabled={!canGoForward} on:click={(e) => softRouteNext(e)} />
		</div>
	</div>
	<h2 slot="header">Detail View</h2>
	<fieldset class="detail-modal-content">
		<legend>Detail View</legend>
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
	</fieldset>
	<div slot="footer">
		<slot name="footer"></slot>
	</div>
	<!-- svelte-ignore a11y-autofocus -->
</Modal>

<style>
	.detail-modal-content {
		display: flex;
		align-items: stretch;
	}
	.detail-modal-content-element {
		width: 50%;
	}
</style>
