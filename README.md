# worker-loader-example
Example of current incompatibility of worker-loader with common chunks plugin

Just run `NODE_ENV=production npm i && npm start` to see an example running at `localhost:3000`

Replacing line 7 of [public/bundle.js](public/bundle.js#L7) with 

```
return new Worker(__webpack_require__.p + "expected.worker.js");
```

shows a different approach to compiling the workers working as expected...
