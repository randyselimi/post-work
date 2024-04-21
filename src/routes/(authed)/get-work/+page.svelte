<script lang="ts">
	import { loggedUser } from '$lib/db';
	import GetWorkList from '$lib/lists/get-work-list.svelte';

	$: getWorkItems =
		$loggedUser && $loggedUser.getWorkAssigned().concat($loggedUser.getWorkAvailable());
</script>

{#if !$loggedUser}
	<h1>Loading...</h1>
{:else}
	<GetWorkList {getWorkItems} />
{/if}
