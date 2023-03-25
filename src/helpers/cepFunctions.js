const inputCep = document.querySelector('.cart__address');

export const getAddress = (query) => {
  const url_1 = `https://cep.awesomeapi.com.br/json/${query}`;
  const url_2 = `https://brasilapi.com.br/api/cep/v2/${query}`;
  
  const promise_1 = fetch(url_1).then((response) => response.json());
  const promise_2 = fetch(url_2).then((response) => response.json());

  const promisses = [promise_1, promise_2];

  return Promise.any(promisses)
    .then((data) => {
      const { address, distract, city, state } = data;
      inputCep.textContent = `${address} - ${distract} - ${city} - ${state}`
    });
};

export const searchCep = (query) => {
  getAddress(query);
};
