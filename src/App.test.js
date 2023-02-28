import { render, screen } from '@testing-library/react';
import App from './App';
import Home from './code/Home.js';
import NoData from './code/NoData.js';
import Tables from './code/Tables.js';

const tablesInstancia = new Tables();

test('fuction camelCase from tables', () => {
  expect(tablesInstancia.camelCase('testeativo')).toBe('Testeativo');
});

test('renders Tables react', () => {
  render(<Tables TableName={'testes'} dataBase={[]} menuKeys={[]}></Tables>);
});

test('renders NoData react', () => {
  render(<NoData />);
});

test('renders Home react', () => {
  render(<Home />);
});

test('renders app react', () => {
  render(<App />);
});
