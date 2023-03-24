import './mocks/fetchSimulator';
import { fetchProduct } from '../helpers/fetchFunctions';
import product from './mocks/product';

// implemente seus testes aqui
describe('Teste a função fetchProduct', () => {
  
  it('1.1 - fetchProduct é uma função', () => {
    expect(typeof fetchProduct).toBe('function');
  });

  const url = 'https://api.mercadolibre.com/items/'
  const call = 'MLB1405519561'

  it('1.2 - fetchProduct com o argumento do produto "MLB1405519561" e teste se fetch foi chamada', async () => {
    await fetchProduct(call);
    expect(fetch).toHaveBeenCalled()
  });

  it('1.3 - chamar a função fetchProduct com o argumento do produto "MLB1405519561", a função fetch utiliza o endpoint "https://api.mercadolibre.com/items/MLB1405519561"', async () => {
    await fetchProduct(call);
    expect(fetch).toHaveBeenCalledWith(`${url}${call}`);
  });

  it('1.4 - retorno da função fetchProduct com o argumento do produto "MLB1405519561" é uma estrutura de dados igual ao objeto produto que já está importado no arquivo.', async () => {
    const data = await fetchProduct(call);
    expect(typeof data).toBe(typeof product);
  });

  it('1.5 - chamar a função fetchProduct sem argumento, retorna um erro com a mensagem: \'ID não informado\'', () => {
    expect(fetchProduct('')).rejects.toThrow('ID não informado');  
  });
});
