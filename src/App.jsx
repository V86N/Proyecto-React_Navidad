import './App.css'
import Products from './components/Products/Products'
import { ProductProvider } from './context/ProductContext/ProductState'

function App() {
  

  return (
    
      <div>
        <ProductProvider>

        <Products/>
        
        </ProductProvider>
    
      </div>
     
  )
}

export default App
