import styled from 'styled-components';

export const TimeIndicator = styled.div`
  display: flex;
  align-item: center;
  justify-content: center;
  border-radius: 16px;
  width: 64px;
  height: 32px;
  margin: 10px;
  padding-top: 10px;
  color: ${({color})=> color} ;
  background-color: ${(props)=> {return props.bg}} ;
`;

export const Title = styled.div`
  font-family: Montserrat;
  font-size: ${({size}) => (typeof size === 'string' ? size: size + 'px')};
  font-weight: 600;
  line-height: 28px;
`;
