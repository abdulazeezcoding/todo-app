import React, { useState } from "react";
import styles from "./index.module.css";
import { useLocalStorage } from "usehooks-ts";

function CreateTodo() {
    const [todos, setTodos] = useLocalStorage("TODO_KEY", []);

    const [todo, setTodo] = useState("");

    return (
        <section className={styles.createTodoSection}>
            <input 
            onChange={event=>setTodo(event.target.value)} 
            className={styles.createTodoInput} 
            placeholder="Start typing..." />
            <button class="btn btn-primary" onClick={()=>setTodos([...todos, todo])}
            //  className={styles.createTodoButton}
             >
                Create</button>
        </section>
        );
}

export default CreateTodo;