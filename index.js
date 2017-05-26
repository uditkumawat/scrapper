'use strict';

const fs = require('fs');
const request = require('request');
const urlRegex = require('url-regex');
const async = require('async');

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
        crawl(data);
    }
});

    
function crawl(urls){

    async.parallel([

        function(cb){

            let url = null;
            url = urls.shift();

            if(url!=null) {

                request(url, function (error, response, body) {

                    if(response && response.statusCode==200){

                        let urlsFromThisPage = body.match(urlRegex());

                        urls = urls.concat(body.match(urlRegex()));

                        urls = [...new Set(urls)];

                        if(urlsFromThisPage!=null && url!=null) {

                            fs.appendFile('urls.csv', urlsFromThisPage, function () {

                            });
                        }

                    }

                    cb();
                });
            }
            else{
                cb();
            }
        },
        function(cb){

            let url = null;
            url = urls.shift();

            if(url!=null) {

                request(url, function (error, response, body) {

                    if(response && response.statusCode==200){

                        let urlsFromThisPage = body.match(urlRegex());

                        urls = urls.concat(body.match(urlRegex()));

                        urls = [...new Set(urls)];

                        if(urlsFromThisPage!=null && url!=null) {


                            fs.appendFile('urls.csv', urlsFromThisPage, function () {

                            });
                        }

                    }

                    cb();
                });
            }
            else{
                cb();
            }
        },
        function(cb){

            let url = null;
            url = urls.shift();

            if(url!=null) {

                request(url, function (error, response, body) {

                    if(response && response.statusCode==200){

                        let urlsFromThisPage = body.match(urlRegex());

                        urls = urls.concat(body.match(urlRegex()));

                        urls = [...new Set(urls)];

                        if(urlsFromThisPage!=null && url!=null) {


                            fs.appendFile('urls.csv', urlsFromThisPage, function () {

                            });
                        }

                    }

                    cb();
                });
            }
            else{
                cb();
            }
        },
        function(cb){

            let url = null;
            url = urls.shift();

            if(url!=null) {

                request(url, function (error, response, body) {

                    if(response && response.statusCode==200){

                        let urlsFromThisPage = body.match(urlRegex());

                        urls = urls.concat(body.match(urlRegex()));

                        urls = [...new Set(urls)];

                        if(urlsFromThisPage!=null && url!=null) {


                            fs.appendFile('urls.csv', urlsFromThisPage, function () {

                            });
                        }

                    }

                    cb();
                });
            }
            else{
                cb();
            }
        },
        function(cb){

            let url = null;
            url = urls.shift();

            if(url!=null) {

                request(url, function (error, response, body) {

                    if(response && response.statusCode==200){

                        let urlsFromThisPage = body.match(urlRegex());

                        urls = urls.concat(body.match(urlRegex()));

                        urls = [...new Set(urls)];

                        if(urlsFromThisPage!=null && url!=null) {

                            fs.appendFile('urls.csv', urlsFromThisPage, function () {

                            });
                        }

                    }

                    cb();
                });
            }
            else{
                cb();
            }
        }
    ],function(error,result){

        if(urls.length>0){
            crawl(urls);
        }
        else{
            return;
        }
    });
}