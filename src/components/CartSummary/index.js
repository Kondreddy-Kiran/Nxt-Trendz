import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      // Destructure cartList from the value provided by CartContext
      const {cartList} = value
      // Initialize total to 0, which will accumulate the total price of items in the cart
      let total = 0
      // Calculate the total price by iterating through each item in the cart
      cartList.forEach(eachCartItem => {
        total += eachCartItem.price * eachCartItem.quantity
      })

      // Return the JSX to render the cart summary and checkout buttons
      return (
        <>
          {/* Container for displaying the total order price and the number of items in the cart */}
          <div className="cart-summary-container">
            {/* Display the total price of the items in the cart */}
            <h1 className="order-total-value">
              <span className="order-total-label">Order Total:</span> Rs {total}
              /-
            </h1>
            {/* Display the total number of unique items in the cart */}
            <p className="total-items">{cartList.length} Items in cart</p>

            {/* Checkout button that is hidden on small screens and visible on larger screens */}
            <button type="button" className="checkout-button d-sm-none">
              Checkout
            </button>
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
