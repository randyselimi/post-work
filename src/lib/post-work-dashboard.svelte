<script lang="ts">
	import PostWorkModal from './modals/post-work-modal.svelte';
	import CurrentlyPostedCarousel from './currently-posted-carousel.svelte';
	import InProgressCarousel from './in-progress-carousel.svelte';
	import Dashboard from './dashboard.svelte';
	import DashboardTile from './dashboard-tile.svelte';
	export let currentlyPostedItems: any;
	export let inProgressItems: any;
</script>

<Dashboard title="Post Work">
	<div slot="actions">
		<PostWorkModal />
	</div>
	<div slot="content">
		<DashboardTile title="Currenty Posted">
			<CurrentlyPostedCarousel {currentlyPostedItems} />
		</DashboardTile>
		<DashboardTile title="In-Progress">
			<InProgressCarousel {inProgressItems} />
		</DashboardTile>
	</div>
</Dashboard>
