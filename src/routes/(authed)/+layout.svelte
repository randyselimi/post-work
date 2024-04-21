<script lang="ts">
	import '../styles.css';
	import * as db from '$lib/db';
	import { loggedUser, mainRoute, previousRoutes } from '$lib/db';
	import { page } from '$app/stores';
	import TeamModal from '$lib/modals/team-modal.svelte';
	import WorkModal from '$lib/modals/work-modal.svelte';
	import UserModal from '$lib/modals/user-modal.svelte';
	import { storedTeams, storedUsers, storedTasks } from '$lib/db';
	import { browser } from '$app/environment';
	import { get } from 'svelte/store';
	import TallAvatarChip from '$lib/chips/tall-avatar-chip.svelte';
	import { goto } from '$app/navigation';
	import { softRoute } from '$lib/SoftRoute';

	export let data;

	$: browser &&
		$storedUsers.length &&
		loggedUser.set(db.getUser(get(storedUsers).find((u) => u.email === data.loggedEmail)!.id));
	storedTeams.subscribe((val) => {
		debugger;
		if (browser) return (localStorage.teams = JSON.stringify(val));
	});
	storedUsers.subscribe((val) => {
		debugger;
		if (browser) return (localStorage.users = JSON.stringify(val));
	});
	storedTasks.subscribe((val) => {
		debugger;
		if (browser) return (localStorage.tasks = JSON.stringify(val));
	});
	mainRoute.subscribe((val) => {
		previousRoutes.set({ next: null, current: null, previous: [] });
		if (browser && val) return (localStorage.mainRoute = JSON.stringify(val));
	});
	previousRoutes.subscribe((val) => {
		debugger;
		if (browser && val) return (localStorage.previousRoutes = JSON.stringify(val));
	});
	$: browser &&
		localStorage.mainRoute &&
		localStorage.getItem('mainRoute') !== 'undefined' &&
		mainRoute.set(JSON.parse(localStorage.mainRoute));
	$: browser &&
		localStorage.getItem('previousRoutes') !== 'undefined' &&
		previousRoutes.set(JSON.parse(localStorage.previousRoutes));
	$: showModal = $page.state.selected;
	$: team =
		browser &&
		$page.state.selected &&
		$page.state.selected.team &&
		db.getTeam($page.state.selected.team);
	$: work =
		browser &&
		$page.state.selected &&
		$page.state.selected.work &&
		db.getTask($page.state.selected.work);
	$: user =
		browser &&
		$page.state.selected &&
		$page.state.selected.user &&
		db.getUser($page.state.selected.user);
</script>

<div class="app-container">
	<h1 class="app-title">PostWork</h1>
	<div class="app-main">
		<slot />
	</div>
	<div style="display: flex; flex-direction:column;" class="app-profile">
		{#if $loggedUser}
			<TallAvatarChip user={$loggedUser} />
			<button on:click={(e) => softRoute(e, 'user', $loggedUser.id)}>View Profile</button>
			<button on:click={() => goto('/logout')}>Logout</button>
		{/if}
	</div>
</div>
{#if $page.state.selected}
	{#if $page.state.selected.team && team}
		<TeamModal
			{team}
			{showModal}
			on:close={() => {
				history.back();
			}}
		/>
	{:else if $page.state.selected.work && work}
		<WorkModal
			{work}
			{showModal}
			on:close={() => {
				history.back();
			}}
		/>
	{:else if $page.state.selected.user && user}
		<UserModal
			{user}
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
