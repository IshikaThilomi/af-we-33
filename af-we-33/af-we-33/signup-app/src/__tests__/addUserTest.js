import React from "react";
import { render, shallow } from "enzyme";
import Register from "../components/register.component/register";

describe("Input Username", () => {
  it("should respond to change event and change the state of the username", () => {
    const wrapper = shallow(<Register />);
    wrapper
      .find("#username")
      .simulate("change", { target: { name: "username", value: "Ishika" } });
    expect(wrapper.state("username")).toEqual("Ishika");
  });
});

describe("Email input", () => {
  it("should respond to change event and change the state of the Course fee", () => {
    const wrapper = shallow(<Register />);
    wrapper
      .find("#email")
      .simulate("change", {
        target: { name: "email", value: "abc@gmail.com" },
      });
    expect(wrapper.state("email")).toEqual("abc@gmail.com");
  });
});

describe("address input", () => {
  it("should respond to change event and change the state of the Description", () => {
    const wrapper = shallow(<Register />);
    wrapper
      .find("#address")
      .simulate("change", {
        target: { name: "address", value: "No 12,castle lane.col 2" },
      });
    expect(wrapper.state("address")).toEqual("No 12,castle lane.col 2");
  });
});
