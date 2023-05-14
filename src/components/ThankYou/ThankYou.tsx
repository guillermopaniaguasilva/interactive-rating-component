import './ThankYou.scss';
import { useSelector } from 'react-redux';
import { AppState } from '../RatingForm/RatingForm';

const ThankYou = () => {
  const { value, maxScore } = useSelector((state: AppState) => state.rating);

  return (
    <div className="container">
      <img
        className="image"
        src="/images/illustration-thank-you.svg"
        alt="thank-you"
      />
      <p className="rating">{`You selected ${value} out of ${maxScore}`}</p>
      <p className="heading">Thank you!</p>
      <p className="description">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </div>
  );
};

export default ThankYou;
