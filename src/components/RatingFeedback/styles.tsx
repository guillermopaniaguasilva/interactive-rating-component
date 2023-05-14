import { styled } from 'styled-components';
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
`;

export const Circle = styled.div`
  width: 40px;
  line-height: 40px;
  border-radius: 50%;
  text-align: center;
  background: ${COLORS.DARK_BLUE};
  margin-left: 24px;
  margin-top: 24px;
`;

export const Image = styled.img``;
