A simple project demonstrating a version incompatability issue between @currents/playwright@1.1.6 and earlier versions of playwright (namely @currents/playwright@1.32.3).

## Steps to reproduce
* `npx playwright test` will run the suite with the dot reporter and succeed
* `CURRENTS=true npx playwright test` will run the suite with the currents reporter and fail with 

```
 WARNING  Could not extract internal playwright configuration
 WARNING  Unexpected error while sending network request: TypeError: Converting circular structure to JSON
    --> starting at object with constructor 'Object'
    |     property '_internal' -> object with constructor 'Object'
    |     property 'fullConfig' -> object with constructor 'Object'
    |     property 'projects' -> object with constructor 'Array'
    --- index 0 closes the circle
    at stringify (<anonymous>)
    at stringifySafely (/Users/christopherlates/projects/playwrightCurrents/node_modules/axios/lib/defaults/index.js:33:36)
    at Object.transformRequest (/Users/christopherlates/projects/playwrightCurrents/node_modules/axios/lib/defaults/index.js:93:14)
    at transform (/Users/christopherlates/projects/playwrightCurrents/node_modules/axios/lib/core/transformData.js:22:15)
    at Object.forEach (/Users/christopherlates/projects/playwrightCurrents/node_modules/axios/lib/utils.js:255:10)
    at Object.transformData (/Users/christopherlates/projects/playwrightCurrents/node_modules/axios/lib/core/transformData.js:21:9)
    at Axios.dispatchRequest (/Users/christopherlates/projects/playwrightCurrents/node_modules/axios/lib/core/dispatchRequest.js:40:31)
    at Axios.request (/Users/christopherlates/projects/playwrightCurrents/node_modules/axios/lib/core/Axios.js:40:14)
    at N (/Users/christopherlates/projects/playwrightCurrents/node_modules/@currents/playwright/dist/index.js:17:335)
    at qs (/Users/christopherlates/projects/playwrightCurrents/node_modules/@currents/playwright/dist/index.js:44:2183)
 WARNING  Could not start recording for project: 
 WARNING  Failed to create run recording
```

## Solution is to upgrade to @playwright/test@1.43.1 or later.