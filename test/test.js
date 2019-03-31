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

	it('should parse multiple tags', function () {

		// 1. ARRANGE
		var input = '<a>blah</a><b>wow</b>';
		var result = "{'a':'blah'},{'b':'wow'}";

		// 2. ACT
		var output = parseXML(input);

		// 3. ASSERT
		expect(output).to.be.equal(result);

	});

	it('should parse nested tags', function () {

		// 1. ARRANGE
		var input = '<a><b>wow</b></a>';
		var result = "{'a':{'b':'wow'}}";

		// 2. ACT
		var output = parseXML(input);

		// 3. ASSERT
		expect(output).to.be.equal(result);

	});

	it('should parse multi-char tags', function () {

		// 1. ARRANGE
		var input = '<aaaa><b>wow</b></aaaa>';
		var result = "{'aaaa':{'b':'wow'}}";

		// 2. ACT
		var output = parseXML(input);

		// 3. ASSERT
		expect(output).to.be.equal(result);

	});

	it('should parse multi-nested tags', function () {

		// 1. ARRANGE
		var input = '<aaaa><b>wow</b><b>wow</b></aaaa>';
		var result = "{'aaaa':{'b':'wow'},{'b':'wow'}}";

		// 2. ACT
		var output = parseXML(input);

		// 3. ASSERT
		expect(output).to.be.equal(result);

	});
});