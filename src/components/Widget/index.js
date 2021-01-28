import styled from 'styled-components';

export const Widget = styled.div`
  margin-top:24px;
  margin-bottom:24px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.mainBg};;
  border-radius: 4px;
  overflow:hidden;

  h1, h2, h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
    color: ${({ theme }) => theme.colors.contrastText}
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
    color: ${({ theme }) => theme.colors.contrastText}
  }
  `;
  Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};
  
  * {
    margin: 0;
  }
`;

  Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  input{
    height: 36px;
    width: 100%;
    background: rgba(100,125,102,0.6);
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: 15px;
    outline: none;
    color: ${({ theme }) => theme.colors.contrastText};
    padding: 0 16px;
  },
 
`;

