import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';

const products = document.querySelectorAll('.products');

document.querySelector('.cep-button').addEventListener('click', searchCep);

async function handleFetchProducts() {
  try {
    const result = await fetchProductsList('computador');
    result.forEach((item) => {
      products.appendChild(createProductElement(item));
    });
  } catch (error) {
    console.log(error.message);
  }
}

handleFetchProducts();
