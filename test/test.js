var expect = require('chai').expect;
var parseXML = require('../parseXML');

describe('parseXML()', function () {
	it('should parse just one tag', function () {

		// 1. ARRANGE
		var input = '<a>blah</a>';
		var result = "{'a':'blah'}";

		// 2. ACT
		var output = parseXML(input);

		// 3. ASSERT
		expect(output).to.be.equal(result);

	});
});