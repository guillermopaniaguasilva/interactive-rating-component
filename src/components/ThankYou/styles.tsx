import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

export const Container = styled.div`
  width: 327px;
  height: 360px;
  background: linear-gradient(to bottom, #232a34, #181e27);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 144px;
  height: 96px;
`;

export const Result = styled.p`
  color: ${COLORS.ORANGE};
  background-color: ${COLORS.DARK_BLUE};
  padding: 6px 12px;
  border-radius: 30px;
  margin-top: 24px;
  margin-bottom: 24px;
  font-size: 14px;
  font-weight: 400;
`;

export const Heading = styled.h1`
  color: ${COLORS.WHITE};
  font-size: 24px;
  font-weight: 700;
  margin: 0;
`;

export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: ${COLORS.LIGHT_GREY};
  margin-left: 24px;
  margin-right: 24px;
  text-align: center;
`;
