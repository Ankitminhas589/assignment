import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import SwitchButton from "../SwitchButton";

describe("Image with loader tests", () => {
    it("renders correcly", async () => {
        const { toJSON, getByTestId } = render(<SwitchButton isActive={true} onPress={() => { }} />);
        expect(toJSON()).toMatchSnapshot();
    });
});
