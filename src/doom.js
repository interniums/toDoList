import { addMember, addTask, renderTasks } from "./functions"
import myImages from "./images"
import { addTaskListener } from "./functions"
import { cancelButtonListener } from "./functions"
import { renderMembers } from "./functions"
import { editMember } from "./functions"
import { renderProjects } from "./functions"

const myDoom = {
	downButtonContainer: document.querySelector('.downButtonContainer'),
	downButton: document.createElement('img'),
	main: document.querySelector('.body'),
	body: document.querySelector('.body'),
	secondLayer: document.querySelector('.secondLayer'),
	sideBarText: document.querySelector('.sidebarText'),
	addTaskButtons: document.querySelectorAll('.addTaskImage'),
	addTaskScreen: document.querySelector('.addTaskScreen'),
	addTaskButton: document.querySelector('.add'),
	secondLayer: document.querySelector('.secondLayer'),
	cellContainerToday: document.getElementById('cellContainerToday'),
	addMemberButton: document.querySelector('.addMemberImage'),
	addMemberScreen: document.querySelector('.addMemberScreen'),
	memberContainer: document.querySelector('#memberContainer'),
}

function doom() {
	const downButtonContainer = document.querySelector('.downButtonContainer')
	const main = document.querySelector('.main')
	const body = document.querySelector('.body')
	const addTaskImage = document.querySelectorAll('.addTaskImage')
	const avatar = document.querySelectorAll('.avatar')
	const secondLayer = document.querySelector('.secondLayer')
	const headerTextButton = document.querySelector('.headerText')
	const sideBarText = document.querySelector('.sidebarText')
	const downButton = document.createElement('img')
	const addTaskButtons = document.querySelectorAll('.addTaskImage')
	const buttons = document.querySelectorAll('.addMemberButton')
	const avatarImage = document.querySelector('.avatarImage')

	function firstLoad() {

		renderTasks()
		renderMembers()

		buttons.forEach(event=> {
			event.addEventListener('click', function () {
				let dataValue = event.getAttribute('data-value')
				if (dataValue == 'memberCancel') {
					cancelButtonListener('member')
				} else if (dataValue == 'taskCancel') {
					cancelButtonListener('task')
				} else if (dataValue == 'memberAdd') {
					addMember()
				} else if (dataValue == 'editOk') {
					editMember(0, 'edit')
				} else if (dataValue == 'editCancel') {
					 editMember(0, 'close')
				} else if (dataValue == 'editRemove') {
					editMember(0, 'remove')
				} else if (dataValue == 'taskAdd') {
					addTask()
				}
			})
		})

		renderProjects()

		avatarImage.setAttribute('src', myImages.avatar5)

		addTaskButtons.forEach(event=> {
			event.addEventListener('click', function () {
				let dataValue = event.getAttribute('data-value')
				if (dataValue == 'memberButton') {
					addTaskListener('member')
				} else if (dataValue == 'task') {
					addTaskListener('task')
				}
			})
		})

		addTaskImage.forEach(event=> {
			event.setAttribute('src', myImages.plusButton)
		})
	
		avatar.forEach(event=> {
			event.setAttribute('src', myImages.avatar5)
		})

		downButton.classList.add('downButton')
		downButton.setAttribute('src', myImages.downButton)
		downButton.addEventListener('click', downGo)
		downButtonContainer.appendChild(downButton)
		body.style.display = 'flex'
		body.classList.add('fade-in')

		headerTextButton.addEventListener('click', upGo)
		sideBarText.style.opacity = 0

		window.addEventListener('scroll', handleScroll)
		main.scrollIntoView({ behavior: 'smooth', block: 'end' })
	}
	firstLoad()


	function handleScroll() {
		const scrollPosition = window.scrollY
		const totalHeight = document.documentElement.scrollHeight - window.innerHeight
		const scrollProgress = scrollPosition / totalHeight

		main.style.opacity = 1 - scrollProgress

		// if (scrollProgress > 1) {
		// 		secondLayer.scrollIntoView({ behavior: 'smooth', block: 'end' })
		// }
	}

	function downGo() {
		secondLayer.scrollIntoView({ behavior: 'smooth', block: 'end' })
		sideBarText.style.opacity = 1
	}

	function upGo() {
		main.scrollIntoView({ behavior: 'smooth', block: 'end' })
		sideBarText.style.opacity = 0
	}
}

export { doom }
export default myDoom
