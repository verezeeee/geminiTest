import { useState } from "react";
import {
  ActionsWrapper,
  ChatWrapper,
  Container,
  ImgWrapper,
  Prompt,
  Response,
  StyledButton,
  StyledInput,
  ThreeDotsAnimated,
  Wrapper,
} from "./styles/Home";
import boy from "./assets/boy.jpg";
import { Send } from "@styled-icons/ionicons-outline/Send";

import { google } from "./lib/google";

const model = google.getGenerativeModel({ model: "gemini-pro" });

function App() {
  const [prompt, setPrompt] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [responses, setResponses] = useState<string[]>([]);
  const [prompts, setPrompts] = useState<string[]>([]);

  const intercalateData = () => {
    const data = [];
    for (let i = 0; i < prompts.length; i++) {
      data.push(prompts[i]);
      data.push(responses[i]);
    }
    return data;
  };

  const handleButtonClick = async () => {
    setPrompt("");
    setPrompts([...prompts, prompt]);
    try {
      setLoading(true);
      const result = await model.generateContent(prompt);
      const response = result.response;

      const text = response.text();
      setResponses([...responses, text]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Container>
        <Wrapper>
          <ImgWrapper src={boy} alt="placeholder" />
          <ChatWrapper>
            {intercalateData().map((data, index) => {
              if (index % 2 === 0) {
                return <Prompt key={index}>{data}</Prompt>;
              } else {
                return loading ? (
                  <Response key={index}>
                    <ThreeDotsAnimated key={index}>
                      <div></div>
                      <div></div>
                      <div></div>
                    </ThreeDotsAnimated>
                  </Response>
                ) : (
                  <Response key={index}>{data}</Response>
                );
              }
            })}
            <ActionsWrapper>
              <StyledInput
                type="text"
                value={prompt}
                onChange={(e) => {
                  setPrompt(e.target.value);
                }}
                placeholder="Type something..."
              />
              <StyledButton onClick={handleButtonClick}>
                <Send size={20} />
              </StyledButton>
            </ActionsWrapper>
          </ChatWrapper>
        </Wrapper>
      </Container>
    </>
  );
}

export default App;
