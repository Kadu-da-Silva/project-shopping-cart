import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProduct, fetchProductsList } from './helpers/fetchFunctions';
import { createCartProductElement, createProductElement } from './helpers/shopFunctions';
import { getSavedCartIDs } from './helpers/cartFunctions';

const secProduct = document.querySelector('.products');
const msgLoading = document.querySelector('.loading');
const ol = document.querySelector('.cart__products');
const priceTotal = document.querySelector('.total-price');
const inputCep = document.querySelector('.cart__address');

const btnCep = document.querySelector('.cep-button');
btnCep.addEventListener('click', () => {
  try {
    const cep = document.querySelector('.cep-input').value;
    if (!cep) throw new Error('CEP não encontrado');
    searchCep(cep);
  } catch (err) {
    inputCep.textContent = err.message;
  }
});

try {
  const result = await fetchProductsList('computador');
  result.forEach((item) => {
    secProduct.appendChild(createProductElement(item));
  });
} catch (error) {
  const msgError = document.createElement('h2');
  msgError.classList.add('error');
  msgError.innerHTML = 'Algum erro ocorreu, recarregue a página e tente novamente';
  secProduct.appendChild(msgError);
  console.log(error.message);
} finally {
  msgLoading.remove();
}

const arrayIds = getSavedCartIDs();
const storage = Promise.all(
  arrayIds.map((element) => new Promise((resolve, reject) => {
    fetchProduct(element)
      .then((product) => resolve(product))
      .catch((error) => reject(error));
  })),
);
console.log(storage);

try {
  const call = await storage;
  let sum = 0;
  console.log(call);
  call.forEach((item) => {
    sum += item.price;
    ol.appendChild(createCartProductElement(item));
  });
  priceTotal.innerHTML = sum;
} catch (error) {
  console.log(error.message);
}
