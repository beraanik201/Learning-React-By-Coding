import UserFunctionalComponent from "./UserFunctionalComponent";
import UserClassComponent from "./UserClassComponent";

const About = () => {
  return (
    <div>
      <h1>About us</h1>
      <h2>This is About us page</h2>
      <UserFunctionalComponent name={"Anik Bera (Function)"} />
      <UserClassComponent name={"Anik Bera (Class)"} location={"Kolkata"} />
    </div>
  );
};

export default About;
