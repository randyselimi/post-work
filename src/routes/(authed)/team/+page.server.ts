import * as db from '$lib/db';
import type { Team } from '$lib/Team';

export function load() {
	const loggedId = 2;

	const teams: Team[] = db.getTeams(loggedId);

	return {
		teams
	};
}