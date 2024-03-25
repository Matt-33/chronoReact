import React from "react";

function Message({show}) { //creation composant message en recevant une prop show
    return(
        <div style={{color : 'red', marginTop : '10px' }}>
            {show && <p> Attention: Vous ne pouvez pas decrementer en dessous de 0!</p>}
        </div>
    )
}
export default Message;