1. What problem does the context API help solve?

it solves the problem that you may run into with prop drilling. Normally in react you pass data around through props, but with context API you can create a global state and pass data around with more liberty.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

-- actions are the triggers that tell the reducers whate they should do.
-- reducers are functions that allow you to contain a variety of options on how to change state depending on the action.type that is passed to it. Because state is immutable a new state is retunred instead of returning a mutated version of the original.
-- store is redux's way of containing state globally for a react app. In the store you pass the state tree via the rootReducer. Any event that triggers an action will be passed to the reducer and updating the state tree which will then update the veiw of the UI

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

-- application state is the state is accessed by the entire app. It can be viewed as global. Redux store is a form application state.
-- component state is the state of a particular component.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

-- thunk is middleware, as its name hints to, it is the middle man between action creators and the reducer. Before the reducer recieves the action that has been created middleware handles it first. It allows us to handle things like fecthing an API or manae events before they alter state.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

-- As of now mine is Context API. Mainly because I am familiar with it the most. Redux is not difficult, it is just new to me. Currently many of my projects are small in scale, so I do not see the need for it. I do understand the importance it provides though.
