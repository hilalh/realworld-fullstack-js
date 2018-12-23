A fullstack boilerplate JS-flavored project based on [conduit (aka 'gothinkster/realworld')](https://github.com/gothinkster/realworld)

Simply use `docker-compose up / down` to bring the project up and down. Great for MVPs. Otherwise, it is a great demonstration of how powerful docker can be for development environments.

TODO:
- [x] Connect front end to local backend
- [x] Hot reloading for front end
- [x] Hot reloading for back end
- [x] Documentation (swagger) for backend
  - [x] Document /api/articles as an example
  - [ ] Complete the rest of the documentation
- [ ] Conversion of backend to AWS lambdas
- [ ] Deployment of front end to netlify / S3 + Cloudfront

BUGS:
- [x] Resolve react-redux action payloads when data is present
  * Resolved by giving out a check for empties