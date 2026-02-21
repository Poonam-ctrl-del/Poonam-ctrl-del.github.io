let itemCount = 0;

function addItem() {
  itemCount++;
  alert("Item added to cart 🛒");
}

function placeOrder() {
  if (itemCount === 0) {
    alert("Please add at least one item first!");
  } else {
    alert("Order placed successfully ✅\nYour food will be ready before break!");
    itemCount = 0;
  }
}
