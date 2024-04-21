import * as db from './db';
import type { Team } from './Team';
import type { Task } from './Task';

export interface UserData {
	id: number;
	firstName: string;
	lastName: string;
	fullName: string;
	email: string;
	avatarType: string;
	role: string;
	team: number;
	workPosted: number[];
	workAssigned: number[];
	availability?: object;
}

export class User {
	id: number;
	firstName: string;
	lastName: string;
	fullName: string;
	email: string;
	avatarType: string;
	role: string;
	team: number;
	workPosted: number[];
	workAssigned: number[];
	workAvailable: number[];
	availability: object;

	constructor(userData: UserData) {
		this.id = userData.id;
		this.firstName = userData.firstName;
		this.lastName = userData.lastName;
		this.fullName = userData.fullName;
		this.email = userData.email;
		this.avatarType = userData.avatarType;
		this.role = userData.role;
		this.team = userData.team;
		this.workPosted = userData.workPosted;
		this.workAssigned = userData.workAssigned;
		this.workAvailable = [];
		this.availability = [];
	}
	getTeam(): Team {
		return db.getTeam(this.team);
	}
	getWorkPosted(): Task[] {
		return db.getTasks(this.workPosted);
	}
	getWorkAssigned(): Task[] {
		return db.getTasks(this.workAssigned);
	}
	getWorkAvailable(): Task[] {
		return db.getAvailableTasks();
	}
}

export enum UserRole {
	Associate,
	SeniorAssociate,
	Manager,
	SeniorManager,
	Director,
	Partner
}
