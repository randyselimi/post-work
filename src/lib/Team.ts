import * as db from './db';
import type { User } from './User';

export interface TeamData {
	id: number;
	name: string;
	members: number[];
	connectedTeams: number[];
	color: string;
}

export class Team {
	id: number;
	name: string;
	members: number[];
	connectedTeams: number[];
	color: string;

	constructor(teamData: TeamData) {
		this.id = teamData.id;
		this.name = teamData.name;
		this.members = teamData.members;
		this.connectedTeams = teamData.connectedTeams;
		this.color = teamData.color;
	}
	getMembers(): User[] {
		return db.getUsers(this.members);
	}
	getConnectedTeams(): Team[] {
		return db.getTeams(this.connectedTeams);
	}
}
