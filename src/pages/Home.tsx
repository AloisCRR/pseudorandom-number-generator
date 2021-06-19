import React from 'react';
import { Link } from 'react-router-dom';

const Home = (): JSX.Element => (
  <>
    <header className="bg-white absolute left-1/2 transform -translate-x-1/2 mt-3 p-4 text-center w-2/5 shadow-lg rounded-lg">
      <h4 className="text-2xl font-bold">Pseudorandom number generation</h4>
    </header>
    <main className="flex h-screen w-screen">
      <article className="flex-1 text-center bg-green-500 h-full flex items-center justify-center">
        <h2>
          <Link
            className="transition duration-500 ease-in-out p-3 rounded-lg hover:bg-green-300 hover:shadow-2xl text-5xl cursor-pointer"
            to="/middle-square">
            Middle Square
          </Link>
        </h2>
      </article>
      <article className="flex-1 text-center bg-blue-500 h-full flex items-center justify-center">
        <h2>
          <Link
            className="transition text-white duration-500 ease-in-out p-3 rounded-lg hover:bg-blue-300 hover:shadow-2xl text-5xl cursor-pointer"
            to="/middle-product">
            Middle Product
          </Link>
        </h2>
      </article>
    </main>
  </>
);

export default Home;
