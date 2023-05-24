import React, { useState } from 'react';
import useProducts from '../hooks/use-products';

export default function Products() {
  const [checked, setChecked] = useState(false);
  const [loading, error, product] = useProducts({ checked });
  console.log(loading, error, product);
  return (
    <div>
      <input
        id='checkbox'
        type='checkbox'
        value={checked}
        onClick={() => {
          setChecked(!checked);
        }}
      />
      Products
    </div>
  );
}
