var about, education, projects, volunteering, hobbies, contact;
var elements = new Array();
//var id = setInterval(floatIntoView, 500);

function defineVars() {
    about = document.getElementById("about-section");
    education = document.getElementById("education");
    projects = document.getElementById("projects");
    volunteering = document.getElementById("volunteering");
    hobbies = document.getElementById("hobbies-section");
    contact = document.getElementById("contact");

    elements.push(about, education, projects, volunteering, hobbies, contact);
}

function showAbout() {
    about.scrollIntoView(true);
    if (window.innerWidth >= 960) {
        window.scrollBy(0, -100);
    }
}

function showEducation() {
    education.scrollIntoView(true);
    if (window.innerWidth >= 960) {
        window.scrollBy(0, -100);
    }
}

function showProjects() {
    projects.scrollIntoView(true);
    if (window.innerWidth >= 960) {
        window.scrollBy(0, -100);
    }
}

function showVolunteering() {
    volunteering.scrollIntoView(true);
    if (window.innerWidth >= 960) {
        window.scrollBy(0, -100);
    }
}

function showHobbies() {
    hobbies.scrollIntoView(true);
    if (window.innerWidth >= 960) {
        window.scrollBy(0, -100);
    }
}

function showContact() {
    contact.scrollIntoView(false);
}

function expand() {
    if (document.getElementById("main-nav").style.display === "none") {
        document.getElementById("main-nav").style.display = "block";
        return;
    } else {
        document.getElementById("main-nav").style.display = "none";
        return;
    }
}

function resetNav() {
    if (window.innerWidth >= 960) {
        document.getElementById("main-nav").style.display = "inline";
    }
}

function floatIntoView() {
    if (elements !== undefined) {
        //console.log(about.getBoundingClientRect().top + " " + window.innerHeight);
        for (var i = 0; i < elements.length; i++) {
            if (elements[i] !== undefined) {
                if (window.innerHeight >= elements[i].getBoundingClientRect().top) {
                    elements[i].style.transition = "all 1.1s ease-out";
                }
            }
        }
    }
}
