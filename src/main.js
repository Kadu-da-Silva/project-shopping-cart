import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';

const secProduct = document.querySelector('.products');
const msgLoading = document.querySelector('.loading');

document.querySelector('.cep-button').addEventListener('click', searchCep);

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
