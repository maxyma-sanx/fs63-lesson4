import { Container, Header, SearchForm, Section, Text } from 'components';
import { Filter } from 'components/Filter/Filter';
import { TodoList } from 'components/TodoList/TodoList';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from 'redux/selectors';
import { fetchTodos } from 'redux/operation';
import { useEffect } from 'react';

export const App = () => {
  const todos = useSelector(getTodos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch]);
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
