import PageHeader from "./components/common/pageHeader";
const About = ({ title }) => {
  return (
    <>
      <PageHeader title={<h1>About Page</h1>} />
      <div className="row">
        <div className="col-12 mt-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
            reiciendis fuga temporibus est amet maxime nam, rem suscipit neque
            quasi corrupti voluptatem laborum deleniti nobis beatae natus
            reprehenderit cupiditate consequatur?
          </p>
        </div>
      </div>
    </>
  );
};
export default About;
