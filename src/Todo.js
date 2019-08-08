import React, { useState } from 'react';
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Dots from './dots.svg';

const Todo = props => {
  const [dropdownOpen, setToggle] = useState(false);
  const toggle = () => setToggle(!dropdownOpen);

  return (
    <div className="todo-list"
      style={{ textDecoration: props.todo.complete ? 'line-through' : '' }}>
     
        <span onClick={props.toggleComplete}>
        <input
        onChange={props.toggleComplete}
        id="checkbox"
        checked={props.todo.complete}
        type="checkbox"
      />
        <span></span>
      </span>
      {props.todo.text}

      <div className="dropdown-action">
        <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle tag="span">
            <img className="dots" src={Dots} alt="" />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={props.delete}>
              <FontAwesomeIcon style={{ marginRight: '10px' }} icon="trash" />
              Delete
            </DropdownItem>
            <DropdownItem>
              <FontAwesomeIcon style={{ marginRight: '10px' }} icon="edit" />
              Edit(Non-Functional)
            </DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
      </div>
    </div>
  );
};
export default Todo;
