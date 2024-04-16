<script lang="ts">
	import { page } from '$app/stores';
	import TeamModal from '$lib/modals/team-modal.svelte';
	import WorkModal from '$lib/modals/work-modal.svelte';
	import UserModal from '$lib/modals/user-modal.svelte';

	$: showModal = $page.state.selected;
</script>

<div class="app-container">
	<h1 class="app-title">PostWork</h1>
	<div class="app-main">
		<slot />
	</div>
	<h1 class="app-profile">Logout</h1>
</div>
{#if $page.state.selected}
	{#if $page.state.selected.team}
		<TeamModal
			team={$page.state.selected.team}
			{showModal}
			on:close={() => {
				history.back();
			}}
		/>
	{:else if $page.state.selected.task}
		<WorkModal
			work={$page.state.selected.task}
			{showModal}
			on:close={() => {
				history.back();
			}}
		/>
	{:else if $page.state.selected.user}
		<UserModal
			user={$page.state.selected.user}
			{showModal}
			on:close={() => {
				history.back();
			}}
		/>
	{/if}
{/if}

<style>
	.app-container {
		display: flex;
	}
	.app-title {
		flex: 1;
		font-size: 4rem;
		margin: 1rem 1rem 1rem 1rem;
	}
	.app-main {
		flex: 8;
		height: 70rem;
		margin: 0rem 0rem;
	}
	.app-profile {
		flex: 1;
		flex: 1;
		font-size: 4rem;
		margin: 1rem 1rem 1rem 1rem;
		text-align: right;
	}
</style>
