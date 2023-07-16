let btndestra = document.getElementsByClassName("btndx")
let btnsinistra = document.getElementsByClassName("btnsn")
let colonna1 = document.getElementsByClassName("card1")
let colonna2 = document.getElementsByClassName("card2")
let colonna3 = document.getElementsByClassName("card3")
console.log(colonna1);
let crd = document.getElementsByClassName("card")
console.log(crd);

/*bottoni di spostamento caroselli xl e xxl*/

function sposta1() {
    for (const i of colonna1) {
        if (i.className.includes("spostadestra2")) {
            i.classList.remove("spostadestra2")
        } else {
        i.classList.add("spostasinistra")
        i.classList.remove("spostadestra")
        i.classList.remove("spostadestra2")
        console.log(i);}
    }
   }

function spostadestra1() {
    for (const i of colonna1) {
        if (i.className.includes("spostadestra")) {
            i.classList.add("spostadestra2")
        } else {
        i.classList.add("spostadestra")
        i.classList.remove("spostasinistra")
       } console.log(i);
    }
}

function sposta2() {
    for (const i of colonna2) {
        if (i.className.includes("spostadestra2")) {
            i.classList.remove("spostadestra2")
        } else {
        i.classList.add("spostasinistra")
        i.classList.remove("spostadestra")
        i.classList.remove("spostadestra2")
        console.log(i);}
    }
   }

function spostadestra2() {
    for (const i of colonna2) {
        if (i.className.includes("spostadestra")) {
            i.classList.add("spostadestra2")
        } else {
        i.classList.add("spostadestra")
        i.classList.remove("spostasinistra")
       } console.log(i);
    }
}

function sposta3() {
    for (const i of colonna3) {
        if (i.className.includes("spostadestra2")) {
            i.classList.remove("spostadestra2")
        } else {
        i.classList.add("spostasinistra")
        i.classList.remove("spostadestra")
        i.classList.remove("spostadestra2")
        console.log(i);}
    }
   }

function spostadestra3() {
    for (const i of colonna3) {
        if (i.className.includes("spostadestra")) {
            i.classList.add("spostadestra2")
        } else {
        i.classList.add("spostadestra")
        i.classList.remove("spostasinistra")
       } console.log(i);
    }
}


/*extra*/

let sec3 = document.getElementById("carosello3")
let sec2 = document.getElementById("carosello2")
let sec1 = document.getElementById("carosello1")
console.log(sec3);

window.addEventListener("scroll", function(evt) {
    console.log(window.pageYOffset);
    if (window.pageYOffset>110) {
        sec3.classList.add("dsi")
        sec3.classList.remove("dnon")
    } else {
        sec3.classList.remove("dsi")
        sec3.classList.add("dnon")
    }
})

window.addEventListener("scroll", function(evt) {
    console.log(window.pageYOffset);
    if (window.pageYOffset>370) {
        sec1.classList.add("dnon")
        sec1.classList.remove("dsi")
    } else {
        sec1.classList.remove("dnon")
        sec1.classList.add("dsi")
    }
})

window.addEventListener("scroll", function(evt) {
    console.log(window.pageYOffset);
    if (window.pageYOffset>618) {
        sec2.classList.add("dnon")
        sec2.classList.remove("dsi")
    } else {
        sec2.classList.remove("dnon")
        sec2.classList.add("dsi")
    }
})