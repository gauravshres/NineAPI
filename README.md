# Nine Code Challenge
![Node.js CI](https://github.com/gauravshres/NineAPI/workflows/Node.js%20CI/badge.svg)
<a href="https://codeclimate.com/github/gauravshres/NineAPI/test_coverage"><img src="https://api.codeclimate.com/v1/badges/eff1539c18ee45de6b6e/test_coverage" /></a>
<a href="https://codeclimate.com/github/gauravshres/NineAPI/maintainability"><img src="https://api.codeclimate.com/v1/badges/eff1539c18ee45de6b6e/maintainability" /></a>

This is an application build on NodeJs that provides an API to filter that JSON data and return few fields as response.

## Library/Tools Used

- Dependencies

1. compression: For performance and relability used compressing to decrease the size of the response body and hence increase the speed of a web app
2. helmet: For better secuirty used Helmet to help protect app from some well-known web vulnerabilities by setting HTTP headers appropriately.
3. winston: For better loggin for app activites.
4. expressjs-utils: For writing easier express app and use provided set of utilites for errorHandling, starting the express server.

- Dev-dependencies

1. Jest: Uses Jest for testing
2. Nodemon: Helps in automatically restarting the node.js application when any change is made in the project files.

- Writen on Node with some ES6 syntax : tested on node v12.18.0
