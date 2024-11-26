import React from 'react';
import './Popular.css';
import data_product from '../Assets/data';

const Item = ({ id, name, image, new_price, old_price }) => {
  return (
    <div className="item">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>
        New Price: <span className="new-price">{new_price}</span>
      </p>
      <p>
        Old Price: <span className="old-price"><strike>{old_price}</strike></span>
      </p>
    </div>
  );
};

const Popular = () => {
  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {data_product.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;
