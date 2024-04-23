import myDoom from "./doom"
import { userProjects } from "./data"
import { userTasks } from "./data"
import { userMembers } from "./data"
import myImages from "./images"

function addTask() {

}

function addProject() {

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

function addMember() {
	const nameInput = document.querySelector('.memberNameInput')
	const ageInput = document.querySelector('.memberAgeInput')
	const positionInput = document.querySelector('.memberPositionInput')
	const notesInput = document.querySelector('.memberTextArea')
	const avatarInput = document.querySelector('.avatarInput')
	const number = userMembers.length

	const newMember = new Member(number, nameInput.value, ageInput.value, positionInput.value, avatarInput.value, notesInput.value)
	userMembers.push(newMember)
	console.log(newMember)
	console.log(userMembers[1])
	console.log(userMembers)

	renderMembers()
}

let clickedMember

function editMember(number, condition) {

	let name = userMembers[number].name
	let age = userMembers[number].age
	let position = userMembers[number].position
	let image = userMembers[number].img
	let notes = userMembers[number].notes

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
			return
		} else if (condition == 'remove') {
			userMembers.splice(clickedMember, 1)
			while (myDoom.memberContainer.firstChild) {
				myDoom.memberContainer.removeChild(myDoom.memberContainer.firstChild)
			}
			renderMembers()
			editMemberScreen.style.display = 'none'
			myDoom.secondLayer.style.opacity = 1
			return
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

export { cancelButtonListener }
export { addTaskListener }
export { renderMembers }
export { addProject }
export { addTask }
export { addMember }
export { editMember }