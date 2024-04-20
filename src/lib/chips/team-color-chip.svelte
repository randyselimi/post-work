<script lang="ts">
	export let team: any;
	$: color = team == 1 ? 'purple' : 'blue';
</script>

<svg style="margin: 0 2px;" height=".5rem" width=".5rem">
	<circle cx="50%" cy="50%" r=".25rem" fill={color} />
</svg>
