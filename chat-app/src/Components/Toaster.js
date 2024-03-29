// import {Alert, IconButton, Snackbar} from "@mui/material"
// import CloseIcon from '@mui/icons-material/Close';

// import React, { useState } from "react"

// export default function Toaster({message}){
//     const [open, setOpen]=useState(true);
//     function handleClose(event,reason){
//         if(reason==='clickaway'){
//             return ;
//         }
//         setOpen(false);
//     }

//     return (
//         <div>
//             <Snackbar
//             anchorOrigin={{
//                 vertical:"top",
//                 horizontal:"right",
//             }}
//             open={open}
//             autoHideDuration={3000}
//             onClose={handleClose}
//             variant="warning"
//             ContentProps={{
//                 "aria-describedby":"message-id"
//             }}
//             message={message}
//             action={[
//                 <IconButton key="close" onClick={handleClose}> 
//                     <CloseIcon/>
//                     </IconButton>
//             ]}
//             >

//                 <Alert onClose={handleClose} severity="warning" sx={{width:"30vw"}}>
//                     {message,msg}

//                 </Alert>


//             </Snackbar>
//         </div>
//     )
// }
import { Alert, IconButton, Snackbar } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from "react";

export default function Toaster({ message }) {
  const [open, setOpen] = useState(true);

  function handleClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  }

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="warning" sx={{ width: "30vw" }}>
          {message.msg} {/* Accessing 'msg' property from 'message' object */}
          <IconButton key="close" onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Alert>
      </Snackbar>
    </div>
  );
}
