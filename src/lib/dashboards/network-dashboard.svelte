<script lang="ts">
	import Dashboard from './dashboard.svelte';
	import DashboardTile from './dashboard-tile.svelte';
	import UserCarousel from '../carousel/user-carousel.svelte';
	import TeamCarousel from '../carousel/team-carousel.svelte';

	const users = [
		{
			id: 2,
			firstName: 'Alexandra',
			lastName: 'Deards',
			fullName: 'Alexandra Deards',
			email: 'adeards1@yolasite.com',
			avatar: 'https://robohash.org/voluptatemimpeditnatus.png?size=50x50&set=set1'
		},
		{
			id: 3,
			firstName: 'Paulie',
			lastName: "O'Curneen",
			fullName: "Paulie O'Curneen",
			email: 'pocurneen2@altervista.org',
			avatar: 'https://robohash.org/sapientesaepeexcepturi.png?size=50x50&set=set1'
		},
		{
			id: 4,
			firstName: 'Anatol',
			lastName: 'Clausner',
			fullName: 'Anatol Clausner',
			email: 'aclausner3@indiegogo.com',
			avatar: 'https://robohash.org/etdoloremfacere.png?size=50x50&set=set1'
		}
	];
	const teams = [
		{
			title: 'Design Team',
			members: 12,
			hours: 221
		},
		{
			title: 'Development Team',
			members: 10,
			hours: 30
		},
		{
			title: 'Marketing Team',
			members: 8,
			hours: 100
		},
		{
			title: 'Sales Team',
			members: 5,
			hours: 50
		}
	];
</script>

<Dashboard title="Network">
	<div slot="actions">
		<button>Invite User</button>
		<button>Connect Team</button>
	</div>
	<div slot="content">
		<DashboardTile title="My Team">
			<h2>Integrations Team</h2>
			<p>Members: 5</p>
			<p>Projects: 3</p>
			<p>Tasks: 10</p>
			<UserCarousel {users} />
		</DashboardTile>
		<DashboardTile title="Connected Teams">
			<TeamCarousel {teams} />
		</DashboardTile>
		<DashboardTile title="Organization">
			<h1>Please Add An Organization</h1>
		</DashboardTile>
	</div>
</Dashboard>
