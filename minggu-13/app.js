
const loadContent = () => {
    let xhr = new XMLHttpRequest()
    let url = "url"
    xhr.onreadystatechange = () => {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('result').innerHTML = this.responseText
        }
    }
    xhr.open('GET', url, true)
    xhr.send()
}