import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import axios from 'axios';

const OrganicOne = () => {


    const [discouts, setDiscounts] = useState([]);
    const [coupons, setCoupons] = useState([]);
    const [urlDiscounts, setUrlDiscounts] = useState([]);
    const [isDescriptionExpanded, setIsDiscriptionExpanded] = useState(false);

    const getAllProducts = async () => {
        try {
            const products = await axios.get("http://localhost:5000/api/v1/discounts/products");
            // console.log(products.data.coupons);
            
            setDiscounts(products.data.discounts);
            setCoupons(products.data.coupons);
            // setUrlDiscounts(products.data.urlDiscounts);
        } catch (error) {
            console.log(error);            
        }
    }

    useEffect(() => {
        getAllProducts();        
    }, []);

    function SampleNextArrow(props) {
        const { className, onClick } = props;
        return (
            <button
                type="button" onClick={onClick}
                className={` ${className} slick-next slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1`}
            >
                <i className="ph ph-caret-right" />
            </button>
        );
    }
    function SamplePrevArrow(props) {
        const { className, onClick } = props;

        return (

            <button
                type="button"
                onClick={onClick}
                className={`${className} slick-prev slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1`}
            >
                <i className="ph ph-caret-left" />
            </button>
        );
    }
    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1599,
                settings: {
                    slidesToShow: 6,
                },
            },
            {
                breakpoint: 1399,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 424,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <section className="organic-food py-80">
            <div className="container container-lg">
                <div className="section-heading">
                    <div className="flex-between flex-wrap gap-8">
                        <h5 className="mb-0">Organic Food</h5>
                        <div className="flex-align mr-point gap-16">
                            <Link
                                to="/shop"
                                className="text-sm fw-medium text-gray-700 hover-text-main-600 hover-text-decoration-underline"
                            >
                                All Categories
                            </Link>

                        </div>
                    </div>
                </div>
                <div className="organic-food__slider arrow-style-two">
                    <Slider {...settings}>
                        {coupons?.map((discount, index) => {
                            const toggleDescription = () => {
                                setIsDiscriptionExpanded(!isExpanded);
                            };

                            const shortDescription = discount.description.length > 30
                                ? discount.description.substring(0, 30) + "..."
                                : discount.description;

                            let products = discount.products.join(", ");
                            products = products.length > 20
                                ? products.substring(0, 20) + "..."
                                : products;

                            return (
                                <div key={index}>
                                    <div className="product-card px-8 py-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                        <Link
                                            to="/product-details"
                                            key={index}
                                            state={{ product: discount }}
                                            className="product-card__thumb flex-center"
                                        >
                                            <img src="assets/images/thumbs/product-img20.png" alt="" />
                                        </Link>
                                        <div className="product-card__content mt-12">
                                            <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                                <Link
                                                    to="/product-details"
                                                    key={index}
                                                    state={{ product: discount }}
                                                    className="link text-line-2"
                                                >
                                                    {products}
                                                </Link>
                                            </h6>
                                            
                                            {/* Description with "more/less" toggle */}
                                            <div className="flex-align gap-4">
                                                <span className="text-main-600 text-md d-flex">
                                                    <i className="ph-fill ph-storefront" />
                                                </span>
                                                <span className="text-gray-500 text-xs">
                                                    {isDescriptionExpanded ? discount.description : shortDescription}
                                                    {discount.description.length > 10 && (
                                                        <button 
                                                            onClick={toggleDescription} 
                                                            className="text-main-600 text-xs fw-bold ml-2 border-none bg-transparent cursor-pointer"
                                                        >
                                                            {isDescriptionExpanded ? " less" : " more"}
                                                        </button>
                                                    )}
                                                </span>
                                            </div>

                                            <div className="flex-between gap-8 mt-24 flex-wrap">
                                                <div className="product-card__price">
                                                    <span className="text-heading text-md fw-semibold ">
                                                        {discount.discount}% Off
                                                    </span>
                                                </div>
                                                <Link
                                                    to="/cart"
                                                    className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8"
                                                >
                                                    Add <i className="ph ph-shopping-cart" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}

                        
                    </Slider>
                </div>
            </div>
        </section>

    )
}

export default OrganicOne