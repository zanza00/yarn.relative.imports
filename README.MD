# Yarn Relative Imports

## Info
this is a skeleton of an ionic 2 app that `yarn` cannot install but `npm` can

in our case `src/commons` is a submodule that manages our common dependancies for our app.


## Steps to reproduce
- install ionic globally `npm install -g ionic@2.1.4`
    - (optional) install cordova
- clone this repo to your machine
- run `yarn`
    - yarn will fail with the error reported below
- run `npm i`
    - npm can install this
- run `ionic serve`


## Error

```
yarn install v0.16.1
info No lockfile found.
warning yarn.relative.imports: No license field
[1/4] 🔍  Resolving packages...
error "/Users/Zanza00/dev/github/yarn.relative.imports/typings/humanize-duration" doesn't exist.
info Visit https://yarnpkg.com/en/docs/cli/install for documentation about this command.
```
## Version installed

- node: 6.9.1 
- yarn: 0.16.1
- os: macOS 10.12.1 
