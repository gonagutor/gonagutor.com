import React from 'react';
import Data from '../assets/techstack.json';

const TechstackList = () => {
  const ItemList : Array<JSX.Element> = [];
  Data.techstack.forEach((el) => {
    ItemList.push(
      <li className="techContainer">
        <img className="techImage" src={el.url} height="100px" width="100px" alt={el.urlalt} />
        <div className="techTextContainer">
          <h3>{el.title}</h3>
          <p>{el.desc}</p>
        </div>
      </li>,
    );
  });
  return (
    <ul className="techList">
      {ItemList}
    </ul>
  );
};

export default TechstackList;
