import styled from 'styled-components';

export const Container = styled.aside`
  height: 100%;
  position: fixed;
  padding: 32px 24px;
  background: linear-gradient(329.54deg, #15b6d6 0%, #15d6d6 100%);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  img {
    width: 48px;
  }

  footer {
    button {
      width: 48px;
      height: 48px;

      border: 0;
      border-radius: 16px;
      background: #12afcb;

      cursor: pointer;

      transition: background-color 0.2s;

      display: flex;
      justify-content: center;
      align-items: center;

      :hover {
        background: #17d6eb;
      }
    }
  }
`;
