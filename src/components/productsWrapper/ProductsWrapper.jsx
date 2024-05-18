import Image from "next/image";
import React from "react";
import { Container } from "@mui/material";

const ProductWrapper = ({ data }) => {
  if (!data || !data.products || data.products.length === 0) {
    return <div>No products available</div>;
  }

  const dates = [
    "02/25/23",
    "08/11/21",
    "12/04/20",
    "05/30/19",
    "10/17/18",
    "03/08/17",
    "07/22/16",
    "11/11/15",
    "04/01/14",
    "09/19/13",
    "01/05/12",
    "06/27/11",
    "11/14/10",
    "03/02/09",
    "08/18/08",
    "12/08/07",
    "05/24/06",
    "10/09/05",
    "01/28/04",
    "07/13/03",
    "11/30/02",
    "04/17/01",
    "09/03/00",
    "01/20/99",
    "06/06/98",
    "10/23/97",
    "03/11/96",
    "07/28/95",
    "12/15/94",
    "05/02/93",
  ];
  const numbers = [
    "(123) 456-7890",
    "(234) 567-8901",
    "(345) 678-9012",
    "(456) 789-0123",
    "(567) 890-1234",
    "(678) 901-2345",
    "(789) 012-3456",
    "(890) 123-4567",
    "(901) 234-5678",
    "(012) 345-6789",
    "(123) 456-7890",
    "234) 567-8901",
    "(345) 678-9012",
    "(456) 789-0123",
    "(567) 890-1234",
    "(678) 901-2345",
    "(789) 012-3456",
    "(890) 123-4567",
    "(901) 234-5678",
    "(012) 345-6789",
    "(123) 456-7890",
    "(234) 567-8901",
    "(345) 678-9012",
    "(456) 789-0123",
    "(567) 890-1234",
    "(678) 901-2345",
    "(789) 012-3456",
    "(890) 123-4567",
    "(901) 234-5678",
    "(012) 345-6789",
  ];

  let productItems = data?.products?.map((el, index) => {
    const profit = el.price * 2 + 10;

    return (
      <div key={el.id} className="card">
        <div className="image">
          <Image src={el.images[0]} alt="product" width={40} height={40} />
          <p>{el.title}</p>
        </div>
        <p className="date"> {dates[index]}</p>
        <p className="price"> ${el.price}</p>
        <p className="profit"> ${profit}</p>
        <p className="number">{numbers[index]}</p>
      </div>
    );
  });

  return (
    <Container maxWidth="xl">
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="products">
        <div className="card__info">
          <p className="title">Owner</p>
          <p className="date">End date</p>
          <p className="amount">Profits</p>
          <p className="loses">Losses</p>
          <p className="phone">Phone</p>
        </div>

        {productItems}
      </div>
    </Container>
  );
};

export default ProductWrapper;
