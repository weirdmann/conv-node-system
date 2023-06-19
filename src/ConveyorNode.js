import {
  defineNode,
  TextInterface,
  TextInputInterface,
  SelectInterface,
  NodeInterface,
  CheckboxInterface
} from "baklavajs";

export const ConveyorNode = defineNode({
  type: "ConveyorNode",
  title: "Conveyor",
  inputs: {
    previous: () => new NodeInterface("Previous", null),
    name: () => new TextInputInterface("Name", "0001"), //.setPort(false)
    scn: () => new CheckboxInterface("SCN", false).setPort(false)
  },
  outputs: {
    to_next: () => new NodeInterface("To next", null)
  },
  calculate(inputs) {
    return {
      to_next: inputs
    };
  }
});
