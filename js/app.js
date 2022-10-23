// ------Active Tab-------
var tablinks = document.getElementsByClassName('tablinks');
var tabcontents = document.getElementsByClassName('tabcontents');
var sidemeu = document.getElementById("sidemenu");

function opentab(id){
    for(tablink of tablinks){
        tablink.classList.remove("activelink");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("activetab");
    }
    event.currentTarget.classList.add("activelink");
    document.getElementById(id).classList.add("activetab");
}

function openmenu(){
    // console.log(sidemeu);
    sidemeu.style.right = "0";
}

function closemenu(){
    sidemeu.style.right = "-200px";
}