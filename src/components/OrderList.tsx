import React from 'react';
import styles from "@/styles/Home.module.css";

interface OrderListProps {
  orders: { id: number; productName: string; quantity: number; orderDate: string }[];
}

const OrderList: React.FC<OrderListProps> = ({ orders }) => {
  return (
    <div>
      <ul className={styles.orderList}>
        {orders.map((order) => (
          <li key={order.id} className={styles.orderItem}>
            {order.productName} - {order.quantity} units on{' '}
            {new Date(order.orderDate).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
