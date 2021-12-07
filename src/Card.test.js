import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";

it("renders Card properly", function() {
    render(<Card />);
});

it("matches snapshot", function() {
    const { asFragment } = render(<Card
        caption="testCaption"
        src="./image1.jpg"
        currNum="1"
        totalNum="3" />);
    
    expect(asFragment()).toMatchSnapshot();
});