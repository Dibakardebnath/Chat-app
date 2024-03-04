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
export const Sidebar = () => {
  const navigate=useNavigate();
  const [lightTheme,setLightTheme]=useState(true)
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
        <div>
          <IconButton>
            <AccountCircleIcon className={"icon" + (lightTheme ?"" : " dark")}/>
          </IconButton>
        </div>

        <div>
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
          <IconButton onClick={()=>{setLightTheme((prev)=>{
            return !prev
          })}}>
            {lightTheme &&  <Brightness2Icon className={"icon" + (lightTheme ?"" : " dark")}/>}
            {!lightTheme &&  <LightModeIcon className={"icon" + (lightTheme ?"" : " dark")}/>}
          </IconButton>
        </div>
      </div>
      <div className={"sb-search" + (lightTheme ?"" : " dark")}>
        <IconButton>
          <SearchIcon />
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
