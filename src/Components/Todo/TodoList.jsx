import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import checkAction from "../../Store/Actions/checkAction";
import addItemInTodo from "../../Store/Actions/TodoAddAction";
import removeItemInStore from "../../Store/Actions/TodoRemoveAction";
import { Todo, ToDoSection, Header,AddingBlock, Input, Button, DataItms, DetalsBlock, Checxbox, Item, DeleatButton, ChackdLine } from "./ToDoStyle";

export const ToDoList = () => {
 const dispach = useDispatch();
 const state = useSelector((state) => ({
     todoStore: state.todoStore,
    }));
    console.log(state, 'state')

    const [option, setOption] = useState({
        data: {id: 0, value: '', isChacked: false}
    });
    var btn = useRef(null);
    const [count, setCount] = useState(0);
    function getInputeValue(key, ev){
        setOption((prevOption) => ({
            ...prevOption,
            [key]: {
                ...prevOption.data,
                value: ev.target.value,
                id: count + 1
            }
        }));
    }

 const addItemInStore = () => {
  if(option.data.value !== ""){
    dispach(addItemInTodo({...option.data, id: count + 1}))
    setCount((count) => count + 1);
      }else{
        console.log()
        }
    };

function removeItems(ev){
  const removeElem = ev.target.id;
  dispach(removeItemInStore(removeElem));
  removeItems = ""
    };

const handleCheck = (ev, id) => {
    dispach(checkAction(ev.target.checked, id))
}
 return(
  <ToDoSection>
      <Header></Header>
   <Todo>
       <DataItms>
 
         {state.todoStore?.todos.map((elem) => 
           <DetalsBlock key={elem.id}>
             <Checxbox 
              onChange={(ev) => handleCheck(ev, elem.id)}
              checked={elem.isChacked} 
              type="checkbox"
              /> 
             <Item >
                 {elem.value}
                 <ChackdLine isActive={elem.isChacked}/>
             </Item>
             <DeleatButton 
               ref={btn}
               id={elem.id}
               onClick={removeItems}>Remove
              </DeleatButton>
            </DetalsBlock>
           )}
       </DataItms>
           {/* {state.todoStore?.todos.map((itm) => <div>
               <input type="checkbox" />
            <h1>{itm.value} </h1>
            <button>dalate</button>
           </div>)} */}
    <AddingBlock>
     <Input 
      onChange={(ev) => getInputeValue('data', ev)}
      value={option.data.value}
      placeholder="Enter anything"/>
     <Button onClick={addItemInStore}>Add</Button>
    </AddingBlock>
   </Todo>
  </ToDoSection>
    );
}

export default ToDoList;