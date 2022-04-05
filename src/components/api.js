import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:4000/" })

export const getTodos = () => api.get("/todos")

export const getTodo = (id) => api.get(`/todos/${id}`)

export const addTodo = (addTodo) => api.post(`/todos`, addTodo)

export const updateTodo = ({id, ...updateTodo}) => api.put(`/todos/${id}`, updateTodo)

export const deleteTodo = (id) => api.delete(`/todos/${id}`)
