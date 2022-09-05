const info_general = document.getElementById("info_general")

window.onload = () => {
    let years = Math.floor((Date.now()-new Date("2007-01-11"))/(86400000*365.25))
    info_general.innerText = info_general.innerText.replace("{{age}}", `${years} years old`)
}