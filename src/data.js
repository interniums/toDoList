import myDoom from "./doom"
import myImages from "./images"


let projcetNumber = 0 
let taskNumber = 0
let memberNumber = 0

function changeNumber(project, member, task) {
	if (project == 1) {
		projcetNumber++
	} else if (member == 1) {
		memberNumber++
	} else if (task == 1) {
		taskNumber++
	}
}

const userProjects = [
	// {
	// 	number: 0,
	// 	name: 'project 1'
	// },
	// {
	// 	number: 1,
	// 	name: 'project 2'
	// }
]

const userTasks = [
	// {
	// 	number: 0,
	// 	name: 'doStyling',
	// 	task: 'doStyling...',
	// 	project: userProjects[0].name,
	// 	color: '#9c1c1c',
	// 	date: '2024-04-25',
	// 	completed: true,
	// },
	// {
	// 	number: 1,
	// 	name: 'some task',
	// 	task: 'doman',
	// 	project: userProjects[1].name,
	// 	color: '#9c3c5c',
	// 	date: '2024-04-26',
	// 	completed: false,
	// }
]

const userMembers = [
	// {
	// 	number: 0,
	// 	name: 'Jhon',
	// 	age: '33',
	// 	position: 'Manager',
	// 	img: myImages.avatar1,
	// 	notes: ''
	// }
]

export { userMembers }
export { userTasks }
export { userProjects }
export { projcetNumber }
export { taskNumber }
export { memberNumber }
export { changeNumber }