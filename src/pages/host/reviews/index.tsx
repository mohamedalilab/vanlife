import React, { type JSX } from "react";
import type { Review } from "../../../types/types";
import { FaStar } from "react-icons/fa";
import Loading from "../../../components/loading";
import "./reviews.scss";

export default function Reviews(): JSX.Element {
  const [reviews, setReviews] = React.useState<Review[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("/api/host/reviews")
      .then((res) => res.json())
      .then((data) => {
        const reviewsData = data.reviews || [];
        // Sort by date (newest first) - simple string comparison for now
        reviewsData.sort((a: Review, b: Review) => {
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        });
        setReviews(reviewsData);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="host-reviews">
        <div className="container">
          <Loading />
        </div>
      </section>
    );
  }

  // Calculate overall rating
  const overallRating =
    reviews.length > 0
      ? (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1)
      : "0.0";

  // Calculate rating breakdown
  const ratingBreakdown = [5, 4, 3, 2, 1].map((star) => {
    const count = reviews.filter((review) => review.rating === star).length;
    const percentage = reviews.length > 0 ? (count / reviews.length) * 100 : 0;
    return { star, count, percentage };
  });

  return (
    <section className="host-reviews">
      <div className="container">
        <div className="reviews-header">
          <h2>Your reviews</h2>
          <div className="time-filter">
            last <span className="filter-link">30 days</span>
          </div>
        </div>

        <div className="rating-summary">
          <div className="overall-rating">
            <span className="rating-value">{overallRating}</span>
            <FaStar className="star-icon" />
            <span className="rating-label">overall rating</span>
          </div>

          <div className="rating-breakdown">
            {ratingBreakdown.map(({ star, percentage }) => (
              <div key={star} className="rating-bar-row">
                <span className="star-label">{star} star</span>
                <div className="rating-bar-container">
                  <div
                    className="rating-bar"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
                <span className="percentage">{Math.round(percentage)}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="reviews-list">
          <h3 className="reviews-count">Reviews ({reviews.length})</h3>
          {reviews.length === 0 ? (
            <p className="no-reviews">No reviews yet.</p>
          ) : (
            reviews.map((review) => (
              <div key={review.id} className="review-item">
                <div className="review-stars">
                  {[...Array(5)].map((_, index) => (
                    <FaStar
                      key={index}
                      className={index < review.rating ? "star-filled" : "star-empty"}
                    />
                  ))}
                </div>
                <div className="review-header">
                  <span className="reviewer-name">{review.reviewerName}</span>
                  <span className="review-date">{review.date}</span>
                </div>
                <p className="review-text">{review.reviewText}</p>
                {review.id !== reviews[reviews.length - 1].id && (
                  <div className="review-divider"></div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
