import { mount } from "@vue/test-utils";
import Btn from "@/components/buttons/Btn.vue";
import Divider from "@/components/Divider.vue";
import ContactModal from "../ContactModal.vue";

describe("ContactModal - Unit", () => {
  let global: any;

  beforeAll(() => {
    global = {
      components: {
        btn: Btn,
        divider: Divider,
      },
    };
  });

  it("Should mount ContactModal", () => {
    const wrapper = mount(ContactModal, {
      global,
    });

    expect(wrapper.vm).toBeDefined();
  });

  it("Should modelValue toggle visibility", async () => {
    const wrapper = mount(ContactModal, {
      global,
      props: {
        modelValue: true,
      },
    });

    expect(wrapper.isVisible()).toBeTruthy();
    await wrapper.setProps({ modelValue: false });
    expect(wrapper.isVisible()).toBeFalsy();
  });

  it("Should emit update:modelValue event with false when 'Cancelar' button is clicked", async () => {
    const wrapper = mount(ContactModal, {
      global,
      props: {
        modelValue: true,
      },
    });

    const button = wrapper
      .findAllComponents(Btn)
      .find((e) => e.text() === "Cancelar");

    await button?.trigger("click");
    const model = wrapper.emitted()["update:modelValue"];

    expect(model).toBeTruthy();
    expect(model.length).toBe(1);
    expect(model[0]).toEqual([false]);
  });
  it("Should toggle 'disabled' on 'Salvar' Btn ", async () => {
    const wrapper = mount(ContactModal, {
      global,
    });

    const button = wrapper
      .findAllComponents(Btn)
      .find((e) => e.text() === "Salvar");

    expect(button?.props().disabled).toBeTruthy();

    const input = wrapper.find("input");
    await input.setValue("any text");

    expect(button?.props().disabled).toBeFalsy();
  });

  it("Should emit update:modelValue event with false when 'Salvar' is not disabled and is clicked", async () => {
    const wrapper = mount(ContactModal, {
      global,
    });
    const button = wrapper
      .findAllComponents(Btn)
      .find((e) => e.text() === "Salvar");
    const input = wrapper.find("input");
    await input.setValue("any text");

    await button?.trigger("click");
    const model = wrapper.emitted()["update:modelValue"];

    expect(model).toBeTruthy();
    expect(model.length).toBe(1);
    expect(model[0]).toEqual([false]);
  });
  /* other tests to implement:
    - test save event
    - test contact prop and update:contact event
  */
});
