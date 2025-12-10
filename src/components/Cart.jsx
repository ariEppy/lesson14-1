export default function Cart({ cart, startNew }) {
  return (
    <div>
      <h1>Cart</h1>
      {cart.length === 0 && <p>Your cart is empty</p>}

      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>

      <p>
        Total: ${cart.reduce((total, item) => total + Number(item.price), 0)}
      </p>
      <button onClick={() => startNew()}>Buy</button>
    </div>
  );
}
