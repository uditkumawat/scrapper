"use strict";

let urlRegex = require('url-regex');
let request = require('request');
let async = require('async');
let fs = require('fs');

let urls = ['http://click-labs.com/'];

function crawl(){
    
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

                            let stringToSave = "URL - >"+url+"\nIts urls inside page -- >\n"+urlsFromThisPage+"\n\n";

                            fs.appendFile('urls.csv', stringToSave, function () {

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

                            let stringToSave = "URL - >"+url+"\nIts urls inside page -- >\n"+urlsFromThisPage+"\n\n";

                            fs.appendFile('urls.csv', stringToSave, function () {

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

                            let stringToSave = "URL - >"+url+"\nIts urls inside page -- >\n"+urlsFromThisPage+"\n\n";

                            fs.appendFile('urls.csv', stringToSave, function () {

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

                            let stringToSave = "URL - >"+url+"\nIts urls inside page -- >\n"+urlsFromThisPage+"\n\n";

                            fs.appendFile('urls.csv', stringToSave, function () {

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

                            let stringToSave = "URL - >"+url+"\nIts urls inside page -- >\n"+urlsFromThisPage+"\n\n";

                            fs.appendFile('urls.csv', stringToSave, function () {

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
            crawl();
        }
        else{
            return;
        }
    });
}

crawl();