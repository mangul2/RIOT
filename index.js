const {app, BrowserWindow, ipcMain, Menu} = require('electron');
const LolAPI = require('./LolAPI.js');

const option = {
    width:1200,
    height:600,
    resizable: false, //커서로 크기조절 false 불가능 true 가능
    webPreferences:{
        nodeIntegration: true,   //node.js 사용여부
        nativeWindowOpen: true,
    }
};

let win = null;
let api = new LolAPI();

app.on("ready", ()=>{
    Menu.setApplicationMenu(null);
    win = new BrowserWindow(option);

    win.loadFile("index.html"); 
});

ipcMain.on("openDev", ()=>{
    win.webContents.openDevTools(); //개발자 도구가 켜짐
})

ipcMain.on("summoner", (e, data)=>{
    api.loadSummoner(data.name).then(data=>{
        e.reply("summonerData", data);
    });
});