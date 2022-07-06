import { shallowMount } from "@vue/test-utils";
import TextField from "../TextField.vue";

describe("TextField - Unit", () => {
  /* 
  let wrapper : VueWrapper;
  beforeEach(() => {
    wrapper = shallowMount(TextField);
  }); 
  */

  it("Should mount TextField", () => {
    const wrapper = shallowMount(TextField);
    expect(wrapper.vm).toBeDefined();
  });

  it("Should input's 'name' be the same as label's 'for' attribute", () => {
    const wrapper = shallowMount(TextField);
    const label = wrapper.find("label").attributes();
    const input = wrapper.find("input").attributes();

    expect(input.name).toBe(label.for);
  });

  it("Should render label prop on label element", () => {
    const wrapper = shallowMount(TextField, {
      props: {
        label: "my input",
      },
    });
    const label = wrapper.find("label");
    expect(label.html()).toContain("my input");
  });

  it("Should bind type and placeholder props on input", () => {
    const wrapper = shallowMount(TextField, {
      props: {
        placeholder: "username",
        type: "text",
      },
    });
    const attributes = wrapper.find("input").attributes();

    expect(attributes.placeholder).toBe("username");
    expect(attributes.type).toBe("text");
  });

  it("Should emit update:modelValue event when typing on input", async () => {
    const wrapper = shallowMount(TextField);
    const text = "any text";

    await wrapper.find("input").setValue(text);
    const model = wrapper.emitted()["update:modelValue"];

    expect(model).toBeTruthy();
    expect(model.length).toBe(1);
    expect(model[0]).toEqual([text]);
  });
});
