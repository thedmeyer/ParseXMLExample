function parseXML(input) {

	var i = -1;
	var result = '';

	var curr = '';
	var prev = '';
	var next = '';
	var skip = false;

	while (i < input.length - 1) {
		i++;

		curr = input[i];
		prev = input[i-1];
		next = input[i+1];

		// If / reached, then we are closing an object.
		if (curr == '/') {
			skip = true;
			result += '}';
			continue;
		}

		// In this case, we must've run into two objects on the same level.
		if (curr == '<' && next != '/') {
			result += '{';
			continue;
		}

		// No longer skipping the closing tag. resume normal parsing.
		if (curr == '>' && skip) {
			skip = false;
			continue;
		}

		// Tag name capture done. Get ready for contents.
		if (curr == '>') {
			result += "':";
			continue;
		}

		// Building a new tag name.
		if (prev == '<') {
			result += "'" + curr;
			continue;
		}

		// Closing a new tag name.
		if (prev == '>' && next != '/') {
			result += "'" + curr;
			continue;
		}

		// Forward search. New tag.
		if (next == '<') {
			result += curr + "'";
			continue;
		}

		// If in closing tag, skip.
		if (next == '/') {
			continue;
		}

		if (!skip) result += curr;
	}

	//var commaIndex = result.indexOf("}{");
	//console.log(commaIndex);
	var regex = /}{/g;
	result = result.replace(regex, '},{');
	//result = result.slice(0, commaIndex+1) + "," + result.slice(commaIndex+1);

	//result = '['.concat(result);
	//result = result.slice(0, -1) + ']';

	console.log(result);
	return result;

}

module.exports = parseXML;


//parseXML("<a><a>blah</a></a>");
//parseXML("<a>blah</a><a><a>blah</a></a><a>blah</a>");
//parseXML("<a>blah</a>");
