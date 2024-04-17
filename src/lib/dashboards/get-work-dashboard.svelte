<script lang="ts">
	import AssignedToYouCarousel from '../carousel/assigned-to-you-carousel.svelte';
	import DashboardTile from './dashboard-tile.svelte';
	import Dashboard from './dashboard.svelte';
	import OpportunitiesCarousel from '../carousel/opportunities-carousel.svelte';
	import UpdateHoursModal from '$lib/modals/update-hours-modal.svelte';
	export let opportunityItems: any;
	export let assignedToYouItems: any;
	console.log(assignedToYouItems);
</script>

<Dashboard title="Get Work">
	<div slot="actions">
		<UpdateHoursModal />
	</div>
	<div class="get-work-content" slot="content">
		<DashboardTile title="Opportunities">
			<OpportunitiesCarousel opportunityItems={opportunityItems.slice(0, 3)} />
		</DashboardTile>
		<DashboardTile title="Assigned to You">
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
