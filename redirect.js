document.addEventListener("DOMContentLoaded", async function () {
    // Get some ~~bitches~~ vars
    const destination = window.location.pathname.substring(1);
    // const destination = "github";
    const infoElem = document.getElementById("redirectingText")
    const bodyElem = document.getElementById("mybodymyhtmlchoice")
    // Load json file with redirects
    const raw_data = await fetch('redirects.json');
    const redirects = await raw_data.json();
    // Process and use data
    const availableRedirects = Object.keys(redirects)
    if (availableRedirects.includes(destination.toLowerCase())) {
        infoElem.textContent = `Going to ${destination}`
    } else {
        infoElem.textContent = `${destination} not found`
        for (let index = 0; index < availableRedirects.length; index++) {
            const redirect = availableRedirects[index];
            newLink = makeLink(redirect)
            bodyElem.appendChild(newLink)
        }
    }
})

function makeLink(name) {
    let newLink = document.createElement("a")
    newLink.href = `https://link.jcms.dev/${name}`
    newLink.textContent = name
    newLink.classList.add("link")
    return newLink
}