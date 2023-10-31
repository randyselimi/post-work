<script lang="ts">
	import UserModal from '../modals/user-modal.svelte';

	export let user: any;
	let showModal = false;
</script>

<div on:click={() => (showModal = true)} class="container">
	<img src={user.avatar} alt="avatar" />
	<div>
		<h4>{user.firstName}</h4>
		<p>{user.email}</p>
	</div>
</div>

<UserModal {user} {showModal} />

<style>
	.container {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
</style>
