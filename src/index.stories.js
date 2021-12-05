import MyCheckbox from "./Checkbox";

export default {
  title: "Example/Checkbox",
  component: MyCheckbox,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyCheckbox },
  template: "<my-checkbox />",
});

export const Default = Template.bind({});
