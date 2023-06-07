import { useEffect, useState } from "react";
import styled from "styled-components";

function Popular() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
    );
    const data = await api.json();
    setProducts(data.recipes);
  };

  return (
    <div>
      {products.map((recipe) => {
        return (
          <Wrapper key={recipe.id}>
            <p>{recipe.title}</p>
          </Wrapper>
        );
      })}
    </div>
  );
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

export default Popular;
