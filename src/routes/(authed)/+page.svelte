<script lang="ts">
	import * as db from '$lib/db';
	import GetWorkDashboard from '$lib/dashboards/get-work-dashboard.svelte';
	import PostWorkDashboard from '$lib/dashboards/post-work-dashboard.svelte';
	import NetworkDashboard from '$lib/dashboards/network-dashboard.svelte';
	import { storedUsers, storedTasks, loggedUser, mainRoute } from '$lib/db';

	mainRoute.set('/');
	let test = true;
	storedTasks.subscribe((tasks) => {
		workPosted = test && $loggedUser && $loggedUser.getWorkPosted();
		currentlyPostedItems =
			test && workPosted && workPosted.filter((task) => task.status === 'Pending');
		inProgressItems =
			test &&
			workPosted &&
			workPosted.filter((task) => task.status === 'Assigned' || task.status === 'Sign-off');
		opportunityItems = test && $loggedUser && $loggedUser.getWorkAvailable();
		assignedToYouItems =
			test &&
			$loggedUser &&
			$loggedUser
				.getWorkAssigned()
				.filter((task) => task.status === 'Assigned' || task.status === 'Sign-off');
	});
	$: workPosted = test && $loggedUser && $loggedUser.getWorkPosted();
	$: currentlyPostedItems =
		test && workPosted && workPosted.filter((task) => task.status === 'Pending');
	$: inProgressItems =
		test &&
		workPosted &&
		workPosted.filter((task) => task.status === 'Assigned' || task.status === 'Sign-off');
	$: opportunityItems = test && $loggedUser && $loggedUser.getWorkAvailable();
	$: assignedToYouItems =
		test &&
		$loggedUser &&
		$loggedUser
			.getWorkAssigned()
			.filter((task) => task.status === 'Assigned' || task.status === 'Sign-off');
	$: myTeam = $loggedUser && db.getTeam($loggedUser.team);
	$: connectedTeams = myTeam && myTeam.getConnectedTeams();
	// const myUserPosted = myUser.getWorkPosted();
	// const currentlyPostedItems: Task[] = myUserPosted.filter(
	// 	(task) => (task as Task).status === 'Pending'
	// ) as Task[];
	// const inProgressItems: Task[] = myUserPosted.filter(
	// 	(task) => (task as Task).status === 'Assigned'
	// ) as Task[];
	// const opportunityItems: Task[] = myUser.getWorkAvailable();
	// const assignedToYouItems: Task[] = myUser.getWorkAssigned();
	// const myTeam: Team = new Team(JSON.parse(data.myTeam));
	// const connectedTeams: Team[] = JSON.parse(data.connectedTeams).map((team: any) => new Team(team));
</script>

{#if !$loggedUser || !myTeam || !connectedTeams}
	<h1>Loading...</h1>
{:else}
	<div class="dashboard-container">
		<div class="dashboard-row">
			<PostWorkDashboard {currentlyPostedItems} {inProgressItems} />
			<GetWorkDashboard {opportunityItems} {assignedToYouItems} />
		</div>
		<div class="dashboard-row">
			<NetworkDashboard {myTeam} {connectedTeams} />
		</div>
	</div>
{/if}

<style>
	.dashboard-container {
		color: #111827;
		background-color: white;
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	.dashboard-row {
		display: flex;
		flex: 1;
	}
</style>
