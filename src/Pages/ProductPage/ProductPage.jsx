import Nav from '../../components/Nav/Nav'
import {useParams} from "react-router-dom";

const ProductPage = () => {
    const params = useParams();
    return(
        <>
          <Nav/>
            {params.id == 1 ?<div className="marginFromTopBecauseNav">Banana {params?.id}</div>:<div></div>}
            {params.id == 2 ?<div className="marginFromTopBecauseNav">Apple {params?.id}</div>:<div></div>}


        </>
    );
}
export default ProductPage;