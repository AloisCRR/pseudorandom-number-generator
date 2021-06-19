import React from 'react';

type DefaultProps = {
  label: string;
  name: string;
};

const Input = ({ label, name }: DefaultProps) => (
  <div className="mr-4 last:mr-0">
    <label>
      <span className="block mb-3 font-bold text-xl text-white text-center">
        {label}
      </span>
      <input
        type="number"
        name={name}
        min="1"
        className="p-3 rounded-full text-center focus:outline-none"
        required
      />
    </label>
  </div>
);

export default Input;
