import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import styled from "styled-components";

const StyledBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  border: 2px solid #000;
  padding: 10px;
  border-radius: 15px;
  background: linear-gradient(#d9afd9, #97d9e1);
`;

const Image = styled.img`
  height: 150px;
  width: 150px;
  margin: 10px 0px;
  border-radius: 50%;
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  & label {
    &:last-child {
      font-weight: 700;
    }
  }
`;

export const PlanetModal = (props) => {
    return (
        <Modal
            open={true}
            onClose={() => props.setOpen(false)}
            aria-labelledby="name"
            aria-describedby="information"
        >
            <StyledBox>
                <ImageWrapper>
                    <h2 id="name" data-testid="name">
                        {props.planet.name}
                    </h2>
                    <Image
                        id={props.planet.id}
                        src={`data:image/jpg;base64, ${props.planet.image.fileContents}`}
                        alt="planetImage"
                    />
                </ImageWrapper>
                <div id="information">
                    <Wrapper>
                        <label>Mass</label>
                        <label data-testid="mass">{props.planet.mass}</label>
                    </Wrapper>
                    <Wrapper>
                        <label>Distance from sun</label>
                        <label data-testid="distance">
                            {props.planet.distanceFromSun} million km
                        </label>
                    </Wrapper>
                    <Wrapper>
                        <label>Diameter</label>
                        <label data-testid="diameter">
                            {props.planet.diameter.toLocaleString()} km
                        </label>
                    </Wrapper>
                </div>
            </StyledBox>
        </Modal>
    );
};

export default PlanetModal;
