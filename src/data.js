import myDoom from "./doom"
import myImages from "./images"


const userProjects = [
	{
		number: 0,
		name: 'project 1'
	},
	{
		number: 1,
		name: 'project 2'
	}
]

const userTasks = [
	{
		number: 0,
		name: 'doStyling',
		task: 'doStyling...',
		project: userProjects[0].name,
		color: 'green',
		date: 'Today',
		completed: true,
	},
	{
		number: 1,
		name: 'some task',
		project: userProjects[1].name,
		color: 'blue',
		date: 'Tomorrow',
		completed: false,
	}
]

const userMembers = [
	{
		number: 0,
		name: 'Jhon',
		age: '33',
		position: 'Manager',
		img: myImages.avatar1,
		notes: ''
	}
]

export { userMembers }
export { userTasks }
export { userProjects }