SHA-1 TypeScript/JavaScript Library
===================================
by T. Michael Keesey (<keesey@gmail.com>)

License Information
-------------------
This library is available under the MIT license. See the `LICENSE` file for further details.

Usage
-----

1. Copy `bin/sha1.min.js` (or `bin/sha1.js`) to your scripts folder.

2. Include this tag in your HTML:

		<script type="text/javascript" src="PATH_TO_SCRIPTS/sha1.min.js"></script>

3. In your JavaScript (or TypeScript), call `sha1.hash(x)` to get a SHA-1 hash.
The variable `x` can be an `ArrayBuffer` (optimal usage) or a string.
Any other type of object will be converted into a string.

**NOTE:** Be sure to pass the `.buffer` property of a typed array rather than the array itself.

### INCORRECT
	var data = new Uint8Array(256);

	// Will generate SHA-1 hash for the string "[object Uint8Array]"!
	var hash = sha1.hash(data);

### CORRECT
	var data = new Uint8Array(256);
	
	var hash = sha1.hash(data.buffer);
