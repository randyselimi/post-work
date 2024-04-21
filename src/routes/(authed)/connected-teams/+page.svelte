<script lang="ts">
	import { loggedUser, mainRoute } from '$lib/db';
	import ConnectedTeamsList from '$lib/lists/connected-teams-list.svelte';
	mainRoute.set('/connected-teams');
	$: team = $loggedUser && $loggedUser.getTeam();
	$: connectedTeams = team && team.getConnectedTeams();
</script>

{#if !$loggedUser}
	<h1>Loading...</h1>
{:else}
	<ConnectedTeamsList {connectedTeams} />
{/if}
