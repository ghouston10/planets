import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import PlanetModal from "./PlanetModal";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 100px;
`;

const Heading = styled.h1`
  color: black;
  padding-bottom: 30px;
`;

const btnStyles = {
    color: "white",
    fontSize: "25px",
    fontWeight: 600,
    marginBottom: "10px",
    ":hover": {
        bgcolor: "#4f5981",
    }
};

export const Planets = () => {
    const [loading, isLoading] = useState(true);
    const [planets, setPlanets] = useState([]);
    const [selectedPlanet, setSelectedPlanet] = useState();
    const [open, setOpen] = React.useState(false);

    useEffect(() => {
        isLoading(true);
        fetch("planet").then((results) =>
            results.json().then((data) => {
                setPlanets(data);
                isLoading(false);
            })
        );
    }, []);

    if (loading) {
        return <div data-testid="loading">Loading ...</div>;
    }

    return (
        <>
            <Wrapper>
                <Heading tabIndex={0} data-testid="heading">
                    Select a Planet to view more information
                </Heading>

                {planets.map((planet) => (
                        <Button
                            key={planet.id}
                            variant="text"
                            sx={btnStyles}
                            onClick={(e) => {
                                setOpen(true);
                                setSelectedPlanet(planet);
                            }}
                        >
                            {planet.name}
                        </Button>
                ))}
            </Wrapper>
            {open && <PlanetModal planet={selectedPlanet} setOpen={setOpen} />}
        </>
    );
};

export default Planets;
