import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css';

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

    const navigate = useNavigate();

    const handleRemoveProduct = product => {
        const rest = cart.filter(pd => pd.id !== product.id);
        setCart(rest);
        removeFromDb(product.id);
    }


    return (
        <div className='shop-container'>
            <div className="review-items-container">
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handleRemoveProduct={handleRemoveProduct}
                    ></ReviewItem>)
                }
            </div>
            <div className="cart-container">

                {/* video 7.i */}
                <Cart cart={cart}>
                    {/* Cart Component এ cart কে পাঠানো হচ্ছে প্রোপস হিসেবে। */}

                    {/* Cart Component এ button কে পাঠানো হচ্ছে চিল্ডেন হিসেবে! বিঃদ্রঃ কোনো কোম্পোনেন্ট কে কল করে তার পেটের ভেতর এইচটিএমএল লিখে চিল্ডেন হিসেবে পাঠানো যায়। */}
                    <button onClick={() => navigate('/shipment')}>Shipment </button>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;