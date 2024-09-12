import Header from '../Header'
import CartListView from '../CartListView'
import CartSummary from '../CartSummary'

import CartContext from '../../context/CartContext'
import EmptyCartView from '../EmptyCartView'
import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {({cartList, removeAllCartItems}) => {
      const showEmptyView = cartList.length === 0

      const onRemoveAllItems = () => {
        removeAllCartItems()
      }

      return (
        <>
          <Header />
          <div className="cart-container">
            {showEmptyView ? (
              <EmptyCartView />
            ) : (
              <div className="cart-content-container">
                <h1 className="cart-heading">My Cart</h1>
                <button
                  type="button"
                  className="remove-all-button"
                  onClick={onRemoveAllItems}
                >
                  Remove All
                </button>
                <CartListView />
                <div className="move-container">
                  <div>
                    <CartSummary />
                  </div>
                </div>
              </div>
            )}
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default Cart
