import Todo from "./components/Todo";

function App() {
  return (
    <div style={{ padding: 40 }}>
      <h1>📝 오늘 할 일</h1>

      <ul>
        <Todo text="React 공부하기" />
        <Todo text="타입스크립트 연습하기" />
      </ul>
    </div>
  );
}

export default App;
