<script lang="ts">
	import type { User } from '$lib/User';
	import type { Task } from '$lib/Task';
	import type { Team } from '$lib/Team.js';
	import GetWorkDashboard from '$lib/dashboards/get-work-dashboard.svelte';
	import PostWorkDashboard from '$lib/dashboards/post-work-dashboard.svelte';
	import NetworkDashboard from '$lib/dashboards/network-dashboard.svelte';

	export let data;

	const myUser: User = data.myUser;
	const currentlyPostedItems: Task[] = myUser.workPosted.filter(
		(task) => (task as Task).status === 'Posted'
	) as Task[];
	const inProgressItems: Task[] = myUser.workPosted.filter(
		(task) => (task as Task).status === 'Assigned'
	) as Task[];
	const opportunityItems: Task[] = myUser.workAvailable as Task[];
	const assignedToYouItems: Task[] = myUser.workAssigned as Task[];
	const myTeam: Team = data.myTeam;
	const connectedTeams: Team[] = data.connectedTeams;
</script>

<div class="dashboard-container">
	<div class="dashboard-row">
		<PostWorkDashboard {currentlyPostedItems} {inProgressItems} />
		<GetWorkDashboard {opportunityItems} {assignedToYouItems} />
	</div>
	<div class="dashboard-row">
	    <NetworkDashboard {myTeam} {connectedTeams} />
    </div>
</div>

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
		flex: 1
	}
</style>
