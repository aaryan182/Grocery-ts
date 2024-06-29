import React from 'react';
import { useRecoilValue } from 'recoil';
import { itemListState } from '../store/atoms';

const ItemList: React.FC = () => {
  const items = useRecoilValue(itemListState);

  return (
    <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 mt-6">
      <h2 className="text-2xl font-semibold mb-4">Item List</h2>
      <ul className="list-disc list-inside">
        {items.map((item, index) => (
          <li key={index} className="p-2 bg-green-100 rounded-lg mb-2 shadow">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
