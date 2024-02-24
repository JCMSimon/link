document.addEventListener("DOMContentLoaded", function() {
    const destination = window.location.pathname.substring(1);
    console.log(destination)
    const infoElem = document.getElementsByClassName("redirectText")[0]
    if (destination == "") {
        // no redirect
        infoElem.innerHTML = "No redirect found"
        infoElem.innerText = "No redirect found"
        infoElem.textContent = "No redirect found"
    } else {
            infoElem.innerHTML = `Going to ${destination}`
            infoElem.innerText = `Going to ${destination}`
            infoElem.textContent = `Going to ${destination}`    
        }
    }
)