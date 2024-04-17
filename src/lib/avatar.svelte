<script lang="ts">
	import type { User } from './User';

	const api = 'https://api.dicebear.com/8.x/personas/svg?';
	export let size = 100;
	export let email = '';
	let seed = email;
</script>

<img
	style="border-radius: 50%;"
	width="{size}em"
	height="{size}em"
	src="{api}seed={seed}"
	alt={email}
/>
