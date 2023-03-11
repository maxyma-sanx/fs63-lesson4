import { Grid, GridItem, Todo } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { getFilteredTodos } from 'redux/selectors';
// import { deleteTodo } from 'redux/todoSlice';
import { deleteTodo } from 'redux/operation';

export const TodoList = () => {
  const todos = useSelector(getFilteredTodos);
  const dispatch = useDispatch();
  return (
    <Grid>
      {todos.length > 0 &&
        todos.map((todo, index) => (
          <GridItem key={todo.id}>
            <Todo
              id={todo.id}
              text={todo.text}
              counter={index + 1}
              onClick={() => dispatch(deleteTodo(todo.id))}
            />
          </GridItem>
        ))}
    </Grid>
  );
};
