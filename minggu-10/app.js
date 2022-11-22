// let question = confirm('are you sure? [Y/N]');
// let result = question ? "Y" : "N";

// document.write(result);

let paragraph = document.getElementById('hasilOutput');
let isClicked = false;
const parThree = document.getElementById('hasilOutput');
const title = document.getElementById('titleText');

let promptMessage = prompt('Apakah ada kelas? [Yes/No]');
console.log(promptMessage);

switch (promptMessage.toLowerCase()) {
    case 'yes':
        title.innerHTML = 'Selamat datang!';
        break;
    case 'no':
        title.innerHTML = 'Belum tersedia kelas.';
        break;
    default:
        alert('Input tidak valid.');
        break;
}

parThree.addEventListener('click', () => {
    paragraph.innerHTML = 'Aku cintah Javascript';
    paragraph.style.color = 'green';
    paragraph.style.fontSize = '2rem';
    isClicked = true;
});