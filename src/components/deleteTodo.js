import React from 'react'
import * as api from "./api"
import { useMutation, useQueryClient } from "react-query";
import { Button, Icon } from '@chakra-ui/react';
import { MdDeleteOutline } from "react-icons/md";


const DeleteTodo = ({ id }) => {
  const queryClient = useQueryClient()
  const { isLoading, mutate } = useMutation(() => api.deleteTodo(id), {
    onSettled: () => {
      queryClient.invalidateQueries('todos')
    },
  });
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  const handleDelete = () => {
    mutate(id)
  }
  return (
    <Button
      leftIcon={<Icon as={MdDeleteOutline} />}
      colorScheme="red"
      variant="outline"
      onClick={handleDelete}
      ml="1"
    >
      Delete
    </Button>
  )
}

export default DeleteTodo