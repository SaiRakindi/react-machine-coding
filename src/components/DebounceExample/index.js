const DebounceExample = () => {
  const myDebounce = (callBack, delay) => {
    let timer;

    return function (...args) {
      if (timer) clearTimeout(timer);

      timer = setTimeout(() => {
        callBack(...args);
      }, delay);
    };
  };

  const handleInputChange = myDebounce((event) => {
    console.log(event.target.value);
  }, 1000);

  return (
    <div>
      <input type="text" onChange={handleInputChange} />
    </div>
  );
};

export default DebounceExample;
