clone this app

run `npm i`

get a quovo ui token

paste token into `App`'s `componentDidMount` (janky, i know)

run `npm start`

log in with fake bank credentials

the following error is thrown, and the connection in progress screen hangs indefinitely

```
app.cda2f42752f0ca2f983d.js:39 Error: Actions must be plain objects. Use custom middleware for async actions.
    at Object.performAction (<anonymous>:1:40685)
    at liftAction (<anonymous>:1:34238)
    at dispatch (<anonymous>:1:38232)
    at t.syncAccountSuccess (app.cda2f42752f0ca2f983d.js:80)
    at app.cda2f42752f0ca2f983d.js:39
    at c (app.cda2f42752f0ca2f983d.js:39)
    at app.cda2f42752f0ca2f983d.js:39
    at f.$digest (app.cda2f42752f0ca2f983d.js:39)
    at f.$apply (app.cda2f42752f0ca2f983d.js:39)
    at x (app.cda2f42752f0ca2f983d.js:39) "Possibly unhandled rejection: {}"
  ```
