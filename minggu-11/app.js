let container = document.querySelector('.container'),
    form = document.getElementById('inputForm'),
    inputName = document.getElementById('inputName'),
    inputSubmit = document.getElementById('inputSubmit'),
    table = document.getElementById('tableMahasiswa'),
    size = document.getElementById('sizeNumber'),
    isMore = false

let names = ['ben', 'tom', 'jenner']
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
        </tr>`
        size.innerHTML = names.length
    }
}

// TODO: this function will stack a new array to another.
updateData();   

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
            </tr>`

            size.innerHTML = names.length
        inputName.value = ''
    } else if (!isMore) {
        container.innerHTML += 
            `<a class="table-body__link" href="#">Load more..</a>`
        isMore = true
    }
})

// If the name is more than 10, switch to a link that can load more.

