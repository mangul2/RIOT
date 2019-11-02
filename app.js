const req = require('request');

let url = "https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/";
let name = "망 울";
name = encodeURI(name);
let key = "RGAPI-a3f633dd-c9cf-46d0-955a-b63813ccdf61";
req.get(`${url}${name}?api_key=${key}`, (err, res, body)=>{
    let json = JSON.parse(body);
    let accId = json.accountId;

    let matchUrl = `https://kr.api.riotgames.com/lol/match/v4/matchlists/by-account/${accId}?api_key=${key}`;

    req.get(matchUrl, (err, res, body)=>{
        let matchJson = JSON.parse(body);
        console.log(matchJson);
    });
});

// npm install --save-dev electron electron-packager asar 일렉트론 설치