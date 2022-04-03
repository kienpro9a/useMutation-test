import React from 'react'
import { useState } from "react";
import { useMutation } from "react-query";
import axios from "axios";

const Main = () => {
  const [task, setTask] = useState("");
  const {mutate} = useMutation((todo) => {
    return axios.post("http://localhost:4000/todos", todo);
  },
    {
      onSuccess(data) {
        console.log("Succesful", { data });
      },
      onError(error) {
        console.log("Failed", { error });
      },
      onSettled() {
        console.log("Mutation completed.");
      }
    }
  );
  const handleAddTodo =()=>{
    const todo = {completed: false, task}
    mutate(todo)
  }
  return (
    <form onSubmit={handleAddTodo}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button>Add todo</button>
    </form>
  )
}

export default Main