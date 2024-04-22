import myDoom from "./doom"
import { userProjects } from "./data"
import { userTasks } from "./data"
import { userMembers } from "./data"

function addTask() {

}

function addProject() {

}

function addMember() {

}

function addTaskListener() {
	myDoom.addTaskScreen.style.display = 'flex'
	myDoom.secondLayer.style.opacity = 0
}

function cancelButtonListener(value) {
	if (value == 'task') {
		myDoom.addTaskScreen.style.display = 'none'
		myDoom.secondLayer.style.opacity = 1
	}
}

export { cancelButtonListener }
export { addTaskListener }
export { addMember }
export { addProject }
export { addTask }