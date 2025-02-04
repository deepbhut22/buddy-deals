// import React, { useEffect,useState } from 'react'
// import { Link } from 'react-router-dom'
// import axios from 'axios';

// const RecommendedOne = () => {
//     const [discouts, setDiscounts] = useState([]);
//     const [isDescriptionExpanded, setIsDiscriptionExpanded] = useState(false);

//     const getAllProducts = async () => {
//         try {
//             const products = await axios.get("http://localhost:5000/api/v1/discounts/products");
//             // console.log(products.data.coupons);
            
//             // console.log(products);
//             setDiscounts(products.data.discounts);
            
//             // setCoupons(products.data.coupons);
//             // setUrlDiscounts(products.data.urlDiscounts);
//         } catch (error) {
//             console.log(error);            
//         }
//     }

//     useEffect(() => {
//         getAllProducts();
//     },[])

//     return (
//         <section className="recommended">
//             <div className="container container-lg">
//                 <div className="section-heading flex-between flex-wrap gap-16">
//                     <h5 className="mb-0">Recommended for you</h5>
//                     <ul className="nav common-tab nav-pills" id="pills-tab" role="tablist">
//                         <li className="nav-item" role="presentation">
//                             <button
//                                 className="nav-link active"
//                                 id="pills-all-tab"
//                                 data-bs-toggle="pill"
//                                 data-bs-target="#pills-all"
//                                 type="button"
//                                 role="tab"
//                                 aria-controls="pills-all"
//                                 aria-selected="true"
//                             >
//                                 All
//                             </button>
//                         </li>
//                         <li className="nav-item" role="presentation">
//                             <button
//                                 className="nav-link"
//                                 id="pills-grocery-tab"
//                                 data-bs-toggle="pill"
//                                 data-bs-target="#pills-grocery"
//                                 type="button"
//                                 role="tab"
//                                 aria-controls="pills-grocery"
//                                 aria-selected="false"
//                             >
//                                 Grocery
//                             </button>
//                         </li>
//                         <li className="nav-item" role="presentation">
//                             <button
//                                 className="nav-link"
//                                 id="pills-fruits-tab"
//                                 data-bs-toggle="pill"
//                                 data-bs-target="#pills-fruits"
//                                 type="button"
//                                 role="tab"
//                                 aria-controls="pills-fruits"
//                                 aria-selected="false"
//                             >
//                                 Fruits
//                             </button>
//                         </li>
//                         <li className="nav-item" role="presentation">
//                             <button
//                                 className="nav-link"
//                                 id="pills-juices-tab"
//                                 data-bs-toggle="pill"
//                                 data-bs-target="#pills-juices"
//                                 type="button"
//                                 role="tab"
//                                 aria-controls="pills-juices"
//                                 aria-selected="false"
//                             >
//                                 Juices
//                             </button>
//                         </li>
//                         <li className="nav-item" role="presentation">
//                             <button
//                                 className="nav-link"
//                                 id="pills-vegetables-tab"
//                                 data-bs-toggle="pill"
//                                 data-bs-target="#pills-vegetables"
//                                 type="button"
//                                 role="tab"
//                                 aria-controls="pills-vegetables"
//                                 aria-selected="false"
//                             >
//                                 Vegetables
//                             </button>
//                         </li>
//                         <li className="nav-item" role="presentation">
//                             <button
//                                 className="nav-link"
//                                 id="pills-snacks-tab"
//                                 data-bs-toggle="pill"
//                                 data-bs-target="#pills-snacks"
//                                 type="button"
//                                 role="tab"
//                                 aria-controls="pills-snacks"
//                                 aria-selected="false"
//                             >
//                                 Snacks
//                             </button>
//                         </li>
//                         <li className="nav-item" role="presentation">
//                             <button
//                                 className="nav-link"
//                                 id="pills-organic-tab"
//                                 data-bs-toggle="pill"
//                                 data-bs-target="#pills-organic"
//                                 type="button"
//                                 role="tab"
//                                 aria-controls="pills-organic"
//                                 aria-selected="false"
//                             >
//                                 Organic Foods
//                             </button>
//                         </li>
//                     </ul>
//                 </div>
//                 <div className="tab-content" id="pills-tabContent">
//                     <div
//                         className="tab-pane fade show active"
//                         id="pills-all"
//                         role="tabpanel"
//                         aria-labelledby="pills-all-tab"
//                         tabIndex={0}
//                     >
//                         <div className="row g-12">
//                             {/* {discouts.map((discount, index) => {
//                                 return (
//                                     <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
//                                         <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                                             <Link
//                                                 to="/product-details"
//                                                 className="product-card__thumb flex-center"
//                                             >
//                                                 <img src={discount.images[0]} alt="Image" style={{ width: '142px', height: '160px', objectFit: 'cover' }} />
//                                             </Link>
//                                             <div className="product-card__content p-sm-2">
//                                                 <h6 className="title text-lg fw-semibold mt-12 mb-8">
//                                                     <Link to="/product-details" className="link text-line-2">
//                                                         C-500 Antioxidant Protect Dietary Supplement
//                                                     </Link>
//                                                 </h6>
//                                                 <div className="flex-align gap-4">
//                                                     <span className="text-main-600 text-md d-flex">
//                                                         <i className="ph-fill ph-storefront" />
//                                                     </span>
//                                                     <span className="text-gray-500 text-xs">
//                                                         By Lucky Supermarket
//                                                     </span>
//                                                 </div>
//                                                 <div className="product-card__content mt-12">
//                                                     <div className="product-card__price mb-8">
//                                                         <span className="text-heading text-md fw-semibold ">
//                                                             $14.99{" "}
//                                                             <span className="text-gray-500 fw-normal">/Qty</span>{" "}
//                                                         </span>
//                                                         <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
//                                                             $28.99
//                                                         </span>
//                                                     </div>
//                                                     <div className="flex-align gap-6">
//                                                         <span className="text-xs fw-bold text-gray-600">4.8</span>
//                                                         <span className="text-15 fw-bold text-warning-600 d-flex">
//                                                             <i className="ph-fill ph-star" />
//                                                         </span>
//                                                         <span className="text-xs fw-bold text-gray-600">(17k)</span>
//                                                     </div>
//                                                     <Link
//                                                         to="/cart"
//                                                         className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
//                                                     >
//                                                         Add To Cart <i className="ph ph-shopping-cart" />
//                                                     </Link>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 )
//                             })} */}
//                             <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
//                                 <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                                     <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
//                                         Sale 50%
//                                     </span>
//                                     <Link
//                                         to="/product-details"
//                                         className="product-card__thumb flex-center"
//                                     >
//                                         <img src="assets/images/thumbs/product-img8.png" alt="" />
//                                     </Link>
//                                     <div className="product-card__content p-sm-2">
//                                         <h6 className="title text-lg fw-semibold mt-12 mb-8">
//                                             <Link to="/product-details" className="link text-line-2">
//                                                 Marcel's Modern Pantry Almond Unsweetened
//                                             </Link>
//                                         </h6>
//                                         <div className="flex-align gap-4">
//                                             <span className="text-main-600 text-md d-flex">
//                                                 <i className="ph-fill ph-storefront" />
//                                             </span>
//                                             <span className="text-gray-500 text-xs">
//                                                 By Lucky Supermarket
//                                             </span>
//                                         </div>
//                                         <div className="product-card__content mt-12">
//                                             <div className="product-card__price mb-8">
//                                                 <span className="text-heading text-md fw-semibold ">
//                                                     $14.99{" "}
//                                                     <span className="text-gray-500 fw-normal">/Qty</span>{" "}
//                                                 </span>
//                                                 <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
//                                                     $28.99
//                                                 </span>
//                                             </div>
//                                             <div className="flex-align gap-6">
//                                                 <span className="text-xs fw-bold text-gray-600">4.8</span>
//                                                 <span className="text-15 fw-bold text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-xs fw-bold text-gray-600">(17k)</span>
//                                             </div>
//                                             <Link
//                                                 to="/cart"
//                                                 className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
//                                             >
//                                                 Add To Cart <i className="ph ph-shopping-cart" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
//                                 <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                                     <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
//                                         Sale 50%
//                                     </span>
//                                     <Link
//                                         to="/product-details"
//                                         className="product-card__thumb flex-center"
//                                     >
//                                         <img src="assets/images/thumbs/product-img9.png" alt="" />
//                                     </Link>
//                                     <div className="product-card__content p-sm-2">
//                                         <h6 className="title text-lg fw-semibold mt-12 mb-8">
//                                             <Link to="/product-details" className="link text-line-2">
//                                                 O Organics Milk, Whole, Vitamin D
//                                             </Link>
//                                         </h6>
//                                         <div className="flex-align gap-4">
//                                             <span className="text-main-600 text-md d-flex">
//                                                 <i className="ph-fill ph-storefront" />
//                                             </span>
//                                             <span className="text-gray-500 text-xs">
//                                                 By Lucky Supermarket
//                                             </span>
//                                         </div>
//                                         <div className="product-card__content mt-12">
//                                             <div className="product-card__price mb-8">
//                                                 <span className="text-heading text-md fw-semibold ">
//                                                     $14.99{" "}
//                                                     <span className="text-gray-500 fw-normal">/Qty</span>{" "}
//                                                 </span>
//                                                 <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
//                                                     $28.99
//                                                 </span>
//                                             </div>
//                                             <div className="flex-align gap-6">
//                                                 <span className="text-xs fw-bold text-gray-600">4.8</span>
//                                                 <span className="text-15 fw-bold text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-xs fw-bold text-gray-600">(17k)</span>
//                                             </div>
//                                             <Link
//                                                 to="/cart"
//                                                 className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
//                                             >
//                                                 Add To Cart <i className="ph ph-shopping-cart" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
//                                 <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                                     <span className="product-card__badge bg-info-600 px-8 py-4 text-sm text-white">
//                                         Best Sale
//                                     </span>
//                                     <Link
//                                         to="/product-details"
//                                         className="product-card__thumb flex-center"
//                                     >
//                                         <img src="assets/images/thumbs/product-img10.png" alt="" />
//                                     </Link>
//                                     <div className="product-card__content p-sm-2">
//                                         <h6 className="title text-lg fw-semibold mt-12 mb-8">
//                                             <Link to="/product-details" className="link text-line-2">
//                                                 Whole Grains and Seeds Organic Bread
//                                             </Link>
//                                         </h6>
//                                         <div className="flex-align gap-4">
//                                             <span className="text-main-600 text-md d-flex">
//                                                 <i className="ph-fill ph-storefront" />
//                                             </span>
//                                             <span className="text-gray-500 text-xs">
//                                                 By Lucky Supermarket
//                                             </span>
//                                         </div>
//                                         <div className="product-card__content mt-12">
//                                             <div className="product-card__price mb-8">
//                                                 <span className="text-heading text-md fw-semibold ">
//                                                     $14.99{" "}
//                                                     <span className="text-gray-500 fw-normal">/Qty</span>{" "}
//                                                 </span>
//                                                 <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
//                                                     $28.99
//                                                 </span>
//                                             </div>
//                                             <div className="flex-align gap-6">
//                                                 <span className="text-xs fw-bold text-gray-600">4.8</span>
//                                                 <span className="text-15 fw-bold text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-xs fw-bold text-gray-600">(17k)</span>
//                                             </div>
//                                             <Link
//                                                 to="/cart"
//                                                 className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
//                                             >
//                                                 Add To Cart <i className="ph ph-shopping-cart" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
//                                 <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                                     <Link
//                                         to="/product-details"
//                                         className="product-card__thumb flex-center"
//                                     >
//                                         <img src="assets/images/thumbs/product-img11.png" alt="" />
//                                     </Link>
//                                     <div className="product-card__content p-sm-2">
//                                         <h6 className="title text-lg fw-semibold mt-12 mb-8">
//                                             <Link to="/product-details" className="link text-line-2">
//                                                 Lucerne Yogurt, Lowfat, Strawberry
//                                             </Link>
//                                         </h6>
//                                         <div className="flex-align gap-4">
//                                             <span className="text-main-600 text-md d-flex">
//                                                 <i className="ph-fill ph-storefront" />
//                                             </span>
//                                             <span className="text-gray-500 text-xs">
//                                                 By Lucky Supermarket
//                                             </span>
//                                         </div>
//                                         <div className="product-card__content mt-12">
//                                             <div className="product-card__price mb-8">
//                                                 <span className="text-heading text-md fw-semibold ">
//                                                     $14.99{" "}
//                                                     <span className="text-gray-500 fw-normal">/Qty</span>{" "}
//                                                 </span>
//                                                 <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
//                                                     $28.99
//                                                 </span>
//                                             </div>
//                                             <div className="flex-align gap-6">
//                                                 <span className="text-xs fw-bold text-gray-600">4.8</span>
//                                                 <span className="text-15 fw-bold text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-xs fw-bold text-gray-600">(17k)</span>
//                                             </div>
//                                             <Link
//                                                 to="/cart"
//                                                 className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
//                                             >
//                                                 Add To Cart <i className="ph ph-shopping-cart" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
//                                 <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                                     <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
//                                         Sale 50%
//                                     </span>
//                                     <Link
//                                         to="/product-details"
//                                         className="product-card__thumb flex-center"
//                                     >
//                                         <img src="assets/images/thumbs/product-img12.png" alt="" />
//                                     </Link>
//                                     <div className="product-card__content p-sm-2">
//                                         <h6 className="title text-lg fw-semibold mt-12 mb-8">
//                                             <Link to="/product-details" className="link text-line-2">
//                                                 Nature Valley Whole Grain Oats and Honey Protein
//                                             </Link>
//                                         </h6>
//                                         <div className="flex-align gap-4">
//                                             <span className="text-main-600 text-md d-flex">
//                                                 <i className="ph-fill ph-storefront" />
//                                             </span>
//                                             <span className="text-gray-500 text-xs">
//                                                 By Lucky Supermarket
//                                             </span>
//                                         </div>
//                                         <div className="product-card__content mt-12">
//                                             <div className="product-card__price mb-8">
//                                                 <span className="text-heading text-md fw-semibold ">
//                                                     $14.99{" "}
//                                                     <span className="text-gray-500 fw-normal">/Qty</span>{" "}
//                                                 </span>
//                                                 <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
//                                                     $28.99
//                                                 </span>
//                                             </div>
//                                             <div className="flex-align gap-6">
//                                                 <span className="text-xs fw-bold text-gray-600">4.8</span>
//                                                 <span className="text-15 fw-bold text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-xs fw-bold text-gray-600">(17k)</span>
//                                             </div>
//                                             <Link
//                                                 to="/cart"
//                                                 className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
//                                             >
//                                                 Add To Cart <i className="ph ph-shopping-cart" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
//                                 <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                                     <Link
//                                         to="/product-details"
//                                         className="product-card__thumb flex-center"
//                                     >
//                                         <img src="assets/images/thumbs/product-img13.png" alt="" />
//                                     </Link>
//                                     <div className="product-card__content p-sm-2">
//                                         <h6 className="title text-lg fw-semibold mt-12 mb-8">
//                                             <Link to="/product-details" className="link text-line-2">
//                                                 C-500 Antioxidant Protect Dietary Supplement
//                                             </Link>
//                                         </h6>
//                                         <div className="flex-align gap-4">
//                                             <span className="text-main-600 text-md d-flex">
//                                                 <i className="ph-fill ph-storefront" />
//                                             </span>
//                                             <span className="text-gray-500 text-xs">
//                                                 By Lucky Supermarket
//                                             </span>
//                                         </div>
//                                         <div className="product-card__content mt-12">
//                                             <div className="product-card__price mb-8">
//                                                 <span className="text-heading text-md fw-semibold ">
//                                                     $14.99{" "}
//                                                     <span className="text-gray-500 fw-normal">/Qty</span>{" "}
//                                                 </span>
//                                                 <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
//                                                     $28.99
//                                                 </span>
//                                             </div>
//                                             <div className="flex-align gap-6">
//                                                 <span className="text-xs fw-bold text-gray-600">4.8</span>
//                                                 <span className="text-15 fw-bold text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-xs fw-bold text-gray-600">(17k)</span>
//                                             </div>
//                                             <Link
//                                                 to="/cart"
//                                                 className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
//                                             >
//                                                 Add To Cart <i className="ph ph-shopping-cart" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
//                                 <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                                     <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
//                                         Sale 50%
//                                     </span>
//                                     <Link
//                                         to="/product-details"
//                                         className="product-card__thumb flex-center"
//                                     >
//                                         <img src="assets/images/thumbs/product-img14.png" alt="" />
//                                     </Link>
//                                     <div className="product-card__content p-sm-2">
//                                         <h6 className="title text-lg fw-semibold mt-12 mb-8">
//                                             <Link to="/product-details" className="link text-line-2">
//                                                 C-500 Antioxidant Protect Dietary Supplement
//                                             </Link>
//                                         </h6>
//                                         <div className="flex-align gap-4">
//                                             <span className="text-main-600 text-md d-flex">
//                                                 <i className="ph-fill ph-storefront" />
//                                             </span>
//                                             <span className="text-gray-500 text-xs">
//                                                 By Lucky Supermarket
//                                             </span>
//                                         </div>
//                                         <div className="product-card__content mt-12">
//                                             <div className="product-card__price mb-8">
//                                                 <span className="text-heading text-md fw-semibold ">
//                                                     $14.99{" "}
//                                                     <span className="text-gray-500 fw-normal">/Qty</span>{" "}
//                                                 </span>
//                                                 <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
//                                                     $28.99
//                                                 </span>
//                                             </div>
//                                             <div className="flex-align gap-6">
//                                                 <span className="text-xs fw-bold text-gray-600">4.8</span>
//                                                 <span className="text-15 fw-bold text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-xs fw-bold text-gray-600">(17k)</span>
//                                             </div>
//                                             <Link
//                                                 to="/cart"
//                                                 className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
//                                             >
//                                                 Add To Cart <i className="ph ph-shopping-cart" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
//                                 <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                                     <span className="product-card__badge bg-warning-600 px-8 py-4 text-sm text-white">
//                                         New
//                                     </span>
//                                     <Link
//                                         to="/product-details"
//                                         className="product-card__thumb flex-center"
//                                     >
//                                         <img src="assets/images/thumbs/product-img15.png" alt="" />
//                                     </Link>
//                                     <div className="product-card__content p-sm-2">
//                                         <h6 className="title text-lg fw-semibold mt-12 mb-8">
//                                             <Link to="/product-details" className="link text-line-2">
//                                                 C-500 Antioxidant Protect Dietary Supplement
//                                             </Link>
//                                         </h6>
//                                         <div className="flex-align gap-4">
//                                             <span className="text-main-600 text-md d-flex">
//                                                 <i className="ph-fill ph-storefront" />
//                                             </span>
//                                             <span className="text-gray-500 text-xs">
//                                                 By Lucky Supermarket
//                                             </span>
//                                         </div>
//                                         <div className="product-card__content mt-12">
//                                             <div className="product-card__price mb-8">
//                                                 <span className="text-heading text-md fw-semibold ">
//                                                     $14.99{" "}
//                                                     <span className="text-gray-500 fw-normal">/Qty</span>{" "}
//                                                 </span>
//                                                 <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
//                                                     $28.99
//                                                 </span>
//                                             </div>
//                                             <div className="flex-align gap-6">
//                                                 <span className="text-xs fw-bold text-gray-600">4.8</span>
//                                                 <span className="text-15 fw-bold text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-xs fw-bold text-gray-600">(17k)</span>
//                                             </div>
//                                             <Link
//                                                 to="/cart"
//                                                 className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
//                                             >
//                                                 Add To Cart <i className="ph ph-shopping-cart" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
//                                 <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                                     <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
//                                         Sale 50%
//                                     </span>
//                                     <Link
//                                         to="/product-details"
//                                         className="product-card__thumb flex-center"
//                                     >
//                                         <img src="assets/images/thumbs/product-img16.png" alt="" />
//                                     </Link>
//                                     <div className="product-card__content p-sm-2">
//                                         <h6 className="title text-lg fw-semibold mt-12 mb-8">
//                                             <Link to="/product-details" className="link text-line-2">
//                                                 Good &amp; Gather Farmed Atlantic Salmon
//                                             </Link>
//                                         </h6>
//                                         <div className="flex-align gap-4">
//                                             <span className="text-main-600 text-md d-flex">
//                                                 <i className="ph-fill ph-storefront" />
//                                             </span>
//                                             <span className="text-gray-500 text-xs">
//                                                 By Lucky Supermarket
//                                             </span>
//                                         </div>
//                                         <div className="product-card__content mt-12">
//                                             <div className="product-card__price mb-8">
//                                                 <span className="text-heading text-md fw-semibold ">
//                                                     $14.99{" "}
//                                                     <span className="text-gray-500 fw-normal">/Qty</span>{" "}
//                                                 </span>
//                                                 <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
//                                                     $28.99
//                                                 </span>
//                                             </div>
//                                             <div className="flex-align gap-6">
//                                                 <span className="text-xs fw-bold text-gray-600">4.8</span>
//                                                 <span className="text-15 fw-bold text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-xs fw-bold text-gray-600">(17k)</span>
//                                             </div>
//                                             <Link
//                                                 to="/cart"
//                                                 className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
//                                             >
//                                                 Add To Cart <i className="ph ph-shopping-cart" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
//                                 <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                                     <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
//                                         Sale 50%
//                                     </span>
//                                     <Link
//                                         to="/product-details"
//                                         className="product-card__thumb flex-center"
//                                     >
//                                         <img src="assets/images/thumbs/product-img17.png" alt="" />
//                                     </Link>
//                                     <div className="product-card__content p-sm-2">
//                                         <h6 className="title text-lg fw-semibold mt-12 mb-8">
//                                             <Link to="/product-details" className="link text-line-2">
//                                                 Market Pantry 41/50 Raw Tail-Off Large Raw Shrimp
//                                             </Link>
//                                         </h6>
//                                         <div className="flex-align gap-4">
//                                             <span className="text-main-600 text-md d-flex">
//                                                 <i className="ph-fill ph-storefront" />
//                                             </span>
//                                             <span className="text-gray-500 text-xs">
//                                                 By Lucky Supermarket
//                                             </span>
//                                         </div>
//                                         <div className="product-card__content mt-12">
//                                             <div className="product-card__price mb-8">
//                                                 <span className="text-heading text-md fw-semibold ">
//                                                     $14.99{" "}
//                                                     <span className="text-gray-500 fw-normal">/Qty</span>{" "}
//                                                 </span>
//                                                 <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
//                                                     $28.99
//                                                 </span>
//                                             </div>
//                                             <div className="flex-align gap-6">
//                                                 <span className="text-xs fw-bold text-gray-600">4.8</span>
//                                                 <span className="text-15 fw-bold text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-xs fw-bold text-gray-600">(17k)</span>
//                                             </div>
//                                             <Link
//                                                 to="/cart"
//                                                 className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
//                                             >
//                                                 Add To Cart <i className="ph ph-shopping-cart" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
//                                 <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                                     <span className="product-card__badge bg-warning-600 px-8 py-4 text-sm text-white">
//                                         New
//                                     </span>
//                                     <Link
//                                         to="/product-details"
//                                         className="product-card__thumb flex-center"
//                                     >
//                                         <img src="assets/images/thumbs/product-img18.png" alt="" />
//                                     </Link>
//                                     <div className="product-card__content p-sm-2">
//                                         <h6 className="title text-lg fw-semibold mt-12 mb-8">
//                                             <Link to="/product-details" className="link text-line-2">
//                                                 Tropicana 100% Juice, Orange, No Pulp
//                                             </Link>
//                                         </h6>
//                                         <div className="flex-align gap-4">
//                                             <span className="text-main-600 text-md d-flex">
//                                                 <i className="ph-fill ph-storefront" />
//                                             </span>
//                                             <span className="text-gray-500 text-xs">
//                                                 By Lucky Supermarket
//                                             </span>
//                                         </div>
//                                         <div className="product-card__content mt-12">
//                                             <div className="product-card__price mb-8">
//                                                 <span className="text-heading text-md fw-semibold ">
//                                                     $14.99{" "}
//                                                     <span className="text-gray-500 fw-normal">/Qty</span>{" "}
//                                                 </span>
//                                                 <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
//                                                     $28.99
//                                                 </span>
//                                             </div>
//                                             <div className="flex-align gap-6">
//                                                 <span className="text-xs fw-bold text-gray-600">4.8</span>
//                                                 <span className="text-15 fw-bold text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-xs fw-bold text-gray-600">(17k)</span>
//                                             </div>
//                                             <Link
//                                                 to="/cart"
//                                                 className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
//                                             >
//                                                 Add To Cart <i className="ph ph-shopping-cart" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div
//                         className="tab-pane fade"
//                         id="pills-grocery"
//                         role="tabpanel"
//                         aria-labelledby="pills-grocery-tab"
//                         tabIndex={0}
//                     >
//                         <div className="row g-12">
//                             <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
//                                 <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                                     <Link
//                                         to="/product-details"
//                                         className="product-card__thumb flex-center"
//                                     >
//                                         <img src="assets/images/thumbs/product-img7.png" alt="" />
//                                     </Link>
//                                     <div className="product-card__content p-sm-2">
//                                         <h6 className="title text-lg fw-semibold mt-12 mb-8">
//                                             <Link to="/product-details" className="link text-line-2">
//                                                 C-500 Antioxidant Protect Dietary Supplement
//                                             </Link>
//                                         </h6>
//                                         <div className="flex-align gap-4">
//                                             <span className="text-main-600 text-md d-flex">
//                                                 <i className="ph-fill ph-storefront" />
//                                             </span>
//                                             <span className="text-gray-500 text-xs">
//                                                 By Lucky Supermarket
//                                             </span>
//                                         </div>
//                                         <div className="product-card__content mt-12">
//                                             <div className="product-card__price mb-8">
//                                                 <span className="text-heading text-md fw-semibold ">
//                                                     $14.99{" "}
//                                                     <span className="text-gray-500 fw-normal">/Qty</span>{" "}
//                                                 </span>
//                                                 <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
//                                                     $28.99
//                                                 </span>
//                                             </div>
//                                             <div className="flex-align gap-6">
//                                                 <span className="text-xs fw-bold text-gray-600">4.8</span>
//                                                 <span className="text-15 fw-bold text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-xs fw-bold text-gray-600">(17k)</span>
//                                             </div>
//                                             <Link
//                                                 to="/cart"
//                                                 className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
//                                             >
//                                                 Add To Cart <i className="ph ph-shopping-cart" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
//                                 <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                                     <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
//                                         Sale 50%
//                                     </span>
//                                     <Link
//                                         to="/product-details"
//                                         className="product-card__thumb flex-center"
//                                     >
//                                         <img src="assets/images/thumbs/product-img8.png" alt="" />
//                                     </Link>
//                                     <div className="product-card__content p-sm-2">
//                                         <h6 className="title text-lg fw-semibold mt-12 mb-8">
//                                             <Link to="/product-details" className="link text-line-2">
//                                                 Marcel's Modern Pantry Almond Unsweetened
//                                             </Link>
//                                         </h6>
//                                         <div className="flex-align gap-4">
//                                             <span className="text-main-600 text-md d-flex">
//                                                 <i className="ph-fill ph-storefront" />
//                                             </span>
//                                             <span className="text-gray-500 text-xs">
//                                                 By Lucky Supermarket
//                                             </span>
//                                         </div>
//                                         <div className="product-card__content mt-12">
//                                             <div className="product-card__price mb-8">
//                                                 <span className="text-heading text-md fw-semibold ">
//                                                     $14.99{" "}
//                                                     <span className="text-gray-500 fw-normal">/Qty</span>{" "}
//                                                 </span>
//                                                 <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
//                                                     $28.99
//                                                 </span>
//                                             </div>
//                                             <div className="flex-align gap-6">
//                                                 <span className="text-xs fw-bold text-gray-600">4.8</span>
//                                                 <span className="text-15 fw-bold text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-xs fw-bold text-gray-600">(17k)</span>
//                                             </div>
//                                             <Link
//                                                 to="/cart"
//                                                 className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
//                                             >
//                                                 Add To Cart <i className="ph ph-shopping-cart" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
//                                 <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                                     <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
//                                         Sale 50%
//                                     </span>
//                                     <Link
//                                         to="/product-details"
//                                         className="product-card__thumb flex-center"
//                                     >
//                                         <img src="assets/images/thumbs/product-img9.png" alt="" />
//                                     </Link>
//                                     <div className="product-card__content p-sm-2">
//                                         <h6 className="title text-lg fw-semibold mt-12 mb-8">
//                                             <Link to="/product-details" className="link text-line-2">
//                                                 O Organics Milk, Whole, Vitamin D
//                                             </Link>
//                                         </h6>
//                                         <div className="flex-align gap-4">
//                                             <span className="text-main-600 text-md d-flex">
//                                                 <i className="ph-fill ph-storefront" />
//                                             </span>
//                                             <span className="text-gray-500 text-xs">
//                                                 By Lucky Supermarket
//                                             </span>
//                                         </div>
//                                         <div className="product-card__content mt-12">
//                                             <div className="product-card__price mb-8">
//                                                 <span className="text-heading text-md fw-semibold ">
//                                                     $14.99{" "}
//                                                     <span className="text-gray-500 fw-normal">/Qty</span>{" "}
//                                                 </span>
//                                                 <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
//                                                     $28.99
//                                                 </span>
//                                             </div>
//                                             <div className="flex-align gap-6">
//                                                 <span className="text-xs fw-bold text-gray-600">4.8</span>
//                                                 <span className="text-15 fw-bold text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-xs fw-bold text-gray-600">(17k)</span>
//                                             </div>
//                                             <Link
//                                                 to="/cart"
//                                                 className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
//                                             >
//                                                 Add To Cart <i className="ph ph-shopping-cart" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
//                                 <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                                     <span className="product-card__badge bg-info-600 px-8 py-4 text-sm text-white">
//                                         Best Sale
//                                     </span>
//                                     <Link
//                                         to="/product-details"
//                                         className="product-card__thumb flex-center"
//                                     >
//                                         <img src="assets/images/thumbs/product-img10.png" alt="" />
//                                     </Link>
//                                     <div className="product-card__content p-sm-2">
//                                         <h6 className="title text-lg fw-semibold mt-12 mb-8">
//                                             <Link to="/product-details" className="link text-line-2">
//                                                 Whole Grains and Seeds Organic Bread
//                                             </Link>
//                                         </h6>
//                                         <div className="flex-align gap-4">
//                                             <span className="text-main-600 text-md d-flex">
//                                                 <i className="ph-fill ph-storefront" />
//                                             </span>
//                                             <span className="text-gray-500 text-xs">
//                                                 By Lucky Supermarket
//                                             </span>
//                                         </div>
//                                         <div className="product-card__content mt-12">
//                                             <div className="product-card__price mb-8">
//                                                 <span className="text-heading text-md fw-semibold ">
//                                                     $14.99{" "}
//                                                     <span className="text-gray-500 fw-normal">/Qty</span>{" "}
//                                                 </span>
//                                                 <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
//                                                     $28.99
//                                                 </span>
//                                             </div>
//                                             <div className="flex-align gap-6">
//                                                 <span className="text-xs fw-bold text-gray-600">4.8</span>
//                                                 <span className="text-15 fw-bold text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-xs fw-bold text-gray-600">(17k)</span>
//                                             </div>
//                                             <Link
//                                                 to="/cart"
//                                                 className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
//                                             >
//                                                 Add To Cart <i className="ph ph-shopping-cart" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
//                                 <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                                     <Link
//                                         to="/product-details"
//                                         className="product-card__thumb flex-center"
//                                     >
//                                         <img src="assets/images/thumbs/product-img11.png" alt="" />
//                                     </Link>
//                                     <div className="product-card__content p-sm-2">
//                                         <h6 className="title text-lg fw-semibold mt-12 mb-8">
//                                             <Link to="/product-details" className="link text-line-2">
//                                                 Lucerne Yogurt, Lowfat, Strawberry
//                                             </Link>
//                                         </h6>
//                                         <div className="flex-align gap-4">
//                                             <span className="text-main-600 text-md d-flex">
//                                                 <i className="ph-fill ph-storefront" />
//                                             </span>
//                                             <span className="text-gray-500 text-xs">
//                                                 By Lucky Supermarket
//                                             </span>
//                                         </div>
//                                         <div className="product-card__content mt-12">
//                                             <div className="product-card__price mb-8">
//                                                 <span className="text-heading text-md fw-semibold ">
//                                                     $14.99{" "}
//                                                     <span className="text-gray-500 fw-normal">/Qty</span>{" "}
//                                                 </span>
//                                                 <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
//                                                     $28.99
//                                                 </span>
//                                             </div>
//                                             <div className="flex-align gap-6">
//                                                 <span className="text-xs fw-bold text-gray-600">4.8</span>
//                                                 <span className="text-15 fw-bold text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-xs fw-bold text-gray-600">(17k)</span>
//                                             </div>
//                                             <Link
//                                                 to="/cart"
//                                                 className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
//                                             >
//                                                 Add To Cart <i className="ph ph-shopping-cart" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
//                                 <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                                     <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
//                                         Sale 50%
//                                     </span>
//                                     <Link
//                                         to="/product-details"
//                                         className="product-card__thumb flex-center"
//                                     >
//                                         <img src="assets/images/thumbs/product-img12.png" alt="" />
//                                     </Link>
//                                     <div className="product-card__content p-sm-2">
//                                         <h6 className="title text-lg fw-semibold mt-12 mb-8">
//                                             <Link to="/product-details" className="link text-line-2">
//                                                 Nature Valley Whole Grain Oats and Honey Protein
//                                             </Link>
//                                         </h6>
//                                         <div className="flex-align gap-4">
//                                             <span className="text-main-600 text-md d-flex">
//                                                 <i className="ph-fill ph-storefront" />
//                                             </span>
//                                             <span className="text-gray-500 text-xs">
//                                                 By Lucky Supermarket
//                                             </span>
//                                         </div>
//                                         <div className="product-card__content mt-12">
//                                             <div className="product-card__price mb-8">
//                                                 <span className="text-heading text-md fw-semibold ">
//                                                     $14.99{" "}
//                                                     <span className="text-gray-500 fw-normal">/Qty</span>{" "}
//                                                 </span>
//                                                 <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
//                                                     $28.99
//                                                 </span>
//                                             </div>
//                                             <div className="flex-align gap-6">
//                                                 <span className="text-xs fw-bold text-gray-600">4.8</span>
//                                                 <span className="text-15 fw-bold text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-xs fw-bold text-gray-600">(17k)</span>
//                                             </div>
//                                             <Link
//                                                 to="/cart"
//                                                 className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
//                                             >
//                                                 Add To Cart <i className="ph ph-shopping-cart" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
//                                 <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                                     <Link
//                                         to="/product-details"
//                                         className="product-card__thumb flex-center"
//                                     >
//                                         <img src="assets/images/thumbs/product-img13.png" alt="" />
//                                     </Link>
//                                     <div className="product-card__content p-sm-2">
//                                         <h6 className="title text-lg fw-semibold mt-12 mb-8">
//                                             <Link to="/product-details" className="link text-line-2">
//                                                 C-500 Antioxidant Protect Dietary Supplement
//                                             </Link>
//                                         </h6>
//                                         <div className="flex-align gap-4">
//                                             <span className="text-main-600 text-md d-flex">
//                                                 <i className="ph-fill ph-storefront" />
//                                             </span>
//                                             <span className="text-gray-500 text-xs">
//                                                 By Lucky Supermarket
//                                             </span>
//                                         </div>
//                                         <div className="product-card__content mt-12">
//                                             <div className="product-card__price mb-8">
//                                                 <span className="text-heading text-md fw-semibold ">
//                                                     $14.99{" "}
//                                                     <span className="text-gray-500 fw-normal">/Qty</span>{" "}
//                                                 </span>
//                                                 <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
//                                                     $28.99
//                                                 </span>
//                                             </div>
//                                             <div className="flex-align gap-6">
//                                                 <span className="text-xs fw-bold text-gray-600">4.8</span>
//                                                 <span className="text-15 fw-bold text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-xs fw-bold text-gray-600">(17k)</span>
//                                             </div>
//                                             <Link
//                                                 to="/cart"
//                                                 className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
//                                             >
//                                                 Add To Cart <i className="ph ph-shopping-cart" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
//                                 <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                                     <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
//                                         Sale 50%
//                                     </span>
//                                     <Link
//                                         to="/product-details"
//                                         className="product-card__thumb flex-center"
//                                     >
//                                         <img src="assets/images/thumbs/product-img14.png" alt="" />
//                                     </Link>
//                                     <div className="product-card__content p-sm-2">
//                                         <h6 className="title text-lg fw-semibold mt-12 mb-8">
//                                             <Link to="/product-details" className="link text-line-2">
//                                                 C-500 Antioxidant Protect Dietary Supplement
//                                             </Link>
//                                         </h6>
//                                         <div className="flex-align gap-4">
//                                             <span className="text-main-600 text-md d-flex">
//                                                 <i className="ph-fill ph-storefront" />
//                                             </span>
//                                             <span className="text-gray-500 text-xs">
//                                                 By Lucky Supermarket
//                                             </span>
//                                         </div>
//                                         <div className="product-card__content mt-12">
//                                             <div className="product-card__price mb-8">
//                                                 <span className="text-heading text-md fw-semibold ">
//                                                     $14.99{" "}
//                                                     <span className="text-gray-500 fw-normal">/Qty</span>{" "}
//                                                 </span>
//                                                 <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
//                                                     $28.99
//                                                 </span>
//                                             </div>
//                                             <div className="flex-align gap-6">
//                                                 <span className="text-xs fw-bold text-gray-600">4.8</span>
//                                                 <span className="text-15 fw-bold text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-xs fw-bold text-gray-600">(17k)</span>
//                                             </div>
//                                             <Link
//                                                 to="/cart"
//                                                 className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
//                                             >
//                                                 Add To Cart <i className="ph ph-shopping-cart" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
//                                 <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                                     <span className="product-card__badge bg-warning-600 px-8 py-4 text-sm text-white">
//                                         New
//                                     </span>
//                                     <Link
//                                         to="/product-details"
//                                         className="product-card__thumb flex-center"
//                                     >
//                                         <img src="assets/images/thumbs/product-img15.png" alt="" />
//                                     </Link>
//                                     <div className="product-card__content p-sm-2">
//                                         <h6 className="title text-lg fw-semibold mt-12 mb-8">
//                                             <Link to="/product-details" className="link text-line-2">
//                                                 C-500 Antioxidant Protect Dietary Supplement
//                                             </Link>
//                                         </h6>
//                                         <div className="flex-align gap-4">
//                                             <span className="text-main-600 text-md d-flex">
//                                                 <i className="ph-fill ph-storefront" />
//                                             </span>
//                                             <span className="text-gray-500 text-xs">
//                                                 By Lucky Supermarket
//                                             </span>
//                                         </div>
//                                         <div className="product-card__content mt-12">
//                                             <div className="product-card__price mb-8">
//                                                 <span className="text-heading text-md fw-semibold ">
//                                                     $14.99{" "}
//                                                     <span className="text-gray-500 fw-normal">/Qty</span>{" "}
//                                                 </span>
//                                                 <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
//                                                     $28.99
//                                                 </span>
//                                             </div>
//                                             <div className="flex-align gap-6">
//                                                 <span className="text-xs fw-bold text-gray-600">4.8</span>
//                                                 <span className="text-15 fw-bold text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-xs fw-bold text-gray-600">(17k)</span>
//                                             </div>
//                                             <Link
//                                                 to="/cart"
//                                                 className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
//                                             >
//                                                 Add To Cart <i className="ph ph-shopping-cart" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
//                                 <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                                     <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
//                                         Sale 50%
//                                     </span>
//                                     <Link
//                                         to="/product-details"
//                                         className="product-card__thumb flex-center"
//                                     >
//                                         <img src="assets/images/thumbs/product-img16.png" alt="" />
//                                     </Link>
//                                     <div className="product-card__content p-sm-2">
//                                         <h6 className="title text-lg fw-semibold mt-12 mb-8">
//                                             <Link to="/product-details" className="link text-line-2">
//                                                 Good &amp; Gather Farmed Atlantic Salmon
//                                             </Link>
//                                         </h6>
//                                         <div className="flex-align gap-4">
//                                             <span className="text-main-600 text-md d-flex">
//                                                 <i className="ph-fill ph-storefront" />
//                                             </span>
//                                             <span className="text-gray-500 text-xs">
//                                                 By Lucky Supermarket
//                                             </span>
//                                         </div>
//                                         <div className="product-card__content mt-12">
//                                             <div className="product-card__price mb-8">
//                                                 <span className="text-heading text-md fw-semibold ">
//                                                     $14.99{" "}
//                                                     <span className="text-gray-500 fw-normal">/Qty</span>{" "}
//                                                 </span>
//                                                 <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
//                                                     $28.99
//                                                 </span>
//                                             </div>
//                                             <div className="flex-align gap-6">
//                                                 <span className="text-xs fw-bold text-gray-600">4.8</span>
//                                                 <span className="text-15 fw-bold text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-xs fw-bold text-gray-600">(17k)</span>
//                                             </div>
//                                             <Link
//                                                 to="/cart"
//                                                 className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
//                                             >
//                                                 Add To Cart <i className="ph ph-shopping-cart" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
//                                 <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                                     <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
//                                         Sale 50%
//                                     </span>
//                                     <Link
//                                         to="/product-details"
//                                         className="product-card__thumb flex-center"
//                                     >
//                                         <img src="assets/images/thumbs/product-img17.png" alt="" />
//                                     </Link>
//                                     <div className="product-card__content p-sm-2">
//                                         <h6 className="title text-lg fw-semibold mt-12 mb-8">
//                                             <Link to="/product-details" className="link text-line-2">
//                                                 Market Pantry 41/50 Raw Tail-Off Large Raw Shrimp
//                                             </Link>
//                                         </h6>
//                                         <div className="flex-align gap-4">
//                                             <span className="text-main-600 text-md d-flex">
//                                                 <i className="ph-fill ph-storefront" />
//                                             </span>
//                                             <span className="text-gray-500 text-xs">
//                                                 By Lucky Supermarket
//                                             </span>
//                                         </div>
//                                         <div className="product-card__content mt-12">
//                                             <div className="product-card__price mb-8">
//                                                 <span className="text-heading text-md fw-semibold ">
//                                                     $14.99{" "}
//                                                     <span className="text-gray-500 fw-normal">/Qty</span>{" "}
//                                                 </span>
//                                                 <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
//                                                     $28.99
//                                                 </span>
//                                             </div>
//                                             <div className="flex-align gap-6">
//                                                 <span className="text-xs fw-bold text-gray-600">4.8</span>
//                                                 <span className="text-15 fw-bold text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-xs fw-bold text-gray-600">(17k)</span>
//                                             </div>
//                                             <Link
//                                                 to="/cart"
//                                                 className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
//                                             >
//                                                 Add To Cart <i className="ph ph-shopping-cart" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
//                                 <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                                     <span className="product-card__badge bg-warning-600 px-8 py-4 text-sm text-white">
//                                         New
//                                     </span>
//                                     <Link
//                                         to="/product-details"
//                                         className="product-card__thumb flex-center"
//                                     >
//                                         <img src="assets/images/thumbs/product-img18.png" alt="" />
//                                     </Link>
//                                     <div className="product-card__content p-sm-2">
//                                         <h6 className="title text-lg fw-semibold mt-12 mb-8">
//                                             <Link to="/product-details" className="link text-line-2">
//                                                 Tropicana 100% Juice, Orange, No Pulp
//                                             </Link>
//                                         </h6>
//                                         <div className="flex-align gap-4">
//                                             <span className="text-main-600 text-md d-flex">
//                                                 <i className="ph-fill ph-storefront" />
//                                             </span>
//                                             <span className="text-gray-500 text-xs">
//                                                 By Lucky Supermarket
//                                             </span>
//                                         </div>
//                                         <div className="product-card__content mt-12">
//                                             <div className="product-card__price mb-8">
//                                                 <span className="text-heading text-md fw-semibold ">
//                                                     $14.99{" "}
//                                                     <span className="text-gray-500 fw-normal">/Qty</span>{" "}
//                                                 </span>
//                                                 <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
//                                                     $28.99
//                                                 </span>
//                                             </div>
//                                             <div className="flex-align gap-6">
//                                                 <span className="text-xs fw-bold text-gray-600">4.8</span>
//                                                 <span className="text-15 fw-bold text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-xs fw-bold text-gray-600">(17k)</span>
//                                             </div>
//                                             <Link
//                                                 to="/cart"
//                                                 className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
//                                             >
//                                                 Add To Cart <i className="ph ph-shopping-cart" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div
//                         className="tab-pane fade"
//                         id="pills-fruits"
//                         role="tabpanel"
//                         aria-labelledby="pills-fruits-tab"
//                         tabIndex={0}
//                     >
//                         <div className="row g-12">
//                             <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
//                                 <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                                     <Link
//                                         to="/product-details"
//                                         className="product-card__thumb flex-center"
//                                     >
//                                         <img src="assets/images/thumbs/product-img7.png" alt="" />
//                                     </Link>
//                                     <div className="product-card__content p-sm-2">
//                                         <h6 className="title text-lg fw-semibold mt-12 mb-8">
//                                             <Link to="/product-details" className="link text-line-2">
//                                                 C-500 Antioxidant Protect Dietary Supplement
//                                             </Link>
//                                         </h6>
//                                         <div className="flex-align gap-4">
//                                             <span className="text-main-600 text-md d-flex">
//                                                 <i className="ph-fill ph-storefront" />
//                                             </span>
//                                             <span className="text-gray-500 text-xs">
//                                                 By Lucky Supermarket
//                                             </span>
//                                         </div>
//                                         <div className="product-card__content mt-12">
//                                             <div className="product-card__price mb-8">
//                                                 <span className="text-heading text-md fw-semibold ">
//                                                     $14.99{" "}
//                                                     <span className="text-gray-500 fw-normal">/Qty</span>{" "}
//                                                 </span>
//                                                 <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
//                                                     $28.99
//                                                 </span>
//                                             </div>
//                                             <div className="flex-align gap-6">
//                                                 <span className="text-xs fw-bold text-gray-600">4.8</span>
//                                                 <span className="text-15 fw-bold text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-xs fw-bold text-gray-600">(17k)</span>
//                                             </div>
//                                             <Link
//                                                 to="/cart"
//                                                 className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
//                                             >
//                                                 Add To Cart <i className="ph ph-shopping-cart" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
//                                 <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                                     <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
//                                         Sale 50%
//                                     </span>
//                                     <Link
//                                         to="/product-details"
//                                         className="product-card__thumb flex-center"
//                                     >
//                                         <img src="assets/images/thumbs/product-img8.png" alt="" />
//                                     </Link>
//                                     <div className="product-card__content p-sm-2">
//                                         <h6 className="title text-lg fw-semibold mt-12 mb-8">
//                                             <Link to="/product-details" className="link text-line-2">
//                                                 Marcel's Modern Pantry Almond Unsweetened
//                                             </Link>
//                                         </h6>
//                                         <div className="flex-align gap-4">
//                                             <span className="text-main-600 text-md d-flex">
//                                                 <i className="ph-fill ph-storefront" />
//                                             </span>
//                                             <span className="text-gray-500 text-xs">
//                                                 By Lucky Supermarket
//                                             </span>
//                                         </div>
//                                         <div className="product-card__content mt-12">
//                                             <div className="product-card__price mb-8">
//                                                 <span className="text-heading text-md fw-semibold ">
//                                                     $14.99{" "}
//                                                     <span className="text-gray-500 fw-normal">/Qty</span>{" "}
//                                                 </span>
//                                                 <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
//                                                     $28.99
//                                                 </span>
//                                             </div>
//                                             <div className="flex-align gap-6">
//                                                 <span className="text-xs fw-bold text-gray-600">4.8</span>
//                                                 <span className="text-15 fw-bold text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-xs fw-bold text-gray-600">(17k)</span>
//                                             </div>
//                                             <Link
//                                                 to="/cart"
//                                                 className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
//                                             >
//                                                 Add To Cart <i className="ph ph-shopping-cart" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
//                                 <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                                     <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
//                                         Sale 50%
//                                     </span>
//                                     <Link
//                                         to="/product-details"
//                                         className="product-card__thumb flex-center"
//                                     >
//                                         <img src="assets/images/thumbs/product-img9.png" alt="" />
//                                     </Link>
//                                     <div className="product-card__content p-sm-2">
//                                         <h6 className="title text-lg fw-semibold mt-12 mb-8">
//                                             <Link to="/product-details" className="link text-line-2">
//                                                 O Organics Milk, Whole, Vitamin D
//                                             </Link>
//                                         </h6>
//                                         <div className="flex-align gap-4">
//                                             <span className="text-main-600 text-md d-flex">
//                                                 <i className="ph-fill ph-storefront" />
//                                             </span>
//                                             <span className="text-gray-500 text-xs">
//                                                 By Lucky Supermarket
//                                             </span>
//                                         </div>
//                                         <div className="product-card__content mt-12">
//                                             <div className="product-card__price mb-8">
//                                                 <span className="text-heading text-md fw-semibold ">
//                                                     $14.99{" "}
//                                                     <span className="text-gray-500 fw-normal">/Qty</span>{" "}
//                                                 </span>
//                                                 <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
//                                                     $28.99
//                                                 </span>
//                                             </div>
//                                             <div className="flex-align gap-6">
//                                                 <span className="text-xs fw-bold text-gray-600">4.8</span>
//                                                 <span className="text-15 fw-bold text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-xs fw-bold text-gray-600">(17k)</span>
//                                             </div>
//                                             <Link
//                                                 to="/cart"
//                                                 className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
//                                             >
//                                                 Add To Cart <i className="ph ph-shopping-cart" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
//                                 <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                                     <span className="product-card__badge bg-info-600 px-8 py-4 text-sm text-white">
//                                         Best Sale
//                                     </span>
//                                     <Link
//                                         to="/product-details"
//                                         className="product-card__thumb flex-center"
//                                     >
//                                         <img src="assets/images/thumbs/product-img10.png" alt="" />
//                                     </Link>
//                                     <div className="product-card__content p-sm-2">
//                                         <h6 className="title text-lg fw-semibold mt-12 mb-8">
//                                             <Link to="/product-details" className="link text-line-2">
//                                                 Whole Grains and Seeds Organic Bread
//                                             </Link>
//                                         </h6>
//                                         <div className="flex-align gap-4">
//                                             <span className="text-main-600 text-md d-flex">
//                                                 <i className="ph-fill ph-storefront" />
//                                             </span>
//                                             <span className="text-gray-500 text-xs">
//                                                 By Lucky Supermarket
//                                             </span>
//                                         </div>
//                                         <div className="product-card__content mt-12">
//                                             <div className="product-card__price mb-8">
//                                                 <span className="text-heading text-md fw-semibold ">
//                                                     $14.99{" "}
//                                                     <span className="text-gray-500 fw-normal">/Qty</span>{" "}
//                                                 </span>
//                                                 <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
//                                                     $28.99
//                                                 </span>
//                                             </div>
//                                             <div className="flex-align gap-6">
//                                                 <span className="text-xs fw-bold text-gray-600">4.8</span>
//                                                 <span className="text-15 fw-bold text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-xs fw-bold text-gray-600">(17k)</span>
//                                             </div>
//                                             <Link
//                                                 to="/cart"
//                                                 className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
//                                             >
//                                                 Add To Cart <i className="ph ph-shopping-cart" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
//                                 <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                                     <Link
//                                         to="/product-details"
//                                         className="product-card__thumb flex-center"
//                                     >
//                                         <img src="assets/images/thumbs/product-img11.png" alt="" />
//                                     </Link>
//                                     <div className="product-card__content p-sm-2">
//                                         <h6 className="title text-lg fw-semibold mt-12 mb-8">
//                                             <Link to="/product-details" className="link text-line-2">
//                                                 Lucerne Yogurt, Lowfat, Strawberry
//                                             </Link>
//                                         </h6>
//                                         <div className="flex-align gap-4">
//                                             <span className="text-main-600 text-md d-flex">
//                                                 <i className="ph-fill ph-storefront" />
//                                             </span>
//                                             <span className="text-gray-500 text-xs">
//                                                 By Lucky Supermarket
//                                             </span>
//                                         </div>
//                                         <div className="product-card__content mt-12">
//                                             <div className="product-card__price mb-8">
//                                                 <span className="text-heading text-md fw-semibold ">
//                                                     $14.99{" "}
//                                                     <span className="text-gray-500 fw-normal">/Qty</span>{" "}
//                                                 </span>
//                                                 <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
//                                                     $28.99
//                                                 </span>
//                                             </div>
//                                             <div className="flex-align gap-6">
//                                                 <span className="text-xs fw-bold text-gray-600">4.8</span>
//                                                 <span className="text-15 fw-bold text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-xs fw-bold text-gray-600">(17k)</span>
//                                             </div>
//                                             <Link
//                                                 to="/cart"
//                                                 className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
//                                             >
//                                                 Add To Cart <i className="ph ph-shopping-cart" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
//                                 <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                                     <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
//                                         Sale 50%
//                                     </span>
//                                     <Link
//                                         to="/product-details"
//                                         className="product-card__thumb flex-center"
//                                     >
//                                         <img src="assets/images/thumbs/product-img12.png" alt="" />
//                                     </Link>
//                                     <div className="product-card__content p-sm-2">
//                                         <h6 className="title text-lg fw-semibold mt-12 mb-8">
//                                             <Link to="/product-details" className="link text-line-2">
//                                                 Nature Valley Whole Grain Oats and Honey Protein
//                                             </Link>
//                                         </h6>
//                                         <div className="flex-align gap-4">
//                                             <span className="text-main-600 text-md d-flex">
//                                                 <i className="ph-fill ph-storefront" />
//                                             </span>
//                                             <span className="text-gray-500 text-xs">
//                                                 By Lucky Supermarket
//                                             </span>
//                                         </div>
//                                         <div className="product-card__content mt-12">
//                                             <div className="product-card__price mb-8">
//                                                 <span className="text-heading text-md fw-semibold ">
//                                                     $14.99{" "}
//                                                     <span className="text-gray-500 fw-normal">/Qty</span>{" "}
//                                                 </span>
//                                                 <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
//                                                     $28.99
//                                                 </span>
//                                             </div>
//                                             <div className="flex-align gap-6">
//                                                 <span className="text-xs fw-bold text-gray-600">4.8</span>
//                                                 <span className="text-15 fw-bold text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-xs fw-bold text-gray-600">(17k)</span>
//                                             </div>
//                                             <Link
//                                                 to="/cart"
//                                                 className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
//                                             >
//                                                 Add To Cart <i className="ph ph-shopping-cart" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
//                                 <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                                     <Link
//                                         to="/product-details"
//                                         className="product-card__thumb flex-center"
//                                     >
//                                         <img src="assets/images/thumbs/product-img13.png" alt="" />
//                                     </Link>
//                                     <div className="product-card__content p-sm-2">
//                                         <h6 className="title text-lg fw-semibold mt-12 mb-8">
//                                             <Link to="/product-details" className="link text-line-2">
//                                                 C-500 Antioxidant Protect Dietary Supplement
//                                             </Link>
//                                         </h6>
//                                         <div className="flex-align gap-4">
//                                             <span className="text-main-600 text-md d-flex">
//                                                 <i className="ph-fill ph-storefront" />
//                                             </span>
//                                             <span className="text-gray-500 text-xs">
//                                                 By Lucky Supermarket
//                                             </span>
//                                         </div>
//                                         <div className="product-card__content mt-12">
//                                             <div className="product-card__price mb-8">
//                                                 <span className="text-heading text-md fw-semibold ">
//                                                     $14.99{" "}
//                                                     <span className="text-gray-500 fw-normal">/Qty</span>{" "}
//                                                 </span>
//                                                 <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
//                                                     $28.99
//                                                 </span>
//                                             </div>
//                                             <div className="flex-align gap-6">
//                                                 <span className="text-xs fw-bold text-gray-600">4.8</span>
//                                                 <span className="text-15 fw-bold text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-xs fw-bold text-gray-600">(17k)</span>
//                                             </div>
//                                             <Link
//                                                 to="/cart"
//                                                 className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
//                                             >
//                                                 Add To Cart <i className="ph ph-shopping-cart" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
//                                 <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                                     <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
//                                         Sale 50%
//                                     </span>
//                                     <Link
//                                         to="/product-details"
//                                         className="product-card__thumb flex-center"
//                                     >
//                                         <img src="assets/images/thumbs/product-img14.png" alt="" />
//                                     </Link>
//                                     <div className="product-card__content p-sm-2">
//                                         <h6 className="title text-lg fw-semibold mt-12 mb-8">
//                                             <Link to="/product-details" className="link text-line-2">
//                                                 C-500 Antioxidant Protect Dietary Supplement
//                                             </Link>
//                                         </h6>
//                                         <div className="flex-align gap-4">
//                                             <span className="text-main-600 text-md d-flex">
//                                                 <i className="ph-fill ph-storefront" />
//                                             </span>
//                                             <span className="text-gray-500 text-xs">
//                                                 By Lucky Supermarket
//                                             </span>
//                                         </div>
//                                         <div className="product-card__content mt-12">
//                                             <div className="product-card__price mb-8">
//                                                 <span className="text-heading text-md fw-semibold ">
//                                                     $14.99{" "}
//                                                     <span className="text-gray-500 fw-normal">/Qty</span>{" "}
//                                                 </span>
//                                                 <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
//                                                     $28.99
//                                                 </span>
//                                             </div>
//                                             <div className="flex-align gap-6">
//                                                 <span className="text-xs fw-bold text-gray-600">4.8</span>
//                                                 <span className="text-15 fw-bold text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-xs fw-bold text-gray-600">(17k)</span>
//                                             </div>
//                                             <Link
//                                                 to="/cart"
//                                                 className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
//                                             >
//                                                 Add To Cart <i className="ph ph-shopping-cart" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
//                                 <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                                     <span className="product-card__badge bg-warning-600 px-8 py-4 text-sm text-white">
//                                         New
//                                     </span>
//                                     <Link
//                                         to="/product-details"
//                                         className="product-card__thumb flex-center"
//                                     >
//                                         <img src="assets/images/thumbs/product-img15.png" alt="" />
//                                     </Link>
//                                     <div className="product-card__content p-sm-2">
//                                         <h6 className="title text-lg fw-semibold mt-12 mb-8">
//                                             <Link to="/product-details" className="link text-line-2">
//                                                 C-500 Antioxidant Protect Dietary Supplement
//                                             </Link>
//                                         </h6>
//                                         <div className="flex-align gap-4">
//                                             <span className="text-main-600 text-md d-flex">
//                                                 <i className="ph-fill ph-storefront" />
//                                             </span>
//                                             <span className="text-gray-500 text-xs">
//                                                 By Lucky Supermarket
//                                             </span>
//                                         </div>
//                                         <div className="product-card__content mt-12">
//                                             <div className="product-card__price mb-8">
//                                                 <span className="text-heading text-md fw-semibold ">
//                                                     $14.99{" "}
//                                                     <span className="text-gray-500 fw-normal">/Qty</span>{" "}
//                                                 </span>
//                                                 <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
//                                                     $28.99
//                                                 </span>
//                                             </div>
//                                             <div className="flex-align gap-6">
//                                                 <span className="text-xs fw-bold text-gray-600">4.8</span>
//                                                 <span className="text-15 fw-bold text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-xs fw-bold text-gray-600">(17k)</span>
//                                             </div>
//                                             <Link
//                                                 to="/cart"
//                                                 className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
//                                             >
//                                                 Add To Cart <i className="ph ph-shopping-cart" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
//                                 <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                                     <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
//                                         Sale 50%
//                                     </span>
//                                     <Link
//                                         to="/product-details"
//                                         className="product-card__thumb flex-center"
//                                     >
//                                         <img src="assets/images/thumbs/product-img16.png" alt="" />
//                                     </Link>
//                                     <div className="product-card__content p-sm-2">
//                                         <h6 className="title text-lg fw-semibold mt-12 mb-8">
//                                             <Link to="/product-details" className="link text-line-2">
//                                                 Good &amp; Gather Farmed Atlantic Salmon
//                                             </Link>
//                                         </h6>
//                                         <div className="flex-align gap-4">
//                                             <span className="text-main-600 text-md d-flex">
//                                                 <i className="ph-fill ph-storefront" />
//                                             </span>
//                                             <span className="text-gray-500 text-xs">
//                                                 By Lucky Supermarket
//                                             </span>
//                                         </div>
//                                         <div className="product-card__content mt-12">
//                                             <div className="product-card__price mb-8">
//                                                 <span className="text-heading text-md fw-semibold ">
//                                                     $14.99{" "}
//                                                     <span className="text-gray-500 fw-normal">/Qty</span>{" "}
//                                                 </span>
//                                                 <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
//                                                     $28.99
//                                                 </span>
//                                             </div>
//                                             <div className="flex-align gap-6">
//                                                 <span className="text-xs fw-bold text-gray-600">4.8</span>
//                                                 <span className="text-15 fw-bold text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-xs fw-bold text-gray-600">(17k)</span>
//                                             </div>
//                                             <Link
//                                                 to="/cart"
//                                                 className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
//                                             >
//                                                 Add To Cart <i className="ph ph-shopping-cart" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
//                                 <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                                     <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
//                                         Sale 50%
//                                     </span>
//                                     <Link
//                                         to="/product-details"
//                                         className="product-card__thumb flex-center"
//                                     >
//                                         <img src="assets/images/thumbs/product-img17.png" alt="" />
//                                     </Link>
//                                     <div className="product-card__content p-sm-2">
//                                         <h6 className="title text-lg fw-semibold mt-12 mb-8">
//                                             <Link to="/product-details" className="link text-line-2">
//                                                 Market Pantry 41/50 Raw Tail-Off Large Raw Shrimp
//                                             </Link>
//                                         </h6>
//                                         <div className="flex-align gap-4">
//                                             <span className="text-main-600 text-md d-flex">
//                                                 <i className="ph-fill ph-storefront" />
//                                             </span>
//                                             <span className="text-gray-500 text-xs">
//                                                 By Lucky Supermarket
//                                             </span>
//                                         </div>
//                                         <div className="product-card__content mt-12">
//                                             <div className="product-card__price mb-8">
//                                                 <span className="text-heading text-md fw-semibold ">
//                                                     $14.99{" "}
//                                                     <span className="text-gray-500 fw-normal">/Qty</span>{" "}
//                                                 </span>
//                                                 <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
//                                                     $28.99
//                                                 </span>
//                                             </div>
//                                             <div className="flex-align gap-6">
//                                                 <span className="text-xs fw-bold text-gray-600">4.8</span>
//                                                 <span className="text-15 fw-bold text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-xs fw-bold text-gray-600">(17k)</span>
//                                             </div>
//                                             <Link
//                                                 to="/cart"
//                                                 className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
//                                             >
//                                                 Add To Cart <i className="ph ph-shopping-cart" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
//                                 <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                                     <span className="product-card__badge bg-warning-600 px-8 py-4 text-sm text-white">
//                                         New
//                                     </span>
//                                     <Link
//                                         to="/product-details"
//                                         className="product-card__thumb flex-center"
//                                     >
//                                         <img src="assets/images/thumbs/product-img18.png" alt="" />
//                                     </Link>
//                                     <div className="product-card__content p-sm-2">
//                                         <h6 className="title text-lg fw-semibold mt-12 mb-8">
//                                             <Link to="/product-details" className="link text-line-2">
//                                                 Tropicana 100% Juice, Orange, No Pulp
//                                             </Link>
//                                         </h6>
//                                         <div className="flex-align gap-4">
//                                             <span className="text-main-600 text-md d-flex">
//                                                 <i className="ph-fill ph-storefront" />
//                                             </span>
//                                             <span className="text-gray-500 text-xs">
//                                                 By Lucky Supermarket
//                                             </span>
//                                         </div>
//                                         <div className="product-card__content mt-12">
//                                             <div className="product-card__price mb-8">
//                                                 <span className="text-heading text-md fw-semibold ">
//                                                     $14.99{" "}
//                                                     <span className="text-gray-500 fw-normal">/Qty</span>{" "}
//                                                 </span>
//                                                 <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
//                                                     $28.99
//                                                 </span>
//                                             </div>
//                                             <div className="flex-align gap-6">
//                                                 <span className="text-xs fw-bold text-gray-600">4.8</span>
//                                                 <span className="text-15 fw-bold text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-xs fw-bold text-gray-600">(17k)</span>
//                                             </div>
//                                             <Link
//                                                 to="/cart"
//                                                 className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
//                                             >
//                                                 Add To Cart <i className="ph ph-shopping-cart" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div
//                         className="tab-pane fade"
//                         id="pills-juices"
//                         role="tabpanel"
//                         aria-labelledby="pills-juices-tab"
//                         tabIndex={0}
//                     >
//                         <div className="row g-12">
//                             <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
//                                 <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                                     <Link
//                                         to="/product-details"
//                                         className="product-card__thumb flex-center"
//                                     >
//                                         <img src="assets/images/thumbs/product-img7.png" alt="" />
//                                     </Link>
//                                     <div className="product-card__content p-sm-2">
//                                         <h6 className="title text-lg fw-semibold mt-12 mb-8">
//                                             <Link to="/product-details" className="link text-line-2">
//                                                 C-500 Antioxidant Protect Dietary Supplement
//                                             </Link>
//                                         </h6>
//                                         <div className="flex-align gap-4">
//                                             <span className="text-main-600 text-md d-flex">
//                                                 <i className="ph-fill ph-storefront" />
//                                             </span>
//                                             <span className="text-gray-500 text-xs">
//                                                 By Lucky Supermarket
//                                             </span>
//                                         </div>
//                                         <div className="product-card__content mt-12">
//                                             <div className="product-card__price mb-8">
//                                                 <span className="text-heading text-md fw-semibold ">
//                                                     $14.99{" "}
//                                                     <span className="text-gray-500 fw-normal">/Qty</span>{" "}
//                                                 </span>
//                                                 <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
//                                                     $28.99
//                                                 </span>
//                                             </div>
//                                             <div className="flex-align gap-6">
//                                                 <span className="text-xs fw-bold text-gray-600">4.8</span>
//                                                 <span className="text-15 fw-bold text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-xs fw-bold text-gray-600">(17k)</span>
//                                             </div>
//                                             <Link
//                                                 to="/cart"
//                                                 className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
//                                             >
//                                                 Add To Cart <i className="ph ph-shopping-cart" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
//                                 <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                                     <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
//                                         Sale 50%
//                                     </span>
//                                     <Link
//                                         to="/product-details"
//                                         className="product-card__thumb flex-center"
//                                     >
//                                         <img src="assets/images/thumbs/product-img8.png" alt="" />
//                                     </Link>
//                                     <div className="product-card__content p-sm-2">
//                                         <h6 className="title text-lg fw-semibold mt-12 mb-8">
//                                             <Link to="/product-details" className="link text-line-2">
//                                                 Marcel's Modern Pantry Almond Unsweetened
//                                             </Link>
//                                         </h6>
//                                         <div className="flex-align gap-4">
//                                             <span className="text-main-600 text-md d-flex">
//                                                 <i className="ph-fill ph-storefront" />
//                                             </span>
//                                             <span className="text-gray-500 text-xs">
//                                                 By Lucky Supermarket
//                                             </span>
//                                         </div>
//                                         <div className="product-card__content mt-12">
//                                             <div className="product-card__price mb-8">
//                                                 <span className="text-heading text-md fw-semibold ">
//                                                     $14.99{" "}
//                                                     <span className="text-gray-500 fw-normal">/Qty</span>{" "}
//                                                 </span>
//                                                 <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
//                                                     $28.99
//                                                 </span>
//                                             </div>
//                                             <div className="flex-align gap-6">
//                                                 <span className="text-xs fw-bold text-gray-600">4.8</span>
//                                                 <span className="text-15 fw-bold text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-xs fw-bold text-gray-600">(17k)</span>
//                                             </div>
//                                             <Link
//                                                 to="/cart"
//                                                 className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
//                                             >
//                                                 Add To Cart <i className="ph ph-shopping-cart" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
//                                 <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                                     <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
//                                         Sale 50%
//                                     </span>
//                                     <Link
//                                         to="/product-details"
//                                         className="product-card__thumb flex-center"
//                                     >
//                                         <img src="assets/images/thumbs/product-img9.png" alt="" />
//                                     </Link>
//                                     <div className="product-card__content p-sm-2">
//                                         <h6 className="title text-lg fw-semibold mt-12 mb-8">
//                                             <Link to="/product-details" className="link text-line-2">
//                                                 O Organics Milk, Whole, Vitamin D
//                                             </Link>
//                                         </h6>
//                                         <div className="flex-align gap-4">
//                                             <span className="text-main-600 text-md d-flex">
//                                                 <i className="ph-fill ph-storefront" />
//                                             </span>
//                                             <span className="text-gray-500 text-xs">
//                                                 By Lucky Supermarket
//                                             </span>
//                                         </div>
//                                         <div className="product-card__content mt-12">
//                                             <div className="product-card__price mb-8">
//                                                 <span className="text-heading text-md fw-semibold ">
//                                                     $14.99{" "}
//                                                     <span className="text-gray-500 fw-normal">/Qty</span>{" "}
//                                                 </span>
//                                                 <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
//                                                     $28.99
//                                                 </span>
//                                             </div>
//                                             <div className="flex-align gap-6">
//                                                 <span className="text-xs fw-bold text-gray-600">4.8</span>
//                                                 <span className="text-15 fw-bold text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-xs fw-bold text-gray-600">(17k)</span>
//                                             </div>
//                                             <Link
//                                                 to="/cart"
//                                                 className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
//                                             >
//                                                 Add To Cart <i className="ph ph-shopping-cart" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
//                                 <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                                     <span className="product-card__badge bg-info-600 px-8 py-4 text-sm text-white">
//                                         Best Sale
//                                     </span>
//                                     <Link
//                                         to="/product-details"
//                                         className="product-card__thumb flex-center"
//                                     >
//                                         <img src="assets/images/thumbs/product-img10.png" alt="" />
//                                     </Link>
//                                     <div className="product-card__content p-sm-2">
//                                         <h6 className="title text-lg fw-semibold mt-12 mb-8">
//                                             <Link to="/product-details" className="link text-line-2">
//                                                 Whole Grains and Seeds Organic Bread
//                                             </Link>
//                                         </h6>
//                                         <div className="flex-align gap-4">
//                                             <span className="text-main-600 text-md d-flex">
//                                                 <i className="ph-fill ph-storefront" />
//                                             </span>
//                                             <span className="text-gray-500 text-xs">
//                                                 By Lucky Supermarket
//                                             </span>
//                                         </div>
//                                         <div className="product-card__content mt-12">
//                                             <div className="product-card__price mb-8">
//                                                 <span className="text-heading text-md fw-semibold ">
//                                                     $14.99{" "}
//                                                     <span className="text-gray-500 fw-normal">/Qty</span>{" "}
//                                                 </span>
//                                                 <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
//                                                     $28.99
//                                                 </span>
//                                             </div>
//                                             <div className="flex-align gap-6">
//                                                 <span className="text-xs fw-bold text-gray-600">4.8</span>
//                                                 <span className="text-15 fw-bold text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-xs fw-bold text-gray-600">(17k)</span>
//                                             </div>
//                                             <Link
//                                                 to="/cart"
//                                                 className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
//                                             >
//                                                 Add To Cart <i className="ph ph-shopping-cart" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
//                                 <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                                     <Link
//                                         to="/product-details"
//                                         className="product-card__thumb flex-center"
//                                     >
//                                         <img src="assets/images/thumbs/product-img11.png" alt="" />
//                                     </Link>
//                                     <div className="product-card__content p-sm-2">
//                                         <h6 className="title text-lg fw-semibold mt-12 mb-8">
//                                             <Link to="/product-details" className="link text-line-2">
//                                                 Lucerne Yogurt, Lowfat, Strawberry
//                                             </Link>
//                                         </h6>
//                                         <div className="flex-align gap-4">
//                                             <span className="text-main-600 text-md d-flex">
//                                                 <i className="ph-fill ph-storefront" />
//                                             </span>
//                                             <span className="text-gray-500 text-xs">
//                                                 By Lucky Supermarket
//                                             </span>
//                                         </div>
//                                         <div className="product-card__content mt-12">
//                                             <div className="product-card__price mb-8">
//                                                 <span className="text-heading text-md fw-semibold ">
//                                                     $14.99{" "}
//                                                     <span className="text-gray-500 fw-normal">/Qty</span>{" "}
//                                                 </span>
//                                                 <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
//                                                     $28.99
//                                                 </span>
//                                             </div>
//                                             <div className="flex-align gap-6">
//                                                 <span className="text-xs fw-bold text-gray-600">4.8</span>
//                                                 <span className="text-15 fw-bold text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-xs fw-bold text-gray-600">(17k)</span>
//                                             </div>
//                                             <Link
//                                                 to="/cart"
//                                                 className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
//                                             >
//                                                 Add To Cart <i className="ph ph-shopping-cart" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
//                                 <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                                     <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
//                                         Sale 50%
//                                     </span>
//                                     <Link
//                                         to="/product-details"
//                                         className="product-card__thumb flex-center"
//                                     >
//                                         <img src="assets/images/thumbs/product-img12.png" alt="" />
//                                     </Link>
//                                     <div className="product-card__content p-sm-2">
//                                         <h6 className="title text-lg fw-semibold mt-12 mb-8">
//                                             <Link to="/product-details" className="link text-line-2">
//                                                 Nature Valley Whole Grain Oats and Honey Protein
//                                             </Link>
//                                         </h6>
//                                         <div className="flex-align gap-4">
//                                             <span className="text-main-600 text-md d-flex">
//                                                 <i className="ph-fill ph-storefront" />
//                                             </span>
//                                             <span className="text-gray-500 text-xs">
//                                                 By Lucky Supermarket
//                                             </span>
//                                         </div>
//                                         <div className="product-card__content mt-12">
//                                             <div className="product-card__price mb-8">
//                                                 <span className="text-heading text-md fw-semibold ">
//                                                     $14.99{" "}
//                                                     <span className="text-gray-500 fw-normal">/Qty</span>{" "}
//                                                 </span>
//                                                 <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
//                                                     $28.99
//                                                 </span>
//                                             </div>
//                                             <div className="flex-align gap-6">
//                                                 <span className="text-xs fw-bold text-gray-600">4.8</span>
//                                                 <span className="text-15 fw-bold text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-xs fw-bold text-gray-600">(17k)</span>
//                                             </div>
//                                             <Link
//                                                 to="/cart"
//                                                 className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
//                                             >
//                                                 Add To Cart <i className="ph ph-shopping-cart" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
//                                 <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                                     <Link
//                                         to="/product-details"
//                                         className="product-card__thumb flex-center"
//                                     >
//                                         <img src="assets/images/thumbs/product-img13.png" alt="" />
//                                     </Link>
//                                     <div className="product-card__content p-sm-2">
//                                         <h6 className="title text-lg fw-semibold mt-12 mb-8">
//                                             <Link to="/product-details" className="link text-line-2">
//                                                 C-500 Antioxidant Protect Dietary Supplement
//                                             </Link>
//                                         </h6>
//                                         <div className="flex-align gap-4">
//                                             <span className="text-main-600 text-md d-flex">
//                                                 <i className="ph-fill ph-storefront" />
//                                             </span>
//                                             <span className="text-gray-500 text-xs">
//                                                 By Lucky Supermarket
//                                             </span>
//                                         </div>
//                                         <div className="product-card__content mt-12">
//                                             <div className="product-card__price mb-8">
//                                                 <span className="text-heading text-md fw-semibold ">
//                                                     $14.99{" "}
//                                                     <span className="text-gray-500 fw-normal">/Qty</span>{" "}
//                                                 </span>
//                                                 <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
//                                                     $28.99
//                                                 </span>
//                                             </div>
//                                             <div className="flex-align gap-6">
//                                                 <span className="text-xs fw-bold text-gray-600">4.8</span>
//                                                 <span className="text-15 fw-bold text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-xs fw-bold text-gray-600">(17k)</span>
//                                             </div>
//                                             <Link
//                                                 to="/cart"
//                                                 className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
//                                             >
//                                                 Add To Cart <i className="ph ph-shopping-cart" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
//                                 <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                                     <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
//                                         Sale 50%
//                                     </span>
//                                     <Link
//                                         to="/product-details"
//                                         className="product-card__thumb flex-center"
//                                     >
//                                         <img src="assets/images/thumbs/product-img14.png" alt="" />
//                                     </Link>
//                                     <div className="product-card__content p-sm-2">
//                                         <h6 className="title text-lg fw-semibold mt-12 mb-8">
//                                             <Link to="/product-details" className="link text-line-2">
//                                                 C-500 Antioxidant Protect Dietary Supplement
//                                             </Link>
//                                         </h6>
//                                         <div className="flex-align gap-4">
//                                             <span className="text-main-600 text-md d-flex">
//                                                 <i className="ph-fill ph-storefront" />
//                                             </span>
//                                             <span className="text-gray-500 text-xs">
//                                                 By Lucky Supermarket
//                                             </span>
//                                         </div>
//                                         <div className="product-card__content mt-12">
//                                             <div className="product-card__price mb-8">
//                                                 <span className="text-heading text-md fw-semibold ">
//                                                     $14.99{" "}
//                                                     <span className="text-gray-500 fw-normal">/Qty</span>{" "}
//                                                 </span>
//                                                 <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
//                                                     $28.99
//                                                 </span>
//                                             </div>
//                                             <div className="flex-align gap-6">
//                                                 <span className="text-xs fw-bold text-gray-600">4.8</span>
//                                                 <span className="text-15 fw-bold text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-xs fw-bold text-gray-600">(17k)</span>
//                                             </div>
//                                             <Link
//                                                 to="/cart"
//                                                 className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
//                                             >
//                                                 Add To Cart <i className="ph ph-shopping-cart" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
//                                 <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                                     <span className="product-card__badge bg-warning-600 px-8 py-4 text-sm text-white">
//                                         New
//                                     </span>
//                                     <Link
//                                         to="/product-details"
//                                         className="product-card__thumb flex-center"
//                                     >
//                                         <img src="assets/images/thumbs/product-img15.png" alt="" />
//                                     </Link>
//                                     <div className="product-card__content p-sm-2">
//                                         <h6 className="title text-lg fw-semibold mt-12 mb-8">
//                                             <Link to="/product-details" className="link text-line-2">
//                                                 C-500 Antioxidant Protect Dietary Supplement
//                                             </Link>
//                                         </h6>
//                                         <div className="flex-align gap-4">
//                                             <span className="text-main-600 text-md d-flex">
//                                                 <i className="ph-fill ph-storefront" />
//                                             </span>
//                                             <span className="text-gray-500 text-xs">
//                                                 By Lucky Supermarket
//                                             </span>
//                                         </div>
//                                         <div className="product-card__content mt-12">
//                                             <div className="product-card__price mb-8">
//                                                 <span className="text-heading text-md fw-semibold ">
//                                                     $14.99{" "}
//                                                     <span className="text-gray-500 fw-normal">/Qty</span>{" "}
//                                                 </span>
//                                                 <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
//                                                     $28.99
//                                                 </span>
//                                             </div>
//                                             <div className="flex-align gap-6">
//                                                 <span className="text-xs fw-bold text-gray-600">4.8</span>
//                                                 <span className="text-15 fw-bold text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-xs fw-bold text-gray-600">(17k)</span>
//                                             </div>
//                                             <Link
//                                                 to="/cart"
//                                                 className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
//                                             >
//                                                 Add To Cart <i className="ph ph-shopping-cart" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
//                                 <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                                     <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
//                                         Sale 50%
//                                     </span>
//                                     <Link
//                                         to="/product-details"
//                                         className="product-card__thumb flex-center"
//                                     >
//                                         <img src="assets/images/thumbs/product-img16.png" alt="" />
//                                     </Link>
//                                     <div className="product-card__content p-sm-2">
//                                         <h6 className="title text-lg fw-semibold mt-12 mb-8">
//                                             <Link to="/product-details" className="link text-line-2">
//                                                 Good &amp; Gather Farmed Atlantic Salmon
//                                             </Link>
//                                         </h6>
//                                         <div className="flex-align gap-4">
//                                             <span className="text-main-600 text-md d-flex">
//                                                 <i className="ph-fill ph-storefront" />
//                                             </span>
//                                             <span className="text-gray-500 text-xs">
//                                                 By Lucky Supermarket
//                                             </span>
//                                         </div>
//                                         <div className="product-card__content mt-12">
//                                             <div className="product-card__price mb-8">
//                                                 <span className="text-heading text-md fw-semibold ">
//                                                     $14.99{" "}
//                                                     <span className="text-gray-500 fw-normal">/Qty</span>{" "}
//                                                 </span>
//                                                 <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
//                                                     $28.99
//                                                 </span>
//                                             </div>
//                                             <div className="flex-align gap-6">
//                                                 <span className="text-xs fw-bold text-gray-600">4.8</span>
//                                                 <span className="text-15 fw-bold text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-xs fw-bold text-gray-600">(17k)</span>
//                                             </div>
//                                             <Link
//                                                 to="/cart"
//                                                 className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
//                                             >
//                                                 Add To Cart <i className="ph ph-shopping-cart" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
//                                 <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                                     <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
//                                         Sale 50%
//                                     </span>
//                                     <Link
//                                         to="/product-details"
//                                         className="product-card__thumb flex-center"
//                                     >
//                                         <img src="assets/images/thumbs/product-img17.png" alt="" />
//                                     </Link>
//                                     <div className="product-card__content p-sm-2">
//                                         <h6 className="title text-lg fw-semibold mt-12 mb-8">
//                                             <Link to="/product-details" className="link text-line-2">
//                                                 Market Pantry 41/50 Raw Tail-Off Large Raw Shrimp
//                                             </Link>
//                                         </h6>
//                                         <div className="flex-align gap-4">
//                                             <span className="text-main-600 text-md d-flex">
//                                                 <i className="ph-fill ph-storefront" />
//                                             </span>
//                                             <span className="text-gray-500 text-xs">
//                                                 By Lucky Supermarket
//                                             </span>
//                                         </div>
//                                         <div className="product-card__content mt-12">
//                                             <div className="product-card__price mb-8">
//                                                 <span className="text-heading text-md fw-semibold ">
//                                                     $14.99{" "}
//                                                     <span className="text-gray-500 fw-normal">/Qty</span>{" "}
//                                                 </span>
//                                                 <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
//                                                     $28.99
//                                                 </span>
//                                             </div>
//                                             <div className="flex-align gap-6">
//                                                 <span className="text-xs fw-bold text-gray-600">4.8</span>
//                                                 <span className="text-15 fw-bold text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-xs fw-bold text-gray-600">(17k)</span>
//                                             </div>
//                                             <Link
//                                                 to="/cart"
//                                                 className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
//                                             >
//                                                 Add To Cart <i className="ph ph-shopping-cart" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
//                                 <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                                     <span className="product-card__badge bg-warning-600 px-8 py-4 text-sm text-white">
//                                         New
//                                     </span>
//                                     <Link
//                                         to="/product-details"
//                                         className="product-card__thumb flex-center"
//                                     >
//                                         <img src="assets/images/thumbs/product-img18.png" alt="" />
//                                     </Link>
//                                     <div className="product-card__content p-sm-2">
//                                         <h6 className="title text-lg fw-semibold mt-12 mb-8">
//                                             <Link to="/product-details" className="link text-line-2">
//                                                 Tropicana 100% Juice, Orange, No Pulp
//                                             </Link>
//                                         </h6>
//                                         <div className="flex-align gap-4">
//                                             <span className="text-main-600 text-md d-flex">
//                                                 <i className="ph-fill ph-storefront" />
//                                             </span>
//                                             <span className="text-gray-500 text-xs">
//                                                 By Lucky Supermarket
//                                             </span>
//                                         </div>
//                                         <div className="product-card__content mt-12">
//                                             <div className="product-card__price mb-8">
//                                                 <span className="text-heading text-md fw-semibold ">
//                                                     $14.99{" "}
//                                                     <span className="text-gray-500 fw-normal">/Qty</span>{" "}
//                                                 </span>
//                                                 <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
//                                                     $28.99
//                                                 </span>
//                                             </div>
//                                             <div className="flex-align gap-6">
//                                                 <span className="text-xs fw-bold text-gray-600">4.8</span>
//                                                 <span className="text-15 fw-bold text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-xs fw-bold text-gray-600">(17k)</span>
//                                             </div>
//                                             <Link
//                                                 to="/cart"
//                                                 className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
//                                             >
//                                                 Add To Cart <i className="ph ph-shopping-cart" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div
//                         className="tab-pane fade"
//                         id="pills-vegetables"
//                         role="tabpanel"
//                         aria-labelledby="pills-vegetables-tab"
//                         tabIndex={0}
//                     >
//                         <div className="row g-12">
//                             <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
//                                 <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                                     <Link
//                                         to="/product-details"
//                                         className="product-card__thumb flex-center"
//                                     >
//                                         <img src="assets/images/thumbs/product-img7.png" alt="" />
//                                     </Link>
//                                     <div className="product-card__content p-sm-2">
//                                         <h6 className="title text-lg fw-semibold mt-12 mb-8">
//                                             <Link to="/product-details" className="link text-line-2">
//                                                 C-500 Antioxidant Protect Dietary Supplement
//                                             </Link>
//                                         </h6>
//                                         <div className="flex-align gap-4">
//                                             <span className="text-main-600 text-md d-flex">
//                                                 <i className="ph-fill ph-storefront" />
//                                             </span>
//                                             <span className="text-gray-500 text-xs">
//                                                 By Lucky Supermarket
//                                             </span>
//                                         </div>
//                                         <div className="product-card__content mt-12">
//                                             <div className="product-card__price mb-8">
//                                                 <span className="text-heading text-md fw-semibold ">
//                                                     $14.99{" "}
//                                                     <span className="text-gray-500 fw-normal">/Qty</span>{" "}
//                                                 </span>
//                                                 <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
//                                                     $28.99
//                                                 </span>
//                                             </div>
//                                             <div className="flex-align gap-6">
//                                                 <span className="text-xs fw-bold text-gray-600">4.8</span>
//                                                 <span className="text-15 fw-bold text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-xs fw-bold text-gray-600">(17k)</span>
//                                             </div>
//                                             <Link
//                                                 to="/cart"
//                                                 className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
//                                             >
//                                                 Add To Cart <i className="ph ph-shopping-cart" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
//                                 <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                                     <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
//                                         Sale 50%
//                                     </span>
//                                     <Link
//                                         to="/product-details"
//                                         className="product-card__thumb flex-center"
//                                     >
//                                         <img src="assets/images/thumbs/product-img8.png" alt="" />
//                                     </Link>
//                                     <div className="product-card__content p-sm-2">
//                                         <h6 className="title text-lg fw-semibold mt-12 mb-8">
//                                             <Link to="/product-details" className="link text-line-2">
//                                                 Marcel's Modern Pantry Almond Unsweetened
//                                             </Link>
//                                         </h6>
//                                         <div className="flex-align gap-4">
//                                             <span className="text-main-600 text-md d-flex">
//                                                 <i className="ph-fill ph-storefront" />
//                                             </span>
//                                             <span className="text-gray-500 text-xs">
//                                                 By Lucky Supermarket
//                                             </span>
//                                         </div>
//                                         <div className="product-card__content mt-12">
//                                             <div className="product-card__price mb-8">
//                                                 <span className="text-heading text-md fw-semibold ">
//                                                     $14.99{" "}
//                                                     <span className="text-gray-500 fw-normal">/Qty</span>{" "}
//                                                 </span>
//                                                 <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
//                                                     $28.99
//                                                 </span>
//                                             </div>
//                                             <div className="flex-align gap-6">
//                                                 <span className="text-xs fw-bold text-gray-600">4.8</span>
//                                                 <span className="text-15 fw-bold text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-xs fw-bold text-gray-600">(17k)</span>
//                                             </div>
//                                             <Link
//                                                 to="/cart"
//                                                 className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
//                                             >
//                                                 Add To Cart <i className="ph ph-shopping-cart" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
//                                 <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                                     <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
//                                         Sale 50%
//                                     </span>
//                                     <Link
//                                         to="/product-details"
//                                         className="product-card__thumb flex-center"
//                                     >
//                                         <img src="assets/images/thumbs/product-img9.png" alt="" />
//                                     </Link>
//                                     <div className="product-card__content p-sm-2">
//                                         <h6 className="title text-lg fw-semibold mt-12 mb-8">
//                                             <Link to="/product-details" className="link text-line-2">
//                                                 O Organics Milk, Whole, Vitamin D
//                                             </Link>
//                                         </h6>
//                                         <div className="flex-align gap-4">
//                                             <span className="text-main-600 text-md d-flex">
//                                                 <i className="ph-fill ph-storefront" />
//                                             </span>
//                                             <span className="text-gray-500 text-xs">
//                                                 By Lucky Supermarket
//                                             </span>
//                                         </div>
//                                         <div className="product-card__content mt-12">
//                                             <div className="product-card__price mb-8">
//                                                 <span className="text-heading text-md fw-semibold ">
//                                                     $14.99{" "}
//                                                     <span className="text-gray-500 fw-normal">/Qty</span>{" "}
//                                                 </span>
//                                                 <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
//                                                     $28.99
//                                                 </span>
//                                             </div>
//                                             <div className="flex-align gap-6">
//                                                 <span className="text-xs fw-bold text-gray-600">4.8</span>
//                                                 <span className="text-15 fw-bold text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-xs fw-bold text-gray-600">(17k)</span>
//                                             </div>
//                                             <Link
//                                                 to="/cart"
//                                                 className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
//                                             >
//                                                 Add To Cart <i className="ph ph-shopping-cart" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
//                                 <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                                     <span className="product-card__badge bg-info-600 px-8 py-4 text-sm text-white">
//                                         Best Sale
//                                     </span>
//                                     <Link
//                                         to="/product-details"
//                                         className="product-card__thumb flex-center"
//                                     >
//                                         <img src="assets/images/thumbs/product-img10.png" alt="" />
//                                     </Link>
//                                     <div className="product-card__content p-sm-2">
//                                         <h6 className="title text-lg fw-semibold mt-12 mb-8">
//                                             <Link to="/product-details" className="link text-line-2">
//                                                 Whole Grains and Seeds Organic Bread
//                                             </Link>
//                                         </h6>
//                                         <div className="flex-align gap-4">
//                                             <span className="text-main-600 text-md d-flex">
//                                                 <i className="ph-fill ph-storefront" />
//                                             </span>
//                                             <span className="text-gray-500 text-xs">
//                                                 By Lucky Supermarket
//                                             </span>
//                                         </div>
//                                         <div className="product-card__content mt-12">
//                                             <div className="product-card__price mb-8">
//                                                 <span className="text-heading text-md fw-semibold ">
//                                                     $14.99{" "}
//                                                     <span className="text-gray-500 fw-normal">/Qty</span>{" "}
//                                                 </span>
//                                                 <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
//                                                     $28.99
//                                                 </span>
//                                             </div>
//                                             <div className="flex-align gap-6">
//                                                 <span className="text-xs fw-bold text-gray-600">4.8</span>
//                                                 <span className="text-15 fw-bold text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-xs fw-bold text-gray-600">(17k)</span>
//                                             </div>
//                                             <Link
//                                                 to="/cart"
//                                                 className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
//                                             >
//                                                 Add To Cart <i className="ph ph-shopping-cart" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
//                                 <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                                     <Link
//                                         to="/product-details"
//                                         className="product-card__thumb flex-center"
//                                     >
//                                         <img src="assets/images/thumbs/product-img11.png" alt="" />
//                                     </Link>
//                                     <div className="product-card__content p-sm-2">
//                                         <h6 className="title text-lg fw-semibold mt-12 mb-8">
//                                             <Link to="/product-details" className="link text-line-2">
//                                                 Lucerne Yogurt, Lowfat, Strawberry
//                                             </Link>
//                                         </h6>
//                                         <div className="flex-align gap-4">
//                                             <span className="text-main-600 text-md d-flex">
//                                                 <i className="ph-fill ph-storefront" />
//                                             </span>
//                                             <span className="text-gray-500 text-xs">
//                                                 By Lucky Supermarket
//                                             </span>
//                                         </div>
//                                         <div className="product-card__content mt-12">
//                                             <div className="product-card__price mb-8">
//                                                 <span className="text-heading text-md fw-semibold ">
//                                                     $14.99{" "}
//                                                     <span className="text-gray-500 fw-normal">/Qty</span>{" "}
//                                                 </span>
//                                                 <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
//                                                     $28.99
//                                                 </span>
//                                             </div>
//                                             <div className="flex-align gap-6">
//                                                 <span className="text-xs fw-bold text-gray-600">4.8</span>
//                                                 <span className="text-15 fw-bold text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-xs fw-bold text-gray-600">(17k)</span>
//                                             </div>
//                                             <Link
//                                                 to="/cart"
//                                                 className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
//                                             >
//                                                 Add To Cart <i className="ph ph-shopping-cart" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
//                                 <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                                     <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
//                                         Sale 50%
//                                     </span>
//                                     <Link
//                                         to="/product-details"
//                                         className="product-card__thumb flex-center"
//                                     >
//                                         <img src="assets/images/thumbs/product-img12.png" alt="" />
//                                     </Link>
//                                     <div className="product-card__content p-sm-2">
//                                         <h6 className="title text-lg fw-semibold mt-12 mb-8">
//                                             <Link to="/product-details" className="link text-line-2">
//                                                 Nature Valley Whole Grain Oats and Honey Protein
//                                             </Link>
//                                         </h6>
//                                         <div className="flex-align gap-4">
//                                             <span className="text-main-600 text-md d-flex">
//                                                 <i className="ph-fill ph-storefront" />
//                                             </span>
//                                             <span className="text-gray-500 text-xs">
//                                                 By Lucky Supermarket
//                                             </span>
//                                         </div>
//                                         <div className="product-card__content mt-12">
//                                             <div className="product-card__price mb-8">
//                                                 <span className="text-heading text-md fw-semibold ">
//                                                     $14.99{" "}
//                                                     <span className="text-gray-500 fw-normal">/Qty</span>{" "}
//                                                 </span>
//                                                 <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
//                                                     $28.99
//                                                 </span>
//                                             </div>
//                                             <div className="flex-align gap-6">
//                                                 <span className="text-xs fw-bold text-gray-600">4.8</span>
//                                                 <span className="text-15 fw-bold text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-xs fw-bold text-gray-600">(17k)</span>
//                                             </div>
//                                             <Link
//                                                 to="/cart"
//                                                 className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
//                                             >
//                                                 Add To Cart <i className="ph ph-shopping-cart" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
//                                 <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                                     <Link
//                                         to="/product-details"
//                                         className="product-card__thumb flex-center"
//                                     >
//                                         <img src="assets/images/thumbs/product-img13.png" alt="" />
//                                     </Link>
//                                     <div className="product-card__content p-sm-2">
//                                         <h6 className="title text-lg fw-semibold mt-12 mb-8">
//                                             <Link to="/product-details" className="link text-line-2">
//                                                 C-500 Antioxidant Protect Dietary Supplement
//                                             </Link>
//                                         </h6>
//                                         <div className="flex-align gap-4">
//                                             <span className="text-main-600 text-md d-flex">
//                                                 <i className="ph-fill ph-storefront" />
//                                             </span>
//                                             <span className="text-gray-500 text-xs">
//                                                 By Lucky Supermarket
//                                             </span>
//                                         </div>
//                                         <div className="product-card__content mt-12">
//                                             <div className="product-card__price mb-8">
//                                                 <span className="text-heading text-md fw-semibold ">
//                                                     $14.99{" "}
//                                                     <span className="text-gray-500 fw-normal">/Qty</span>{" "}
//                                                 </span>
//                                                 <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
//                                                     $28.99
//                                                 </span>
//                                             </div>
//                                             <div className="flex-align gap-6">
//                                                 <span className="text-xs fw-bold text-gray-600">4.8</span>
//                                                 <span className="text-15 fw-bold text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-xs fw-bold text-gray-600">(17k)</span>
//                                             </div>
//                                             <Link
//                                                 to="/cart"
//                                                 className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
//                                             >
//                                                 Add To Cart <i className="ph ph-shopping-cart" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
//                                 <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                                     <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
//                                         Sale 50%
//                                     </span>
//                                     <Link
//                                         to="/product-details"
//                                         className="product-card__thumb flex-center"
//                                     >
//                                         <img src="assets/images/thumbs/product-img14.png" alt="" />
//                                     </Link>
//                                     <div className="product-card__content p-sm-2">
//                                         <h6 className="title text-lg fw-semibold mt-12 mb-8">
//                                             <Link to="/product-details" className="link text-line-2">
//                                                 C-500 Antioxidant Protect Dietary Supplement
//                                             </Link>
//                                         </h6>
//                                         <div className="flex-align gap-4">
//                                             <span className="text-main-600 text-md d-flex">
//                                                 <i className="ph-fill ph-storefront" />
//                                             </span>
//                                             <span className="text-gray-500 text-xs">
//                                                 By Lucky Supermarket
//                                             </span>
//                                         </div>
//                                         <div className="product-card__content mt-12">
//                                             <div className="product-card__price mb-8">
//                                                 <span className="text-heading text-md fw-semibold ">
//                                                     $14.99{" "}
//                                                     <span className="text-gray-500 fw-normal">/Qty</span>{" "}
//                                                 </span>
//                                                 <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
//                                                     $28.99
//                                                 </span>
//                                             </div>
//                                             <div className="flex-align gap-6">
//                                                 <span className="text-xs fw-bold text-gray-600">4.8</span>
//                                                 <span className="text-15 fw-bold text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-xs fw-bold text-gray-600">(17k)</span>
//                                             </div>
//                                             <Link
//                                                 to="/cart"
//                                                 className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
//                                             >
//                                                 Add To Cart <i className="ph ph-shopping-cart" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
//                                 <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                                     <span className="product-card__badge bg-warning-600 px-8 py-4 text-sm text-white">
//                                         New
//                                     </span>
//                                     <Link
//                                         to="/product-details"
//                                         className="product-card__thumb flex-center"
//                                     >
//                                         <img src="assets/images/thumbs/product-img15.png" alt="" />
//                                     </Link>
//                                     <div className="product-card__content p-sm-2">
//                                         <h6 className="title text-lg fw-semibold mt-12 mb-8">
//                                             <Link to="/product-details" className="link text-line-2">
//                                                 C-500 Antioxidant Protect Dietary Supplement
//                                             </Link>
//                                         </h6>
//                                         <div className="flex-align gap-4">
//                                             <span className="text-main-600 text-md d-flex">
//                                                 <i className="ph-fill ph-storefront" />
//                                             </span>
//                                             <span className="text-gray-500 text-xs">
//                                                 By Lucky Supermarket
//                                             </span>
//                                         </div>
//                                         <div className="product-card__content mt-12">
//                                             <div className="product-card__price mb-8">
//                                                 <span className="text-heading text-md fw-semibold ">
//                                                     $14.99{" "}
//                                                     <span className="text-gray-500 fw-normal">/Qty</span>{" "}
//                                                 </span>
//                                                 <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
//                                                     $28.99
//                                                 </span>
//                                             </div>
//                                             <div className="flex-align gap-6">
//                                                 <span className="text-xs fw-bold text-gray-600">4.8</span>
//                                                 <span className="text-15 fw-bold text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-xs fw-bold text-gray-600">(17k)</span>
//                                             </div>
//                                             <Link
//                                                 to="/cart"
//                                                 className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
//                                             >
//                                                 Add To Cart <i className="ph ph-shopping-cart" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
//                                 <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                                     <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
//                                         Sale 50%
//                                     </span>
//                                     <Link
//                                         to="/product-details"
//                                         className="product-card__thumb flex-center"
//                                     >
//                                         <img src="assets/images/thumbs/product-img16.png" alt="" />
//                                     </Link>
//                                     <div className="product-card__content p-sm-2">
//                                         <h6 className="title text-lg fw-semibold mt-12 mb-8">
//                                             <Link to="/product-details" className="link text-line-2">
//                                                 Good &amp; Gather Farmed Atlantic Salmon
//                                             </Link>
//                                         </h6>
//                                         <div className="flex-align gap-4">
//                                             <span className="text-main-600 text-md d-flex">
//                                                 <i className="ph-fill ph-storefront" />
//                                             </span>
//                                             <span className="text-gray-500 text-xs">
//                                                 By Lucky Supermarket
//                                             </span>
//                                         </div>
//                                         <div className="product-card__content mt-12">
//                                             <div className="product-card__price mb-8">
//                                                 <span className="text-heading text-md fw-semibold ">
//                                                     $14.99{" "}
//                                                     <span className="text-gray-500 fw-normal">/Qty</span>{" "}
//                                                 </span>
//                                                 <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
//                                                     $28.99
//                                                 </span>
//                                             </div>
//                                             <div className="flex-align gap-6">
//                                                 <span className="text-xs fw-bold text-gray-600">4.8</span>
//                                                 <span className="text-15 fw-bold text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-xs fw-bold text-gray-600">(17k)</span>
//                                             </div>
//                                             <Link
//                                                 to="/cart"
//                                                 className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
//                                             >
//                                                 Add To Cart <i className="ph ph-shopping-cart" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
//                                 <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                                     <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
//                                         Sale 50%
//                                     </span>
//                                     <Link
//                                         to="/product-details"
//                                         className="product-card__thumb flex-center"
//                                     >
//                                         <img src="assets/images/thumbs/product-img17.png" alt="" />
//                                     </Link>
//                                     <div className="product-card__content p-sm-2">
//                                         <h6 className="title text-lg fw-semibold mt-12 mb-8">
//                                             <Link to="/product-details" className="link text-line-2">
//                                                 Market Pantry 41/50 Raw Tail-Off Large Raw Shrimp
//                                             </Link>
//                                         </h6>
//                                         <div className="flex-align gap-4">
//                                             <span className="text-main-600 text-md d-flex">
//                                                 <i className="ph-fill ph-storefront" />
//                                             </span>
//                                             <span className="text-gray-500 text-xs">
//                                                 By Lucky Supermarket
//                                             </span>
//                                         </div>
//                                         <div className="product-card__content mt-12">
//                                             <div className="product-card__price mb-8">
//                                                 <span className="text-heading text-md fw-semibold ">
//                                                     $14.99{" "}
//                                                     <span className="text-gray-500 fw-normal">/Qty</span>{" "}
//                                                 </span>
//                                                 <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
//                                                     $28.99
//                                                 </span>
//                                             </div>
//                                             <div className="flex-align gap-6">
//                                                 <span className="text-xs fw-bold text-gray-600">4.8</span>
//                                                 <span className="text-15 fw-bold text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-xs fw-bold text-gray-600">(17k)</span>
//                                             </div>
//                                             <Link
//                                                 to="/cart"
//                                                 className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
//                                             >
//                                                 Add To Cart <i className="ph ph-shopping-cart" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
//                                 <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                                     <span className="product-card__badge bg-warning-600 px-8 py-4 text-sm text-white">
//                                         New
//                                     </span>
//                                     <Link
//                                         to="/product-details"
//                                         className="product-card__thumb flex-center"
//                                     >
//                                         <img src="assets/images/thumbs/product-img18.png" alt="" />
//                                     </Link>
//                                     <div className="product-card__content p-sm-2">
//                                         <h6 className="title text-lg fw-semibold mt-12 mb-8">
//                                             <Link to="/product-details" className="link text-line-2">
//                                                 Tropicana 100% Juice, Orange, No Pulp
//                                             </Link>
//                                         </h6>
//                                         <div className="flex-align gap-4">
//                                             <span className="text-main-600 text-md d-flex">
//                                                 <i className="ph-fill ph-storefront" />
//                                             </span>
//                                             <span className="text-gray-500 text-xs">
//                                                 By Lucky Supermarket
//                                             </span>
//                                         </div>
//                                         <div className="product-card__content mt-12">
//                                             <div className="product-card__price mb-8">
//                                                 <span className="text-heading text-md fw-semibold ">
//                                                     $14.99{" "}
//                                                     <span className="text-gray-500 fw-normal">/Qty</span>{" "}
//                                                 </span>
//                                                 <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
//                                                     $28.99
//                                                 </span>
//                                             </div>
//                                             <div className="flex-align gap-6">
//                                                 <span className="text-xs fw-bold text-gray-600">4.8</span>
//                                                 <span className="text-15 fw-bold text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-xs fw-bold text-gray-600">(17k)</span>
//                                             </div>
//                                             <Link
//                                                 to="/cart"
//                                                 className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
//                                             >
//                                                 Add To Cart <i className="ph ph-shopping-cart" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div
//                         className="tab-pane fade"
//                         id="pills-snacks"
//                         role="tabpanel"
//                         aria-labelledby="pills-snacks-tab"
//                         tabIndex={0}
//                     >
//                         <div className="row g-12">
//                             <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
//                                 <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                                     <Link
//                                         to="/product-details"
//                                         className="product-card__thumb flex-center"
//                                     >
//                                         <img src="assets/images/thumbs/product-img7.png" alt="" />
//                                     </Link>
//                                     <div className="product-card__content p-sm-2">
//                                         <h6 className="title text-lg fw-semibold mt-12 mb-8">
//                                             <Link to="/product-details" className="link text-line-2">
//                                                 C-500 Antioxidant Protect Dietary Supplement
//                                             </Link>
//                                         </h6>
//                                         <div className="flex-align gap-4">
//                                             <span className="text-main-600 text-md d-flex">
//                                                 <i className="ph-fill ph-storefront" />
//                                             </span>
//                                             <span className="text-gray-500 text-xs">
//                                                 By Lucky Supermarket
//                                             </span>
//                                         </div>
//                                         <div className="product-card__content mt-12">
//                                             <div className="product-card__price mb-8">
//                                                 <span className="text-heading text-md fw-semibold ">
//                                                     $14.99{" "}
//                                                     <span className="text-gray-500 fw-normal">/Qty</span>{" "}
//                                                 </span>
//                                                 <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
//                                                     $28.99
//                                                 </span>
//                                             </div>
//                                             <div className="flex-align gap-6">
//                                                 <span className="text-xs fw-bold text-gray-600">4.8</span>
//                                                 <span className="text-15 fw-bold text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-xs fw-bold text-gray-600">(17k)</span>
//                                             </div>
//                                             <Link
//                                                 to="/cart"
//                                                 className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
//                                             >
//                                                 Add To Cart <i className="ph ph-shopping-cart" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
//                                 <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                                     <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
//                                         Sale 50%
//                                     </span>
//                                     <Link
//                                         to="/product-details"
//                                         className="product-card__thumb flex-center"
//                                     >
//                                         <img src="assets/images/thumbs/product-img8.png" alt="" />
//                                     </Link>
//                                     <div className="product-card__content p-sm-2">
//                                         <h6 className="title text-lg fw-semibold mt-12 mb-8">
//                                             <Link to="/product-details" className="link text-line-2">
//                                                 Marcel's Modern Pantry Almond Unsweetened
//                                             </Link>
//                                         </h6>
//                                         <div className="flex-align gap-4">
//                                             <span className="text-main-600 text-md d-flex">
//                                                 <i className="ph-fill ph-storefront" />
//                                             </span>
//                                             <span className="text-gray-500 text-xs">
//                                                 By Lucky Supermarket
//                                             </span>
//                                         </div>
//                                         <div className="product-card__content mt-12">
//                                             <div className="product-card__price mb-8">
//                                                 <span className="text-heading text-md fw-semibold ">
//                                                     $14.99{" "}
//                                                     <span className="text-gray-500 fw-normal">/Qty</span>{" "}
//                                                 </span>
//                                                 <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
//                                                     $28.99
//                                                 </span>
//                                             </div>
//                                             <div className="flex-align gap-6">
//                                                 <span className="text-xs fw-bold text-gray-600">4.8</span>
//                                                 <span className="text-15 fw-bold text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-xs fw-bold text-gray-600">(17k)</span>
//                                             </div>
//                                             <Link
//                                                 to="/cart"
//                                                 className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
//                                             >
//                                                 Add To Cart <i className="ph ph-shopping-cart" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
//                                 <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                                     <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
//                                         Sale 50%
//                                     </span>
//                                     <Link
//                                         to="/product-details"
//                                         className="product-card__thumb flex-center"
//                                     >
//                                         <img src="assets/images/thumbs/product-img9.png" alt="" />
//                                     </Link>
//                                     <div className="product-card__content p-sm-2">
//                                         <h6 className="title text-lg fw-semibold mt-12 mb-8">
//                                             <Link to="/product-details" className="link text-line-2">
//                                                 O Organics Milk, Whole, Vitamin D
//                                             </Link>
//                                         </h6>
//                                         <div className="flex-align gap-4">
//                                             <span className="text-main-600 text-md d-flex">
//                                                 <i className="ph-fill ph-storefront" />
//                                             </span>
//                                             <span className="text-gray-500 text-xs">
//                                                 By Lucky Supermarket
//                                             </span>
//                                         </div>
//                                         <div className="product-card__content mt-12">
//                                             <div className="product-card__price mb-8">
//                                                 <span className="text-heading text-md fw-semibold ">
//                                                     $14.99{" "}
//                                                     <span className="text-gray-500 fw-normal">/Qty</span>{" "}
//                                                 </span>
//                                                 <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
//                                                     $28.99
//                                                 </span>
//                                             </div>
//                                             <div className="flex-align gap-6">
//                                                 <span className="text-xs fw-bold text-gray-600">4.8</span>
//                                                 <span className="text-15 fw-bold text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-xs fw-bold text-gray-600">(17k)</span>
//                                             </div>
//                                             <Link
//                                                 to="/cart"
//                                                 className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
//                                             >
//                                                 Add To Cart <i className="ph ph-shopping-cart" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
//                                 <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                                     <span className="product-card__badge bg-info-600 px-8 py-4 text-sm text-white">
//                                         Best Sale
//                                     </span>
//                                     <Link
//                                         to="/product-details"
//                                         className="product-card__thumb flex-center"
//                                     >
//                                         <img src="assets/images/thumbs/product-img10.png" alt="" />
//                                     </Link>
//                                     <div className="product-card__content p-sm-2">
//                                         <h6 className="title text-lg fw-semibold mt-12 mb-8">
//                                             <Link to="/product-details" className="link text-line-2">
//                                                 Whole Grains and Seeds Organic Bread
//                                             </Link>
//                                         </h6>
//                                         <div className="flex-align gap-4">
//                                             <span className="text-main-600 text-md d-flex">
//                                                 <i className="ph-fill ph-storefront" />
//                                             </span>
//                                             <span className="text-gray-500 text-xs">
//                                                 By Lucky Supermarket
//                                             </span>
//                                         </div>
//                                         <div className="product-card__content mt-12">
//                                             <div className="product-card__price mb-8">
//                                                 <span className="text-heading text-md fw-semibold ">
//                                                     $14.99{" "}
//                                                     <span className="text-gray-500 fw-normal">/Qty</span>{" "}
//                                                 </span>
//                                                 <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
//                                                     $28.99
//                                                 </span>
//                                             </div>
//                                             <div className="flex-align gap-6">
//                                                 <span className="text-xs fw-bold text-gray-600">4.8</span>
//                                                 <span className="text-15 fw-bold text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-xs fw-bold text-gray-600">(17k)</span>
//                                             </div>
//                                             <Link
//                                                 to="/cart"
//                                                 className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
//                                             >
//                                                 Add To Cart <i className="ph ph-shopping-cart" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
//                                 <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                                     <Link
//                                         to="/product-details"
//                                         className="product-card__thumb flex-center"
//                                     >
//                                         <img src="assets/images/thumbs/product-img11.png" alt="" />
//                                     </Link>
//                                     <div className="product-card__content p-sm-2">
//                                         <h6 className="title text-lg fw-semibold mt-12 mb-8">
//                                             <Link to="/product-details" className="link text-line-2">
//                                                 Lucerne Yogurt, Lowfat, Strawberry
//                                             </Link>
//                                         </h6>
//                                         <div className="flex-align gap-4">
//                                             <span className="text-main-600 text-md d-flex">
//                                                 <i className="ph-fill ph-storefront" />
//                                             </span>
//                                             <span className="text-gray-500 text-xs">
//                                                 By Lucky Supermarket
//                                             </span>
//                                         </div>
//                                         <div className="product-card__content mt-12">
//                                             <div className="product-card__price mb-8">
//                                                 <span className="text-heading text-md fw-semibold ">
//                                                     $14.99{" "}
//                                                     <span className="text-gray-500 fw-normal">/Qty</span>{" "}
//                                                 </span>
//                                                 <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
//                                                     $28.99
//                                                 </span>
//                                             </div>
//                                             <div className="flex-align gap-6">
//                                                 <span className="text-xs fw-bold text-gray-600">4.8</span>
//                                                 <span className="text-15 fw-bold text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-xs fw-bold text-gray-600">(17k)</span>
//                                             </div>
//                                             <Link
//                                                 to="/cart"
//                                                 className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
//                                             >
//                                                 Add To Cart <i className="ph ph-shopping-cart" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
//                                 <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                                     <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
//                                         Sale 50%
//                                     </span>
//                                     <Link
//                                         to="/product-details"
//                                         className="product-card__thumb flex-center"
//                                     >
//                                         <img src="assets/images/thumbs/product-img12.png" alt="" />
//                                     </Link>
//                                     <div className="product-card__content p-sm-2">
//                                         <h6 className="title text-lg fw-semibold mt-12 mb-8">
//                                             <Link to="/product-details" className="link text-line-2">
//                                                 Nature Valley Whole Grain Oats and Honey Protein
//                                             </Link>
//                                         </h6>
//                                         <div className="flex-align gap-4">
//                                             <span className="text-main-600 text-md d-flex">
//                                                 <i className="ph-fill ph-storefront" />
//                                             </span>
//                                             <span className="text-gray-500 text-xs">
//                                                 By Lucky Supermarket
//                                             </span>
//                                         </div>
//                                         <div className="product-card__content mt-12">
//                                             <div className="product-card__price mb-8">
//                                                 <span className="text-heading text-md fw-semibold ">
//                                                     $14.99{" "}
//                                                     <span className="text-gray-500 fw-normal">/Qty</span>{" "}
//                                                 </span>
//                                                 <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
//                                                     $28.99
//                                                 </span>
//                                             </div>
//                                             <div className="flex-align gap-6">
//                                                 <span className="text-xs fw-bold text-gray-600">4.8</span>
//                                                 <span className="text-15 fw-bold text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-xs fw-bold text-gray-600">(17k)</span>
//                                             </div>
//                                             <Link
//                                                 to="/cart"
//                                                 className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
//                                             >
//                                                 Add To Cart <i className="ph ph-shopping-cart" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
//                                 <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                                     <Link
//                                         to="/product-details"
//                                         className="product-card__thumb flex-center"
//                                     >
//                                         <img src="assets/images/thumbs/product-img13.png" alt="" />
//                                     </Link>
//                                     <div className="product-card__content p-sm-2">
//                                         <h6 className="title text-lg fw-semibold mt-12 mb-8">
//                                             <Link to="/product-details" className="link text-line-2">
//                                                 C-500 Antioxidant Protect Dietary Supplement
//                                             </Link>
//                                         </h6>
//                                         <div className="flex-align gap-4">
//                                             <span className="text-main-600 text-md d-flex">
//                                                 <i className="ph-fill ph-storefront" />
//                                             </span>
//                                             <span className="text-gray-500 text-xs">
//                                                 By Lucky Supermarket
//                                             </span>
//                                         </div>
//                                         <div className="product-card__content mt-12">
//                                             <div className="product-card__price mb-8">
//                                                 <span className="text-heading text-md fw-semibold ">
//                                                     $14.99{" "}
//                                                     <span className="text-gray-500 fw-normal">/Qty</span>{" "}
//                                                 </span>
//                                                 <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
//                                                     $28.99
//                                                 </span>
//                                             </div>
//                                             <div className="flex-align gap-6">
//                                                 <span className="text-xs fw-bold text-gray-600">4.8</span>
//                                                 <span className="text-15 fw-bold text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-xs fw-bold text-gray-600">(17k)</span>
//                                             </div>
//                                             <Link
//                                                 to="/cart"
//                                                 className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
//                                             >
//                                                 Add To Cart <i className="ph ph-shopping-cart" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
//                                 <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                                     <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
//                                         Sale 50%
//                                     </span>
//                                     <Link
//                                         to="/product-details"
//                                         className="product-card__thumb flex-center"
//                                     >
//                                         <img src="assets/images/thumbs/product-img14.png" alt="" />
//                                     </Link>
//                                     <div className="product-card__content p-sm-2">
//                                         <h6 className="title text-lg fw-semibold mt-12 mb-8">
//                                             <Link to="/product-details" className="link text-line-2">
//                                                 C-500 Antioxidant Protect Dietary Supplement
//                                             </Link>
//                                         </h6>
//                                         <div className="flex-align gap-4">
//                                             <span className="text-main-600 text-md d-flex">
//                                                 <i className="ph-fill ph-storefront" />
//                                             </span>
//                                             <span className="text-gray-500 text-xs">
//                                                 By Lucky Supermarket
//                                             </span>
//                                         </div>
//                                         <div className="product-card__content mt-12">
//                                             <div className="product-card__price mb-8">
//                                                 <span className="text-heading text-md fw-semibold ">
//                                                     $14.99{" "}
//                                                     <span className="text-gray-500 fw-normal">/Qty</span>{" "}
//                                                 </span>
//                                                 <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
//                                                     $28.99
//                                                 </span>
//                                             </div>
//                                             <div className="flex-align gap-6">
//                                                 <span className="text-xs fw-bold text-gray-600">4.8</span>
//                                                 <span className="text-15 fw-bold text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-xs fw-bold text-gray-600">(17k)</span>
//                                             </div>
//                                             <Link
//                                                 to="/cart"
//                                                 className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
//                                             >
//                                                 Add To Cart <i className="ph ph-shopping-cart" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
//                                 <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                                     <span className="product-card__badge bg-warning-600 px-8 py-4 text-sm text-white">
//                                         New
//                                     </span>
//                                     <Link
//                                         to="/product-details"
//                                         className="product-card__thumb flex-center"
//                                     >
//                                         <img src="assets/images/thumbs/product-img15.png" alt="" />
//                                     </Link>
//                                     <div className="product-card__content p-sm-2">
//                                         <h6 className="title text-lg fw-semibold mt-12 mb-8">
//                                             <Link to="/product-details" className="link text-line-2">
//                                                 C-500 Antioxidant Protect Dietary Supplement
//                                             </Link>
//                                         </h6>
//                                         <div className="flex-align gap-4">
//                                             <span className="text-main-600 text-md d-flex">
//                                                 <i className="ph-fill ph-storefront" />
//                                             </span>
//                                             <span className="text-gray-500 text-xs">
//                                                 By Lucky Supermarket
//                                             </span>
//                                         </div>
//                                         <div className="product-card__content mt-12">
//                                             <div className="product-card__price mb-8">
//                                                 <span className="text-heading text-md fw-semibold ">
//                                                     $14.99{" "}
//                                                     <span className="text-gray-500 fw-normal">/Qty</span>{" "}
//                                                 </span>
//                                                 <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
//                                                     $28.99
//                                                 </span>
//                                             </div>
//                                             <div className="flex-align gap-6">
//                                                 <span className="text-xs fw-bold text-gray-600">4.8</span>
//                                                 <span className="text-15 fw-bold text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-xs fw-bold text-gray-600">(17k)</span>
//                                             </div>
//                                             <Link
//                                                 to="/cart"
//                                                 className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
//                                             >
//                                                 Add To Cart <i className="ph ph-shopping-cart" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
//                                 <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                                     <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
//                                         Sale 50%
//                                     </span>
//                                     <Link
//                                         to="/product-details"
//                                         className="product-card__thumb flex-center"
//                                     >
//                                         <img src="assets/images/thumbs/product-img16.png" alt="" />
//                                     </Link>
//                                     <div className="product-card__content p-sm-2">
//                                         <h6 className="title text-lg fw-semibold mt-12 mb-8">
//                                             <Link to="/product-details" className="link text-line-2">
//                                                 Good &amp; Gather Farmed Atlantic Salmon
//                                             </Link>
//                                         </h6>
//                                         <div className="flex-align gap-4">
//                                             <span className="text-main-600 text-md d-flex">
//                                                 <i className="ph-fill ph-storefront" />
//                                             </span>
//                                             <span className="text-gray-500 text-xs">
//                                                 By Lucky Supermarket
//                                             </span>
//                                         </div>
//                                         <div className="product-card__content mt-12">
//                                             <div className="product-card__price mb-8">
//                                                 <span className="text-heading text-md fw-semibold ">
//                                                     $14.99{" "}
//                                                     <span className="text-gray-500 fw-normal">/Qty</span>{" "}
//                                                 </span>
//                                                 <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
//                                                     $28.99
//                                                 </span>
//                                             </div>
//                                             <div className="flex-align gap-6">
//                                                 <span className="text-xs fw-bold text-gray-600">4.8</span>
//                                                 <span className="text-15 fw-bold text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-xs fw-bold text-gray-600">(17k)</span>
//                                             </div>
//                                             <Link
//                                                 to="/cart"
//                                                 className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
//                                             >
//                                                 Add To Cart <i className="ph ph-shopping-cart" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
//                                 <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                                     <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
//                                         Sale 50%
//                                     </span>
//                                     <Link
//                                         to="/product-details"
//                                         className="product-card__thumb flex-center"
//                                     >
//                                         <img src="assets/images/thumbs/product-img17.png" alt="" />
//                                     </Link>
//                                     <div className="product-card__content p-sm-2">
//                                         <h6 className="title text-lg fw-semibold mt-12 mb-8">
//                                             <Link to="/product-details" className="link text-line-2">
//                                                 Market Pantry 41/50 Raw Tail-Off Large Raw Shrimp
//                                             </Link>
//                                         </h6>
//                                         <div className="flex-align gap-4">
//                                             <span className="text-main-600 text-md d-flex">
//                                                 <i className="ph-fill ph-storefront" />
//                                             </span>
//                                             <span className="text-gray-500 text-xs">
//                                                 By Lucky Supermarket
//                                             </span>
//                                         </div>
//                                         <div className="product-card__content mt-12">
//                                             <div className="product-card__price mb-8">
//                                                 <span className="text-heading text-md fw-semibold ">
//                                                     $14.99{" "}
//                                                     <span className="text-gray-500 fw-normal">/Qty</span>{" "}
//                                                 </span>
//                                                 <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
//                                                     $28.99
//                                                 </span>
//                                             </div>
//                                             <div className="flex-align gap-6">
//                                                 <span className="text-xs fw-bold text-gray-600">4.8</span>
//                                                 <span className="text-15 fw-bold text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-xs fw-bold text-gray-600">(17k)</span>
//                                             </div>
//                                             <Link
//                                                 to="/cart"
//                                                 className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
//                                             >
//                                                 Add To Cart <i className="ph ph-shopping-cart" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
//                                 <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                                     <span className="product-card__badge bg-warning-600 px-8 py-4 text-sm text-white">
//                                         New
//                                     </span>
//                                     <Link
//                                         to="/product-details"
//                                         className="product-card__thumb flex-center"
//                                     >
//                                         <img src="assets/images/thumbs/product-img18.png" alt="" />
//                                     </Link>
//                                     <div className="product-card__content p-sm-2">
//                                         <h6 className="title text-lg fw-semibold mt-12 mb-8">
//                                             <Link to="/product-details" className="link text-line-2">
//                                                 Tropicana 100% Juice, Orange, No Pulp
//                                             </Link>
//                                         </h6>
//                                         <div className="flex-align gap-4">
//                                             <span className="text-main-600 text-md d-flex">
//                                                 <i className="ph-fill ph-storefront" />
//                                             </span>
//                                             <span className="text-gray-500 text-xs">
//                                                 By Lucky Supermarket
//                                             </span>
//                                         </div>
//                                         <div className="product-card__content mt-12">
//                                             <div className="product-card__price mb-8">
//                                                 <span className="text-heading text-md fw-semibold ">
//                                                     $14.99{" "}
//                                                     <span className="text-gray-500 fw-normal">/Qty</span>{" "}
//                                                 </span>
//                                                 <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
//                                                     $28.99
//                                                 </span>
//                                             </div>
//                                             <div className="flex-align gap-6">
//                                                 <span className="text-xs fw-bold text-gray-600">4.8</span>
//                                                 <span className="text-15 fw-bold text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-xs fw-bold text-gray-600">(17k)</span>
//                                             </div>
//                                             <Link
//                                                 to="/cart"
//                                                 className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
//                                             >
//                                                 Add To Cart <i className="ph ph-shopping-cart" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div
//                         className="tab-pane fade"
//                         id="pills-organic"
//                         role="tabpanel"
//                         aria-labelledby="pills-organic-tab"
//                         tabIndex={0}
//                     >
//                         <div className="row g-12">
//                             <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
//                                 <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                                     <Link
//                                         to="/product-details"
//                                         className="product-card__thumb flex-center"
//                                     >
//                                         <img src="assets/images/thumbs/product-img7.png" alt="" />
//                                     </Link>
//                                     <div className="product-card__content p-sm-2">
//                                         <h6 className="title text-lg fw-semibold mt-12 mb-8">
//                                             <Link to="/product-details" className="link text-line-2">
//                                                 C-500 Antioxidant Protect Dietary Supplement
//                                             </Link>
//                                         </h6>
//                                         <div className="flex-align gap-4">
//                                             <span className="text-main-600 text-md d-flex">
//                                                 <i className="ph-fill ph-storefront" />
//                                             </span>
//                                             <span className="text-gray-500 text-xs">
//                                                 By Lucky Supermarket
//                                             </span>
//                                         </div>
//                                         <div className="product-card__content mt-12">
//                                             <div className="product-card__price mb-8">
//                                                 <span className="text-heading text-md fw-semibold ">
//                                                     $14.99{" "}
//                                                     <span className="text-gray-500 fw-normal">/Qty</span>{" "}
//                                                 </span>
//                                                 <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
//                                                     $28.99
//                                                 </span>
//                                             </div>
//                                             <div className="flex-align gap-6">
//                                                 <span className="text-xs fw-bold text-gray-600">4.8</span>
//                                                 <span className="text-15 fw-bold text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-xs fw-bold text-gray-600">(17k)</span>
//                                             </div>
//                                             <Link
//                                                 to="/cart"
//                                                 className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
//                                             >
//                                                 Add To Cart <i className="ph ph-shopping-cart" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
//                                 <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                                     <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
//                                         Sale 50%
//                                     </span>
//                                     <Link
//                                         to="/product-details"
//                                         className="product-card__thumb flex-center"
//                                     >
//                                         <img src="assets/images/thumbs/product-img8.png" alt="" />
//                                     </Link>
//                                     <div className="product-card__content p-sm-2">
//                                         <h6 className="title text-lg fw-semibold mt-12 mb-8">
//                                             <Link to="/product-details" className="link text-line-2">
//                                                 Marcel's Modern Pantry Almond Unsweetened
//                                             </Link>
//                                         </h6>
//                                         <div className="flex-align gap-4">
//                                             <span className="text-main-600 text-md d-flex">
//                                                 <i className="ph-fill ph-storefront" />
//                                             </span>
//                                             <span className="text-gray-500 text-xs">
//                                                 By Lucky Supermarket
//                                             </span>
//                                         </div>
//                                         <div className="product-card__content mt-12">
//                                             <div className="product-card__price mb-8">
//                                                 <span className="text-heading text-md fw-semibold ">
//                                                     $14.99{" "}
//                                                     <span className="text-gray-500 fw-normal">/Qty</span>{" "}
//                                                 </span>
//                                                 <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
//                                                     $28.99
//                                                 </span>
//                                             </div>
//                                             <div className="flex-align gap-6">
//                                                 <span className="text-xs fw-bold text-gray-600">4.8</span>
//                                                 <span className="text-15 fw-bold text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-xs fw-bold text-gray-600">(17k)</span>
//                                             </div>
//                                             <Link
//                                                 to="/cart"
//                                                 className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
//                                             >
//                                                 Add To Cart <i className="ph ph-shopping-cart" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
//                                 <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                                     <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
//                                         Sale 50%
//                                     </span>
//                                     <Link
//                                         to="/product-details"
//                                         className="product-card__thumb flex-center"
//                                     >
//                                         <img src="assets/images/thumbs/product-img9.png" alt="" />
//                                     </Link>
//                                     <div className="product-card__content p-sm-2">
//                                         <h6 className="title text-lg fw-semibold mt-12 mb-8">
//                                             <Link to="/product-details" className="link text-line-2">
//                                                 O Organics Milk, Whole, Vitamin D
//                                             </Link>
//                                         </h6>
//                                         <div className="flex-align gap-4">
//                                             <span className="text-main-600 text-md d-flex">
//                                                 <i className="ph-fill ph-storefront" />
//                                             </span>
//                                             <span className="text-gray-500 text-xs">
//                                                 By Lucky Supermarket
//                                             </span>
//                                         </div>
//                                         <div className="product-card__content mt-12">
//                                             <div className="product-card__price mb-8">
//                                                 <span className="text-heading text-md fw-semibold ">
//                                                     $14.99{" "}
//                                                     <span className="text-gray-500 fw-normal">/Qty</span>{" "}
//                                                 </span>
//                                                 <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
//                                                     $28.99
//                                                 </span>
//                                             </div>
//                                             <div className="flex-align gap-6">
//                                                 <span className="text-xs fw-bold text-gray-600">4.8</span>
//                                                 <span className="text-15 fw-bold text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-xs fw-bold text-gray-600">(17k)</span>
//                                             </div>
//                                             <Link
//                                                 to="/cart"
//                                                 className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
//                                             >
//                                                 Add To Cart <i className="ph ph-shopping-cart" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
//                                 <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                                     <span className="product-card__badge bg-info-600 px-8 py-4 text-sm text-white">
//                                         Best Sale
//                                     </span>
//                                     <Link
//                                         to="/product-details"
//                                         className="product-card__thumb flex-center"
//                                     >
//                                         <img src="assets/images/thumbs/product-img10.png" alt="" />
//                                     </Link>
//                                     <div className="product-card__content p-sm-2">
//                                         <h6 className="title text-lg fw-semibold mt-12 mb-8">
//                                             <Link to="/product-details" className="link text-line-2">
//                                                 Whole Grains and Seeds Organic Bread
//                                             </Link>
//                                         </h6>
//                                         <div className="flex-align gap-4">
//                                             <span className="text-main-600 text-md d-flex">
//                                                 <i className="ph-fill ph-storefront" />
//                                             </span>
//                                             <span className="text-gray-500 text-xs">
//                                                 By Lucky Supermarket
//                                             </span>
//                                         </div>
//                                         <div className="product-card__content mt-12">
//                                             <div className="product-card__price mb-8">
//                                                 <span className="text-heading text-md fw-semibold ">
//                                                     $14.99{" "}
//                                                     <span className="text-gray-500 fw-normal">/Qty</span>{" "}
//                                                 </span>
//                                                 <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
//                                                     $28.99
//                                                 </span>
//                                             </div>
//                                             <div className="flex-align gap-6">
//                                                 <span className="text-xs fw-bold text-gray-600">4.8</span>
//                                                 <span className="text-15 fw-bold text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-xs fw-bold text-gray-600">(17k)</span>
//                                             </div>
//                                             <Link
//                                                 to="/cart"
//                                                 className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
//                                             >
//                                                 Add To Cart <i className="ph ph-shopping-cart" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
//                                 <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                                     <Link
//                                         to="/product-details"
//                                         className="product-card__thumb flex-center"
//                                     >
//                                         <img src="assets/images/thumbs/product-img11.png" alt="" />
//                                     </Link>
//                                     <div className="product-card__content p-sm-2">
//                                         <h6 className="title text-lg fw-semibold mt-12 mb-8">
//                                             <Link to="/product-details" className="link text-line-2">
//                                                 Lucerne Yogurt, Lowfat, Strawberry
//                                             </Link>
//                                         </h6>
//                                         <div className="flex-align gap-4">
//                                             <span className="text-main-600 text-md d-flex">
//                                                 <i className="ph-fill ph-storefront" />
//                                             </span>
//                                             <span className="text-gray-500 text-xs">
//                                                 By Lucky Supermarket
//                                             </span>
//                                         </div>
//                                         <div className="product-card__content mt-12">
//                                             <div className="product-card__price mb-8">
//                                                 <span className="text-heading text-md fw-semibold ">
//                                                     $14.99{" "}
//                                                     <span className="text-gray-500 fw-normal">/Qty</span>{" "}
//                                                 </span>
//                                                 <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
//                                                     $28.99
//                                                 </span>
//                                             </div>
//                                             <div className="flex-align gap-6">
//                                                 <span className="text-xs fw-bold text-gray-600">4.8</span>
//                                                 <span className="text-15 fw-bold text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-xs fw-bold text-gray-600">(17k)</span>
//                                             </div>
//                                             <Link
//                                                 to="/cart"
//                                                 className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
//                                             >
//                                                 Add To Cart <i className="ph ph-shopping-cart" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
//                                 <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                                     <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
//                                         Sale 50%
//                                     </span>
//                                     <Link
//                                         to="/product-details"
//                                         className="product-card__thumb flex-center"
//                                     >
//                                         <img src="assets/images/thumbs/product-img12.png" alt="" />
//                                     </Link>
//                                     <div className="product-card__content p-sm-2">
//                                         <h6 className="title text-lg fw-semibold mt-12 mb-8">
//                                             <Link to="/product-details" className="link text-line-2">
//                                                 Nature Valley Whole Grain Oats and Honey Protein
//                                             </Link>
//                                         </h6>
//                                         <div className="flex-align gap-4">
//                                             <span className="text-main-600 text-md d-flex">
//                                                 <i className="ph-fill ph-storefront" />
//                                             </span>
//                                             <span className="text-gray-500 text-xs">
//                                                 By Lucky Supermarket
//                                             </span>
//                                         </div>
//                                         <div className="product-card__content mt-12">
//                                             <div className="product-card__price mb-8">
//                                                 <span className="text-heading text-md fw-semibold ">
//                                                     $14.99{" "}
//                                                     <span className="text-gray-500 fw-normal">/Qty</span>{" "}
//                                                 </span>
//                                                 <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
//                                                     $28.99
//                                                 </span>
//                                             </div>
//                                             <div className="flex-align gap-6">
//                                                 <span className="text-xs fw-bold text-gray-600">4.8</span>
//                                                 <span className="text-15 fw-bold text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-xs fw-bold text-gray-600">(17k)</span>
//                                             </div>
//                                             <Link
//                                                 to="/cart"
//                                                 className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
//                                             >
//                                                 Add To Cart <i className="ph ph-shopping-cart" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
//                                 <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                                     <Link
//                                         to="/product-details"
//                                         className="product-card__thumb flex-center"
//                                     >
//                                         <img src="assets/images/thumbs/product-img13.png" alt="" />
//                                     </Link>
//                                     <div className="product-card__content p-sm-2">
//                                         <h6 className="title text-lg fw-semibold mt-12 mb-8">
//                                             <Link to="/product-details" className="link text-line-2">
//                                                 C-500 Antioxidant Protect Dietary Supplement
//                                             </Link>
//                                         </h6>
//                                         <div className="flex-align gap-4">
//                                             <span className="text-main-600 text-md d-flex">
//                                                 <i className="ph-fill ph-storefront" />
//                                             </span>
//                                             <span className="text-gray-500 text-xs">
//                                                 By Lucky Supermarket
//                                             </span>
//                                         </div>
//                                         <div className="product-card__content mt-12">
//                                             <div className="product-card__price mb-8">
//                                                 <span className="text-heading text-md fw-semibold ">
//                                                     $14.99{" "}
//                                                     <span className="text-gray-500 fw-normal">/Qty</span>{" "}
//                                                 </span>
//                                                 <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
//                                                     $28.99
//                                                 </span>
//                                             </div>
//                                             <div className="flex-align gap-6">
//                                                 <span className="text-xs fw-bold text-gray-600">4.8</span>
//                                                 <span className="text-15 fw-bold text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-xs fw-bold text-gray-600">(17k)</span>
//                                             </div>
//                                             <Link
//                                                 to="/cart"
//                                                 className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
//                                             >
//                                                 Add To Cart <i className="ph ph-shopping-cart" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
//                                 <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                                     <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
//                                         Sale 50%
//                                     </span>
//                                     <Link
//                                         to="/product-details"
//                                         className="product-card__thumb flex-center"
//                                     >
//                                         <img src="assets/images/thumbs/product-img14.png" alt="" />
//                                     </Link>
//                                     <div className="product-card__content p-sm-2">
//                                         <h6 className="title text-lg fw-semibold mt-12 mb-8">
//                                             <Link to="/product-details" className="link text-line-2">
//                                                 C-500 Antioxidant Protect Dietary Supplement
//                                             </Link>
//                                         </h6>
//                                         <div className="flex-align gap-4">
//                                             <span className="text-main-600 text-md d-flex">
//                                                 <i className="ph-fill ph-storefront" />
//                                             </span>
//                                             <span className="text-gray-500 text-xs">
//                                                 By Lucky Supermarket
//                                             </span>
//                                         </div>
//                                         <div className="product-card__content mt-12">
//                                             <div className="product-card__price mb-8">
//                                                 <span className="text-heading text-md fw-semibold ">
//                                                     $14.99{" "}
//                                                     <span className="text-gray-500 fw-normal">/Qty</span>{" "}
//                                                 </span>
//                                                 <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
//                                                     $28.99
//                                                 </span>
//                                             </div>
//                                             <div className="flex-align gap-6">
//                                                 <span className="text-xs fw-bold text-gray-600">4.8</span>
//                                                 <span className="text-15 fw-bold text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-xs fw-bold text-gray-600">(17k)</span>
//                                             </div>
//                                             <Link
//                                                 to="/cart"
//                                                 className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
//                                             >
//                                                 Add To Cart <i className="ph ph-shopping-cart" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
//                                 <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                                     <span className="product-card__badge bg-warning-600 px-8 py-4 text-sm text-white">
//                                         New
//                                     </span>
//                                     <Link
//                                         to="/product-details"
//                                         className="product-card__thumb flex-center"
//                                     >
//                                         <img src="assets/images/thumbs/product-img15.png" alt="" />
//                                     </Link>
//                                     <div className="product-card__content p-sm-2">
//                                         <h6 className="title text-lg fw-semibold mt-12 mb-8">
//                                             <Link to="/product-details" className="link text-line-2">
//                                                 C-500 Antioxidant Protect Dietary Supplement
//                                             </Link>
//                                         </h6>
//                                         <div className="flex-align gap-4">
//                                             <span className="text-main-600 text-md d-flex">
//                                                 <i className="ph-fill ph-storefront" />
//                                             </span>
//                                             <span className="text-gray-500 text-xs">
//                                                 By Lucky Supermarket
//                                             </span>
//                                         </div>
//                                         <div className="product-card__content mt-12">
//                                             <div className="product-card__price mb-8">
//                                                 <span className="text-heading text-md fw-semibold ">
//                                                     $14.99{" "}
//                                                     <span className="text-gray-500 fw-normal">/Qty</span>{" "}
//                                                 </span>
//                                                 <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
//                                                     $28.99
//                                                 </span>
//                                             </div>
//                                             <div className="flex-align gap-6">
//                                                 <span className="text-xs fw-bold text-gray-600">4.8</span>
//                                                 <span className="text-15 fw-bold text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-xs fw-bold text-gray-600">(17k)</span>
//                                             </div>
//                                             <Link
//                                                 to="/cart"
//                                                 className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
//                                             >
//                                                 Add To Cart <i className="ph ph-shopping-cart" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
//                                 <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                                     <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
//                                         Sale 50%
//                                     </span>
//                                     <Link
//                                         to="/product-details"
//                                         className="product-card__thumb flex-center"
//                                     >
//                                         <img src="assets/images/thumbs/product-img16.png" alt="" />
//                                     </Link>
//                                     <div className="product-card__content p-sm-2">
//                                         <h6 className="title text-lg fw-semibold mt-12 mb-8">
//                                             <Link to="/product-details" className="link text-line-2">
//                                                 Good &amp; Gather Farmed Atlantic Salmon
//                                             </Link>
//                                         </h6>
//                                         <div className="flex-align gap-4">
//                                             <span className="text-main-600 text-md d-flex">
//                                                 <i className="ph-fill ph-storefront" />
//                                             </span>
//                                             <span className="text-gray-500 text-xs">
//                                                 By Lucky Supermarket
//                                             </span>
//                                         </div>
//                                         <div className="product-card__content mt-12">
//                                             <div className="product-card__price mb-8">
//                                                 <span className="text-heading text-md fw-semibold ">
//                                                     $14.99{" "}
//                                                     <span className="text-gray-500 fw-normal">/Qty</span>{" "}
//                                                 </span>
//                                                 <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
//                                                     $28.99
//                                                 </span>
//                                             </div>
//                                             <div className="flex-align gap-6">
//                                                 <span className="text-xs fw-bold text-gray-600">4.8</span>
//                                                 <span className="text-15 fw-bold text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-xs fw-bold text-gray-600">(17k)</span>
//                                             </div>
//                                             <Link
//                                                 to="/cart"
//                                                 className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
//                                             >
//                                                 Add To Cart <i className="ph ph-shopping-cart" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
//                                 <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                                     <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white">
//                                         Sale 50%
//                                     </span>
//                                     <Link
//                                         to="/product-details"
//                                         className="product-card__thumb flex-center"
//                                     >
//                                         <img src="assets/images/thumbs/product-img17.png" alt="" />
//                                     </Link>
//                                     <div className="product-card__content p-sm-2">
//                                         <h6 className="title text-lg fw-semibold mt-12 mb-8">
//                                             <Link to="/product-details" className="link text-line-2">
//                                                 Market Pantry 41/50 Raw Tail-Off Large Raw Shrimp
//                                             </Link>
//                                         </h6>
//                                         <div className="flex-align gap-4">
//                                             <span className="text-main-600 text-md d-flex">
//                                                 <i className="ph-fill ph-storefront" />
//                                             </span>
//                                             <span className="text-gray-500 text-xs">
//                                                 By Lucky Supermarket
//                                             </span>
//                                         </div>
//                                         <div className="product-card__content mt-12">
//                                             <div className="product-card__price mb-8">
//                                                 <span className="text-heading text-md fw-semibold ">
//                                                     $14.99{" "}
//                                                     <span className="text-gray-500 fw-normal">/Qty</span>{" "}
//                                                 </span>
//                                                 <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
//                                                     $28.99
//                                                 </span>
//                                             </div>
//                                             <div className="flex-align gap-6">
//                                                 <span className="text-xs fw-bold text-gray-600">4.8</span>
//                                                 <span className="text-15 fw-bold text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-xs fw-bold text-gray-600">(17k)</span>
//                                             </div>
//                                             <Link
//                                                 to="/cart"
//                                                 className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
//                                             >
//                                                 Add To Cart <i className="ph ph-shopping-cart" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xxl-2 col-lg-3 col-sm-4 col-6">
//                                 <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
//                                     <span className="product-card__badge bg-warning-600 px-8 py-4 text-sm text-white">
//                                         New
//                                     </span>
//                                     <Link
//                                         to="/product-details"
//                                         className="product-card__thumb flex-center"
//                                     >
//                                         <img src="assets/images/thumbs/product-img18.png" alt="" />
//                                     </Link>
//                                     <div className="product-card__content p-sm-2">
//                                         <h6 className="title text-lg fw-semibold mt-12 mb-8">
//                                             <Link to="/product-details" className="link text-line-2">
//                                                 Tropicana 100% Juice, Orange, No Pulp
//                                             </Link>
//                                         </h6>
//                                         <div className="flex-align gap-4">
//                                             <span className="text-main-600 text-md d-flex">
//                                                 <i className="ph-fill ph-storefront" />
//                                             </span>
//                                             <span className="text-gray-500 text-xs">
//                                                 By Lucky Supermarket
//                                             </span>
//                                         </div>
//                                         <div className="product-card__content mt-12">
//                                             <div className="product-card__price mb-8">
//                                                 <span className="text-heading text-md fw-semibold ">
//                                                     $14.99{" "}
//                                                     <span className="text-gray-500 fw-normal">/Qty</span>{" "}
//                                                 </span>
//                                                 <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
//                                                     $28.99
//                                                 </span>
//                                             </div>
//                                             <div className="flex-align gap-6">
//                                                 <span className="text-xs fw-bold text-gray-600">4.8</span>
//                                                 <span className="text-15 fw-bold text-warning-600 d-flex">
//                                                     <i className="ph-fill ph-star" />
//                                                 </span>
//                                                 <span className="text-xs fw-bold text-gray-600">(17k)</span>
//                                             </div>
//                                             <Link
//                                                 to="/cart"
//                                                 className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center"
//                                             >
//                                                 Add To Cart <i className="ph ph-shopping-cart" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import axios from 'axios';

