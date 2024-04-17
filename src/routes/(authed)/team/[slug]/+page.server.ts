import * as db from '$lib/db';
import type { Team } from '$lib/Team';

export function load({ params }) {
	const team: Team = db.getTeam(Number(params.slug));
	return {
		team
	};
}
