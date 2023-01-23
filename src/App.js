import React from 'react';
import ServiceAdd from './components/ServiceAdd';
import ServiceList from './components/ServiceList';
import './App.css';
import ServiceFilter from './components/ServiceFilter';

export default function App() {
  return (
    <>
      <ServiceFilter />
      <ServiceAdd />
      <ServiceList />
    </>
  );
}



