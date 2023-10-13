const EventPropagation = () => {
  return (
    <div>
      <h1>EventPropagationDemo:</h1>
      <div
        onClick={() => {
          alert("You clicked on the Parent Div!");
        }}
      >
        <div
          onClick={() => {
            alert("You clicked on the Div!");
          }}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              alert("Button 1 clicked!");
            }}
          >
            Button One
          </button>
          <button
            onClick={() => {
              //   e.stopPropagation();
              alert("Button 2 Clicked!");
            }}
          >
            Button Two
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventPropagation;
