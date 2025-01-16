
const TodoTemplate = ({children}) => {
  // console.log(props);
  return (
    <div className="todo-template">
      <h1>일정 관리</h1>
      {/* <p>App을 만들자</p> */}
      <p>{children}</p>
    </div>
  );
};

export default TodoTemplate;