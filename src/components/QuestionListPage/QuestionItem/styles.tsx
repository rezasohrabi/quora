import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const QuestionTitle = styled.h3`
  font-weight: 700;
  font-size: 16px;
  display: flex;
  color: #222222;
`;

export const QuestionerImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  margin: 0 16px;
`;

export const AnswerCount = styled.div`
  display: flex;
  margin-left: 24px;
  font-weight: 700;
  & img {
    margin-left: 6px;
  }
`;

export const Column = styled.div`
  display: flex;
  align-items: center;
`;

export const QuestionText = styled.p`
  font-size: 14px;
  line-height: 20px;
  color: #222222;
  margin: 19px 16px 24px;
`;

export const QuestionDetailLink = styled(Link)`
  background-color: #ffffff;
  border-radius: 6px;
  color: #199da3;
  margin: 0 auto 16px 16px;
  border: 1px solid #199da3;
  padding: 8px;
  text-decoration: none;
  line-height: 20px;
`;
