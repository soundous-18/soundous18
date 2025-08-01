console.log("test");
alert("Bienvenue sur mon site!");
let prénom = prompt("Quel est ton prénom ?");
let nom = prompt("Quel est ton nom ?");

console.log("Bonjour " + prénom + " " + nom + "!");

let monParagraphe = document.getElementById("animepara");


function glowParagrapheIN() {
    anime({
        targets: "#animepara",
        textShadow: [
            "0 0 0px #fff", 
            "0 0 15px #fff, 0 0 30px #fff, 0 0 45px #ff0000, 0 0 60px #ff0000, 0 0 75px #ff5500"
        ],
        duration: 500,
        easing: "easeInOutQuad"
    });
}

function glowParagrapheOUT() {
    anime({
        targets: "#animepara",
        textShadow: [
            "0 0 15px #fff, 0 0 30px #fff, 0 0 45px #ff0000, 0 0 60px #ff0000, 0 0 75px #ff5500",
          "0 0 0px #fff"
        ],
        duration: 500,
        easing: "easeInOutQuad"
    });
}


monParagraphe.addEventListener("mouseover", glowParagrapheIN);
monParagraphe.addEventListener("mouseout", glowParagrapheOUT);