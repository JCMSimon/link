document.addEventListener("DOMContentLoaded", function() {
    const destination = window.location.pathname.substring(1);
    console.log(destination)
    infoElem = document.getElementsByClassName("redirectText")[0]
    if (destination == "") {
        // no redirect
        infoElem.text = "No redirect found"
        } else {
            infoElem.text = `Going to ${destination}`    
        }
    }
)