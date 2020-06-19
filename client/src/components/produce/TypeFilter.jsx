import React, { useContext, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import FarmerFilter from './FarmerFilter';

const TypeFilter = ({ chosenType, setChosenType }) => {
  const { produceList } = useContext(AppContext);
  const checkboxOne = document.getElementById('checkbox-1').checked;
  const handleTypeFilter = (type, checkbox) => {
    const checkboxOne = document.getElementById('checkbox-1').checked;
    const checkboxTwo = document.getElementById('checkbox-2').checked;
    const checkboxThree = document.getElementById('checkbox-3').checked;
    const checkboxFour = document.getElementById('checkbox-4').checked;
    const checkboxFive = document.getElementById('checkbox-5').checked;

    const checkArr = [
      checkboxOne,
      checkboxTwo,
      checkboxThree,
      checkboxFour,
      checkboxFive
    ];
    const isBoxChecked = checkArr.filter((box) => box !== checkbox);

    console.log(isBoxChecked);
    setChosenType(type);
  };

  return (
    <div>
      <h1>Type</h1>
      <div>
        <label htmlFor="Vegetables">Vegetables</label>
        <input
          onChange={() => handleTypeFilter('Vegetable', checkboxOne)}
          type="checkbox"
          value="Vegetables"
          id="checkbox-1"
        />
      </div>
      <div>
        <label htmlFor="Fruit">Fruit</label>
        <input
          onChange={() => handleTypeFilter('Fruit')}
          type="checkbox"
          value="Fruit"
          id="checkbox-2"
        />
      </div>
      <div>
        <label htmlFor="Dairy">Dairy</label>
        <input
          onChange={() => handleTypeFilter('Dairy')}
          type="checkbox"
          value="Dairy"
          id="checkbox-3"
        />
      </div>
      <div>
        <label htmlFor="Meat">Meat</label>
        <input
          onChange={() => handleTypeFilter('Meat')}
          type="checkbox"
          value="Meat"
          id="checkbox-4"
        />
      </div>
      <div>
        <label htmlFor="Eggs">Eggs</label>
        <input
          onChange={() => handleTypeFilter('Eggs')}
          type="checkbox"
          value="Eggs"
          id="checkbox-5"
        />
      </div>
    </div>
  );
};

{
  /* <input type="checkbox" onChange={(e) => setType(e.target.value)} value={farmer.foodType} */
}
export default TypeFilter;
