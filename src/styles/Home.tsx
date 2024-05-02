import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(
      0deg,
      transparent 24%,
      rgba(255, 255, 255, 0.1) 25%,
      rgba(255, 255, 255, 0.1) 26%,
      transparent 27%,
      transparent 74%,
      rgba(255, 255, 255, 0.1) 75%,
      rgba(255, 255, 255, 0.1) 76%,
      transparent 77%,
      transparent
    ),
    linear-gradient(
      90deg,
      transparent 24%,
      rgba(255, 255, 255, 0.1) 25%,
      rgba(255, 255, 255, 0.1) 26%,
      transparent 27%,
      transparent 74%,
      rgba(255, 255, 255, 0.1) 75%,
      rgba(255, 255, 255, 0.1) 76%,
      transparent 77%,
      transparent
    );
  background-color: black;
  background-size: 70px 70px;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 80%;
  height: 70%;
  padding: 20px;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  gap: 20px;
`;

export const ImgWrapper = styled.img`
  width: 50%;
  height: 100%;
  margin: 0 auto;
  border-radius: 8px;
  object-fit: cover;
`;

export const ChatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #cecece;
  width: 100%;
  border-radius: 8px;
  padding: 20px;
  gap: 20px;
  justify-content: flex-end;
  overflow-y: scroll;
  height: auto;
`;

export const StyledInput = styled.input`
  padding: 10px 30px;
  border-radius: 30px;
  height: 40px;
  width: 100%;
  border: none;
  font-size: 1rem;

  &:focus {
    outline: none;
  }
`;

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px;
  border-radius: 30px;
  border: none;
  font-size: 1rem;
  height: 100%;
  width: 68px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:focus {
    outline: none;
  }
`;

export const ActionsWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const Response = styled.div`
  background-color: #a1a1a1;
  padding: 10px;
  border-radius: 8px;
  width: fit-content;
  max-width: 80%;
  word-wrap: break-word;
  align-self: flex-start;
`;

export const Prompt = styled.div`
  background-color: #f1f1f1;
  padding: 10px;
  border-radius: 8px;
  width: fit-content;
  max-width: 80%;
  word-wrap: break-word;
  align-self: flex-end;
`;

export const ThreeDotsAnimated = styled.div`
  display: inline-block;
  position: relative;
  width: 64px;
  justify-self: center;
  align-self: center;

  div {
    position: absolute;
    width: 5px;
    height: 5px;
    background: #000;
    border-radius: 50%;
    animation: threeDots 1.3s linear infinite;
  }

  div:nth-child(1) {
    animation-delay: 0s;
  }

  div:nth-child(2) {
    animation-delay: 0.15s;
    margin-left: 10px;
  }

  div:nth-child(3) {
    animation-delay: 0.3s;
    margin-left: 20px;
  }

  @keyframes threeDots {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
`;
