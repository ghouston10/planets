import { render, screen } from "@testing-library/react";
import React from "react";
import PlanetModal from "../components/PlanetModal";

test("contains planet information", async () => {
    const props = {
        planet: {
            id: 1,
            name: "earth",
            mass: 100,
            distanceFromSun: 34.54,
            diameter: 30,
        },
    };

    render(<PlanetModal props={props} />);

    const name = screen.getByTestId("name");
    const mass = screen.getByTestId("mass");
    const diameter = screen.getByTestId("diameter");
    const distance = screen.getByTestId("distance");
    const image = screen.findAllByRole("img");

    expect(name).toEqual("earth");
    expect(mass).toEqual(100);
    expect(distance).toEqual(34.54);
    expect(diameter).toEqual(30);
    expect(image).toBeInTheDocument();
});
