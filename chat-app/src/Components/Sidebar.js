import React, { useState } from "react";
import "./mainStyle.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Brightness2Icon from '@mui/icons-material/Brightness2';
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import { ConversationItem } from "./ConversationItem";
import { useNavigate } from "react-router-dom";
import LightModeIcon from '@mui/icons-material/LightMode';
import {useDispatch,useSelector} from "react-redux"
import {toggleTheme} from "./Features/themeSlice";

export const Sidebar = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const lightTheme = useSelector((state)=> state.themeKey);

  const [conversatons, setConversations] = useState([
    {
      name: "Test#1",
      lastMessage: "Last Message #1",
      timeStamp: "today",
    },
    {
      name: "Test#2",
      lastMessage: "Last Message #2",
      timeStamp: "today",
    },
    {
      name: "Test#3",
      lastMessage: "Last Message #3",
      timeStamp: "today",
    },
  ]);

  return (
    <div className="sidebar-container">
      <div className={"sb-header" + (lightTheme ?"" : " dark")}>
        <div className="other-icons">
          <IconButton onClick={()=>{
            navigate("welcome")
          }}>
            <AccountCircleIcon className={"icon" + (lightTheme ?"" : " dark")}/>
          </IconButton>
       
          <IconButton  onClick={()=>{
            navigate("users")
          }}>
            <PersonAddIcon className={"icon" + (lightTheme ?"" : " dark")}/>
          </IconButton>
          <IconButton  onClick={()=>{
            navigate("groups")
          }}>
            <GroupAddIcon className={"icon" + (lightTheme ?"" : " dark")}/>
          </IconButton>
          <IconButton  onClick={()=>{
            navigate("create-groups")
          }}>
            <AddCircleIcon className={"icon" + (lightTheme ?"" : " dark")}/>
          </IconButton>
          <IconButton onClick={()=>{dispatch(toggleTheme())}}>
            {lightTheme &&  <Brightness2Icon className={"icon" + (lightTheme ?"" : " dark")}/>}
            {!lightTheme &&  <LightModeIcon className={"icon" + (lightTheme ?"" : " dark")}/>}
          </IconButton>
        </div>
      </div>
      <div className={"sb-search" + (lightTheme ?"" : " dark")}>
        <IconButton>
          <SearchIcon  className={"icon" + (lightTheme ?"" : " dark")}/>
        </IconButton>

        <input placeholder="search" className={"search-box" + (lightTheme ?"" : " dark")} />
      </div>
      <div className={"sb-conversations" + (lightTheme ?"" : " dark")}>
        {conversatons.map((conversaton) => {
          return <ConversationItem props={conversaton} key={conversaton.name}/>;
        })}
      </div>
    </div>
  );
};
