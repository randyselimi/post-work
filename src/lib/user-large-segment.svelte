<script lang="ts">
	import UserModal from './user-modal.svelte';

	export let user: any;
	let showModal = false;
</script>

<div on:click={() => (showModal = true)} class="container">
	<h4>{user.fullName}</h4>
	<img width="100px" height="100px" src={user.avatar} alt="avatar" />
	<p>{user.email}</p>
</div>

<UserModal {user} {showModal} />

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
