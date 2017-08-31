#!/bin/sh

echo 'Building SHA1...'

echo 'Translating TypeScript to JavaScript...'
tsc --declaration --out bin/sha1.js src/sha1.ts
tsc test/test-sha1.ts

echo 'Minifying...'
java -jar libs/yuicompressor.jar -o bin/sha1.min.js bin/sha1.js

echo 'Build complete.'
