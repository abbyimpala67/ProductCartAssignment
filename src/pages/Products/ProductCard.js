import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import Button from "../../components/elements/Button";
import { addToCart } from "../../state/actions/cart";
import Modal from "react-modal";
const ProductCard = ({ id, title, price, image, category, description }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const product = { id, title, price, image, category, description };
  const dispatch = useDispatch();
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
    },
  };
  const showProductDetails = () => {
    console.log("open product details");
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <ProductCardWrapper>
        <ImageContainer
          onClick={showProductDetails}
          style={{ cursor: "pointer" }}
          title={"Click on product image view details"}
        >
          <Image src={image} alt={title} />
        </ImageContainer>
        <Details>
          <Info>
            <Title>{title}</Title>
            <div>${price.toFixed(2)}</div>
          </Info>
          <Button
            onClick={() => dispatch(addToCart(product))}
            content="Add to cart"
            size="wide"
            color="dark"
            animation="color"
          />
        </Details>
      </ProductCardWrapper>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="View Product Details"
      >
        <ProductCardWrapper>
          <ImageContainer>
            <Image src={image} alt={title} />
          </ImageContainer>
          <Details>
            <Info>
              <Title>{title}</Title>
              <div>${price.toFixed(2)}</div>
              <div>{description}</div>
            </Info>
            <Button
              onClick={() => dispatch(addToCart(product))}
              content="Add to cart"
              size="wide"
              color="dark"
              animation="color"
            />
          </Details>
        </ProductCardWrapper>
      </Modal>
    </>
  );
};

const ProductCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.grey.main};
  border-radius: 10px;
  background-color: #fff;
  font-size: 2rem;
`;

const Image = styled.img`
  height: 100%;
`;

const ImageContainer = styled.div`
  height: 25rem;
  padding: 3rem;
  margin: 0 auto;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  height: 100%;
  padding: 2rem;
  border-top: 1px solid ${({ theme }) => theme.colors.grey.main};
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  height: 100%;
`;

const Title = styled.div`
  font-weight: bold;
`;

export default ProductCard;
