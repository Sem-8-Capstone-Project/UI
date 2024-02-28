import "./styles.css";
const Title = (props) => {
  const { title } = props;
  return (
    <>
      <section className="title-bar">
        <h2> {title} </h2>
      </section>
    </>
  );
};

export default Title;
