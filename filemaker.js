const fs = require('fs'); //노드js의 파일 시스템

// fs.readFile("champ.json", "utf-8", (err, data)=>{
//     console.log(data);
// });

let json = fs.readFileSync("champ.json", "utf-8");
json = JSON.parse(json); //JSON.parse = json파일로 변경   ->   typeof로 타입을 확인하고 변경

let champList = json.data;

let keyList = Object.keys(champList);

let myJson = {};

for(let i=0; i<keyList.length; i++){
    let item = champList[keyList[i]];
    let myItem = {name:item.name, id:item.id, img:item.image.full}; //item = 아트록스(이름) key값
    myJson[item.key] = myItem;
}

fs.writeFileSync("myChamp.json", JSON.stringify(myJson) , "utf-8");