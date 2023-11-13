import { useState, useEffect } from "react"
import axios from "axios"
import "react-toastify/dist/ReactToastify.css"
import { Link } from "react-router-dom"
import "./Edit.css"
import { ToastContainer, toast } from "react-toastify"

function ProdutoForm() {
  const [produtos, setProdutos] = useState([])

  useEffect(() => {
    fetchProdutos()
  }, [])
  
  const fetchProdutos = async () => {
    try {
      const response = await fetch(
        "https://cervejaria-backend.onrender.com/produtos/consultar-produtos"
      )
      const data = await response.json()
      setProdutos(data.data)
    } catch (error) {
      console.log(error)
    }
  }

  const removeProduct = async (produto) => {
    try {
      await axios.delete(`https://cervejaria-backend.onrender.com/produtos/apagar-produto/${produto}`)
      toast.success("Produto excluído com sucesso!")
      fetchProdutos()

    } catch (error) {
      toast.error("Erro ao excluir o produto. Por favor, tente novamente.")
      console.error(error)
    }
  }

  return (
    <div>
      <ToastContainer />  
      <h1>Editar um Produto</h1>
      {produtos &&
        produtos.map((a, index) => (
          <div className="product-item" key={index}>
            <span>{a.nome}</span>
            <div className="buttons">
              <Link to={`/edit/${a.produto_id}`}>✏️</Link>
              <Link onClick={() => removeProduct(a.produto_id)}>🗑️</Link>
            </div>
          </div>
        ))}
    </div>
  )
}

export default ProdutoForm
