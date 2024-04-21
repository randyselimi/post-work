<script lang="ts">
	import { loggedUser, mainRoute } from '$lib/db';
	import MyTeamList from '$lib/lists/my-team-list.svelte';
	mainRoute.set('/my-team');

	$: team = $loggedUser && $loggedUser.getTeam();
	$: myTeamUsers = team && team.getMembers();
</script>

{#if !$loggedUser}
	<h1>Loading...</h1>
{:else}
	<MyTeamList {myTeamUsers} />
{/if}
