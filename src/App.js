import './App.css';
import { useState, useMemo, useRef } from 'react';

// useMemo: hooks: tránh thực hiện lại 1 logic nào đó không cần thiết

// memo: tránh component bị re render trong tình huống không cần thiết

function App() {

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [products, setProducts] = useState([])
  const refInput = useRef(null);

  const handleSubmit = () => {
    setProducts([...products, {
      name,
      price: + price
    }])
    refInput.current.focus();

    setName('')
    setPrice('')
  }

  const handleDelete = (index) => {
    if (products.length > 0) {
      setProducts(product => {
        const newProducts = [...product];
        newProducts.splice(index, 1);
        return newProducts;
      })
    }
  }

  // const total = products.reduce((result, product) => result + product.price, 0)

  const total = useMemo(() => {
    const result = products.reduce((result, product) => {
      console.log('tinh toan lai...')
      return result + product.price;
    }, 0)
    return result;
  }, [products])

  console.log(products)

  return (
    <div className="App" style={{ padding: '10px 32px' }}>
      <input ref={refInput} value={name} placeholder='enter name...' onChange={e => setName(e.target.value)} />
      <br />
      <input value={price} placeholder='enter price...' onChange={e => setPrice(e.target.value)} />
      <br />
      <button onClick={handleSubmit}>Add</button>
      <h1>total: {total}</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product.name}: {product.price}
            <button onClick={() => handleDelete(index)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
