<script lang="ts">
	import AssignedToYouCarousel from '../carousel/assigned-to-you-carousel.svelte';
	import DashboardTile from './dashboard-tile.svelte';
	import Dashboard from './dashboard.svelte';
	import OpportunitiesCarousel from '../carousel/opportunities-carousel.svelte';

	export let opportunityItems: any;
	export let assignedToYouItems: any;
</script>

<Dashboard title="Get Work">
	<div slot="actions">
		<button>Update Availability</button>
	</div>
	<div slot="content">
		<DashboardTile title="Opportunities">
			<OpportunitiesCarousel {opportunityItems} />
		</DashboardTile>
		<DashboardTile title="Assigned to You">
			<AssignedToYouCarousel {assignedToYouItems} />
		</DashboardTile>
	</div>
</Dashboard>
