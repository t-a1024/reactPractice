import { Button, Container, HStack, Heading, Input, List, ListItem, Text } from "@yamada-ui/react"
import { useState } from "react"

function App() {
  const [todoName,setTodoName]=useState("");
  const [todos,settoDos]=useState<string[]>([]);
  return (
    <>
    <Container>
      <Heading
      color={"red"}>
        TodoApp
      </Heading>
      <HStack
      gap={0}>
        <Input
        value={todoName}
        onChange={(e)=>setTodoName(e.target.value)}
        type="Text"
        placeholder="enter your todo"
        borderTopRightRadius={0}
        borderBottomRightRadius={0}/>
        <Button
        borderTopLeftRadius={0}
        borderBottomLeftRadius={0}
        onClick={()=>{
          console.log(todoName)
          if (todoName=="") return;
          settoDos([...todos,todoName])
          setTodoName("");
        }}>add</Button>
      </HStack>
      {
          todos.length === 0 ?
            <Text>No todo.</Text>
            :
            <List
            color={"aqua"}>
              {todos.map((todo, i) => (
                <ListItem key={i}>{todo}</ListItem>
              ))}
            </List>
        }
    </Container>
    </>
  )
}

export default App
