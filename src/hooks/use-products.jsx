import { useEffect, useState } from 'react';

export default function useProducts({ checked }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [product, setProducts] = useState([]);

  useEffect(() => {
    if (checked === true) {
      setLoading(true);
      setError(undefined);
      fetch(`data/${checked ? 'sale_' : ''}products.json`)
        .then((response) => response.json())
        .then((data) => {
          console.log('네트워크 통신 성공');
          setProducts(data);
        })
        .catch(() => setError('에러 발생'))
        .finally(() => {
          setLoading(false);
        });
      return () => {
        console.log('데이터 청소');
      };
    }
  }, [checked]);

  return [loading, error, product];
}
