<script lang="ts">
	import CurrentlyPostedCard from '$lib/currently-posted-card.svelte';
	import InProgressCard from '$lib/in-progress-card.svelte';
	import OpportunityCard from '$lib/opportunity-card.svelte';
	import AssignedToYouCard from '$lib/assigned-to-you-card.svelte';
	import works from '$lib/work-mock-data.json';
	import users from '$lib/user-mock-data.json';
	import UserModal from '$lib/user-modal.svelte';

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
	<div class="tile">
		<h2>Post Work</h2>
		<h3>Currently Posted</h3>
		<div class="row">
			{#each currentlyPostedItems as item}
				<CurrentlyPostedCard work={item.work} />
			{/each}
		</div>
		<h3>In-Progress</h3>
		<div class="row">
			{#each inProgressItems as item}
				<InProgressCard user={item.user} work={item.work} />
			{/each}
		</div>
	</div>
	<div class="tile">
		<h2>Get Work</h2>
		<h3>Opportunities</h3>
		<div class="row">
			{#each opportunityItems as item}
				<OpportunityCard work={item.work} user={item.user} />
			{/each}
		</div>
		<h3>Assigned to You</h3>
		<div class="row">
			{#each assignedToYouItems as item}
				<AssignedToYouCard work={item.work} user={item.user} />
			{/each}
		</div>
	</div>
	<div class="tile">
		<h2>Network</h2>
		<h3>Coworkers</h3>
		<div class="row">
			<UserModal user={'User A'} />
			<UserModal user={'User B'} />
			<UserModal user={'User C'} />
		</div>
		<h3>Organization</h3>
		<div class="row">
			<UserModal user={'User A'} />
			<UserModal user={'User B'} />
			<UserModal user={'User C'} />
		</div>
	</div>
</div>

<style>
	.container {
		display: flex;
		justify-content: space-evenly;
	}
	.tile {
	}
	.row {
		display: flex;
	}
</style>
