<script lang="ts">
	import Avatar from '$lib/avatar.svelte';
	import TeamColorChip from './team-color-chip.svelte';

	export let user: any;
</script>

<div class="tall-avatar-chip-container">
	<Avatar size={32} email={user.email} />
	<div>
		<h4 class="tall-avatar-chip-title">{user.fullName}</h4>
		<div class="tall-avatar-chip-element-container">
			<TeamColorChip team={user.team} />
			<p class="tall-avatar-chip-element">{user.role}</p>
		</div>
	</div>
</div>

<style>
	.tall-avatar-chip-title {
		font-size: 0.7rem;
		margin-top: 0;
		margin-bottom: 0;
	}
	.tall-avatar-chip-container {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		flex-direction: row;
	}
	.tall-avatar-chip-element {
		font-size: 0.6rem;
		margin-top: 0;
		margin-bottom: 0;
		margin-left: 1px;
		text-overflow: clip;
		overflow: hidden;
	}
	.tall-avatar-chip-element-container {
		display: flex;
		align-items: baseline;
	}
</style>
