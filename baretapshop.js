

let cart = [];
let walletAddress = localStorage.getItem('wallet-address') || '';

function selectProduct(productName, price) {
  cart = [{ name: productName, quantity: 1, price: price }];
  updateCart();
}

function updateCart() {
  const cartItemsElement = document.getElementById('cart-items');
  const cartTotalElement = document.getElementById('cart-total');
  cartItemsElement.innerHTML = '';
  let totalSum = 0;
  cart.forEach(item => {
    const cartItemElement = document.createElement('div');
    cartItemElement.className = 'cart-item';
    cartItemElement.textContent = `${item.name}: ${item.quantity}`;
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Poista';
    removeButton.onclick = () => {
      cart = [];
      updateCart();
    };
    cartItemElement.appendChild(removeButton);
    cartItemsElement.appendChild(cartItemElement);
    totalSum += item.quantity * item.price;
  });
  cartTotalElement.textContent = `Kokonaissumma: ${totalSum}€`;
  localStorage.setItem('cart', JSON.stringify(cart));
}

function requestWalletAddress() {
  const walletAddressDiv = document.getElementById('wallet-address');
  walletAddressDiv.style.display = 'block';
}

document.getElementById('checkout-button').addEventListener('click', requestWalletAddress);

document.getElementById('wallet-ok-button').addEventListener('click', function () {
  const walletInput = document.getElementById('wallet-input').value;
  const walletError = document.getElementById('wallet-error');
  if (walletInput.length === 42 && walletInput.startsWith('0x')) {
    walletError.style.display = 'none';
    walletAddress = walletInput;
    localStorage.setItem('wallet-address', walletAddress);
  } else {
    walletError.style.display = 'block';
  }
});

updateCart();