import { Container, Header, SearchForm, Section, Text } from 'components';
import { Filter } from 'components/Filter/Filter';
import { TodoList } from 'components/TodoList/TodoList';
import { useSelector } from 'react-redux';
import { getTodos } from 'redux/selectors';

export const App = () => {
  const todos = useSelector(getTodos);

  // const deleteTodo = id => {
  //   setTodos(prevState => prevState.filter(todo => todo.id !== id));
  // };

  return (
    <>
      <Header />
      <Section>
        <Container>
          <SearchForm />
          <Filter />

          {todos.length === 0 && (
            <Text textAlign="center">There are no any todos ... </Text>
          )}
          <TodoList />
        </Container>
      </Section>
    </>
  );
};
