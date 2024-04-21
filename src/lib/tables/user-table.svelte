<script lang="ts">
	import type { User } from '$lib/User';
	import Table from './table.svelte';

	export let users: User[] = [];
	let columns = [
		{ label: 'Name', key: 'fullName' },
		{ label: 'Role', key: 'role' },
		{ label: 'Email', key: 'email' },
		{ label: 'Team', key: 'team' }
	];
</script>

<Table {columns} data={users} route="user" />
