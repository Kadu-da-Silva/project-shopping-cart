import './mocks/fetchSimulator';
import { fetchProductsList } from '../helpers/fetchFunctions';
import computadorSearch from './mocks/search';
// implemente seus testes aqui
describe('1 - Teste a função fetchProductsList', () => {
  it('1.1 - fetchProductsList é uma função', () => {
    expect(typeof fetchProductsList).toBe('function');
  });

  it('1.2 - fetch é chamado ao executar fetchProductsList', async () => {
    await fetchProductsList('computador');
    expect(fetch).toHaveBeenCalled();
  });

  it('1.3 - fetch é chamado com o endpoint correto ao executar fetchProductsList', async () => {
    await fetchProductsList('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });

  it('1.4 - função fetchProductsList com o argumento \'computador\' é uma estrutura de dados igual ao objeto computadorSearch', async () => {
    const data = await fetchProductsList('computador');
    expect(typeof data).toBe(typeof computadorSearch);
  });

  it('1.5 - função fetchProductsList sem argumento, retorna um erro com a mensagem: \'Termo de busca não informado\'', async () => {
    await expect(fetchProductsList('')).rejects.toThrow('Termo de busca não informado');
  });
});
