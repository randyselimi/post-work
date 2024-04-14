<script lang="ts">
	import './styles.css';
	import { loggedIn } from '$lib/stores';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import TeamModal from '$lib/modals/team-modal.svelte';
	import WorkModal from '$lib/modals/work-modal.svelte';
	import UserModal from '$lib/modals/user-modal.svelte';

	let isLoggedIn = false;
	$: showModal = $page.state.selected;
	function routeToLogin(route: string, replaceState: boolean) {
		goto(`/${route}`, { replaceState });
	}
	function checkLogin() {
		if (browser) {
			if (!isLoggedIn) {
				routeToLogin('login', true);
			} else {
				routeToLogin('', true);
			}
		}
	}
	loggedIn.subscribe((value) => {
		console.log(value);
		isLoggedIn = value;
		checkLogin();
	});

	onMount(() => {
		if (!isLoggedIn) {
			routeToLogin('login', true);
		}
	});
</script>

<div class="container">
	<div class="header">
		<div class="header-element">
			<h1>Post Work</h1>
		</div>
		<div class="row">
			<a class="button" href="/">Home</a>
			<a class="button" href="/post-work">Post Work</a>
			<a class="button" href="/get-work">Get Work</a>
			<a class="button" href="/network">Network</a>
		</div>
		<div class="header-element">
			<a class="button" on:click={() => loggedIn.set(false)}>Randy Selimi</a>
		</div>
	</div>
	<slot />
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
	.container {
		display: flex;
		flex-direction: column;
	}

	.row {
		display: flex;
	}
	.header {
		position: sticky;
		z-index: 999;
		top: -10px;
		box-shadow: 0px 2px 7px 0px rgb(0 0 0 / 25%);
		color: black;
		background-color: white;
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
	}
	.header-element {
		width: 10em;
	}

	.button {
		background-color: #ffffff;
		border: 0;
		border-radius: 5px 5px 0px 0px;
		box-sizing: border-box;
		color: #000000;
		font-family: 'Inter var', ui-sans-serif, system-ui, -apple-system, system-ui, 'Segoe UI', Roboto,
			'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
			'Segoe UI Symbol', 'Noto Color Emoji';
		font-size: 0.875rem;
		font-weight: 600;
		line-height: 1.25rem;
		padding: 0.75rem 1rem;
		text-align: center;
		text-decoration: none #d1d5db solid;
		text-decoration-thickness: auto;
		cursor: pointer;
		user-select: none;
		-webkit-user-select: none;
		touch-action: manipulation;
	}

	.button:hover {
		background-color: rgb(249, 250, 251);
	}

	.button:focus {
		outline: 2px solid transparent;
		outline-offset: 2px;
	}

	.button:focus-visible {
		box-shadow: none;
	}
</style>
