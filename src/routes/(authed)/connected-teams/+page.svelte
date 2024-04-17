<script lang="ts">
	import type { Team } from '$lib/Team.js';
	import ConnectedTeamsList from '$lib/lists/connected-teams-list.svelte';

	export let data;

	const connectedTeams: Team[] = data.connectedTeams;
</script>

<ConnectedTeamsList {connectedTeams} />
