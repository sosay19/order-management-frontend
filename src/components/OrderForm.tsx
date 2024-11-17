import React, { useState } from 'react';
import { createOrder } from '../api';


interface OrderFormProps {
  onOrderAdded: () => void;
}

const OrderForm: React.FC<OrderFormProps> = ({ onOrderAdded }) => {
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createOrder({ productName, quantity });
    setProductName('');
    setQuantity(1);

    onOrderAdded();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Product Name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        required
      />
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        min="1"
        required
      />
      <button type="submit">Add Order</button>
    </form>
  );
};

export default OrderForm;
