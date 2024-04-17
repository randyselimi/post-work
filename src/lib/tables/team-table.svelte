<script lang="ts">
	import type { Team } from '$lib/Team';
	import Table from './table.svelte';

	export let teams: Team[] = [];
	let columns = [
		{ label: 'Name', key: 'name' },
		{ label: 'Members', key: 'members' },
		{ label: 'Connected Teams', key: 'connectedTeams' }
	];
</script>

<Table {columns} data={teams} />
