import Nav from "../../components/Nav/Nav"
import React from "react";
import "./FruitsPage.css"
import {Link} from "react-router-dom";


const FruitsPage =()=>{
    const [fruits,useFruits] = React.useState([
        {
            id:1,
            name:"Banana"
        },{
        id:2,
        name:"apple"
        }]);
    return(
        <>
            <Nav/>
            {fruits.map(element=>
                <Link key={element?.id} to={`/product/${element?.id}`}>
                <div className="marginFromTopBecauseNav">{element.name}</div>
                </Link>
            )}
        </>
    )
}

export default FruitsPage;