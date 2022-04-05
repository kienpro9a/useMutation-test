import React from 'react'
import { useState } from "react";
import { useMutation ,useQueryClient} from "react-query";
import {
  Input,
  Button,
  Text,
} from '@chakra-ui/react'
import * as api from "./api"

const AddTodo = () => {
  const [task, setTask] = useState("");
  const queryClient = useQueryClient()
  const { mutate } = useMutation(api.addTodo,{
    onSettled: () => {
      queryClient.invalidateQueries('todos')
    },
  });
  const handleAddTodo = (e) => {
    e.preventDefault()
    const todo = { completed: false, task }
    mutate(todo)
    setTask("")
  }
  return (
    <>
      <form onSubmit={handleAddTodo}>
        <Text>Add Todo</Text>
        <Input w="50" type='text' value={task} onChange={(e) => setTask(e.target.value)} />
        <Button
          colorScheme='teal'
          type='submit'
        >
          Submit
        </Button>
      </form>
    </>
  )
}

export default AddTodo