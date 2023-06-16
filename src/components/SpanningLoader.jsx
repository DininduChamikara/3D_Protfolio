import { Bars } from "react-loader-spinner";
import { SectionWrapper } from "../hoc";

function SpanningLoader() {
  return (
    <div className="flex justify-center">
      <Bars
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}

export default SectionWrapper(SpanningLoader, "") ;
