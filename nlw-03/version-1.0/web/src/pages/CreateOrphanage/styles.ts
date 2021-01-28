import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  main {
    flex: 1;

    form {
      width: 700px;
      margin: 64px auto;

      background: #ffffff;
      border: 1px solid #d3e2e5;
      border-radius: 20px;

      padding: 64px 80px;

      overflow: hidden;

      fieldset {
        border: 0;

        legend {
          width: 100%;

          font-size: 32px;
          line-height: 34px;
          color: #5c8599;
          font-weight: 700;

          border-bottom: 1px solid #d3e2e5;
          margin-bottom: 40px;
          padding-bottom: 24px;
        }
      }

      > fieldset {
        margin-top: 80px;
      }
    }
  }
`;

export const MapContainer = styled.div`
  .leaflet-container {
    position: relative;
    border: 1px solid #d3e2e5;
    border-radius: 20px;
    filter: blur(2px);
  }
`;

export const InputBlock = styled.div`
  margin-top: 24px;

  label {
    display: flex;
    color: #8fa7b3;
    margin-bottom: 8px;
    line-height: 24px;

    span {
      font-size: 14px;
      color: #8fa7b3;
      margin-left: 24px;
      line-height: 24px;
    }
  }

  input,
  textarea {
    width: 100%;
    background: #f5f8fa;
    border: 1px solid #d3e2e5;
    border-radius: 20px;
    outline: none;
    color: #5c8599;
    height: 64px;
    padding: 0 16px;
  }

  textarea {
    min-height: 120px;
    max-height: 240px;
    resize: vertical;
    padding: 16px;
    line-height: 28px;
  }
`;

export const ImagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 16px;

  > label {
    height: 96px;
    background: #f5f8fa;
    border: 1px dashed #96d2f0;
    border-radius: 20px;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  input {
    display: none;
  }

  img {
    width: 100%;
    height: 96px;
    object-fit: cover;
    border-radius: 20px;
  }
`;

export const ButtonSelect = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  > button {
    height: 64px;
    background: #f5f8fa;
    border: 1px solid #d3e2e5;
    color: #5c8599;
    cursor: pointer;
  }

  .active {
      background: #edfff6;
      border: 1px solid #a1e9c5;
      color: #37c77f;
    }
  }

  button:first-child {
    border-radius: 20px 0px 0px 20px;
  }

  button:last-child {
    border-radius: 0 20px 20px 0;
    border-left: 0;
  }
`;
