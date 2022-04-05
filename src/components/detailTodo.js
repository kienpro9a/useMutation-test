import React, { useState } from 'react'
import * as api from "./api"
import { useQuery } from "react-query";
import { Box, Button, Text } from '@chakra-ui/react';
import EditTodo from './editTodo';

const DetailTodo = ({ todoId }) => {
  const [isEdit, setIsEdit] = useState(false)
  const { isLoading, data: todoDetail, isError, error, } = useQuery(["todo", todoId], () => api.getTodo(todoId), { enabled: Boolean(todoId) });
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>ERROR: {error.message}</h2>;
  }
  if(!todoId){
    return <Text fontSize={32}>Select detail todo item</Text>
  }
  return (
    <Box>
      <Button onClick={() => setIsEdit(!isEdit)}>
        {isEdit ? "Cancel" : "Edit"}
      </Button>
      {isEdit ? (
        <Box>
          <EditTodo data={todoDetail?.data} setIsEdit={setIsEdit} />
        </Box>
      ) : (
        <Box>
          <Text>ID: {todoDetail?.data.id}</Text>
          <Text>TASK: {todoDetail?.data.task}</Text>
          <Text>COMPLETED: {todoDetail?.data.completed ? "true" : "false"}</Text>
        </Box>
      )}

    </Box>
  )
}

export default DetailTodo