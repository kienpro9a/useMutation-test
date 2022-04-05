import { SimpleGrid, Box } from "@chakra-ui/react";
import React, { useState } from "react";
import Info from "./components/info";
import AddTodo from "./components/addTodo";
import DetailTodo from "./components/detailTodo";

function App() {
  const [todoId, setTodoId] = useState()
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      spacing={0}
    >
      <Box p="20">
        <AddTodo />
        <Info setTodoId={setTodoId}/>
      </Box>
      <Box p="20">
        <DetailTodo todoId={todoId}/>
      </Box>
    </SimpleGrid>
  );
}

export default App;
