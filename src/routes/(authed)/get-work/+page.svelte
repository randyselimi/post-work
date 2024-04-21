<script lang="ts">
	import { loggedUser, mainRoute } from '$lib/db';
	import GetWorkList from '$lib/lists/get-work-list.svelte';
	mainRoute.set('/get-work');

	$: getWorkItems =
		$loggedUser && $loggedUser.getWorkAssigned().concat($loggedUser.getWorkAvailable());
</script>

{#if !$loggedUser}
	<h1>Loading...</h1>
{:else}
	<GetWorkList {getWorkItems} />
{/if}
