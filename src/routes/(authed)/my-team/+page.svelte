<script lang="ts">
	import { loggedUser } from '$lib/db';
	import MyTeamList from '$lib/lists/my-team-list.svelte';

	$: team = $loggedUser && $loggedUser.getTeam();
	$: myTeamUsers = team && team.getMembers();
</script>

{#if !$loggedUser}
	<h1>Loading...</h1>
{:else}
	<MyTeamList {myTeamUsers} />
{/if}
