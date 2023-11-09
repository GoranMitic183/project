import React from "react";

const TrainingTable = ({ ...props }) => {
  const { data } = props;

  const trainings = data[0].program[0];

  return (
    <table class="table table-dark table-striped">
      <thead>
        <tr>
          <th scope="col">week</th>
          <th scope="col">Mon</th>
          <th scope="col">Wed</th>
          <th scope="col">Fri</th>
          <th scope="col">Sun</th>
        </tr>
      </thead>
      <tbody>
        {Object.values(trainings).map((week, index) => {
          return (
            <tr>
              <th scope="row" key={index}>
                {index + 1}
              </th>
              {week.map((day, dayIndex) => {
                return <td key={dayIndex}>{Object.values(day)}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default TrainingTable;
