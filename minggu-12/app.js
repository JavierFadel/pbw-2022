// Setting the global variables 🌍. 
let container = document.querySelector('.container'),
    form = document.getElementById('inputForm'),
    inputName = document.getElementById('inputName'),
    inputSubmit = document.getElementById('inputSubmit'),
    table = document.getElementById('tableMahasiswa'),
    size = document.getElementById('sizeNumber'),
    isMore = false

// Array for storing names, a mini database.. sort of.
let names = ['ben', 'tom', 'jenner']

// Function for updating data everytime new data is inputted.
// FIXME: the numbering is not dynamic and this function is executed only once.
const updateData = function() {
    for (let [i, name] of names.entries()) {
        table.innerHTML +=
        `<tr class="table-body__row">
            <td class="table-body__row-item">
                ${i + 1}
            </td>
            <td class="table-body__row-item">
                ${name}
            </td>
            <td class="table-body__row-item">
                <button id="updateButton${i + 1}" class="btn btn--update">Update</button>
                <button id="deleteButton${i + 1}" class="btn btn--delete">Delete</button>
            </td>
        </tr>`
        size.innerHTML = names.length
    }
}

// TODO: this function will stack a new array to another.
updateData();   

// Adding listener to submit button.
// This code is still kinda messy.
form.addEventListener('submit', () => {
    names.push(inputName.value)
    if (names.length <= 10) {
        table.innerHTML += 
            `<tr class="table-body__row">
                <td class="table-body__row-item">
                    ${names.length}
                </td>
                <td class="table-body__row-item">
                    ${inputName.value}
                </td>
                <td class="table-body__row-item">
                    <button id="deleteButton${names.length}" class="btn btn--update">Update</button>
                    <button id="deleteButton${names.length}" class="btn btn--delete">Delete</button>
                </td>
            </tr>`

            size.innerHTML = names.length
        inputName.value = ''
    } else if (!isMore) {
        container.innerHTML += 
            `<a class="table-body__link" href="#">Load more..</a>`
        isMore = true
    }
})

// TODO: If the name is more than 10, switch to a link that can load more.

// Every id must be unique, don't do this 🙅‍♂️.
    // const deleteButton = document.getElementById('deleteButton')
    // deleteButton.addEventListener('click', () => {
    //     alert('clicked')
    // })
// Done ✅.

// Attaching a listener to every single delete button via querySelectorAll.
// This block will including a function do delete a current row where the button is clicked.
const deleteButton = document.querySelectorAll('.btn--delete')
deleteButton.forEach((btn) => {
    btn.addEventListener('click', (el) => {
        // Find a way to return the current <tr>, then delete it, along with the data on the arrays.
        // Currently every button has a unique id's, could we use it?
        
        // We could access the target or `this` object via this target object.
        // This bellow will map the target object.
        console.dir(el.target)
        // Get the button's id via this code.
        console.log(el.target.id)
        // Access the parent-parent element (or grandparent).
        console.dir(el.target.parentNode.parentNode)
        // This will return the name of the second td's.
        console.dir(el.target.parentNode.parentNode.children[1].innerText)
        
        // Removing the selected element.
        // This function is the shit.
        // el.target.parentNode.parentNode.remove()

        // Step 0: get the current element. 
        const buttonId = el.target.id;

        // Step 1: get the value of the name you want to delete, use it as an index to delete the data on the arrays.
        // Step 1.1: This code below will return index of the value `name`.
        const name = el.target.parentNode.parentNode.children[1].innerText
        names.indexOf(name.toLowerCase()) !== -1 && names.splice(names.indexOf(name.toLowerCase()), 1)

        // Step 2: select the current id, use it as an index for the selector.
        // Step 2.1: ask for confirmation.
        const confirmation = confirm(`Are you sure want to delete ${name} from the list?`)
        if (confirmation) {
            // Step 3: delete 👋.
            el.target.parentNode.parentNode.remove()
        }
    })
})

// Attaching a listener to every single update button via querySelectorAll.
// This block will including a function do update a current row where the button is clicked.
const updateButton = document.querySelectorAll('.btn--update')
updateButton.forEach((btn) => {
    btn.addEventListener('click', (el) => {
        // Find a way to return the current <tr>, then update it, along with the data on the arrays.
        // Step 0: get the current element, then the parent-parent.

        // Step 1: get the name value of the current <tr>, use it as an index to update the array.
        const name = el.target.parentNode.parentNode.children[1].innerText
        const index = names.indexOf(name.toLowerCase())
        
        // Step 2: update data.
        const newName = prompt('Enter new name: ')
        if (newName) {
            names[index] = newName
        }

        // Step 3: Update view.
        el.target.parentNode.parentNode.children[1].innerText = newName
    })
})