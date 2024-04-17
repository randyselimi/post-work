import * as db from '$lib/db';
import type { Team } from '$lib/Team';

export function load() {
	const loggedId = 43;

	const teams: Team[] = db.getUser(loggedId).team.connectedTeams;
	return {
		connectedTeams: teams
	};
}
