import React, { Suspense, lazy } from 'react';
import './App.css';

const ItemList = lazy(() => import('./components/ItemList'));
const AddItem = lazy(() => import('./components/AddItem'));

const App: React.FC = () => {
  return (
    <div className="App min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-green-500 p-4">
      <h1 className="text-4xl font-bold mb-8 text-white transform hover:scale-105 transition-transform duration-300 bg-red-400">Grocery Item List</h1>
      <Suspense fallback={<div className="text-white">Loading...</div>}>
        <AddItem />
        <ItemList />
      </Suspense>
    </div>
  );
};

export default App;
