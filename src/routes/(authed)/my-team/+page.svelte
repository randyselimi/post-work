<script lang="ts">
	import type { User } from '$lib/User.js';
	import MyTeamList from '$lib/lists/my-team-list.svelte';

	export let data;

	const myTeamUsers: User[] = data.myTeamUsers;
</script>

<MyTeamList {myTeamUsers} />
