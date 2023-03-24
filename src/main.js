import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';

const products = document.querySelector('.products');
const msgLoading = document.querySelector('.loading');

document.querySelector('.cep-button').addEventListener('click', searchCep);

try {
  const result = await fetchProductsList('computador');
  result.forEach((item) => {
    products.appendChild(createProductElement(item));
  });
} catch (error) {
  console.log(error.message);
} finally {
  msgLoading.remove();
}
