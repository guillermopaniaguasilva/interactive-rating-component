import './RatingForm.scss';
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type RatingFormProps = {
  maxScore: number;
};

const RatingForm = ({ maxScore }: RatingFormProps) => {
  const [rating, setRating] = useState(0);
  const [selected, setSelected] = useState(false);
  const navigate = useNavigate();

  const grades = Array.from({ length: maxScore }, (_, index) => index + 1);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    navigate('/thank-you', {
      state: { rating, grades: grades.length },
    });
  };

  return (
    <form className="rating-form" onSubmit={onSubmit}>
      <p className="rating-form__heading">How did we do?</p>
      <p className="rating-form__description">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="rating-form__grades-container">
        {grades.map((number) => (
          <div
            key={number}
            className={`rating-form__grade ${
              rating === number ? 'selected' : ''
            }`}
            onClick={() => {
              setSelected(!selected);
              setRating(number);
            }}
          >
            {number}
          </div>
        ))}
      </div>
      <button className="rating-form__submit-btn">Submit</button>
    </form>
  );
};

export default RatingForm;
