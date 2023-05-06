import './RatingFeedback.scss';
import RatingForm from '../RatingForm/RatingForm';

const RatingFeedback = () => {
  return (
    <div className="rating-container">
      <div className="circle">
        <img src="/images/icon-star.svg" alt="icon-start" />
      </div>
      <RatingForm maxScore={5} />
    </div>
  );
};

export default RatingFeedback;
