import myDoom from "./doom"
import myImages from "./images"

const userTasks = [
	['do styling', '04.23.2024', 'green', 'false', ]
]

const userProjects = [
	['ToDoSite', userTasks[0]]
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