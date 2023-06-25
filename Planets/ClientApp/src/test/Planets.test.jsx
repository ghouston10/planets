import { render, screen, act } from "@testing-library/react";
import React from "react";
import Planets from "../components/Planets";

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () =>
            Promise.resolve([
                {
                    id: 1,
                    name: "Mecury",
                },
                {
                    id: 2,
                    name: "Venus",
                },
                {
                    id: 3,
                    name: "Earth",
                },
            ]),
    })
);

test("shows loader", async () => {
    render(<Planets />);
    const loader = screen.getByTestId("loading");
    expect(loader).toBeInTheDocument();
});

test("contains the heading", async () => {
    await act(async () => render(<Planets />));
    const heading = screen.getByTestId("heading");
    expect(heading).toBeInTheDocument();
});

test("contains planet buttons", async () => {
    await act(async () => render(<Planets />));
    const items = screen.findAllByRole("button");
    expect(items).toHaveLength(3);
});
