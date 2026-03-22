import { formatMoney } from '../../utils/money';
import { products } from '../../data/products';

export function PaymentSummary({ cart, setCart }) {

  const productCostCents = cart.reduce((total, item) => {
    const product = products.find(p => p.id === item.productId);
    return total + product.priceCents * item.quantity;
  }, 0);

  const shippingCostCents = 500;

  const totalBeforeTax = productCostCents + shippingCostCents;

  const taxCents = Math.round(totalBeforeTax * 0.1);

  const totalCostCents = totalBeforeTax + taxCents;

  const placeOrder = () => {
    alert("Order placed successfully! 🎉");
    setCart([]);
  };

  return (
    <div className="payment-summary">
      <div className="payment-summary-title">
        Payment Summary
      </div>

      <div className="payment-summary-row">
        <div>Items ({cart.length}):</div>
        <div className="payment-summary-money">
          {formatMoney(productCostCents)}
        </div>
      </div>

      <div className="payment-summary-row">
        <div>Shipping & handling:</div>
        <div className="payment-summary-money">
          {formatMoney(shippingCostCents)}
        </div>
      </div>

      <div className="payment-summary-row subtotal-row">
        <div>Total before tax:</div>
        <div className="payment-summary-money">
          {formatMoney(totalBeforeTax)}
        </div>
      </div>

      <div className="payment-summary-row">
        <div>Estimated tax (10%):</div>
        <div className="payment-summary-money">
          {formatMoney(taxCents)}
        </div>
      </div>

      <div className="payment-summary-row total-row">
        <div>Order total:</div>
        <div className="payment-summary-money">
          {formatMoney(totalCostCents)}
        </div>
      </div>

      <button 
        className="place-order-button button-primary"
        onClick={placeOrder}
      >
        Place your order
      </button>
    </div>
  );
}