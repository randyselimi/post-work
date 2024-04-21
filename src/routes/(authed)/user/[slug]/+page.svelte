<script lang="ts">
	import { goto } from '$app/navigation';
	import { mainRoute } from '$lib/db';
	import { onMount } from 'svelte';

	onMount(() => {
		goto($mainRoute);
	});
</script>
