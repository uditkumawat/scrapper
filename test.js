"use strict";

let https = require('https');
let fs = require('fs');
let urlRegex = require('url-regex');

let urls = ['https://medium.com'];

let url = null;

let totalURLToTraverse = 10000;                 //setting a limit to traverse (depth)
let indexingURL=0;

function getUrl(){

    indexingURL++;
    
    if(indexingURL>totalURLToTraverse)
        return;
    
    //remove first element (URL) from array and store in variable for further processing
    
    url = urls.shift();                 

    try
    {
        https.get(url, function (response) {

            let htmlBody = '';

            response.on('data', function (d) {
                if (response.statusCode == 200)
                    htmlBody += d;
            });

            response.on('end', function () {

                let urlsFromThisPage = htmlBody.match(urlRegex());

                urls = urls.concat(htmlBody.match(urlRegex()));

                urls = [...new Set(urls)];

                if(urlsFromThisPage!=null && url!=null) {

                    fs.appendFile('urls.csv', urlsFromThisPage, function () {

                    });
                }

                if (urls.length != 0) {
                    getUrl();
                }
            });

        }).on("error", function (error) {

            if (error) {
                console.log(error);
                getUrl();
            }
        });
    }
    catch(e){

        console.log(e);
        getUrl();
    }
}

// 5 concurrent request

for(let i=0;i<5;i++)
{
    console.log("called ",i);
    getUrl();
}