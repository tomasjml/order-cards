import "./styles.css";
import { useState } from "react";

const innitialOrders = [
  {
    id: 1,
    taxPerc: 10,
    orderDetails: [
      {
        id: 1,
        orderId: 1,
        price: 10,
        quantity: 10
      },
      {
        id: 2,
        orderId: 1,
        price: 100,
        quantity: 100
      },
      {
        id: 3,
        orderId: 1,
        price: 5,
        quantity: 5
      }
    ]
  },
  {
    id: 2,
    taxPerc: 5,
    orderDetails: [
      {
        id: 4,
        orderId: 2,
        price: 10,
        quantity: 1
      },
      {
        id: 5,
        orderId: 2,
        price: 20,
        quantity: 2
      },
      {
        id: 6,
        orderId: 2,
        price: 5,
        quantity: 3
      }
    ]
  }
];

export default function App() {
  const [orders] = useState(innitialOrders);

  const getTotalItems = (order) => {
    let total = 0;
    order.orderDetails.forEach((detail) => {
      total += detail.quantity;
    });
    return total;
  };

  const getTotalBought = (order) => {
    let total = 0;
    order.orderDetails.forEach((detail) => {
      total += detail.quantity * detail.price;
    });
    return new Intl.NumberFormat("en-EN", {
      style: "currency",
      currency: "USD"
    }).format(total);
  };

  return (
    <div className="App">
      {orders.map((order) => {
        return (
          <div className="order text-green" key={order.id}>
            <div className="order__header">
              <h3>Order {order.id}</h3>
            </div>
            <div className="order__body">
              <ul className="list">
                <li>Taxt Percentage: {order.taxPerc}</li>
                <li>Products bought: {getTotalItems(order)}</li>
                <li>Price total: {getTotalBought(order)}</li>
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}
