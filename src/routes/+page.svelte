<script lang="ts">
	import WorkModal from '$lib/work-modal.svelte';
	import UserModal from '$lib/user-modal.svelte';
</script>

<div class="container">
	<div class="tile">
		<h2>Post Work</h2>
		<h3>Current Listings</h3>
		<div class="row">
			<WorkModal work={'Work A'} />
			<WorkModal work={'Work B'} />
			<WorkModal work={'Work C'} />
		</div>
		<h3>In-Progress</h3>
		<div class="row">
			<WorkModal work={'Work A'} />
			<WorkModal work={'Work B'} />
			<WorkModal work={'Work C'} />
		</div>
	</div>
	<div class="tile">
		<h2>Get Work</h2>
		<h3>Opportunities</h3>
		<div class="row">
			<WorkModal work={'Work A'} />
			<WorkModal work={'Work B'} />
			<WorkModal work={'Work C'} />
		</div>
		<h3>Assigned to You</h3>
		<div class="row">
			<WorkModal work={'Work A'} />
			<WorkModal work={'Work B'} />
			<WorkModal work={'Work C'} />
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
