"use strict";

const request = require('request');
const fs = require('fs');
const urlRegex = require('url-regex');

let urls = ['https://medium.com'];

let url = null;

let totalURLToTraverse = 10000000;                 //setting a limit to traverse (depth)
let indexingURL=0;

function getUrl(){

    indexingURL++;
    
    if(indexingURL>totalURLToTraverse)
        return;
    
    //remove first element (URL) from array and store in variable for further processing
    
    url = urls.shift();


    if(url!=undefined && url!=null) {
     
        request(url, function (error, response, body) {

            if (response && response.statusCode == 200) {

                let urlsFromThisPage = body.match(urlRegex());

                urls = urls.concat(body.match(urlRegex()));

                urls = [...new Set(urls)];

                //asynchronously add these urls in csv file
                fs.appendFile('urls.csv', urlsFromThisPage, function () {

                });

                getUrl();
            }
        });
    }
}

// 5 concurrent request

for(let i=0;i<5;i++)
{
    getUrl();
}