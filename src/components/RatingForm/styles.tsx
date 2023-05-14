import { styled } from 'styled-components';
import { COLORS } from '../../styles/colors';

type ScoreType = {
  selected: boolean;
};

export const Form = styled.form`
  margin-left: 24px;
  margin-right: 24px;
`;

export const Heading = styled.h1`
  margin-top: 16px;
  margin-bottom: 16px;
  color: ${COLORS.WHITE};
  font-size: 24px;
  font-weight: 700;
`;

export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${COLORS.LIGHT_GREY};
  line-height: 22px;
`;

export const ScoresContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const Score = styled.div<ScoreType>`
  width: 42px;
  line-height: 42px;
  border-radius: 50%;
  text-align: center;
  background: ${COLORS.DARK_BLUE};
  color: ${COLORS.MEDIUM_GREY};
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;

  ${({ selected }: any) =>
    selected &&
    `
  background-color: ${COLORS.ORANGE};
  color: ${COLORS.WHITE};
  `}
`;

export const Button = styled.button`
  margin-top: 24px;
  width: 100%;
  border: none;
  padding-top: 12px;
  padding-bottom: 12px;
  border-radius: 30px;
  text-transform: uppercase;
  letter-spacing: 1.8px;
  color: ${COLORS.WHITE};
  font-size: 14px;
  font-weight: 700;
  background-color: ${COLORS.ORANGE};
  cursor: pointer;

  &:hover {
    background-color: ${COLORS.WHITE};
    color: ${COLORS.ORANGE};
  }
`;
