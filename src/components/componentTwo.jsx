import ComponentThree from "./componentThree";

const ComponentTwo = ({ titleComponentTwo }) => {
  return (
    <div>
      This is component Two!!
      <ComponentThree title={titleComponentTwo} />
    </div>
  );
};

export default ComponentTwo;
