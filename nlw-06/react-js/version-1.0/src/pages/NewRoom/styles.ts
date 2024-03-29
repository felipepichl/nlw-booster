import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;

  main {
    flex: 8;

    padding: 0 32px;

    display: flex;
    align-items: center;
    justify-content: center;

    > div {
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 320px;
      align-items: stretch;
      text-align: center;

      > img {
        align-self: center;
      }

      h2 {
        font-size: 24px;
        margin: 64px 0 24px;
        font-family: 'Poppins', sans-serif;
      }

      form {
        input {
          height: 50px;
          border-radius: 8px;
          padding: 0 16px;
          background: #fff;
          border: 1px solid #a8a8b3;
        }

        button {
          margin-top: 16px;
        }

        button,
        input {
          width: 100%;
        }
      }

      p {
        font-size: 14px;
        color: #737380;
        margin-top: 16px;

        a {
          color: #e559f9;
          margin-left: 4px;
        }
      }
    }
  }
`;
