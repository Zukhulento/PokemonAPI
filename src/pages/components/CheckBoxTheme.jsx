import useThemeStore from "@/stores/themeStore";

export default function CheckBoxTheme(params) {
  const { toggleTheme } = useThemeStore();

  return (
    <label className="switch">
      <input type="checkbox" onChange={toggleTheme}/>
      <span className="slider"></span>
    </label>
  );
}
