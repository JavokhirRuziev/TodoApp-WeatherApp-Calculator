const Todolistapp = () =>{

  const {useState} =React;
  const [inputText,setInputText] = useState("");
  const [listItems,setListItems] = useState([]);
  const [isActive,setActive] = useState("false");
  
  const Addlist = ()=>{
  
  if(inputText.length >4 && listItems.length < 6) { setListItems((oldItems)=>{
  
      return [...oldItems,inputText]
  
      });
  
      setInputText("");
  
      }
      };
  
  
  
      const InputEvent = (event)=>{
  
      setInputText(event.target.value);
  
      };
  
  
      const CheckList = (li_id)=>{
      var active_span = document.getElementById("#checked"+li_id);
      active_span.classList.toggle("active");
  
      var strike = document.getElementById("#strike"+li_id);
      strike.classList.toggle("strike-none");
  
      };
  
  
  
      const deleteList = (ids)=>{
  
  
      setListItems((oldItems) =>{
  
      return oldItems.filter((arrElem,index)=>{
  
      return index !== ids;
  
      });
  
      });
  
  
      };
  
  
      const ListItems = (props)=> {
  
      return (
  
      <li id={props.id}>
          <div className="content">
              <span id={`#checked${props.id}`} onClick={()=>{CheckList(props.id);}}><i className="fa fa-check"></i></span>
              <strike id={`#strike${props.id}`} className="strike-none">{props.list_name}</strike>
          </div>
          <span onClick={()=>{props.onSelect(props.id);}} className="delete"><i className="fa fa-trash"></i></span>
      </li>
  
      );
  
      };
  
  
      return (
      <>
          <div className="container">
              <div className="card">
                  <div className="task_inputs">
                      <input type="text" value={inputText} placeholder="Create your task here..." onChange={InputEvent} />
                      <button onClick={Addlist} className="add_button">add</button>
                  </div>
  
                  <ul className="item_list">
  
                      { listItems.map((itemval,index) =>{
  
                      return <><ListItems id={index} key={index} list_name={itemval} onSelect={deleteList} /></>
  
                      })
                          
                      }
  
                  </ul>
              </div>
          </div>
      </>
      );
  
      }
  
  
  ReactDOM.render(<App />,document.getElementById("root"));