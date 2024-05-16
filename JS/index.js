let drop_btn=document.querySelector("#drop-logo");
let drop=document.querySelector(".dropdown")
drop_btn.addEventListener("click",()=>{
    if(drop.style.display=="none"){
        drop.style.display="inline-block";
    }
    else{
        drop.style.display="none";
    }
});

let team_drop_btn=document.querySelector("#team");
let team_drop=document.querySelector(".team-drop");
 team_drop_btn.addEventListener("click", ()=>{
    if(team_drop.style.display=="none"){
        team_drop.style.display="inline-block";
    }
    else{
        team_drop.style.display="none";
    }
 })
