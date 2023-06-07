import { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { devices } from "../size";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
    setInput("");
  };

  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <FaSearch />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
    </FormStyle>
  );
}

const FormStyle = styled.form`
  margin: 0 25%;

  @media ${devices.tablet} {
    margin: 0 10%;
    margin-top: 1.5rem;
  }

  @media ${devices.mobileL} {
    margin: 0 5%;
    margin-top: 1.5rem;
  }

  div {
    position: relative;
    width: 100%;
  }
  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3.5rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    width: 100%
  }
  svg {
    position: absolute;
    top: 25%;
    left: 2%;
    font-size: 30px;
    transform: translate:(100%, -50%);
    color: white;
  }
`;

export default Search;
