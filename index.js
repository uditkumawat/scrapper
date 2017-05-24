'use strict';

const fs = require('fs');
const request = require('request');
const urlRegex = require('url-regex');

class Scrapper {

    constructor() {
        this.links = [];
        this.temp = [];
    }

    init(callback){

        request('http://www.google.com', function (error, response, body) {

            if(error)
                callback(error,null);
            else if(response && response.statusCode==200) {

                this.temp = body.match(urlRegex());
                this.temp = [...new Set(this.temp)];

                //asynchronously add these unique urls in csv file
                fs.appendFile('urls.csv',this.temp,function(){

                });

                callback(null,this.temp.length);
            }
        });
    }

    startProcess(){



    }
}

const scrap = new Scrapper();

scrap.init(function(error,bool){

    if(error){
        console.log("Error in request module");
        process.exit(0);
    }
    else if(bool) {
        scrap.startProcess();
    }
});