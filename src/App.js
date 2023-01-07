//style
import "./App.css";
//Components
import TimeLine from "./components/TimeLine/Index";
//hooks
import { useState } from "react";

function App() {
  const [data, setData] = useState([
    {
      author: "Ali Master",
      postView: 25,
      heading: "Lorem Ipsum",
      date: "Dec 30 2022",
    },
    {
      author: "mohamamad Master",
      postView: 100,
      heading: "Lorem Ipsum",
      date: "Dec 10 2021",
    },
    {
      author: "Reza Master",
      postView: 120,
      heading: "Lorem Ipsum",
      date: "Dec 15 2019",
    },
    {
      author: "Amir Master",
      postView: 114,
      heading: "Lorem Ipsum",
      date: "Dec 28 2019",
    },
    {
      author: "Sohrab Master",
      postView: 50,
      heading: "Lorem Ipsum",
      date: "Dec 01 2018",
    },
    {
      author: "Armin Master",
      postView: 70,
      heading: "Lorem Ipsum",
      date: "Dec 28 2016",
    },
    {
      author: "Hamid Master",
      postView: 80,
      heading: "Lorem Ipsum",
      date: "Dec 28 2015",
    },
  ]);
  return (
    <div className="App">
      <div id="wrapper">
        <div className="timeline-margin">
          <ul id="timeline">
            {data.length &&
              data.map((item) => {
                return (
                  <TimeLine
                    date={item.date}
                    author={item.author}
                    haeding={item.heading}
                    postView={item.postView}
                  />
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
