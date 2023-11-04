//for text changing
let i = 0;
function read() {
  if (!i) {
    document.getElementById("more").style.display = "inline";
    document.getElementById("tuldok").style.display = "none";
    document.getElementById("read").innerHTML = "Read Less";
    i = 1;
  } else {
    document.getElementById("more").style.display = "none";
    document.getElementById("tuldok").style.display = "inline";
    document.getElementById("read").innerHTML = "Read More";
    i = 0;
  }
}

//for image changing
let nxt = 0;
function next() {
  if (!nxt) {
    document.getElementById("owner").style.display = "inline";
    document.getElementById("info").style.display = "inline";
    document.getElementById("sub-t").style.display = "inline";
    document.getElementById("sub").style.display = "none";
    document.getElementById("more").style.display = "none";
    document.getElementById("tuldok").style.display = "none";
    document.getElementById("ttle").style.display = "none";
    document.getElementById("desc").style.display = "none";
    document.getElementById("prvs-img").style.display = "none";
    document.getElementById("nxt-img").style.display = "inline";
    document.getElementById("next").innerHTML = "Previous Page";
    nxt = 1;
  } else {
    document.getElementById("owner").style.display = "none";
    document.getElementById("info").style.display = "none";
    document.getElementById("sub-t").style.display = "none";
    document.getElementById("more").style.display = "none";
    document.getElementById("sub").style.display = "inline";
    document.getElementById("tuldok").style.display = "inline";
    document.getElementById("ttle").style.display = "inline";
    document.getElementById("desc").style.display = "inline";
    document.getElementById("nxt-img").style.display = "none";
    document.getElementById("prvs-img").style.display = "inline";
    document.getElementById("next").innerHTML = "Next Page";
    nxt = 0;
  }
}
