import * as db from './db';
import type { User } from './User';

export interface TaskData {
	id: number;
	title: string;
	description: string;
	skills: string[];
	role: string;
	hours: number;
	billable: boolean;
	billingInfo: object;
	postedBy: number;
	assignedTo: number | null;
	applicants?: number[];
	status: string;
	startDate: string;
	endDate: string;
}

export class Task {
	id: number;
	title: string;
	description: string;
	skills: string[];
	role: string;
	hours: number;
	billable: boolean;
	billingInfo: object;
	postedBy: number;
	assignedTo: number | null;
	applicants?: number[];
	status: string;
	startDate: string;
	endDate: string;

	constructor(taskData: TaskData) {
		this.id = taskData.id;
		this.title = taskData.title;
		this.description = taskData.description;
		this.skills = taskData.skills;
		this.role = taskData.role;
		this.hours = taskData.hours;
		this.billable = taskData.billable;
		this.billingInfo = taskData.billingInfo;
		this.postedBy = taskData.postedBy;
		this.assignedTo = taskData.assignedTo;
		this.applicants = taskData.applicants;
		this.status = taskData.status;
		this.startDate = taskData.startDate;
		this.endDate = taskData.endDate;
	}

	getPostedBy(): User {
		return db.getUser(this.postedBy);
	}

	getAssignedTo(): User | null {
		if (!this.assignedTo) {
			return null;
		}
		return db.getUser(this.assignedTo);
	}
}

export enum TaskState {
	Invalid,
	Searching,
	Assigned,
	PendingSignoff,
	Complete,
	Cancelled
}
