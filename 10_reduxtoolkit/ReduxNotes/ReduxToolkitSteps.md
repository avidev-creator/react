## These Are All The Steps You Need To Create Your Redux Toolkit Store.

# 1. Create a store —

    1.	Create a folder — app inside your  ‘src/‘ folder.
    2.	Inside this you need to create a file — ‘store.js’.
    3.	This file will contain store data.
    4.	Here you will get a function which is “configureStore()” from “react-redux”.
    5.	Create a variable name store and call that function inside it.
    6.	Now you will have to provide the reducer inside it.
    7.	Because configureStore take things as an object so reducer will be a key and its value is where you will pass the reducer you have created —
        import { configureStore } from "@reduxjs/toolkit";
        import todoReducer from "../features/todo/todoSlice";

        export const store = configureStore({
                reducer: todoReducer,
        });

# 2. Create Slices —

    1.	You have to create a folder name — “features”.
    2.	In this folder you will have to create another folder of what ever functionality you want to create.
    3.	Inside that you need to create your Slices.
    4.	Here you will have to use 2 functions provided by redux toolkit — createSlice and nanoid.
    5.	I have used nanoid because it generate random id number for your projects.
    6.	Now you have to follow below steps to create slices —
    			a.	first we have to create our initialState. This is where our data will be saved and things will start.
    			b.	just create a variable — initialState and this will be an object.Here you have to pass key and value. Inside this we will provide the way we want our data to be stored. Example - todos: [{}].
    			c. now we will use our createSlice function.
    			d. make a variable and export it and call createSlice in it.
    			e. in this we have to create our reducers.
    			f. we have to use 3 things here --
    						a. name : "todos". This will always remain name.
    						b. initialState. The one you created earlier.
    						c. reducer : {}. Here you will create your reducer and that will have all the methods which you will use in your project.

# 2.a Create Reducer --

    1. Inorder to create your reducer you need just have to figure out how many functions you will need.
    2. Here I have created 2 functions that will be used addTodo and removeTodo.
    3. Now reducer is a key and it will contain Object only.
    4. Inside the reducer every function you will create will have 2 parameters -- state and action. These are objects. Action will also have a property called as payload. This will carry the value. Syntax -- action.payload.
    5. Below is an example of addTodo function and removeTodo i have created --
        reducers: {
            addTodo: (state, action) => {
                const todo = {
                    id: nanoid(),
                    text: action.payload,
                };
                state.todos.push(todo);
            },
            removeTodo: (state, action) => {
                state.todos = state.todos.filter((todo) => todo.id !== action.payload);
            },
        },
    6. Once you create that than you have to pass those 2 functions inside the slice.
    7. Use the below line to do that --
        export const { addTodo, removeTodo } = todoSlice.actions;
    8. Than export this reducer by using below line --
        export default todoSlice.reducer;

# 3. Create components and use the functions --

    1. Inorder to use a store you will have 2 functions provided by react-redux — useSelector and useDispatch.
    2. These 2 functions as the name suggests -- useSelector will select the values from and to the store and useDisptach will help to disptach the selected values outside the store.
    3. Here I have created 1 component to Add a todo and 1 to display all and delete them once created.
    // AddTodo Component --
        import React, { useState } from "react";
        import { useDispatch } from "react-redux";
        import { addTodo } from "../features/todo/todoSlice";

        function AddTodo() {
            const [input, setInput] = useState("");
            const dispatch = useDispatch();

            const addTodoHandler = (e) => {
                e.preventDefault();
                dispatch(addTodo(input));
                setInput("");
            };

            return ()
        }

    // Todo Component --
        import React from "react";
        import { useSelector, useDispatch } from "react-redux";
        import { removeTodo } from "../features/todo/todoSlice";

        function Todos() {
            const todos = useSelector((state) => state.todos);
            const dispatch = useDispatch();

            return ()
        }

# 4. Wrap things in main.jsx --

    Here we will get a Provider from react-redux and we will use this to wrap things up. This provider will always take a prop and without that it will never work which is our store.


    import React from "react";
    import ReactDOM from "react-dom/client";
    import App from "./App.jsx";
    import "./index.css";
    import { Provider } from "react-redux";
    import { store } from "./app/store";

    ReactDOM.createRoot(document.getElementById("root")).render(
        <Provider store={store}>
            <App />
        </Provider>
    );
