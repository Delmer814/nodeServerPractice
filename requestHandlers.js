
function start(res) {
	// Log the Request call.
	console.log("Request handler 'start' was called.");
	res.end();
	
};

function upload() {
	// Log the Request call.
	console.log("Request handler 'upload' was called")
	res.end();
}

// Export the request handlers
exports.start = start;
exports.upload = upload;