import "../App.css";
import {db} from './firebase.js';
import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs } from "firebase/firestore";
 
const Connect = () => {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);
 
    const addTodo = async (e) => {
        e.preventDefault();  
       
        try {
            const docRef = await addDoc(collection(db, "todos"), {
              name: "Netra Nyaupane",
              classof: "2001",
              bio: "I am honest."    
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }
 
    // const fetchPost = async () => {
       
    //     await getDocs(collection(db, "todos"))
    //         .then((querySnapshot)=>{              
    //             const newData = querySnapshot.docs
    //                 .map((doc) => ({...doc.data(), id:doc.id }));
    //             setTodos(newData);                
    //             console.log(todos, newData);
    //         })
       
    // }
   
    // useEffect(()=>{
    //     fetchPost();
    // }, [])
 
 
    return (
        <section className="todo-container">
            <div className="todo">
                <h1 className="header">
                    Todo-App
                </h1>
   
                <div>
   
                    <div>
                        <form onSubmit={addTodo}>
                            <input
                                type="text"
                                placeholder="What do you have to do today?"
                                onChange={(e)=>setTodo(e.target.value)}
                            />
                        
                        <div className="btn-container">
                            <button
                                type="submit"
                                className="btn"
                                onClick={addTodo}
                            >
                                Submit
                            </button>
                        </div>
                        </form>
                        
                        </div>
   
                </div>
   
                <div className="todo-content">
                    {
                        todos?.map((todo,i)=>(
                            <p key={i}>
                                {todo.todo}
                            </p>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
 
export default Connect