import React from 'react';

type Props = {
  text: string;
  isGenerate?: boolean;
};

const Button = ({ text, isGenerate }: Props): JSX.Element => (
  <div className="mt-4 mr-2 last:mr-0">
    <button
      type={isGenerate ? 'submit' : 'reset'}
      className={`${
        isGenerate ? 'hover:bg-green-200' : 'hover:bg-red-200'
      } border border-white text-white transition duration-500 ease-in-out transform hover:scale-110 hover:border-transparent hover:text-black focus:outline-none px-4 py-2 rounded-full`}>
      {text}
    </button>
  </div>
);

export default Button;
