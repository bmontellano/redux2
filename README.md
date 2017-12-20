Thanks to David Katz for the tutorial.

Check it out <a href='https://www.youtube.com/watch?v=4zIx7J882Fg'>here</a>.
(Youtube 12/20/2017)

This app is a simple reminder app  using npm package sfcookies to utilize browser cookies and store data.

It uses a React framework under the constraints of Redux:

1. There is a necessity for Constants, immutable variables.
2. Actions are within action creators, pure functions that are also immutable.
3. Reducers control and change the state of the store. The store = {} holding the entirety of the application.
