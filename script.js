var about, education, projects, volunteering, hobbies, contact;
var elements = new Array();

function defineVars() {
    about = document.getElementById("about-section");
    education = document.getElementById("education-section");
    projects = document.getElementById("projects-section");
    volunteering = document.getElementById("volunteering-section");
    hobbies = document.getElementById("hobbies-section");
    contact = document.getElementById("contact");

    elements.push(about, education, projects, volunteering, hobbies);
}

function showAbout() {
    /*about.scrollIntoView(true);
    if (window.innerWidth >= 960) {
        window.scrollBy(0, -100);
    }*/
    
    document.querySelector('#about-section').scrollIntoView({
        block: 'start',
        inline: "nearest",
        behavior: 'smooth'
    });
}

function showEducation() {
    document.querySelector("#education-section").scrollIntoView( {
       behavior: 'smooth' 
    });
}

function showProjects() {
    document.querySelector('#projects-section').scrollIntoView( {
        behavior: 'smooth'
    });
}

function showVolunteering() {
    document.querySelector('#volunteering-section').scrollIntoView( {
       behavior: 'smooth' 
    });
}

function showHobbies() {
    /*hobbies.scrollIntoView(true);
    if (window.innerWidth >= 960) {
        window.scrollBy(0, -100);
    }*/
    
    document.querySelector('#hobbies-section').scrollIntoView( {
        block: 'start',
        inline: "nearest",
       behavior: 'smooth' 
    });
}

function showContact() {
    //contact.scrollIntoView(false);
    document.querySelector('#contact').scrollIntoView( {
        behavior: 'smooth'
    });
}

function expand() {
    if (document.getElementById("main-nav").style.opacity === "0") {
        document.getElementById("main-nav").style.opacity = "1";
        return;
    } else {
        document.getElementById("main-nav").style.opacity = "0";
        return;
    }
}

function resetNav() {
    if (window.innerWidth >= 960) {
        document.getElementById("main-nav").style.opacity = "1";
    }
}

function floatIntoView() {
    if (elements !== undefined) {
        for (var i = 0; i < elements.length; i++) {
            if (elements[i] !== undefined) {
                if (window.innerHeight >= elements[i].getBoundingClientRect().top) {
                    elements[i].style.transition = "0.5s ease-in";
                    elements[i].style.opacity = "1";
                }
            }
        }
    }
}
