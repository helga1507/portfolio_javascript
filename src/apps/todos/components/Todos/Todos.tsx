import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import styled from 'styled-components'
import {getList, getIsLoad, getError} from '@apps/todos/reducers';
import {getTodosAsync} from '@apps/todos/actions';
import Loader from '@components/Loader';
import AddTodo from '../AddTodo';
import Item from '../Item';

interface Props {
    isLoad: Boolean,
    error: string,
    list: Array<{
        id: any,
        name: string
    }>,
    getTodosRequest: Function
}

const Todos: React.FC<Props> = ({isLoad, error, list, ...props}) => {

  useEffect(() => {
    props.getTodosRequest();
  }, []);

  const getTodos = () => {
    if(!list.length)
      return (<IsLoad>Данных нет</IsLoad>);

    return list.map(item => (
      <Item key={item.id} name={item.name} id={item.id}/>
    ));
  };

  return (
    <Block>
      <Title>Todos</Title>
      <AddTodo/>
      <List>
        {error
          ? <IsError>{error}</IsError>
          : isLoad
            ? <Loader/>
            : getTodos()
        }
      </List>
    </Block>
  );
};

const mapStateToProps = (state: object) => ({
  list: getList(state),
  isLoad: getIsLoad(state),
  error: getError(state)
});

const Block = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  width: 700px;
  margin: 0 auto;
`;
const Title = styled.h1`
  margin-bottom: 10px;
`;
const List = styled.ul`
  width: 100%;
  min-height: 400px;
`;
const IsLoad = styled.h3`
  color: grey;
  text-align: center;
  margin: 15px;
`;
const IsError = styled.h3`
  color: red;
  text-align: center;
  margin: 15px;
`;

export default connect(mapStateToProps, {getTodosRequest: getTodosAsync.request})(Todos)
