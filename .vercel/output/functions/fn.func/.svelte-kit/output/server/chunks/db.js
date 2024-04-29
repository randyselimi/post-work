import { w as writable } from "./index2.js";
import { f as get_store_value } from "./ssr.js";
class Team {
  id;
  name;
  members;
  connectedTeams;
  color;
  constructor(teamData) {
    this.id = teamData.id;
    this.name = teamData.name;
    this.members = teamData.members;
    this.connectedTeams = teamData.connectedTeams;
    this.color = teamData.color;
  }
  getMembers() {
    return getUsers(this.members);
  }
  getConnectedTeams() {
    return getTeams(this.connectedTeams);
  }
}
class User {
  id;
  firstName;
  lastName;
  fullName;
  email;
  avatarType;
  role;
  team;
  skills;
  workPosted;
  workAssigned;
  workAvailable;
  availability;
  constructor(userData) {
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
    this.availability = userData.availability;
    this.skills = userData.skills;
  }
  getTeam() {
    return getTeam(this.team);
  }
  getWorkPosted() {
    return getTasks(this.workPosted);
  }
  getWorkAssigned() {
    return getTasks(this.workAssigned);
  }
  getWorkAvailable() {
    return getAvailableTasks();
  }
}
class Task {
  id;
  title;
  description;
  skills;
  role;
  hours;
  billable;
  billingInfo;
  postedBy;
  assignedTo;
  applicants;
  status;
  startDate;
  endDate;
  constructor(taskData) {
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
  getPostedBy() {
    return getUser(this.postedBy);
  }
  getAssignedTo() {
    if (!this.assignedTo) {
      return null;
    }
    return getUser(this.assignedTo);
  }
}
const storedTeams = writable(getTeamData());
const storedUsers = writable(getUserData());
const storedTasks = writable(getTaskData());
const loggedUser = writable();
const mainRoute = writable();
const previousRoutes = writable({
  next: null,
  current: null,
  previous: []
});
function getTeamData() {
  {
    return [];
  }
}
function getUserData() {
  {
    return [];
  }
}
function getTaskData() {
  {
    return [];
  }
}
function getTeam(teamId) {
  const data = get_store_value(storedTeams).find((data2) => data2.id === teamId);
  const team = new Team(data);
  return team;
}
function getTeams(teamIds) {
  const data = teamIds.map((teamId) => getTeam(teamId));
  const teams = data.map((data2) => {
    return new Team(data2);
  });
  return teams;
}
function getUser(userId) {
  const data = get_store_value(storedUsers).find((data2) => data2.id === userId);
  const user = new User(data);
  return user;
}
function getUsers(userIds) {
  const data = userIds.map((userId) => getUser(userId));
  const users = data.map((data2) => {
    return new User(data2);
  });
  return users;
}
function getTask(taskId) {
  const data = get_store_value(storedTasks).find((data2) => data2.id === taskId);
  const task = new Task(data);
  return task;
}
function getTasks(taskIds) {
  const data = taskIds.map((taskId) => getTask(taskId));
  const tasks = data.map((data2) => {
    return new Task(data2);
  });
  return tasks;
}
function getAvailableTasks() {
  const data = get_store_value(storedTasks).filter((data2) => data2.status === "Pending");
  const tasks = data.map((data2) => {
    return new Task(data2);
  });
  return tasks;
}
export {
  storedUsers as a,
  storedTasks as b,
  getTeam as g,
  loggedUser as l,
  mainRoute as m,
  previousRoutes as p,
  storedTeams as s
};
