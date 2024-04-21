<script lang="ts">
	import { loggedUser } from '$lib/db';
	import ConnectedTeamsList from '$lib/lists/connected-teams-list.svelte';

	$: team = $loggedUser && $loggedUser.getTeam();
	$: connectedTeams = team && team.getConnectedTeams();
</script>

{#if !$loggedUser}
	<h1>Loading...</h1>
{:else}
	<ConnectedTeamsList {connectedTeams} />
{/if}
