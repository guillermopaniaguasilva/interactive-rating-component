import { useSelector } from 'react-redux';
import { AppState } from '../RatingForm/RatingForm';
import { Container, Image, Result, Heading, Description } from './styles';

const ThankYou = () => {
  const { value, maxScore } = useSelector((state: AppState) => state.rating);

  return (
    <Container>
      <Image src="/images/illustration-thank-you.svg" alt="thank-you" />
      <Result>{`You selected ${value} out of ${maxScore}`}</Result>
      <Heading>Thank you!</Heading>
      <Description>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </Description>
    </Container>
  );
};

export default ThankYou;
