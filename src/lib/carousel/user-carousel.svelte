<script lang="ts">
	import Carousel from './carousel.svelte';
	import UserCard from '../cards/user-card.svelte';
	export let users: any;
</script>

<Carousel items={users} let:item={user}>
	<UserCard {user} />
</Carousel>
