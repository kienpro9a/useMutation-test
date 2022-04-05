import React, { useState } from 'react'
import * as api from "./api"
import { useMutation,useQueryClient } from "react-query";
import {
  Checkbox,
  Button,
  Flex,
  Icon,
  Input,
  Box
} from "@chakra-ui/react";
import { MdSave } from "react-icons/md";

const EditTodo = ({ data, setIsEdit }) => {
  const [edit, setEdit] = useState({ ...data });
  const queryClient = useQueryClient()
  const {isLoading, mutate } = useMutation(api.updateTodo,{
    // onMutate: updateTodo => {
    //   queryClient.setQueryData(['todo', data.id], updateTodo)
    //   setIsEdit(false)
    // },
    onSuccess: (updateTodo)=>{
      queryClient.setQueryData(['todo', data.id], updateTodo)
      setIsEdit(false)
    },
    onSettled: () => {
      queryClient.invalidateQueries('todos')
    },
  })
  const handleCheck = () => {
    setEdit({ ...edit, completed: !edit.completed })
  }
  const handleSubmit = () => {
    mutate(edit)
  }
  const handleEditOnChange = (value) => {
    setEdit({ ...edit, task: value })
  }
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return (
    <Flex mb="1" pl="4">
      <Box display="contents">
        <Checkbox onChange={handleCheck} isChecked={edit.completed} mr="4" />
        <Input
          type="text"
          width="auto"
          value={edit.task}
          onChange={(e) => handleEditOnChange(e.target.value)}
          autoFocus
          _focus={{ bg: "white", borderColor: "blue.100" }}
        />
      </Box>
      <Box>
        <Button
          leftIcon={<Icon as={MdSave} />}
          colorScheme="teal"
          variant="outline"
          onClick={handleSubmit}
        >
          Save
        </Button>
      </Box>
    </Flex>
  )
}

export default EditTodo