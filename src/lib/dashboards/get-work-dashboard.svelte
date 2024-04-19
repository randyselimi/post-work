<script lang="ts">
	import AssignedToYouCarousel from '../carousel/assigned-to-you-carousel.svelte';
	import DashboardTile from './dashboard-tile.svelte';
	import Dashboard from './dashboard.svelte';
	import OpportunitiesCarousel from '../carousel/opportunities-carousel.svelte';
	import UpdateHoursForm from '$lib/forms/update-hours-form.svelte';
	export let opportunityItems: any;
	export let assignedToYouItems: any;
	console.log(assignedToYouItems);
</script>

<Dashboard title="Get Work" redirect="get-work">
	<div slot="actions">
		<UpdateHoursForm />
	</div>
	<div class="get-work-content" slot="content">
		<DashboardTile title="Opportunities" redirect="get-work">
			<p slot="subtext" style="margin-top: 0; margin-bottom: .5rem" class="dashboard-tile-subtitle">
				{opportunityItems.length} tasks available
			</p>
			<OpportunitiesCarousel opportunityItems={opportunityItems.slice(0, 3)} />
		</DashboardTile>
		<DashboardTile title="Assigned to You" redirect="get-work">
			<p slot="subtext" style="margin-top: 0; margin-bottom: .5rem" class="dashboard-tile-subtitle">
				{assignedToYouItems.length} tasks assigned to you
			</p>
			<AssignedToYouCarousel assignedToYouItems={assignedToYouItems.slice(0, 3)} />
		</DashboardTile>
	</div>
</Dashboard>

<style>
	.get-work-content {
		display: flex;
		flex-direction: column;
		height: 100%;
	}
</style>
