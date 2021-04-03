import Link from 'next/link';
import React from 'react';

import ItemStyles from './styles/ItemStyles';
import TitleStyles from './styles/TitleStyles';
import PriceTagStyles from './styles/PriceTagStyles';

import formatMoney from '../lib/formatMoney';

const Product = ({ product }) => {
  const { image } = product?.photo;
  return (
    <ItemStyles>
      <img src={image?.publicUrl} alt={product?.name} />
      <TitleStyles>
        <Link href={`/product/${product?.id}`}>{product?.name}</Link>
      </TitleStyles>
      <PriceTagStyles>{formatMoney(product?.price)}</PriceTagStyles>
      <p>{product?.description}</p>
    </ItemStyles>
  );
};

export default Product;
