import './ThankYou.scss';
import { useLocation } from 'react-router-dom';

const ThankYou = () => {
  const {
    state: { rating, grades },
  } = useLocation();

  return (
    <div className="container">
      <img
        className="image"
        src="/images/illustration-thank-you.svg"
        alt="thank-you"
      />
      <p className="rating">{`You selected ${rating} out of ${grades}`}</p>
      <p className="heading">Thank you!</p>
      <p className="description">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </div>
  );
};

export default ThankYou;
