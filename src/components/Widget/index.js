import styled from 'styled-components';

const Widget = styled.div`
  margin-top: 4rem;
  margin-bottom: 4rem;
  border: 1px solid ${({ theme }) => theme.colors.mainBg};
  background-color: ${({ theme }) => theme.colors.mainBg};
  opacity: 0.9;
  border-radius: 4px;
  overflow: hidden;
  h1,
  h2,
  h3 {
    font-size: 24px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }
  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 1;
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
`;

Widget.Form = styled.form`
  h1 {
    font-size: 20px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 20px;
  }
  input {
    align-content: center;
    text-align: center;
    padding: 10px;
    width: 100%;
  }
  button {
    width: 100%;
    padding: 10px;
  }
`;

export default Widget;
