const ThemeToggle = ({ theme, toggleTheme }) => {
  console.log(theme);
  return (
    <div>
      <button
        onClick={toggleTheme}
        className="btn px-6 py-2 rounded bg-amber-300 cursor-pointer"
      >
        {theme.mode == 'light' ? 'Dark' : 'Light'}
      </button>
    </div>
  );
};

export default ThemeToggle;
