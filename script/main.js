//landing page slideshow

class SlideShow {
  constructor() {}

  landingSlide = interval => {
    var sliders = document.querySelectorAll(".inner-landing");
    let count = -1;
    const classname = sliders[0].className;
    let firstLoop = 0;
    sliders[0].className = `$active ${classname}`;

    for (let i = 1; i < sliders.length; i++) {
      sliders[i].className = `inactive ${classname}`;
    }

    setInterval(() => {
      if (count == -1 && firstLoop == 1) {
        sliders[sliders.length - 1].className = `inactive ${classname}`;
      }
      count += 1;
      sliders[count].className = `active ${classname}`;
      if (sliders[count - 1] != null)
        sliders[count - 1].className = `inactive ${classname}`;

      if (sliders[count + 1] == null) {
        count = -1;
        firstLoop = 1;
      }
    }, interval);
  };
}

//Gallery show

const photos = document.querySelectorAll(".photo-pics");
const mod = document.getElementById("modal");
const modImg = document.getElementById("modal-image");
window.addEventListener("click", show);
let currentOffset;
function show(e) {
  if (e.target.className == "photo-pics") {
    modImg.src = e.target.src;
    mod.style.display = "block";
    currentOffset = pageYOffset;
  } else {
    console.log("nope");
  }
}

window.addEventListener("click", closePhoto);
function closePhoto(e) {
  if (e.target == mod) {
    mod.style.display = "none";
    modImg.src = "";
  }
}

//end of landing page slideshow script

//header background change on scroll

window.addEventListener("scroll", headChange);
function headChange() {
  if (pageYOffset > 54) {
    document.getElementById("head").style.padding = "0px";

    document.getElementById("head").style.backgroundColor = "rgb(44, 16, 13)";
  } else if (pageYOffset < 54) {
    document.getElementById("head").style.background = "transparent";
    document.getElementById("head").style.paddingTop = "40px";
  }
}

//sidebar

const sidenav = document.getElementById("sidenav-btn");
const sidenavModal = document.getElementById("sidenav-modal");

//open sidebar
sidenav.addEventListener("click", openSideBar);
function openSideBar(e) {
  if (e.target.className == "sidenav") {
    document.getElementById("sidebar").style.width = "230px";
    sidenavModal.style.display = "block";
  }
}

sidenavModal.addEventListener("click", closeSideBar);
function closeSideBar(e) {
  if (e.target.className == "sidenav-modal") {
    document.getElementById("sidebar").style.width = "0px";
    sidenavModal.style.display = "none";
  }
}

window.sr = ScrollReveal();

sr.reveal("p", {
  duration: 2000
});
//Header
sr.reveal("#header", {
  duration: 2000,
  origin: "bottom",
  distance: "20px"
});

//landing page

//author

sr.reveal(".profile", {
  duration: 2000,
  origin: "left",
  distance: "600px"
});

//Services

sr.reveal("#services", {
  duration: 4000,
  origin: "left",
  distance: "1000px"
});

//showcase-2

sr.reveal("#showcase-h1", {
  duration: 3000,
  origin: "top",
  distance: "400px"
});

sr.reveal("#showcase-p", {
  duration: 2000,
  origin: "right",
  distance: "1000px"
});

sr.reveal("#showcase-btn", {
  duration: 10000
});

//components

sr.reveal("#component2-h1", {
  duration: 2000,
  origin: "left",
  distance: "300px"
});

sr.reveal("#component2-span", {
  duration: 2000,
  origin: "left",
  distance: "300px"
});

sr.reveal("#component2-p", {
  duration: 4000,
  origin: "left",
  distance: "300px"
});

sr.reveal("#component2-btn", {
  duration: 6000,
  origin: "left",
  distance: "300px"
});

sr.reveal("#component2-pic", {
  duration: 2000,
  origin: "top",
  distance: "400px"
});

//componenets 1

sr.reveal("#component1-h1", {
  duration: 2000,
  origin: "right",
  distance: "300px"
});

sr.reveal("#component1-span", {
  duration: 2000,
  origin: "right",
  distance: "300px"
});

sr.reveal("#component1-p", {
  duration: 4000,
  origin: "right",
  distance: "300px"
});

sr.reveal("#component1-btn", {
  duration: 6000,
  origin: "right",
  distance: "300px"
});

sr.reveal("#component1-pic", {
  duration: 2000,
  origin: "top",
  distance: "400px"
});

//Gallery

sr.reveal(".photo-pics", {
  duration: 3000,
  origin: "left",
  distance: "800px",
  rotate: {
    y: 180
  }
});

//Team

const team = document.querySelectorAll(".team-card");

for (let i in team) {
  let dur = 2000;
  sr.reveal(team[i], {
    duration: dur,
    origin: "top",
    distance: "300px"
  });

  dur + 2000;
}

//Connect social
sr.reveal(".facebook", {
  duration: 10000,
  origin: "left",
  distance: "1000px"
});

sr.reveal(".twitter", {
  duration: 8000,
  origin: "left",
  distance: "1000px"
});

sr.reveal(".instagram", {
  duration: 6000,
  origin: "left",
  distance: "1000px"
});

sr.reveal(".linkedin", {
  duration: 4000,
  origin: "left",
  distance: "1000px"
});

sr.reveal(".pinterest", {
  duration: 2000,
  origin: "left",
  distance: "1000px"
});

//contact us
