const ErrorExample = () => {
  let count = 0;

  const handelClick = () => {
    count = count + 1;
    console.log(count);
  };
  return (
    <div>
      <h2>{count}</h2>
      <button type="button" onClick={handelClick} className="btn">
        increase
      </button>
    </div>
  );
};

export default ErrorExample;
