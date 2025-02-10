import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import Slider from 'react-slick';
import { getCountdown } from '../helper/Countdown';
import DiscountCodePopup from './DiscountCodePopUp';
import CouponCodePopup from './CouponCodePopup';

const ProductDetailsThree = () => {
    const [timeLeft, setTimeLeft] = useState(getCountdown());
    const [showDiscountCodePopup, setShowDiscountCodePopup] = useState(false);
    // const [codeRedeemed, setIsCodeRedeemed] = useState(false);
    const [product, setProduct] = useState({});

    const openDiscountCodePopup = () => {
        // console.log("hello");
        setShowDiscountCodePopup(true);
    };

    const closeDiscountCodePopup = () => {
        setShowDiscountCodePopup(false);
    };

    const location = useLocation();
    const p = location.state.product;

    useEffect(() => {                
        setProduct(prev => ({
            ...p,
            ...prev,
            productsName: p.products.join(", ")
        }));
        
        const interval = setInterval(() => {
            setTimeLeft(getCountdown());
        }, 1000);        

        if (showDiscountCodePopup) {
            document.body.classList.add('popup-open');
        } else {
            document.body.classList.remove('popup-open');
        }

        return () => clearInterval(interval);
    }, [setProduct, showDiscountCodePopup]);



    const productImages = [
        "assets/images/thumbs/product-details-thumb1.png",
        "assets/images/thumbs/product-details-thumb2.png",
        "assets/images/thumbs/product-details-thumb3.png",
        "assets/images/thumbs/product-details-thumb2.png",
    ];

    // increment & decrement
    const [quantity, setQuantity] = useState(1);
    const incrementQuantity = () => setQuantity(quantity + 1);
    const decrementQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : quantity);


    const [mainImage, setMainImage] = useState(productImages[0]);

    const settingsThumbs = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        focusOnSelect: true,
    };

    const blurred = {
        filter: 'blur(8px)',
        WebkitFilter: 'blur(8px)',
        '-webkit-filter': 'blur(8px)',
        '-moz-filter': 'blur(8px)',
        '-o-filter': 'blur(8px)',
        '-ms-filter': 'blur(8px)',
        filter: 'progid:DXImageTransform.Microsoft.Blur(PixelRadius=8, Enabled="true")',
    }

    return (
        <>
        {showDiscountCodePopup && (
            <CouponCodePopup 
                onClose={closeDiscountCodePopup}
                productId={product._id}
                setProduct={setProduct}
                product={product}
            />)
        }
        <div style={showDiscountCodePopup ? blurred : {}}>
            <section className="product-details py-80">
                <div className="container container-lg">
                    <div className="row gy-4">
                        <div className="col-lg-9">
                            <div className="row gy-4">
                                <div className="col-xl-6">
                                    <div className="product-details__left">
                                        <div className="product-details__thumb-slider border border-gray-100 rounded-16">
                                            <div className="">
                                                <div className="product-details__thumb flex-center h-100">
                                                    <img src={mainImage} alt="Main Product" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-24">
                                            <div className="product-details__images-slider">
                                                <Slider {...settingsThumbs}>
                                                    {productImages.map((image, index) => (
                                                        <div className="center max-w-120 max-h-120 h-100 flex-center border border-gray-100 rounded-16 p-8" key={index} onClick={() => setMainImage(image)}>
                                                            <img className='thum' src={image} alt={`Thumbnail ${index}`} />
                                                        </div>
                                                    ))}
                                                </Slider>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="product-details__content">
                                        <h5 className="mb-12">{product.productsName}</h5>
                                        <div className="flex-align flex-wrap gap-12">
                                            <div className="flex-align gap-12 flex-wrap">
                                                <div className="flex-align gap-8">
                                                    <span className="text-15 fw-medium text-warning-600 d-flex">
                                                        <i className="ph-fill ph-star" />
                                                    </span>
                                                    <span className="text-15 fw-medium text-warning-600 d-flex">
                                                        <i className="ph-fill ph-star" />
                                                    </span>
                                                    <span className="text-15 fw-medium text-warning-600 d-flex">
                                                        <i className="ph-fill ph-star" />
                                                    </span>
                                                    <span className="text-15 fw-medium text-warning-600 d-flex">
                                                        <i className="ph-fill ph-star" />
                                                    </span>
                                                    <span className="text-15 fw-medium text-warning-600 d-flex">
                                                        <i className="ph-fill ph-star" />
                                                    </span>
                                                </div>
                                                <span className="text-sm fw-medium text-neutral-600">
                                                    4.7 Star Rating
                                                </span>
                                                <span className="text-sm fw-medium text-gray-500">
                                                    (21,671)
                                                </span>
                                            </div>
                                            <span className="text-sm fw-medium text-gray-500">|</span>
                                            <span className="text-gray-900">
                                                {" "}
                                                <span className="text-gray-400">SKU:</span>EB4DRP{" "}
                                            </span>
                                        </div>
                                        <span className="mt-32 pt-32 text-gray-700 border-top border-gray-100 d-block" />
                                        <p className="text-gray-700">
                                            {product.description}
                                        </p>
                                        <div className="mt-32 flex-align flex-wrap gap-32">
                                            <div className="flex-align gap-8">
                                                <h4 className="mb-0">{product.discount}% Off</h4>
                                                {/* <span className="text-md text-gray-500">$38.00</span> */}
                                            </div>
                                            {/* <Link to="#" className="btn btn-main rounded-pill">
                                                Order on What'sApp
                                            </Link> */}
                                        </div>
                                        
                                        <div className="mb-24">
                                            <div className="mt-32 flex-align gap-12 mb-16">
                                                <span className="w-32 h-32 bg-white flex-center rounded-circle text-main-600 box-shadow-xl">
                                                    <i className="ph-fill ph-lightning" />
                                                </span>
                                                <h6 className="text-md mb-0 fw-bold text-gray-900">
                                                    Almost Coupons Are Gone
                                                </h6>
                                            </div>
                                            <div
                                                className="progress w-100 bg-gray-100 rounded-pill h-8"
                                                role="progressbar"
                                                aria-label="Basic example"
                                                aria-valuenow={product.remainingCoupons}
                                                aria-valuemin={0}
                                                aria-valuemax={product.totalCoupons}
                                            >
                                                <div
                                                    className="progress-bar bg-main-two-600 rounded-pill"
                                                    style={{ width: product.remainingCoupons / product.totalCoupons * 100 + "%" }}
                                                />
                                            </div>
                                            <span className="text-sm text-gray-700 mt-8">
                                                Available only: {product.remainingCoupons}
                                            </span>
                                        </div>
                                        {/* <span className="text-gray-900 d-block mb-8">Quantity:</span> */}
                                        <div className="flex-between gap-16 flex-wrap">
                                            <div className="flex-align flex-wrap gap-16">
                                            
                                                <div
                                                    className="btn btn-main rounded-pill flex-align d-inline-flex gap-8 px-48"
                                                    onClick={openDiscountCodePopup}
                                                >
                                                    {" "}
                                                    <i className="ph ph-shopping-cart" /> Redeem Now
                                                </div>
                                            </div>
                                            
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="product-details__sidebar border border-gray-100 rounded-16 overflow-hidden">
                                <div className="p-24">
                                    <div className="flex-between bg-main-600 rounded-pill p-8">
                                        <div className="flex-align gap-8">
                                            <span className="w-44 h-44 bg-white rounded-circle flex-center text-2xl">
                                                <i className="ph ph-storefront" />
                                            </span>
                                            <span className="text-white">by Marketpro</span>
                                        </div>
                                        <Link
                                            to="/shop"
                                            className="btn btn-white rounded-pill text-uppercase"
                                        >
                                            View Store
                                        </Link>
                                    </div>
                                </div>
                                <div className="p-24 bg-color-one d-flex align-items-start gap-24 border-bottom border-gray-100">
                                    <span className="w-44 h-44 bg-white text-main-600 rounded-circle flex-center text-2xl flex-shrink-0">
                                        <i className="ph-fill ph-truck" />
                                    </span>
                                    <div className="">
                                        <h6 className="text-sm mb-8">Fast Delivery</h6>
                                        <p className="text-gray-700">
                                            Lightning-fast shipping, guaranteed.
                                        </p>
                                    </div>
                                </div>
                                <div className="p-24 bg-color-one d-flex align-items-start gap-24 border-bottom border-gray-100">
                                    <span className="w-44 h-44 bg-white text-main-600 rounded-circle flex-center text-2xl flex-shrink-0">
                                        <i className="ph-fill ph-arrow-u-up-left" />
                                    </span>
                                    <div className="">
                                        <h6 className="text-sm mb-8">Free 90-day returns</h6>
                                        <p className="text-gray-700">Shop risk-free with easy returns.</p>
                                    </div>
                                </div>
                                <div className="p-24 bg-color-one d-flex align-items-start gap-24 border-bottom border-gray-100">
                                    <span className="w-44 h-44 bg-white text-main-600 rounded-circle flex-center text-2xl flex-shrink-0">
                                        <i className="ph-fill ph-check-circle" />
                                    </span>
                                    <div className="">
                                        <h6 className="text-sm mb-8">
                                            Pickup available at Shop location
                                        </h6>
                                        <p className="text-gray-700">Usually ready in 24 hours</p>
                                    </div>
                                </div>
                                <div className="p-24 bg-color-one d-flex align-items-start gap-24 border-bottom border-gray-100">
                                    <span className="w-44 h-44 bg-white text-main-600 rounded-circle flex-center text-2xl flex-shrink-0">
                                        <i className="ph-fill ph-credit-card" />
                                    </span>
                                    <div className="">
                                        <h6 className="text-sm mb-8">Payment</h6>
                                        <p className="text-gray-700">
                                            Payment upon receipt of goods, Payment by card in the
                                            department, Google Pay, Online card.
                                        </p>
                                    </div>
                                </div>
                                <div className="p-24 bg-color-one d-flex align-items-start gap-24 border-bottom border-gray-100">
                                    <span className="w-44 h-44 bg-white text-main-600 rounded-circle flex-center text-2xl flex-shrink-0">
                                        <i className="ph-fill ph-check-circle" />
                                    </span>
                                    <div className="">
                                        <h6 className="text-sm mb-8">Warranty</h6>
                                        <p className="text-gray-700">
                                            The Consumer Protection Act does not provide for the return of
                                            this product of proper quality.
                                        </p>
                                    </div>
                                </div>
                                <div className="p-24 bg-color-one d-flex align-items-start gap-24 border-bottom border-gray-100">
                                    <span className="w-44 h-44 bg-white text-main-600 rounded-circle flex-center text-2xl flex-shrink-0">
                                        <i className="ph-fill ph-package" />
                                    </span>
                                    <div className="">
                                        <h6 className="text-sm mb-8">Packaging</h6>
                                        <p className="text-gray-700">
                                            Research &amp; development value proposition graphical user
                                            interface investor.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </>
    )
}

export default ProductDetailsThree