import myDoom from "./doom"
import myImages from "./images"

// localStorage.clear();

function initializeStorage() {
	if (!localStorage.getItem('projectNumber')) {
		localStorage.setItem('projectNumber', 0)
	}
	if (!localStorage.getItem('memberNumber')) {
		localStorage.setItem('memberNumber', 0)
	}
	if (!localStorage.getItem('taskNumber')) {
		localStorage.setItem('taskNumber', 0)
	}
	if (!localStorage.getItem('userProjects')) {
		localStorage.setItem('userProjects', JSON.stringify([]))
	}
	if (!localStorage.getItem('userTasks')) {
		localStorage.setItem('userTasks', JSON.stringify([]))
	}
	if (!localStorage.getItem('userMembers')) {
		localStorage.setItem('userMembers', JSON.stringify([]))
	} 
}

let screenSize = 'fullsize'
let projcetNumber = localStorage.getItem('projectNumber')
let taskNumber = localStorage.getItem('taskNumber')
let memberNumber = localStorage.getItem('memberNumber')

function changeScreenSize(value) {
	if (value == 'fullsize') {
		screenSize = 'fullsize'
	} else if (value == '1000px') {
		screenSize = '1000px'
	}
}


function changeNumber(project, member, task) {
	if (project == 1) {
		projcetNumber++
		localStorage.setItem('projectNumber', projcetNumber)
		console.log(localStorage.getItem('projectNumber'))
	} else if (member == 1) {
		memberNumber++
		localStorage.setItem('memberNumber', memberNumber)
	} else if (task == 1) {
		taskNumber++
		localStorage.setItem('taskNumber', taskNumber)
	}
}

function updateStorage(task, member, project) {
	if (task == 1) {
		localStorage.setItem('userTasks', JSON.stringify(userTasks))
	} else if (member == 1) {
		localStorage.setItem('userMembers', JSON.stringify(userMembers))
	} else if (project == 1) {
		localStorage.setItem('userProjects', JSON.stringify(userProjects))
	}
}

const userProjects = JSON.parse(localStorage.getItem('userProjects'))

const userTasks = JSON.parse(localStorage.getItem('userTasks'))

const userMembers = JSON.parse(localStorage.getItem('userMembers'))

export { userMembers }
export { userTasks }
export { userProjects }
export { projcetNumber }
export { taskNumber }
export { memberNumber }
export { changeNumber }
export { initializeStorage }
export { updateStorage }
export { screenSize }
export { changeScreenSize }