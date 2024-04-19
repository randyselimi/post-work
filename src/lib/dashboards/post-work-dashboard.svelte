<script lang="ts">
	import Dashboard from './dashboard.svelte';
	import PostTaskForm from '../modals/post-work-modal.svelte';
	import DashboardTile from './dashboard-tile.svelte';
	import CurrentlyPostedCarousel from '../carousel/currently-posted-carousel.svelte';
	import InProgressCarousel from '../carousel/in-progress-carousel.svelte';
	export let currentlyPostedItems: any;
	export let inProgressItems: any;
</script>

<Dashboard title="Post Work" redirect="post-work">
	<div slot="actions">
		<PostTaskForm />
		<button disabled>Post Project</button>
	</div>
	<div class="post-work-content" slot="content">
		<DashboardTile title="Currenty Posted" redirect="post-work">
			<p slot="subtext" style="margin-top: 0; margin-bottom: .5rem" class="dashboard-tile-subtitle">
				{currentlyPostedItems.length} tasks unassigned
			</p>
			<CurrentlyPostedCarousel {currentlyPostedItems} />
		</DashboardTile>
		<DashboardTile title="In-Progress" redirect="post-work">
			<p slot="subtext" style="margin-top: 0; margin-bottom: .5rem" class="dashboard-tile-subtitle">
				{inProgressItems.length} tasks being worked on
			</p>
			<InProgressCarousel {inProgressItems} />
		</DashboardTile>
	</div>
</Dashboard>

<style>
	.post-work-content {
		display: flex;
		flex-direction: column;
		height: 100%;
	}
</style>
