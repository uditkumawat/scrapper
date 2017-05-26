'use strict';

const fs = require('fs');
const request = require('request');
const urlRegex = require('url-regex');

class Scrapper {

    constructor() {
        this.temp = [];
    }
    
    init(callback){

        request('https://www.medium.com', function (error, response, body) {

            if(error)
                callback(error);
            else if(response && response.statusCode==200) {

                this.temp = body.match(urlRegex());

                //asynchronously add these urls in csv file
                fs.appendFile('urls.csv',this.temp,function(){

                });

                callback(null,this.temp);
            }
        });
    }

}


const scrap = new Scrapper();

scrap.init(function(error,data){

    if(error){
        console.log("Error in request module");
        process.exit(0);
    }
    else if(data) {
        console.log("Index page Scrapping done");
    }
});

    
