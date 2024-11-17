const BASE_URL = 'https://localhost:7145';

export const getOrders = async (productName?: string) => {
    const url = productName ? `${BASE_URL}/api/orders?productName=${productName}` : `${BASE_URL}/api/orders`;
    const response = await fetch(url);
    const data = await response.json();
    return Array.isArray(data) ? data : [];
};

export const createOrder = async (order: { productName: string; quantity: number }) => {
    const response = await fetch(`${BASE_URL}/api/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(order),
    });
    return response.json();
};
