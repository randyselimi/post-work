<script lang="ts">
	import { loggedUser } from '$lib/db';
	import PostWorkList from '$lib/lists/post-work-list.svelte';

	$: postWorkItems = $loggedUser && $loggedUser.getWorkPosted();
</script>

{#if !$loggedUser}
	<h1>Loading...</h1>
{:else}
	<PostWorkList {postWorkItems} />
{/if}
