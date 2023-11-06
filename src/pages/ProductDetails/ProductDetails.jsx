import { useParams, Link } from 'react-router-dom'
import './ProductDetails.css'
import Sidebar from '../../components/Sidebar/Sidebar'

const ProductDetails = () => {

    const { product } = useParams();

    return (
      <>
      
        <Link to="/produtos">
          <span className='left-arrow text-dark display-5'>{"< voltar"}</span>
        </Link>
        <h1>Produto - {product}</h1>
        <Sidebar/>
        <div>
          Descrição principal do produto {product}
        </div>
        <div>
          Descrição intermediaria do produto {product}
        </div>
        <div>
          Descrição adicional do produto {product}
        </div>
      </>
    )
  }
  
export default ProductDetails