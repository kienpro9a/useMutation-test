import React from 'react'
import { useQuery } from "react-query";
import { List , ListItem, Text, Box, Button } from "@chakra-ui/react"
import * as api from "./api"
import DeleteTodo from './deleteTodo';

const Info = ({ setTodoId }) => {
  const { isLoading, data, isError, error, } = useQuery("todos", api.getTodos);
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>ERROR: {error.message}</h2>;
  }
  return (
    <List >
      {data?.data.map((dt,index) => (
        <ListItem key={index}>
          <Box>
            <Text>{dt.task}</Text>
            <Button colorScheme="blue" variant="outline" onClick={() => setTodoId(dt.id)}>Detail</Button>
            <DeleteTodo id={dt.id}/>
          </Box>
        </ListItem>
      ))}
    </List >
  )
}

export default Info