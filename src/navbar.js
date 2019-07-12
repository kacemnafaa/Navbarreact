import React from 'react';
function Navbar(props) {
    const item=props.item
    return(
        <a href="item.link" style={{color: item.isActive?'#3430ec':'black'}}>
        {item.title}</a>
       



    )
}
export default Navbar;
