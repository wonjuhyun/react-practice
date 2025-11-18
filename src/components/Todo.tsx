type TodoProps = {
  text: string;
};

function Todo({ text }: TodoProps) {
  return <li>{text}</li>;
}

export default Todo;
