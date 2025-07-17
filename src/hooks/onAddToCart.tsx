export const addToCart = (product: any) => {
  const cart = (prevCart: any) => {
    const itemInCart = prevCart.find(
      (cartItem: any) => cartItem.id === product.id
    );

    const updatedCart = itemInCart
      ? prevCart.map((cartItem: any) =>
          cartItem.id === product.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      : [...prevCart, { ...product, quantity: 1 }];

    // Save to localStorage
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    return updatedCart;
  };
};
