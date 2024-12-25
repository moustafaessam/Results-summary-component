import React, { lazy, Suspense } from "react";
import data from "./assets/data.json"; // Directly import the data

// Lazy load all components
const Content = lazy(() => import("./components/Content"));
const Details = lazy(() => import("./components/Details"));
const Result = lazy(() => import("./components/Result"));
const Detail = lazy(() => import("./components/Detail"));

function App() {
  return (
    <Suspense fallback={<div>Loading Content...</div>}>
      <Content>
        <Suspense fallback={<div>Loading Result...</div>}>
          <Result />
        </Suspense>
        <Suspense fallback={<div>Loading Details...</div>}>
          <Details>
            <Suspense fallback={<div>Loading Detail...</div>}>
              <Detail
                color={"var(--light-red)"}
                bgC={"#fcf3f3"}
                value={data[0].score}
                name={data[0].category}
                icon={data[0].icon}
              />
            </Suspense>
            <Suspense fallback={<div>Loading Detail...</div>}>
              <Detail
                color={"var(--orangey-yellow)"}
                bgC={"#fffaf2"}
                value={data[1].score}
                name={data[1].category}
                icon={data[1].icon}
              />
            </Suspense>
            <Suspense fallback={<div>Loading Detail...</div>}>
              <Detail
                color={"var(--green-teal)"}
                bgC={"#f0fbf8"}
                value={data[2].score}
                name={data[2].category}
                icon={data[2].icon}
              />
            </Suspense>
            <Suspense fallback={<div>Loading Detail...</div>}>
              <Detail
                color={"var(--cobalt-blue)"}
                bgC={"#f1f2fc"}
                value={data[3].score}
                name={data[3].category}
                icon={data[3].icon}
              />
            </Suspense>
          </Details>
        </Suspense>
      </Content>
    </Suspense>
  );
}

export default App;
