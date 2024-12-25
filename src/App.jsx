import data from "./assets/data.json";
import Content from "./components/Content";
import Details from "./components/Details";
import Result from "./components/Result";
import Detail from "./components/Detail";

function App() {
  return (
    <Content>
      <Result />
      <Details>
        <Detail
          color={"var(--light-red)"}
          bgC={"#fcf3f3"}
          value={data[0].score}
          name={data[0].category}
          icon={data[0].icon}
        />
        <Detail
          color={"var(--orangey-yellow)"}
          bgC={"#fffaf2"}
          value={data[1].score}
          name={data[1].category}
          icon={data[1].icon}
        />
        <Detail
          color={"var(--green-teal)"}
          bgC={"#f0fbf8"}
          value={data[2].score}
          name={data[2].category}
          icon={data[2].icon}
        />
        <Detail
          color={"var(--cobalt-blue)"}
          bgC={"#f1f2fc"}
          value={data[3].score}
          name={data[3].category}
          icon={data[3].icon}
        />
      </Details>
    </Content>
  );
}

export default App;
