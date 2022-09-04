const header = document.querySelector('h1')

window.onload = () => {
    let count = 0
    const thinking = setInterval(() => {
        header.innerHTML += '.'
        if (count >= 3) clearInterval(thinking);
    }, 500)
}