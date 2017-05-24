'use strict';

const fs = require('fs');
const request = require('request');
const urlRegex = require('url-regex');
const async = require('async');

class Scrapper {

    constructor() {
        this.links = [];
        this.temp = [];
    }

    getUrls(url,cb){

        request(url,function(error,response,body){

            if(response && response.statusCode==200)
            {


            }

            cb();
        });
    }

    startProcess(data){

        async.map(data,this.getUrls,function(error,urls){

        })

    }


    initial(callback){

        request('http://www.google.com', function (error, response, body) {

            if(error)
                callback(error);
            else if(response && response.statusCode==200) {

                this.temp = body.match(urlRegex());
                this.temp = [...new Set(this.temp)];

                //asynchronously add these unique urls in csv file
                fs.appendFile('urls.csv',this.temp,function(){

                });

                callback(null,this.temp);
            }
        });
    }

}

const scrap = new Scrapper();

scrap.initial(function(error,data){

    if(error){
        console.log("Error in request module");
        process.exit(0);
    }
    else if(data) {
        scrap.startProcess(data);
        console.log("Scrapping done");
    }
});