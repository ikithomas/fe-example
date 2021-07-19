
##### Dev env setup

```bash
make build
make sh

# in the container, local dev env
npm run server
```

##### cmd

```bash
# babel, transpiring Javascript
npm install --save-dev \
  @babel/cli@7.8.4 \
  @babel/core@7.0.0 \
  @babel/preset-env@7.0.0 \
  @babel/register@7.0.0 \
  @babel/node@7.0.0

# Module bundler, bundling all JS
npm install --save-dev \
  webpack@4.17.2 \
  webpack-cli@3.1.2 \
  webpack-dev-server@3.1.7

npm install --save-dev babel-loader@8.0.2 style-loader css-loader sass-loader
```

##### References

- [frontend dev env setup - 1](https://www.freecodecamp.org/news/how-to-set-up-a-front-end-development-project/)
- [frontend dev env setup - 2](https://javascript.plainenglish.io/how-to-set-up-a-js-dev-environment-5104f3b24ccb)
