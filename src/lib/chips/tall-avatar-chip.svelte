<script lang="ts">
	import { preloadData, pushState, goto } from '$app/navigation';
	import Avatar from '$lib/avatar.svelte';

	export let user: any;
	let showModal = false;
</script>

<div class="tall-avatar-chip-container">
	<h4 class="tall-avatar-chip-title">{user.fullName}</h4>
	<Avatar size={100} email={user.email} />
	<p class="tall-avatar-chip-element">{user.role}</p>
</div>

<style>
	.tall-avatar-chip-title {
		font-size: 0.7rem;
		margin-top: 0;
		margin-bottom: 0;
	}
	.tall-avatar-chip-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: column;
	}
	.tall-avatar-chip-element {
		font-size: 0.7rem;
		margin-top: 0;
		margin-bottom: 0;
		text-overflow: clip;
		overflow: hidden;
	}
</style>
