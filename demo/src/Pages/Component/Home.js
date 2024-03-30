import Navbar from "./Navbar";
import css from "../../Css/component/home.module.css"

const Home = () => {
  return (
    <>
    <div className={css.home}>
      <div>
       <Navbar />
      <div>This is homeS</div>
    </div>
    </div>
    </>
  );
};
export default Home;
