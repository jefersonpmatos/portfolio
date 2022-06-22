import styled from "styled-components";

export const Container = styled.section`
  height: 100vh;
  background-color: #000;
`;

export const ContactForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const InputLabel = styled.label`
  color: #fff;
  text-shadow: 5px 5px 5px rgba(34, 200, 229, 0.4);
  display: block;
  text-transform: uppercase;
`;

export const DivStyled = styled.div`
  display: flex;
  justify-content: center;
  min-height: 50px;
`;

export const InputStyled = styled.input`
  display: block;
  color: #fff;
  font-family: "Inconsolata", monospace;
  font-size: 14px;
  background-color: transparent;
  min-width: 300px;
  box-sizing: border-box;
  padding-inline: 0.5em;
  padding-block: 0.7em;
  border: none;
  border-radius: 4px;
  border: 1px solid #fff;
  transition: all 0.3s ease;
  background: transparent;

  ::placeholder {
    font-family: "Inconsolata", monospace;
  }

  &:hover {
    border-radius: 4px;
    border-bottom: 2px solid #22c8e5;
    box-shadow: 0px 15px 20px rgba(34, 200, 229, 0.4);

    ::placeholder {
      color: transparent;
    }
  }

  &:focus {
    outline: 0;
    -webkit-appearance: none;

    ::placeholder {
      color: transparent;
    }
  }
`;

export const TextAreaStyled = styled.textarea`
  resize: none;
  outline: none;
  background-color: transparent;
  color: #fff;
  font-family: "Inconsolata", monospace;
  font-size: 14px;
  overflow: auto;
  border: 1px solid #fff;
  border-radius: 4px;
  width: 300px;
  height: 100px;
  padding: 1rem;
  transition: all 0.3s ease;

  &:hover {
    border-radius: 4px;
    border-bottom: 2px solid #22c8e5;
    box-shadow: 0px 15px 20px rgba(34, 200, 229, 0.4);

    ::placeholder {
      color: transparent;
    }
  }
`;
