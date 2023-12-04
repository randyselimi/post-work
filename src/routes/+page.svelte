<script lang="ts">
	import CurrentlyPostedCard from '$lib/cards/currently-posted-card.svelte';
	import InProgressCard from '$lib/cards/in-progress-card.svelte';
	import OpportunityCard from '$lib/cards/opportunity-card.svelte';
	import AssignedToYouCard from '$lib/cards/assigned-to-you-card.svelte';
	import works from '$lib/work-mock-data.json';
	import users from '$lib/user-mock-data.json';
	import UserModal from '$lib/modals/user-modal.svelte';
	import PostWorkModal from '$lib/modals/post-work-modal.svelte';
	import GetWorkDashboard from '$lib/get-work-dashboard.svelte';
	import PostWorkDashboard from '$lib/post-work-dashboard.svelte';
	import NetworkDashboard from '$lib/network-dashboard.svelte';

	const currentlyPostedItems = [{ work: works[0] }, { work: works[1] }, { work: works[2] }];
	const inProgressItems = [
		{ work: works[3], user: users[0] },
		{ work: works[4], user: users[1] },
		{ work: works[5], user: users[2] }
	];
	const opportunityItems = [
		{ work: works[6], user: users[3] },
		{ work: works[7], user: users[4] },
		{ work: works[8], user: users[5] }
	];
	const assignedToYouItems = [
		{ work: works[9], user: users[6] },
		{ work: works[1], user: users[7] },
		{ work: works[2], user: users[8] }
	];
</script>

<div class="container">
	<div class="row">
		<PostWorkDashboard {currentlyPostedItems} {inProgressItems} />
		<GetWorkDashboard {opportunityItems} {assignedToYouItems} />
	</div>
	<NetworkDashboard />
</div>

<style>
	.container {
		color: #111827;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
		background-color: white;
	}
	.row {
		display: flex;
	}
</style>
