import { formatMoney } from "../../utils/money";

export function ProductsGrid({ products }) {

    // ✅ Prevent crash if products is not ready
    if (!Array.isArray(products)) {
        return <p>Loading products...</p>;
    }

    return (
        <div className="products-grid">

            {products.map((product) => {
                return (
                    <div key={product.id} className="product-container">

                        <div className="product-image-container">
                            <img
                                className="product-image"
                                src={product.image}
                                alt={product.name}
                            />
                        </div>

                        <div className="product-name limit-text-to-2-lines">
                            {product.name}
                        </div>

                        <div className="product-rating-container">
                            <img
                                className="product-rating-stars"
                                src={`images/ratings/rating-${product.rating.stars * 10}.png`}
                                alt="rating"
                            />
                            <div className="product-rating-count link-primary">
                                {product.rating.count}
                            </div>
                        </div>

                        <div className="product-price">
                            {formatMoney(product.priceCents)}
                        </div>

                        <div className="product-quantity-container">
                            <select>
                                {[...Array(10)].map((_, i) => (
                                    <option key={i + 1} value={i + 1}>
                                        {i + 1}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="product-spacer"></div>

                        <div className="added-to-cart">
                            <img src="images/icons/checkmark.png" alt="check" />
                            Added
                        </div>

                        <button className="add-to-cart-button button-primary">
                            Add to Cart
                        </button>

                    </div>
                );
            })}

        </div>
    );
}