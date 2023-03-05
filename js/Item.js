const Item = (props) =>(
    <li 
        style={props.active? {fontWeight:"bold"}: {color:"grey"}}
        onClick={() => 
            props.changeStatus(props.id)           
        }

    >
        {props.name}
        </li>
)