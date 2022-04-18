import { useEffect, useState } from 'react';
import axios from 'axios';
import Crypto from './components/Crypto';
import { useGetCryptoQuery } from './store/CryptoReducer';
function App() {
  const [crypto, setCrypto] = useState([]);
  const { data, error, isLoading } = useGetCryptoQuery();
  useEffect(async () => {
    await axios
      .get('https://coinranking1.p.rapidapi.com/coins', {
        params: {
          referenceCurrencyUuid: 'yhjMzLPhuIDl',
          timePeriod: '24h',
          tiers: '1',
          orderBy: 'marketCap',
          orderDirection: 'desc',
          limit: '100',
          offset: '0',
        },
        headers: {
          'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
          'X-RapidAPI-Key':
            '3f2f74dd0cmsh60d861cf1a48117p1adfd3jsn116441919b4c',
        },
      })
      .then((response) => {
        setCrypto(response.data.data.coins);
        console.log(response.data);
      })
      .catch(function (error) {
        alert(error);
      });
  }, []);

  return (
    <div className='app'>
      <Crypto data={crypto} />
      <button
        onClick={() => {
          console.log(data);
          console.error(error);
        }}
      >
        Click
      </button>
    </div>
  );
}

export default App;
