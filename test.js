"use strict";

let request = require('request');
let async = require('async');
let fs = require('fs');
let urlRegex = require('url-regex');


let urls = ['https://medium.com/'];

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
            crawl();
        }
        else{
            return;
        }
    });
}

crawl();