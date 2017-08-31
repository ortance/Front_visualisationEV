/// <reference path="../bin/sha1.d.ts"/>
/// <reference path="./qunit/qunit.d.ts"/>

test("sha1.hash() - verify", function()
{
	equal(sha1.hash(''), 'da39a3ee5e6b4b0d3255bfef95601890afd80709');
	equal(sha1.hash(new Uint8Array(0).buffer), 'da39a3ee5e6b4b0d3255bfef95601890afd80709');
	equal(sha1.hash("!"), '0ab8318acaf6e678dd02e2b5c343ed41111b393d');
	equal(sha1.hash("Mike Keesey"), 'b57ff68c9ec9119ee1be0741b828f7d1c4ed6d8c');
});

test("sha1.hash() - 10 Mb BLOB", function()
{
	expect(0);
	var buffer = new Uint8Array(10 * Math.pow(2, 20)).buffer, 
		start = new Date();
	sha1.hash(buffer);
	console.log(new Date().getTime() - start.getTime());
});
