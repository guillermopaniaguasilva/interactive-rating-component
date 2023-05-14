import { useDispatch, useSelector } from 'react-redux';
import './RatingForm.scss';
import { FormEvent, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { setRating, setMaxScore } from '../../store/rating/rating.action';

type RatingFormProps = {
  maxScore: number;
};

export type AppState = {
  rating: {
    value: number;
    maxScore: number;
  };
};

const RatingForm = ({ maxScore }: RatingFormProps) => {
  const [selected, setSelected] = useState(false);
  const navigate = useNavigate();
  const rating = useSelector((state: AppState) => state.rating.value);
  const dispatch = useDispatch();

  const grades = Array.from({ length: maxScore }, (_, index) => index + 1);

  useEffect(() => {
    dispatch(setMaxScore(maxScore));
  }, [maxScore, dispatch]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    navigate('/thank-you');
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
              dispatch(setRating(number));
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
