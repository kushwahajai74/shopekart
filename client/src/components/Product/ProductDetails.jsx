import React, { useEffect } from "react";
// import Carousel from "react-material-ui-carousel";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./ProductDetails.css";
import { useDispatch, useSelector } from "react-redux";
import {
  clearErrors,
  getProductDetails,
} from "../../features/products/productDetailsSlice";
import { useParams } from "react-router-dom";
import ReactStars from "react-stars";
import ReviewCard from "./ReviewCard";
import Loader from "../Loader/Loader";
import { toast } from "react-hot-toast";
import MetaData from "../layouts/MetaData";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { product, isLoading, error } = useSelector(
    (store) => store.productDetails
  );
  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, error]);

  const options = {
    edit: false,
    half: true,
    count: 5,
    value: product.ratings,
    // color2: "tomato",
    size: window.innerWidth < 600 ? 22 : 20,
  };
  const settings = {
    centerMode: true,
    showThumbs: false,
    showArrows: true,
    // width: 300,
    centerSlidePercentage: 100,
    // autoPlay: true,
    interval: 7000,
    // infiniteLoop: true,
    showStatus: false,
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <MetaData title={`${product.name} -- ShopEkart`} />
          <div className="ProductDetails">
            <div>
              <Carousel {...settings}>
                {product?.images?.map((item, i) => (
                  <img
                    className="CarouselImage"
                    key={i}
                    src={item.url}
                    alt={`${i} Slide`}
                  />
                ))}
              </Carousel>
            </div>
            <div>
              <div className="detailsBlock-1">
                <h2>{product.name}</h2>
                <p>Product #{product._id}</p>
              </div>
              <div className="detailsBlock-2">
                <ReactStars {...options} />
                <span>({product.numberOfReviews} Reviews)</span>
              </div>
              <div className="detailsBlock-3">
                <h1>{`₹${product.price}`}</h1>
                <div className="detailsBlock-3-1">
                  <div className="detailsBlock-3-1-1">
                    <button>-</button>
                    <input value="2" readOnly type="number" />
                    <button>+</button>
                  </div>
                  <button disabled={product.Stock < 1 ? true : false}>
                    Add to Cart
                  </button>
                </div>

                <p>
                  Status:
                  <b className={product.Stock < 1 ? "redColor" : "greenColor"}>
                    {product.Stock < 1 ? "OutOfStock" : "InStock"}
                  </b>
                </p>
              </div>
              <div className="detailsBlock-4">
                Description : <p>{product.description}</p>
              </div>

              <button className="submitReview">Submit Review</button>
            </div>
          </div>
          <h3 className="reviewsHeading">REVIEWS</h3>
          {product.reviews && product.reviews[0] ? (
            <div className="reviews">
              {product.reviews &&
                product.reviews.map((review) => (
                  <ReviewCard key={review._id} review={review} />
                ))}
            </div>
          ) : (
            <p className="noReviews">No Reviews Yet</p>
          )}
        </>
      )}
    </>
  );
};

export default ProductDetails;
