import styles from "./rating.module.css";
import { useState } from "react";
import start from "../assets/images/icon-star.svg";
import thankyou from "../assets/images/thank-you.svg";

function Rating() {
  const [rating, setRating] = useState<number>();
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  function handleRatingClick(rating: number) {
    setRating(rating);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!rating) {
      return;
    }
    setIsSubmitted(true);
  }

  return !isSubmitted ? (
    <form className={styles.mainPanel} onSubmit={handleSubmit}>
      <img className={styles.start} src={start} alt="start logo" />
      <h1 className={styles.title}>How did we do?</h1>
      <p className={styles.description}>
        Please let us know how we did with your support request. All feedback is
        appreaciated to help us improve our offering!
      </p>
      <div className={styles.btnGroup}>
        {[1, 2, 3, 4, 5].map((rate) => (
          <button
            key={rate}
            type="button"
            className={styles.ratingBtn}
            onClick={() => handleRatingClick(rate)}
          >
            {rate}
          </button>
        ))}
      </div>

      <button className={styles.submitBtn} disabled={rating === undefined}>
        Submit
      </button>
    </form>
  ) : (
    <div className={styles.thankYouPanel}>
      <img
        className={styles.thankYouLogo}
        src={thankyou}
        alt="Thank you logo"
      />
      <p className={styles.ratingScore}>You selected {rating} out of 5</p>
      <h1 className={styles.title}>Thank you!</h1>
      <p className={styles.description}>
        We appreaciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </div>
  );
}

export default Rating;