const RecommendedOne = () => {
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
                        <h5 className="mb-0">Recommended Products</h5>
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

                            const shortDescription = discount.description.length > 25
                                ? discount.description.substring(0, 25) + "..."
                                : discount.description;

                            let products = discount.products.join(", ");
                            products = products.length > 20
                                ? products.substring(0, 20) + "..."
                                : products;

                            return (
                                <div key={index}>
                                    <div className="product-card px-4 py-4 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                        <Link
                                            to="/product-details"
                                            key={index}
                                            state={{ product: discount }}
                                            className="product-card__thumb flex-center"
                                        >
                                            {/* <img src="assets/images/thumbs/product-img20.png" alt="" /> */}
                                            <img src={discount.images[0]} alt="Image" style={{ width: '142px', height: '160px', objectFit: 'cover' }} />

                                        </Link>
                                        
                                        <div style={{ width: '100%' }}>
                                            <hr style={{ height: '1px', backgroundColor: 'gray', border: 'none', width: '100%', margin: '0' }} />
                                        </div>


                                        <div className="product-card__content mt-12">
                                            <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                                <Link
                                                    to="/product-details-coupon"
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
                                                <span className="text-gray-900 text-xs">
                                                    {discount.company}
                                                </span>
                                            </div>

                                            <span className="text-gray-500 text-xs mt-5">
                                                {isDescriptionExpanded ? discount.description : shortDescription}
                                                {discount.description.length > 15 && (
                                                    <button 
                                                        onClick={toggleDescription} 
                                                        className="text-main-600 text-xs fw-bold ml-2 border-none bg-transparent cursor-pointer"
                                                    >
                                                        {isDescriptionExpanded ? " less" : " more"}
                                                    </button>
                                                )}
                                            </span>

                                            <div className="flex-between gap-8 mt-16 flex-wrap">
                                                <div className="product-card__price">
                                                    <span className="text-heading text-xl fw-bold">
                                                        {discount.discount}% Off
                                                    </span>
                                                </div>
                                                {/* <Link
                                                    to="/cart"
                                                    className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8"
                                                >
                                                    Add <i className="ph ph-shopping-cart" />
                                                </Link> */}
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

export default RecommendedOne;

// export default RecommendedOne