import myDoom from "./doom"
import { userProjects } from "./data"
import { userTasks } from "./data"
import { userMembers } from "./data"
import myImages from "./images"

let clickedTask
let selectedOption = 'all Projects'

function renderProjects() {
	for (let i = 0; i < userProjects.length; i++) {
		const projectContainer = document.querySelector('#format2')
		let name = userProjects[i].name

		const newOption = document.createElement('option')
		newOption.value = `${name}`
		newOption.textContent = `${name}`
		projectContainer.addEventListener('change', function() {
			selectedOption = projectContainer.options[projectContainer.selectedIndex].value
			console.log(selectedOption)
			console.log()
			clearTasks()
			renderTasks()
		})
		projectContainer.appendChild(newOption)
	}
	for (let i = 0; i < userProjects.length; i++) {
		const projectContainer2 = document.querySelector('#format')
		let name = userProjects[i].name

		const newOption = document.createElement('option')
		newOption.value = `${name}`
		newOption.textContent = `${name}`
		projectContainer2.appendChild(newOption)
	}
}

function renderTasks() {
	for (let i = 0; i < userTasks.length; i++) {
			let array = userTasks[i]
			let number = array.number
			let name = array.name
			let task = array.task
			let project = array.project
			let color = array.color
			let date = array.date
			let completed = array.completed

			if (selectedOption == project || selectedOption == 'all Projects') {
				const cellContainerTomorrow = document.getElementById('cellContainerTomorrow')
				const cellContainerOther = document.getElementById('cellContainerOther')
				const cellContainerToday = document.getElementById('cellContainerToday')
				const cell = document.createElement('div')
				const projectNameContainer = document.createElement('div')
				const projectName = document.createElement('p')
				const colorContainer = document.createElement('div')
				const taskContainer = document.createElement('div')
				const taskName = document.createElement('p')
				const dateContainer = document.createElement('div')
				const dateText = document.createElement('p')
				const label = document.createElement('label')
				const checkbox = document.createElement('input')


				cell.classList.add('cell')
				cell.classList.add('today')
				projectNameContainer.classList.add('projectNameContainer')
				projectName.classList.add('projectName')
				colorContainer.classList.add('color')
				taskContainer.classList.add('taskContainer')
				taskName.classList.add('taskName')
				dateContainer.classList.add('dateContainer')
				dateText.classList.add('date')
				checkbox.classList.add('checkbox')

				cell.dataset.number = number
				cell.addEventListener('click', event=>{
					clickedTask = cell.dataset.number
				})

				projectName.textContent = `${project}`
				colorContainer.style.backgroundColor = `${color}`
				taskName.textContent = `${name}`
				dateText.textContent = `${date}`
				checkbox.type = 'checkBox'
				checkbox.addEventListener('change', event=> {
					if (checkbox.checked == true) {
						userTasks[clickedTask].completed = true
					} else if (checkbox.checked == false) {
						userTasks[clickedTask].completed = false
					}
				})
				if (completed == true) {
					checkbox.checked = true
				} else {
					checkbox.checked = false
				}
				
				if (date == 'Today') {
					cellContainerToday.appendChild(cell)
					cell.appendChild(projectNameContainer)
					projectNameContainer.appendChild(projectName)
					projectNameContainer.appendChild(colorContainer)
					cell.appendChild(taskContainer)
					taskContainer.appendChild(taskName)
					cell.appendChild(dateContainer)
					dateContainer.appendChild(dateText)
					dateContainer.appendChild(checkbox)
				} 
				if (date == 'Tomorrow') {
					cellContainerTomorrow.appendChild(cell)
					cell.appendChild(projectNameContainer)
					projectNameContainer.appendChild(projectName)
					projectNameContainer.appendChild(colorContainer)
					cell.appendChild(taskContainer)
					taskContainer.appendChild(taskName)
					cell.appendChild(dateContainer)
					dateContainer.appendChild(dateText)
					dateContainer.appendChild(checkbox)
				}
				if (date !== 'Today' && date !== 'Tomorrow') {
					cellContainerOther.appendChild(cell)
					cell.appendChild(projectNameContainer)
					projectNameContainer.appendChild(projectName)
					projectNameContainer.appendChild(colorContainer)
					cell.appendChild(taskContainer)
					taskContainer.appendChild(taskName)
					cell.appendChild(dateContainer)
					dateContainer.appendChild(dateText)
					dateContainer.appendChild(checkbox)
				}
			} else {
			}
		}
}

function addProject() {

}

function clearMembers() {
	while (myDoom.memberContainer.firstChild) {
		myDoom.memberContainer.removeChild(myDoom.memberContainer.firstChild)
	}
}

