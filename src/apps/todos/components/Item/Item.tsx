import React from 'react';
import {connect} from 'react-redux'
import {deleteTodosAsync} from '@apps/todos/actions'
import styled from 'styled-components';
import {Folder, Trash} from '@icons';

interface Props {
    id: any,
    name: string,
    deleteTodoRequest: Function
}


const Item: React.FC<Props> = ({name, id, ...props}) => {

  const handleDelete = () => props.deleteTodoRequest({id});

  return (
    <Row>
      <IconWrapper><FolderIcon/></IconWrapper>
      {name}
      <TrashIcon onClick={handleDelete}/>
    </Row>
  );
};

const Row = styled.li`
  padding: 10px;
  display: grid;
  grid-gap: 15px;
  grid-template: auto / 44px 1fr 44px;
  align-items: center;
`;
const IconWrapper = styled.div`
  border-radius: 50%;
  padding: 7px;
  background-color: ${({theme}) => theme.primaryDark};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
`;
const FolderIcon = styled(Folder)`
  width: 30px;
  height: 30px;
  fill: ${({theme}) => theme.primaryWhite};
`;
const TrashIcon = styled(Trash)`
  width: 25px;
  height: 25px;
  cursor: pointer;
  fill: ${({theme}) => theme.primaryDark};
`;

export default connect(null,{deleteTodoRequest: deleteTodosAsync.request})(Item);
