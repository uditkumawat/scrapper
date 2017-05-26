# Website scrapper with maximum 5 concurrent requests

Files description:-

1.index.js - Code crawling the website recursively with async.parallel method and storing urls of each page in urls.csv file.
Running command - node index.js

Initially we are finding url links from home page,then pass that array of urls to crawler function to make concurrent requests to other urls.

2.test.js - Code crawling the website recursively without use of async library and storing urls of each page in urls.csv file.
Running command - node test.js
