"use strict";

const request = require('request');
const fs = require('fs');
const urlRegex = require('url-regex');

let urls = [];

let url = null;

let totalURLToTraverse = 1000;                 //setting a limit to traverse (depth)
let indexingURL = 0;

function init(callback){

        request('https://www.medium.com', function (error, response, body) {

            if(error)
                callback(error);
            else if(response && response.statusCode==200) {

                urls = body.match(urlRegex());

                //asynchronously add these urls in csv file
                fs.appendFile('urls.csv',urls,function(){

                });

                callback(null,urls);
            }
        });
}

init(function(error,data){
    
    if(error)
        console.log("Error in request module");
    else if(data.length>0)
    {
        // 5 concurrent request
        for (let i = 0; i < 5; i++) {
            getUrl();
        }
    }
});

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
    else{
        
        getUrl();
    }
}