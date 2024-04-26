import { changeScreenSize, screenSize } from "./data"
import { renderTasks } from "./functions"
import { clearTasks } from "./functions"

function responsive(size) {

	const teamName = document.querySelector('.teamName')
	const leftSideContainer = document.querySelector('.leftSideContainer')
	const todayContainer = document.getElementById('todayContainer')
	const tomorrowContainer = document.getElementById('tomorrowContainer')
	const otherContainer = document.getElementById('otherContainer')
	const newButton = document.querySelector('.newButton')


	if (window.innerWidth < 999) {
		changeScreenSize('1000px')
		clearTasks()
		renderTasks()

		teamName.textContent = 'Team'
	} else if (window.innerWidth > 1000) {
		changeScreenSize('fullsize')

		clearTasks()
		renderTasks()
		teamName.textContent = 'Your Team'
	} else if (window.innerWidth < 635) {
		
	}
}

export { responsive }