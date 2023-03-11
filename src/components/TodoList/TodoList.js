import { Grid, GridItem, Todo } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from 'redux/selectors';
import { deleteTodo } from 'redux/todoSlice';

export const TodoList = () => {
  const todos = useSelector(getTodos);
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
