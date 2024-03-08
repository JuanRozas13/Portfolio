var my_skills = document.getElementsByClassName("my-skills")[0];
var my_skills1 = document.getElementsByClassName("my-skills")[1];
var my_skills2 = document.getElementsByClassName("my-skills")[2];

var back_github = document.getElementById("back-github");

var back_git = document.getElementById("back-git");


function Arrow_left(){  

    back_github.style.display = "flex";
    back_git.style.display = "flex"

    my_skills.style.display = "none"
    my_skills1.style.display = "none";
    my_skills2.style.display = "none";
}

function Arrow_rigth(){
    back_github.style.display = "none";
    back_git.style.display = "none"

    my_skills.style.display = "flex";
    my_skills1.style.display = "flex";
    my_skills2.style.display = "flex";
}