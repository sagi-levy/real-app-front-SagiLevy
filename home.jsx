import PageHeader from "./common/pageHeader";
const Home = () => {
  return (
    <>
      <PageHeader
        title={
          <>
            <h1>
              Home Page<i className="bi bi-geo-fill"></i>
            </h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum,
              quidem in. Impedit, in. Ipsam eum cupiditate doloribus in quaerat,
              voluptatibus vel, harum id, repellat quia numquam ea excepturi
              beatae cum.
            </p>
          </>
        }
      />

      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum,
        quidem in. Impedit, in. Ipsam eum cupiditate doloribus in quaerat,
        voluptatibus vel, harum id, repellat quia numquam ea excepturi beatae
        cum.
      </p>
    </>
  );
};
export default Home;
