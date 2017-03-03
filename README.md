# Site for group https://vk.com/gport


# Features
* React
* redux
* mongoDB
* nodeJS
* express
* passport(auth)
* socket.io
* native browser notification
* react-d3 

## 1. Clone
```bash
`https://github.com/fix2015/BE-for-Gport.git`
```
## 2. Install
```bash
`npm install`
```
## 3. Change out the database configuration in config/database.js

## 4. Change out auth keys in config/auth.js

## 5. Install mongoDB

## 6. Launch
```bash
`node server.js`
```
## 7. Visit in your browser at: `http://localhost:8080`

## 8. DocApi (for update apidoc)
```
sudo apidoc -i app/ -o apidoc/
```

## Structure of App
```
FE/
    e2e/
    src/
    node_modules/
assets/
    css/
    images/
    js/
    site0images/
app/
    controller/
    models/
    routes/
    socket/
apidoc/
server.js
```

## GIT
####merge commits:
```
git rebase -i HEAD~{{commits-count}}
```
will show an editor box:
```
pick {{commit_hash}} {{commit_comment}}
pick {{commit_hash}} {{commit_comment}}
pick {{commit_hash}} {{commit_comment}}
...
```
you have to replace `pick` with `squash`
for those commits that you want to merge into the upper commit like:
```
pick    {{commit_hash}} {{commit_comment}}
squash  {{commit_hash}} {{commit_comment}}
squash  {{commit_hash}} {{commit_comment}}
```
then close editor `:wq`
after that a new editor window will be displayed with squashed commits and an upper one to where commits will be squashed

you can edit those commit texts and close this editor `:wq`

after that just make a `git push -f`

And that all :)


## Contact
Copyright (C) 2017 FE GUYS<br>