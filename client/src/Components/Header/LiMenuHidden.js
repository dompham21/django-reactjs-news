import React, {useState} from 'react'

function LiMenuHidden(props) {
    const { title, subItem }  = props;
    const [clicked, setClicked] = useState(false)
    const handleShowDownMenu = () => {
        setClicked(!clicked);
    }

    return (
        <li className="menu-item"  onClick={()=>handleShowDownMenu()}>
            <a>{title}</a>
            {
                subItem ? 
                <ul className={`sub-menu${clicked ? " active" : ""}` } >      
                    { 
                         subItem.map((item, key) => (
                            <li className="menu-item" key={key}>{item}</li>
                        ))
                    } 
                </ul>
                : null
            }
            
        </li>
    )
}

export default LiMenuHidden
