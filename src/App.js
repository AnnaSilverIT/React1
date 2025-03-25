import React from "react";
import { Chart } from "react-google-charts"



function App() {
  const data = [
    ["Задача", "Часов в день"],
    ["Работа", 7],
    ["Еда", 2],
    ["Обучение", 2],
    ["Общение с семьей", 4],
    ["Сон", 9],
  ];

  const options = {
    title: "Моя дневная активность",
  };
  return (
    <div className="App">
      <header className="App-header">
        <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
      </header>
    </div>
  );
}


export default App;
