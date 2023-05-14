import { useDispatch, useSelector } from 'react-redux';
import { FormEvent, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { setRating, setMaxScore } from '../../store/rating/rating.action';
import {
  Form,
  Heading,
  Description,
  ScoresContainer,
  Score,
  Button,
} from './styles';

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

  const scores = Array.from({ length: maxScore }, (_, index) => index + 1);

  useEffect(() => {
    dispatch(setMaxScore(maxScore));
  }, [maxScore, dispatch]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    navigate('/thank-you');
  };

  return (
    <Form onSubmit={onSubmit}>
      <Heading>How did we do?</Heading>
      <Description>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </Description>
      <ScoresContainer>
        {scores.map((score) => (
          <Score
            key={score}
            selected={rating === score}
            onClick={() => {
              setSelected(!selected);
              dispatch(setRating(score));
            }}
          >
            {score}
          </Score>
        ))}
      </ScoresContainer>
      <Button>Submit</Button>
    </Form>
  );
};

export default RatingForm;
