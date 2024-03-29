import { useState, createContext, useEffect } from 'react';
import { LOCAL_STORAGE } from '../consts/consts';

export const contextoGeneral = createContext();

export default function ContextContainer({ children }) {
  const [totalAPagar, setTotalApagar] = useState(0);
  const [carrito, setCarrito] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE.CARRITO)) || []
  );
  const [pedidosArr, setPedidos] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE.PEDIDO)) || []
  );
  const [compraId, setCompraId] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE.COMPRA)) || []
  );

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE.CARRITO, JSON.stringify(carrito));
  }, [carrito]);

  function posInCart(id) {
    const pos = carrito.findIndex(item => item.id === id);
    return pos;
  }

  function addItem(item, quantity) {
    const pos = posInCart(item.id);
    if (pos === -1) {
      setCarrito([...carrito, { ...item, quantity }]);
    } else {
      const carritoAux = [...carrito];
      carritoAux[pos] = {
        ...carritoAux[pos],
        quantity: carritoAux[pos].quantity + quantity,
      };
      setCarrito(carritoAux);
    }
  }

  function removeItem(id) {
    setCarrito(carrito.filter(product => product.id !== id));
  }

  function clear() {
    setCarrito([]);
  }

  useEffect(() => {
    const tot = carrito.reduce(
      (acc, item) => acc + item.quantity * item.precio,
      0
    );
    setTotalApagar(tot);
  }, [carrito]);

  return (
    <contextoGeneral.Provider
      value={{
        carrito,
        addItem,
        removeItem,
        clear,
        totalAPagar,
        pedidosArr,
        setPedidos,
        compraId,
        setCompraId,
      }}
    >
      {children}
    </contextoGeneral.Provider>
  );
}
