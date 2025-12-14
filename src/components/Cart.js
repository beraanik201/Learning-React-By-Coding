import { useDispatch, useSelector } from "react-redux";
import { RESTAURANT_MENU_IMAGE_URL } from "../utils/constants";
import { clearCart, removeItem } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const price = item.price || item.defaultPrice;
      return total + price / 100;
    }, 0);
  };

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleRemoveItem = (index) => {
    dispatch(removeItem(index));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {cartItems.length === 0 ? (
        <h1 className="text-3xl font-bold">Cart</h1>
      ) : (
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Cart</h1>
          <button
            onClick={handleClearCart}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold px-3 py-1 rounded-md transition-all duration-200 cursor-pointer"
          >
            Clear Cart
          </button>
        </div>
      )}

      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-gray-500">Your cart is empty</p>
        </div>
      ) : (
        <>
          <div className="space-y-4 mb-8">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-white border border-gray-200 rounded-lg p-4 shadow-sm"
              >
                <div className="flex items-center gap-4 flex-1">
                  {item.imageId && (
                    <img
                      src={RESTAURANT_MENU_IMAGE_URL + item.imageId}
                      alt={item.name}
                      className="w-16 h-16 rounded-md object-cover"
                    />
                  )}
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="font-bold text-lg">
                      Rs {((item.price || item.defaultPrice) / 100).toFixed(2)}
                    </p>
                    <button
                      onClick={() => handleRemoveItem(index)}
                      className="bg-red-500 hover:bg-red-600 text-white font-semibold px-3 py-1 rounded-md cursor-pointer transition-all duration-200"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <p className="text-xl font-semibold">Total Items:</p>
              <p className="text-2xl font-bold">{cartItems.length}</p>
            </div>
            <div className="flex justify-between items-center border-t border-orange-200 pt-4">
              <p className="text-xl font-semibold">Total Price:</p>
              <p className="text-2xl font-bold text-orange-600">
                Rs {getTotalPrice().toFixed(2)}
              </p>
            </div>
            <button className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-md transition-all duration-200 cursor-pointer">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
