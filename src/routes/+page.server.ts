import * as db from '$lib/db';
import type { User } from '$lib/User';
import type { Team } from '$lib/Team';

export function load() {
	const loggedId = 2; //Number(cookies.get('loggedId')!);

	const myUser: User = db.getUser(loggedId);
	const myTeam: Team = db.getTeam((myUser.team as Team).id);
	const connectedTeams: Team[] = db.getTeams(loggedId);

	return {
		myUser,
		myTeam,
		connectedTeams
	};
}
