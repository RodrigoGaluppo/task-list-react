import React,{useState, useEffect,MouseEvent,FormEvent} from "react"
import {Main,Title,Input,List} from "./styles"
import { FaArrowRight } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";
import {v4} from "uuid"

const uuid = v4;

interface IItem {
    ItemName:string,
    id:string
}

const Home:React.FC = ()=>{
    const [item,setItem] = useState<IItem>({ItemName:"",id:""})
    const [inputValue,setInputValue] = useState<string>("")
    const [items,setItems] = useState<IItem[]>(()=>{
        const storedItems = localStorage.getItem("@TaskList:Itens")
        if(storedItems){
            return JSON.parse(storedItems)
        }else{
            return []
        }
    })

    const handleAddItem = (e: FormEvent<HTMLFormElement>,item:IItem)=>{
        setItems([...items,item])
    }

    const handleRemoveItem = (e: MouseEvent<HTMLButtonElement>,item:IItem)=>{
        const newItems:IItem[] = []
        items.forEach((index)=>{
            if(index.id != item.id){
                newItems[items.indexOf(item)] = index
            }
        })
        setItems(newItems)
    }

    const handleSubmit = (e:FormEvent<HTMLFormElement>,item:IItem)=>{
        e.preventDefault()

        if(inputValue == ""){
            return
        }

        setInputValue("")
        handleAddItem(e,item)
    }

    useEffect(()=>{
        localStorage.setItem("@TaskList:Itens",JSON.stringify(items))
    },[items])


    return (
        <>
            <Main>
                <Title>Task List</Title>
                <List>
                    <ul >
                        {items.map(ITEM=>(
                            <>
                                <li key={ITEM.id} > 
                                    <FaArrowRight color="black" /> 
                                    <p >{ITEM.ItemName}</p>
                                    <button onClick={e=> handleRemoveItem(e,ITEM)} >
                                        <GiCancel  
                                            style={{
                                                width:"100%",
                                                position:"relative",
                                                left:"-10px",
                                                fontSize:"20px",
                                                display:'inline-block',
                                                color:"#b90909",
                                                marginLeft:"20px"
                                            }}
                                            >
                                        </GiCancel>
                                    </button>
                                </li>
                                
                            </>
                            
                        )
                        )}
                    </ul>
                </List>
                <form 
                action="/"
                onSubmit={e=>handleSubmit(e,item)}
                > 
                
                    <Input>
                        <input 
                        type="text" 
                        name="item" 
                        id="item"
                        value={inputValue}
                        onChange={e => {
                            setInputValue(e.target.value)
                            setItem({ItemName:e.target.value,id:uuid()})
                        }}
                        placeholder="Add item" />
                        <button>Add</button>
                    </Input>
                </form>
            </Main>
        </>
    )
    
}

export default Home