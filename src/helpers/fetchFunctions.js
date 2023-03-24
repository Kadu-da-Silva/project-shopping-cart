export const fetchProduct = async (ProductID) => {
  if (!ProductID) throw new Error('ID não informado');
  const res = await fetch(`https://api.mercadolibre.com/items/${ProductID}`);
  const data = await res.json();
  return data;
};

export const fetchProductsList = async (query) => {
  if (!query) throw new Error('Termo de busca não informado');
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
  const data = await response.json();
  return data.results;
};