class Member {
	constructor(number, name, age, position, img, notes) {
		this.number = number
		this.name = name
		this.age = age
		this.position = position
		this.img = img
		this.notes = notes
	}
}

class Task {
	constructor(number, name, task, project, color, date, completed) {
		this.number = number
		this.name = name
		this.task = task
		this.project = project
		this.color = color
		this.date = date
		this.completed = completed
	}
}

function clearTasks() {
	const cellContainerTomorrow = document.getElementById('cellContainerTomorrow')
		const cellContainerOther = document.getElementById('cellContainerOther')
		const cellContainerToday = document.getElementById('cellContainerToday')
	while(cellContainerToday.firstChild) {
		cellContainerToday.removeChild(cellContainerToday.firstChild)
	}
	while(cellContainerTomorrow.firstChild) {
		cellContainerTomorrow.removeChild(cellContainerTomorrow.firstChild)
	}
	while(cellContainerOther.firstChild) {
		cellContainerOther.removeChild(cellContainerOther.firstChild)
	}
}

function addTask() {
	const nameInput = document.querySelector('.titleNameInput')
	const colorInput = document.querySelector('.taskInputColor')
	const dateInput = document.querySelector('.datepicker-input')
	const taskTextInput = document.querySelector('.taskTextContainer')
	const projectContainer2 = document.querySelector('#format')
	const number = userTasks.length

	let name = nameInput.value
	let date = dateInput.value
	let project = projectContainer2.options[projectContainer2.selectedIndex].value
	if (nameInput.value == '') {
		name = 'new task'
	}
	if (dateInput.value == '') {
		date = 'Today'
	}
	let today = new Date()
	let tomorrow = new Date(today)
	tomorrow.setDate(today.getDate() + 1)
	let tomorowDay = tomorrow.getDate()
	let todayDay = today.getDate()
	if (date !== 'today') {
		if (parseInt(date.slice(8)) == tomorowDay) {
			date = 'Tomorrow'
		} else if (parseInt(date.slice(8)) == todayDay) {
			date = 'Today'
		}
	}

	console.log(project)
	const newTask = new Task(number, name, taskTextInput.value, project, colorInput.value, date, false)
	userTasks.push(newTask)
	clearTasks()
	nameInput.value = ''
	taskTextInput.value = ''
	dateInput.value = ''
	cancelButtonListener('task')
	renderTasks()
}

function addMember() {
	const nameInput = document.querySelector('.memberNameInput')
	const ageInput = document.querySelector('.memberAgeInput')
	const positionInput = document.querySelector('.memberPositionInput')
	const notesInput = document.querySelector('.memberTextArea')
	const avatarInput = document.querySelector('.avatarInput')
	const number = userMembers.length
	const addMemberScreen = document.querySelector('.addMemberScreen')

	let avatarImage = avatarInput.value
	if (avatarInput.files.length == 0) {
		avatarImage = myImages.defaultAvatar
	}

	const newMember = new Member(number, nameInput.value, ageInput.value, positionInput.value, avatarImage, notesInput.value)
	userMembers.push(newMember)
	clearMembers()
	addMemberScreen.style.display = 'none'
	myDoom.secondLayer.style.opacity = 1
	nameInput.value = ''
	ageInput.value = ''
	positionInput.value = ''
	notesInput.value = ''
	avatarInput.value = ''
	renderMembers()
}

let clickedMember

