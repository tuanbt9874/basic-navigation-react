import Global from "../header/global" 
import React from 'react';


const Phone = () => (
<Global.Provider value='0946867238'>
    <Global.Consumer>
        {value => 
            <a className="nav-link" href="tel: "> {value} </a>
        }  
    </Global.Consumer>
</Global.Provider>
);
export default Phone;