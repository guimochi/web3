import { Part } from "components/Part";

export const Content = (props) => {
  return props.parts.map((part) => {
    return <Part key={part.name} name={part.name} exercises={part.exercises} />;
  });
};