function editMember(number, condition) {
	let array
	for (let i = 0; i < userMembers.length; i++) {
		if (userMembers[i].number == clickedMember) {
			array = userMembers[i]
		}
	}
	let name = array.name
	let age = array.age
	let position = array.position
	let image = array.img
	let notes = array.notes

	if (name == '') {
		name = 'Name...'
	}
	if (age == '') {
		age = 'Age...'
	}
	if (position == '') {
		position = 'Position...'
	}
	if (notes == '') {
		notes = 'Notes...'
	}

	function renderEditMember() {
		const editMemberScreen = document.querySelector('.editMemberScreen')
		const nameInput = document.querySelector('[data-name="nameInput"]')
		const avatarImage = document.querySelector('.avatarImage')
		const ageInput = document.querySelector('[data-name="ageInput"]')
		const positionInput = document.querySelector('[data-name="positionInput"]')
		const notesInput = document.querySelector('[data-name="notesInput"]')

		if (condition == 'render') {
			nameInput.placeholder = `${name}`
			avatarImage.setAttribute('src', image)
			ageInput.placeholder = `${age}`
			positionInput.placeholder = `${position}`
			notesInput.placeholder = `${notes}`

			myDoom.secondLayer.style.opacity = 0
			editMemberScreen.style.display = 'flex'
		} else if (condition == 'close') {
			editMemberScreen.style.display = 'none'
			myDoom.secondLayer.style.opacity = 1
			document.querySelector('[data-name="nameInput"]').value = ''
			document.querySelector('[data-name="ageInput"]').value = ''
			document.querySelector('[data-name="positionInput"]').value = ''
			document.querySelector('[data-name="notesInput"]').value = ''
			return
		} else if (condition == 'remove') {
			userMembers.splice(clickedMember, 1)
			clearMembers()
			document.querySelector('[data-name="nameInput"]').value = ''
			document.querySelector('[data-name="ageInput"]').value = ''
			document.querySelector('[data-name="positionInput"]').value = ''
			document.querySelector('[data-name="notesInput"]').value = ''
			renderMembers()
			editMemberScreen.style.display = 'none'
			myDoom.secondLayer.style.opacity = 1
			return
		} else if (condition == 'edit') {
			let newName = document.querySelector('[data-name="nameInput"]').value
			if (newName == '') {newName = userMembers[clickedMember].name}
			let newAge = document.querySelector('[data-name="ageInput"]').value
			if (newAge == '') {newAge = userMembers[clickedMember].age}
			let newPosition = document.querySelector('[data-name="positionInput"]').value
			if (newPosition == '') {newPosition = userMembers[clickedMember].position}
			let newImage
			let newNotes = document.querySelector('[data-name="notesInput"]').value
			if (newNotes == '') {newNotes = userMembers[clickedMember].notes}

			userMembers[clickedMember].name = newName
			userMembers[clickedMember].age = newAge
			userMembers[clickedMember].position = newPosition
			userMembers[clickedMember].notes = newNotes
			// userMembers[clickedMember].name = newName

			clearMembers()
			renderMembers()
			document.querySelector('[data-name="nameInput"]').value = ''
			document.querySelector('[data-name="ageInput"]').value = ''
			document.querySelector('[data-name="positionInput"]').value = ''
			document.querySelector('[data-name="notesInput"]').value = ''
			editMemberScreen.style.display = 'none'
			myDoom.secondLayer.style.opacity = 1
		}
	}
	renderEditMember()
}

function renderMembers() {
	for (let i = 0; i < userMembers.length; i++) {
		let array = userMembers[i]

		let number = array.number
		let name = array.name
		let age = array.age
		let position = array.position
		let image = array.img

		const memberContainer = document.querySelector('#memberContainer')
		const teamCell = document.createElement('div')
		const nameContainer = document.createElement('div')
		const teamName = document.createElement('p')
		const avatarContainer = document.createElement('div')
		const avatar = document.createElement('img')
		const posititonContainer = document.createElement('div')
		const positionText = document.createElement('p')

		teamCell.dataset.number = number

		teamCell.classList.add('teamCell')
		teamCell.addEventListener('click', function() {
			clickedMember = teamCell.getAttribute('data-number')
			editMember(0, 'render')
		})
		teamCell.classList.add('cell')
		nameContainer.classList.add('nameContainer')
		teamName.classList.add('teamName')
		avatarContainer.classList.add('avatarContainer')
		avatar.classList.add('avatar')
		posititonContainer.classList.add('positionContainer')
		positionText.classList.add('positionText')

		teamName.textContent = `${name}`
		avatar.setAttribute('src', image)
		positionText.textContent = `${position}`

		memberContainer.appendChild(teamCell)
		teamCell.appendChild(nameContainer)
		nameContainer.appendChild(teamName)
		teamCell.appendChild(avatarContainer)
		avatarContainer.appendChild(avatar)
		teamCell.appendChild(posititonContainer)
		posititonContainer.appendChild(positionText)
	}
}

function addTaskListener(value) {
	if (value == 'task') {
	myDoom.addTaskScreen.style.display = 'flex'
	myDoom.secondLayer.style.opacity = 0
	} else if (value == 'member') {
		myDoom.secondLayer.style.opacity = 0
		myDoom.addMemberScreen.style.display = 'flex'
	}
}

function cancelButtonListener(value) {
	if (value == 'task') {
		myDoom.addTaskScreen.style.display = 'none'
		myDoom.secondLayer.style.opacity = 1
	} else if (value == 'member') {
		myDoom.addMemberScreen.style.display = 'none'
		myDoom.secondLayer.style.opacity = 1
	}
}

export { renderProjects }
export { cancelButtonListener }
export { addTaskListener }
export { renderMembers }
export { addProject }
export { addTask }
export { addMember }
export { editMember }
export { renderTasks }