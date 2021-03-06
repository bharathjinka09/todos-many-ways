import * as React from "react";

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

const useTodos = (initial: Todo[]) => React.useState<Todo[]>(initial);

const TodoContext = React.createContext<ReturnType<typeof useTodos> | null>(
  null
);

export const useTodoContext = () => React.useContext(TodoContext)!;

export function TodoProvider({ children }: { children: React.ReactNode }) {
  return (
    <TodoContext.Provider value={useTodos([])}>{children}</TodoContext.Provider>
  );
}

export function addTodo(todos: Todo[], text: string) {
  return [
    ...todos,
    {
      id: Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1,
      text,
      done: false,
    },
  ];
}
