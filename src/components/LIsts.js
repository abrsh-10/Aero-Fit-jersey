import React from "react";
import data1 from "../data/data1";

export default function List() {
  const mainList = data1[0].map((l) => {
    let list1;
    if (l == "club") {
      list1 = data1[1].map((m) => {
        const arr1 = [],
          arr2 = [],
          arr3 = [];
        if (m.name == "premier league") {
          arr3.push(m.image);
          arr2.push(m.name);
          arr1.length = 0;
          data1[2].forEach((element) => {
            if (element.league == m.name) {
              arr1.push(element.club);
            }
          });
        }
        if (m.name == "la liga") {
          arr2.push(m.name);
          arr3.push(m.image);
          arr1.length = 0;
          data1[2].forEach((element) => {
            if (element.league == m.name) {
              arr1.push(element.club);
            }
          });
        }
        if (m.name == "serie a") {
          arr2.push(m.name);
          arr3.push(m.image);
          arr1.length = 0;
          data1[2].forEach((element) => {
            if (element.league == m.name) {
              arr1.push(element.club);
            }
          });
        }
        if (m.name == "bundesliga") {
          arr2.push(m.name);
          arr3.push(m.image);
          arr1.length = 0;
          data1[2].forEach((element) => {
            if (element.league == m.name) {
              arr1.push(element.club);
            }
          });
        }
        if (m.name == "ligue 1") {
          arr2.push(m.name);
          arr3.push(m.image);
          arr1.length = 0;
          data1[2].forEach((element) => {
            if (element.league == m.name) {
              arr1.push(element.club);
            }
          });
        }

        return arr2.map((o) => {
          const logo = arr3.map((t) => <img className="leagueLogo" src={t} />);
          return (
            <ul>
              <span className="order2">
                {logo}
                {o}
              </span>
              {arr1.map((p) => (
                <li>{p}</li>
              ))}
            </ul>
          );
        });
      });
    } else if (l == "country") {
      list1 = data1[3].map((m) => {
        const arr1 = [],
          arr2 = [],
          arr3 = [];
        if (m.name == "africa") {
          arr3.push(m.image);
          arr2.push(m.name);
          arr1.length = 0;
          data1[4].forEach((element) => {
            if (element.continent == m.name) {
              arr1.push(element.name);
            }
          });
        }
        if (m.name == "europe") {
          arr3.push(m.image);
          arr2.push(m.name);
          arr1.length = 0;
          data1[4].forEach((element) => {
            if (element.continent == m.name) {
              arr1.push(element.name);
            }
          });
        }
        if (m.name == "south america") {
          arr3.push(m.image);
          arr2.push(m.name);
          arr1.length = 0;
          data1[4].forEach((element) => {
            if (element.continent == m.name) {
              arr1.push(element.name);
            }
          });
        }
        return arr2.map((o) => {
          const logo = arr3.map((t) => <img className="leagueLogo" src={t} />);
          return (
            <ul>
              <span className="order2">
                {logo}
                {o}
              </span>
              {arr1.map((p) => (
                <li>{p}</li>
              ))}
            </ul>
          );
        });
      });
    } else if (l == "custom") {
      list1 = <li>make your custom shirt</li>;
    }
    return (
      <ul>
        <span className="order1">{l}</span>
        {list1}
      </ul>
    );
  });
  return (
    <div className="abrham">
      <ul className="mainList">{mainList}</ul>
    </div>
  );
}
