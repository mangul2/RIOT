const req = require('request');

class LolAPI {
    constructor(){
    //속성
        this.key = "RGAPI-c6cb6b40-d776-4121-adad-d08834fae695";
    }
    //기능
    loadSummoner(name){
        return new Promise( (resolve, rej)=>{
            let url = "https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/";
            name = encodeURI(name);
            const key = this.key;
            req.get(`${url}${name}?api_key=${key}`, (err, res, body)=>{
                let json = JSON.parse(body);
                let accId = json.accountId;
            
                let matchUrl = `https://kr.api.riotgames.com/lol/match/v4/matchlists/by-account/${accId}?api_key=${key}`;
            
                req.get(matchUrl, (err, res, body)=>{
                    let matchJson = JSON.parse(body).matches;
                    resolve({summoner:json, match:matchJson});
                });
            });
        });
    }
}
// npm install --save-dev electron electron-packager asar 일렉트론 설치

module.exports = LolAPI;