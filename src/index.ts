// const express = require('express')
// const dotenv = require('dotenv')
import * as fs from 'fs'
import { log } from 'console'
import './database/index'
import todoRoutes from './routes/todoRoutes'
import  express, {Express, Request , Response} from 'express'
import  dotenv  from 'dotenv'
import bodyParser from 'body-parser'




// console.log('hello world');
// console.log(process.env.PORT);



//   // const textIn = fs.readFileSync('./src/input.txt', 'utf8')
//   // console.log(textIn);
  
//   // const textOut = 'NEW CONTENT : CREATED AT ${Date.now()} \n textIn'
//   // fs.writeFileSync('./src/output.txt', textOut)


//   // fs.readFile('./src/input.txt', 'utf8', (err, data) => {
//   //   if (!err){
//   //         console.log(data);
//   //   }
//   // })

//   // console.log('node js');

//   fs.readFile('./src/start.txt', 'utf8', (err,data1) => {
//     if(err){
//       return console.log('Cannot read file');
//     }
//     console.log(data1);
//     fs.readFile(`./src/${data1}.txt`, 'utf8', (err,data2) =>{
//       if(err){
//         return console.log('Cannot readt file of data2');
//       }
//       console.log(data2);  
//       fs.readFile('./src/append.txt', 'utf8', (err,data3) =>{
//         if(err){
//           return console.log('Cannot readt file of data3');
//         }
//         console.log(data3);   
//         fs.writeFile('./src/final.txt', `${data2}\n${data3}`,'utf-8', err=>{
//           if(err){
//             return console.log('Cannot white final.txt');
//           }
//           console.log('Final file added succesfuly');  
//         })
//       }) 
//     })
//   })

import superagent from 'superagent'

// fs.readFile('./src/dog.txt','utf-8',(err, data) =>{
//   if(err){
//     return console.log('Cannot read file');
//   }
//   console.log(data);
// superagent.get(`https://dog.ceo/api/breed/${data}/images/random`)
// .end((err, res) => {
//   if(err) return console.log(err?.message)
//   console.log(res.body)
//   fs.writeFile('./src/dog-img.txt',res.body.message,err => {
//     if(err) return console.log(err?.message);
//     console.log('Random dog img saved to file !'); 
//   })
// })
// })

// const readFilePro = (file:string) => {
//   return new Promise ((resolve, reject)=>{
//     fs.readFile(file, 'utf8', (err, data) => {
//       if(err) return reject('couldnt read file data')
//       resolve(data)
//     })
//   })
// }

// const writeFilePro = (file:string, data:string) => {
//   return new Promise ((resolve, reject)=>{
//     fs.writeFile(file, data, err => {
//       if(err) return reject('couldnt write file file')
//       resolve('succes')
//     })
//   })
// }

// readFilePro('./src/dog.txt')
// .then(data => {
//   console.log('recieved value from promise',data)
//   return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`)
// })
// .then(res => {
//   console.log(res.body);
//   return writeFilePro('./src/dog-img.txt', res.body.message)
// })
// .then(()=>{
//   console.log('Random dog image saved to file'); 
// })
// .catch(err => {
//   console.log('error recieved from promise', err);

// });

dotenv.config()
const app = express()
const port=process.env.PORT

app.get('/',(req:Request ,res:Response) => res.send('Express + JavaScript'))

app.listen(port,() =>
  console.log(`Server is runing at ${port}`))

app.use(bodyParser.json()) //bch najm na9ra data eli yab3thheli 
app.use('/v1/api', todoRoutes)