import { useContext, useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { PostContext } from "../../providers/PostContext";
import { Container } from "./styles";
import { motion } from "framer-motion";
import { ChangeEvent } from "react";

const SearchInput = () => {
  const [inputSearchValue, setInputSearchValue] = useState<string>("");
  const { searchPost } = useContext(PostContext);

  const [isTablet, setIsTablet] = useState(
    window.innerWidth >= 768 && window.innerWidth < 1024
  );

  const updateMedia = () => {
    setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  const parent = {
    variantA: { width: 0 },
    variantB: { width: 100 },
  };

  return (
    <>
      <Container>
        {isTablet ? (
          <motion.input
            type="text"
            placeholder="Pesquisar..."
            value={inputSearchValue}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setInputSearchValue(event.target.value)
            }
            variants={parent}
            initial="variantA"
            whileFocus="variantB"
            transition={{
              type: "spring",
              damping: 10,
              mass: 0.5,
              stiffness: 80,
            }}
          />
        ) : (
          <input
            type="text"
            placeholder="Pesquisar..."
            value={inputSearchValue}
            onChange={(event) => setInputSearchValue(event.target.value)}
          />
        )}
        <button type="button" onClick={() => searchPost(inputSearchValue)}>
          <AiOutlineSearch />
        </button>
      </Container>
    </>
  );
};
export default SearchInput;
