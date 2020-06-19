import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

const TypeFilter = () => {
  const { produceList } = useContext(AppContext);
  return (
    <div>
      <h1>Type</h1>
      {produceList &&
        produceList.map((produce) => {
          return <h1>{produce.foodType}</h1>;
        })}
    </div>
  );
};

{
  /* <input type="checkbox" onChange={(e) => setType(e.target.value)} value={farmer.foodType} */
}
export default TypeFilter;
