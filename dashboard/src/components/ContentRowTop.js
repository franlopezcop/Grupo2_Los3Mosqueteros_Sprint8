import ContentRowCenter from "./ContentRowCenter";
import ContentRowMovies from "./ContentRowMovies";
import Chart from "./Chart";

function ContentRowTop() {
  return (
    <>
      <ContentRowMovies />
      <ContentRowCenter />
      <Chart />
    </>
  );
}
export default ContentRowTop;
