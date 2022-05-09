import React from 'react';
import clsx from 'clsx';
import css from './css.module.scss'


const Loader: React.FC = () => {
  return (
    <div className={clsx(css["loader"])}>
      {"....Carregando"}
    </div>
  );
}

export default Loader;
