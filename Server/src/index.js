const {server} = require ('./app')
const PORT = 3001;


server.listen(PORT, () => {
    console.log('Server listen on port 3001');
})















// const http = require ('http');
// const {getCharById} = require('./controllers/getCharById')

// http
// .createServer((req,res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
    
//     if(req.url.includes('/rickandmorty/character')){
//         const id = req.url.split('/').at(-1);
//         getCharById(res,+id);
//     }

// }).listen(3001, '127.0.0.1')








// const http = require ('http');
// const data = require('./utils/data');

// http
// .createServer((req,res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     if(req.url.includes('/rickandmorty/character')){
//         const id = req.url.split('/').at(-1)
       
//         const characterFound = data.find((character) => character.id === +id)

//         return res
//         .writeHead(200, {"Content-type": "application/json"})
//         .end(JSON.stringify(characterFound))
//     }
// }).listen(3001, '127.0.0.1')