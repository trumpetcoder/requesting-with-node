
const env = require('./env');



var request = require('request');

// handles requests coming in and sends a response to each
// function handleRequests(request, response){
//     response.end(console.log (id) );
// }


function get(movieTitle) {
	request.get('https://www.googleapis.com/customsearch/v1?key=' + env.key + '&cx=' + env.id + '&q=' + movieTitle, function (error, response, body) {
		var desc = JSON.parse(body);
  	// https://www.googleapis.com/customsearch/v1?key=AIzaSyBaJgktPG3zelhsMPSP4MAxVSWPpNV-b48&cx=017711768653309943661:7qsu_j4beqq&q=face+off+movie
  	console.log(desc.items[0].title);
  });
}

module.exports = get;



// console.log(env);
// 'use strict'
// const http = require('http');
// const key = require('./env');
// defines some port to listen to
// const PORT=8080;