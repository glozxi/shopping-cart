export function toFloat(num) {
  return (Math.round(num * 100) / 100).toFixed(2);
}

export function onChangeQuantity(newVal, setCart, cart, data) {
  if (newVal < 0 || newVal > 999) {
    return;
  }
  setCart((prevCart) => {
    const existingItem = cart.find((item) => item.id === data.id);
    if (newVal === 0) {
      return prevCart.filter((item) => item.id !== data.id);
    }
    if (existingItem) {
      return prevCart.map((item) => {
        return item.id === data.id ? { ...item, quantity: newVal } : item;
      });
    } else {
      return [...prevCart, { id: data.id, quantity: newVal }];
    }
  });
}
