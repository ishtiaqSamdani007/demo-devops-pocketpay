import { Chip } from "@mui/material";
import { render } from "@testing-library/react";
import { NavItem } from ".";
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import home from "../../../../public/assets/icons/home.svg";

describe("NavItem", () => {
  const props = {
    src: home,
    alt: "placeholder image",
    variant: "caption",
    text: "Home",
    label: "new",
    chip: <Chip label="new" />,
    onClick: jest.fn(),
  };

  it("renders correctly with mandatory props", () => {
    const { getByText } = render(
      <NavItem variant={props.variant} text={props.text} />
    );
    const textElement = getByText(props.text);
    expect(textElement).toBeInTheDocument();
  });
});
