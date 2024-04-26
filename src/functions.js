import myDoom from "./doom"
import { changeNumber, memberNumber, projcetNumber, screenSize, taskNumber, updateStorage, userProjects } from "./data"
import { userTasks } from "./data"
import { userMembers } from "./data"
import myImages from "./images"

let clickedTask
let selectedOption = 'all Projects'



function renderProjects() {
	const projectContainer = document.querySelector('#format2')
	while (projectContainer.children.length > 1) {
    projectContainer.removeChild(projectContainer.children[1])
	}
	for (let i = 0; i < userProjects.length; i++) {
		let name = userProjects[i].name

		const newOption = document.createElement('option')
		newOption.value = `${name}`
		newOption.textContent = `${name}`
		projectContainer.addEventListener('change', function() {
			selectedOption = projectContainer.options[projectContainer.selectedIndex].value
			clearTasks()
			renderTasks()
		})
		projectContainer.appendChild(newOption)
	}
	const projectContainer2 = document.querySelector('#format')
	while (projectContainer2.children.length > 1) {
    projectContainer2.removeChild(projectContainer2.children[1])
	}
	for (let i = 0; i < userProjects.length; i++) {
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
				checkbox.id = 'checkbox'

				cell.dataset.number = number
				cell.addEventListener('click', event=> {
					if (event.target.id == 'checkbox') {
						return
					}
					clickedTask = cell.dataset.number
					renderEditTask()
				})

				projectName.textContent = `${project}`
				colorContainer.style.backgroundColor = `${color}`
				taskName.textContent = `${name}`
				dateText.textContent = `${date}`
				checkbox.type = 'checkBox'
				checkbox.addEventListener('change', event=> {
					clickedTask = cell.dataset.number
					if (checkbox.checked == true) {
						for (let i = 0; i < userTasks.length; i++) {
							if (userTasks[i].number == clickedTask) {
								userTasks[i].completed = true
							}
						}
						updateStorage(1, 0, 0)
					} else if (checkbox.checked == false) {
						for (let i = 0; i < userTasks.length; i++) {
							if (userTasks[i].number == clickedTask) {
								userTasks[i].completed = false
							}
						}
						updateStorage(1, 0, 0)
					}
				})
				if (completed == true) {
					checkbox.checked = true
				} else {
					checkbox.checked = false
				}

				let date1 = new Date(date)
				let today = new Date()
				let tomorrow = new Date(today)
				tomorrow.setDate(tomorrow.getDate() + 1)
				function getD(value) {
					let year = value.getFullYear()
					let month = (value.getMonth() + 1).toString().padStart(2, '0')
					let day = value.getDate().toString().padStart(2, '0')
					return `${year}-${month}-${day}`
				}

				let taskDate = getD(date1)
				let tomorrowDate = getD(tomorrow)
				let todayDate = getD(today)

				if (screenSize == '1000px') {
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

				if (screenSize == 'fullsize') {
					if (taskDate == todayDate) {
						cellContainerToday.appendChild(cell)
						cell.appendChild(projectNameContainer)
						projectNameContainer.appendChild(projectName)
						projectNameContainer.appendChild(colorContainer)
						cell.appendChild(taskContainer)
						taskContainer.appendChild(taskName)
						cell.appendChild(dateContainer)
						dateContainer.appendChild(dateText)
						dateContainer.appendChild(checkbox)
					} else if (taskDate == tomorrowDate) {
						cellContainerTomorrow.appendChild(cell)
						cell.appendChild(projectNameContainer)
						projectNameContainer.appendChild(projectName)
						projectNameContainer.appendChild(colorContainer)
						cell.appendChild(taskContainer)
						taskContainer.appendChild(taskName)
						cell.appendChild(dateContainer)
						dateContainer.appendChild(dateText)
						dateContainer.appendChild(checkbox)
					} else {
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
				}	
			} else {
			}
		}
}

function addProject() {
	const projectCellOthers = document.querySelector('.projectCellOthers')
	while (projectCellOthers.firstChild) {
		projectCellOthers.removeChild(projectCellOthers.firstChild)
	}
	const newInput = document.createElement('input')
	const newButton = document.createElement('button')
	newButton.classList.add('newButton')
	newButton.textContent = 'CREATE'

	newInput.classList.add('newInput')
	newInput.placeholder = 'Project name...'
	newButton.addEventListener('click', event=> {
		let number1 = projcetNumber
		changeNumber(1, 0, 0)
		let name1 = newInput.value
		if (name1 == '') {
			name1 = 'New Project'
		}
		const newProject = new Project(number1, name1)
		userProjects.push(newProject)
		updateStorage(0, 0, 1)
		while (projectCellOthers.firstChild) {
			projectCellOthers.removeChild(projectCellOthers.firstChild)
		}
		renderProjects()
	})

	projectCellOthers.appendChild(newInput)
	projectCellOthers.appendChild(newButton)
}

function renderEditTask() {
	addTaskListener('task')
	const choseProjectContainer = document.querySelector('.choseProjectContainer')
	const newButton = document.createElement('button')
	const addTaskTitle = document.querySelector('.addTaskTitle')
	const projectInput = document.getElementById('format')
	const nameInput = document.querySelector('.titleNameInput')
	const colorInput  = document.querySelector('.taskInputColor')
	const dateInput = document.querySelector('.datepicker-input')
	const notesInput = document.querySelector('#taskText')
	const button = document.querySelector('#taskAddButton')
	const taskCancelButton = document.getElementById('taskCancelButton')
	addTaskTitle.textContent = 'Edit Task'
	button.textContent = 'Edit task'
	button.dataset.value = 'edit'

	let name
	let task
	let project
	let color
	let date

	for (let i = 0; i < userTasks.length; i++) {
		if (userTasks[i].number == clickedTask) {
			name = userTasks[i].name
			task = userTasks[i].task
			project = userTasks[i].project
			color = userTasks[i].color
			date = userTasks[i].date
		}
	}

	for (let i = 0; i < projectInput.options.length; i++) {
		if (projectInput.options[i].value === project) {
			projectInput.selectedIndex = i
			break
		}
	}
	nameInput.placeholder = `${name}`
	notesInput.placeholder = `${task}`
	colorInput.value = `${color}`
	dateInput.value = `${date}`
	newButton.classList.add('addMemberButton')
	newButton.dataset.value = 'removeTask'
	newButton.textContent = 'Remove Task'
	newButton.id = 'removeTaskButton'
	choseProjectContainer.appendChild(newButton)
	taskCancelButton.dataset.value = 'editTaskCancel'
	newButton.addEventListener('click', event=> {
					taskRemove()
					resetScreen()
	})
}

function editTask() {
	const projectInput = document.getElementById('format')
	const nameInput = document.querySelector('.titleNameInput')
	const colorInput  = document.querySelector('.taskInputColor')
	const dateInput = document.querySelector('.datepicker-input')
	const notesInput = document.querySelector('#taskText')

	let name = nameInput.value
	let task = notesInput.value

	for (let i = 0; i < userTasks.length; i++) {
		if (userTasks[i].number == clickedTask) {
			if (nameInput.value == '') {
				name = userTasks[i].name
			}
			if (notesInput.value == '') {
				task = userTasks[i].task
			}
			userTasks[i].project = projectInput.value 
			userTasks[i].task = task
			userTasks[i].color = colorInput.value
			userTasks[i].date = dateInput.value
			userTasks[i].name = name
		}
	}
	clearTasks()
	renderTasks()
}

function taskRemove() {
	for (let i = 0; i < userTasks.length; i++) {
		if (userTasks[i].number == clickedTask) {
			userTasks.splice(i, 1)
		}
	}
	clearTasks()
	renderTasks()
	updateStorage(1, 0, 0)
}

function resetScreen() {
	const taskCancelButton = document.getElementById('taskCancelButton')
	const projectInput = document.getElementById('format')
	const nameInput = document.querySelector('.titleNameInput')
	const choseProjectContainer = document.querySelector('.choseProjectContainer')
	const colorInput  = document.querySelector('.taskInputColor')
	const dateInput = document.querySelector('.datepicker-input')
	const newButton = document.getElementById('removeTaskButton')
	const addTaskTitle = document.querySelector('.addTaskTitle')
	const button = document.querySelector('#taskAddButton')
	addTaskTitle.textContent = 'Add Task'
	button.textContent = 'Add Task'
	button.dataset.value = 'taskAdd'
	taskCancelButton.dataset.value = 'taskCancel'
	choseProjectContainer.removeChild(newButton)
	projectInput.selectedIndex = 0
	nameInput.placeholder = 'Name'
	colorInput.value = "#000000"
	dateInput.value = ''
	cancelButtonListener('task')
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

class Project {
	constructor(number, name) {
		this.number = number
		this.name = name
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
	const taskTextInput = document.getElementById('taskText')
	const projectContainer2 = document.querySelector('#format')
	let number = taskNumber
	changeNumber(0, 0, 1)

	let name = nameInput.value
	let date = dateInput.value
	let project = projectContainer2.options[projectContainer2.selectedIndex].value
	if (nameInput.value == '') {
		name = 'new task'
	}
	let today = new Date()

	let year = today.getFullYear();
	let month = (today.getMonth() + 1).toString().padStart(2, '0')
	let day = today.getDate().toString().padStart(2, '0')
	let formattedDate = `${year}-${month}-${day}`
	if (dateInput.value == ''){date = formattedDate}
	

	const newTask = new Task(number, name, taskTextInput.value, project, colorInput.value, date, false)
	userTasks.push(newTask)
	updateStorage(1, 0, 0)
	clearTasks()
	nameInput.value = ''
	nameInput.placeholder = 'Name...'
	colorInput.value = '#000000'
	dateInput.value = ''
	taskTextInput.value = ''
	taskTextInput.placeholder = 'What to do?'
	projectContainer2.selectedIndex = 0
	cancelButtonListener('task')
	renderTasks()
}

function addMember() {
	const nameInput = document.querySelector('.memberNameInput')
	const ageInput = document.querySelector('.memberAgeInput')
	const positionInput = document.querySelector('.memberPositionInput')
	const notesInput = document.querySelector('.memberTextArea')
	const avatarInput = document.querySelector('.avatarInput')
	let number = memberNumber
	changeNumber(0, 1, 0)
	const addMemberScreen = document.querySelector('.addMemberScreen')

	let avatarImage = avatarInput.value
	if (avatarInput.files.length == 0) {
		avatarImage = myImages.defaultAvatar
	}

	const newMember = new Member(number, nameInput.value, ageInput.value, positionInput.value, avatarImage, notesInput.value)
	userMembers.push(newMember)
	updateStorage(0, 1, 0)
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
			for (let i = 0; i < userMembers.length; i++) {
				if (userMembers[i].number == clickedMember) {
					userMembers.splice(i, 1)
				}
			}
			updateStorage(0, 1, 0)
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
			if (newName == '') {
				for (let i = 0; i < userMembers.length; i++) {
					if (userMembers[i].number == clickedMember) {
						newName = userMembers[i].name
					}
				}}
			let newAge = document.querySelector('[data-name="ageInput"]').value
			if (newAge == '') {
				for (let i = 0; i < userMembers.length; i++) {
					if (userMembers[i].number == clickedMember) {
						newAge = userMembers[i].age
					}
				}}
			let newPosition = document.querySelector('[data-name="positionInput"]').value
			if (newPosition == '') {
				for (let i = 0; i < userMembers.length; i++) {
					if (userMembers[i].number == clickedMember) {
						newPosition = userMembers[i].position
					}
				}
			}
			let newImage
			let newNotes = document.querySelector('[data-name="notesInput"]').value
			if (newNotes == '') {
				for (let i = 0; i < userMembers.length; i++) {
					if (userMembers[i].number == clickedMember) {
						newNotes = userMembers[i].task
					}
				}
			}

			for (let i = 0; i < userMembers.length; i++) {
				if (userMembers[i].number == clickedMember) {
					userMembers[i].name = newName
					userMembers[i].age = newAge
					userMembers[i].position = newPosition
					userMembers[i].notes = newNotes
				}
			}
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
export { resetScreen }
export { editTask }
export { taskRemove }
export { clearTasks }