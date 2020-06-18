import React from 'react';

const FarmerFilter = ({
  farmers,
  setSearchTerm,
  setChosenStore,
  searchTerm
}) => {
  return (
    <div>
      <h1>Farmers</h1>
      <p
        onClick={() => {
          setChosenStore('');
          setSearchTerm('');
        }}
      >
        All Stores
      </p>
      {farmers &&
        farmers.map((farmer) => {
          return (
            <p
              key={farmer._id}
              onClick={() => {
                setChosenStore(farmer._id);
                setSearchTerm('');
              }}
            >
              {farmer.storeName}
            </p>
          );
        })}
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default FarmerFilter;
