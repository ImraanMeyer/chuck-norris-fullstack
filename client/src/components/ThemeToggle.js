import React from 'react';
import useDarkMode from 'use-dark-mode';

import Toggle from './Toggle';

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);

  return (
    <div className="theme-selector">
      <button type="button" onClick={darkMode.disable}>
        ☀
      </button>
      <Toggle checked={darkMode.value} onChange={darkMode} />
      <button type="button" onClick={darkMode.enable}>
        ☾
      </button>
    </div>
  );
};

export default DarkModeToggle;