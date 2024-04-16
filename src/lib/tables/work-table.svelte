<script lang="ts">
	import type { Task } from '$lib/Task';
	import Table from './table.svelte';
	export let work: Task[];
	let columns = [
		{ label: 'Title', key: 'title' },
		{ label: 'Status', key: 'status' },
		{ label: 'Hours', key: 'hours' },
		{ label: 'Assigned To', key: 'assignedTo' },
		{ label: 'Due Date', key: 'endDate' }
	];
</script>

<Table {columns} data={work} />
