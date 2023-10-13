import ComponentTwo from "./componentTwo";

const ComponentOne = ({ title }) => {
  return (
    <div>
      This is component One!!!
      <ComponentTwo titleComponentTwo={title} />
    </div>
  );
};

export default ComponentOne;
