import React, { useEffect, useState } from 'react';
import { getOrders } from '../api';
import OrderForm from '../components/OrderForm';
import OrderList from '../components/OrderList';
import styles from "@/styles/Home.module.css";

const HomePage: React.FC = () => {
  const [orders, setOrders] = useState<any[]>([]);
  const [filter, setFilter] = useState('');


  useEffect(() => {
    const fetchOrders = async () => {
      const data = await getOrders(filter);
      setOrders(data);
    };
    fetchOrders();
  }, [filter]);


  const handleOrderAdded = async () => {
    const data = await getOrders();
    setOrders(data);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Order Management System</h1>

      <OrderForm onOrderAdded={handleOrderAdded} />

      <input
        type="text"
        placeholder="Filter by product name"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className={styles.searchBar}
      />

      <OrderList orders={orders} />
    </div>
  );
};

export default HomePage;
