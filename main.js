const {ipcRenderer} = require('electron');

window.addEventListener("keydown", (e)=>{
    if(e.ctrlKey && e.key.toLowerCase() == "q"){
        ipcRenderer.send("openDev");
    }
});

window.addEventListener("load", ()=>{
    let name = document.querySelector("#txtName");
    let searchBtn = document.querySelector("#search");

    searchBtn.addEventListener("click", ()=>{
        let str = name.value;
        ipcRenderer.send("summoner", {name:str});
    });
});