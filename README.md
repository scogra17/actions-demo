# About
A trivial webapp for demo'ing Github actions

# Script

## Background
1) Show webapp at [url](http://ls-actions-demo.herokuapp.com/)
2) Show routes in `index.js`, multiply function in `multiply.js` and tests in `multiply.test.js`
3) Run test
  a. `$ npm run test`
4) Change operator to `+` and run test
  b. `$ npm run test`
5) Explain manual process. Make change, run tests, push to GitHub, deploy to Heroku
6) Explain automation of tests using Github actions. The tests are run on any push or pull request. If the test fails, it prevents merging the code, which in turn prevents deploying the code to production. Explain that this behavior was created using Github actions and describing the set of steps in a YAML file. 
7) Show Github repository, highlighting `.github/workflow/node.js.yml`

## Breaking change
1) Create new branch `awesome-feature` 
  * `$ git checkout -b awesome-feature`
2) Change operator in `multiply.js` to addition
3) "Forget" to run unit test
4) Add and commit code with message "Change operator"
5) Push branch 
  * `$ git push origin awesome-feature`
6) Create PR using provided url 
7) Watch tests progress and fail
8) Show that code cannot be merged
9) Show webapp at [url](http://ls-actions-demo.herokuapp.com/), highlighting that no change has been made

## Fixing change
1) Change operator in `multiply.js` to multiplication
2) Change output message in `index.js`
3) Run unit test 
  a) `$ npm run test`
4) Add and commit code with message "Fix operator"
5) Push branch 
  a) `$ git push origin change-operator`
6) Create PR using provided url 
7) Watch tests progress and pass
8) Merge code
9) Show webapp at [url](http://ls-actions-demo.herokuapp.com/), highlighting that the changes are now in production
