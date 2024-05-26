import React from 'react';
import './Options.css';

interface Props {
  title: string;
}

const Options: React.FC<Props> = ({ title }: Props) => {
  return (
    <div className="OptionsContainer">
      <h1>{title}</h1>
      <p>Custom settings are currently not available.</p>
    </div>

  );
};

export default Options;
