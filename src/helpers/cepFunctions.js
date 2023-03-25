const inputCep = document.querySelector('.cart__address');

export const getAddress = (query) => {
  const url1 = `https://cep.awesomeapi.com.br/json/${query}`;
  const url2 = `https://brasilapi.com.br/api/cep/v2/${query}`;

  const promise1 = fetch(url1).then((response) => response.json());
  const promise2 = fetch(url2).then((response) => response.json());

  const promisses = [promise1, promise2];

  return Promise.any(promisses)
    .then((data) => {
      const { address, distract, city, state } = data;
      inputCep.textContent = `${address} - ${distract} - ${city} - ${state}`;
    });
};

export const searchCep = (query) => {
  getAddress(query);
};
