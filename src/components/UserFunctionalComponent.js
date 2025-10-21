import { useState } from "react";

const UserFunctionalComponent = (props) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(10);

  return (
    <div className="user-card">
      <h2>Name: {props.name}</h2>
      <h3>Location: Kolkata</h3>
      <h4>Contact: +91 7872450163</h4>
    </div>
  );
};

export default UserFunctionalComponent;
