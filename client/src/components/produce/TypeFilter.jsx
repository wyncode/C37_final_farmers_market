import React, { useContext, useState } from 'react';
import { AppContext } from '../../context/AppContext';

const TypeFilter = () => {
  const { produceList } = useContext(AppContext);
  const [type, setType] = useState(false);

  // const selectedType = () => {
  //   <h1></h1>;

  // };
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
  /* <input type="checkbox" onChange={(e) => setType(e.target.value)} value={produce.foodType} */
}
export default TypeFilter;
