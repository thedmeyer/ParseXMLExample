function parseXML(input) {

	var i = -1;
	var result = '';

	var prev = '';
	var next = '';
	var skip = false;

	while (i < input.length - 1) {
		i++;

		curr = input[i];
		prev = input[i-1];
		next = input[i+1];

		if (curr == '/') {
			skip = true;
			result += '}';
			continue;
		}

		if (curr == '<' && next != '/') {
			result += '{';
			continue;
		}

		if (curr == '>' && skip) {
			skip = false;
			continue;
		}

		if (curr == '>') {
			result += "':";
			continue;
		}

		if (prev == '<') {
			result += "'" + curr;
			continue;
		}

		if (prev == '>' && next != '/') {
			result += "'" + curr;
			continue;
		}

		if (next == '<') {
			result += curr + "'";
			continue;
		}

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

}


//parseXML("<a><a>blah</a></a>");
parseXML("<a>blah</a><a><a>blah</a></a><a>blah</a>");
//parseXML("<a>blah</a>");

