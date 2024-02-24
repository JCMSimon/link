document.addEventListener("DOMContentLoaded", function() {
    const destination = window.location.pathname.substring(1);
    console.log(destination)
    infoElem = document.getElementsByClassName("redirectText")[0]
    if (destination == "") {
        // no redirect
        infoElem.textContent = "No redirect found"
        } else {
            infoElem.textContent = `Going to ${destination}`    
        }
    }
)