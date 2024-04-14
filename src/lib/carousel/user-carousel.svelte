<script lang="ts">
	import Carousel from './carousel.svelte';
	import UserCard from '../cards/user-card.svelte';
	export let users: any;
</script>

<Carousel>
	{#each users as user}
		<UserCard {user} />
	{/each}
</Carousel>
