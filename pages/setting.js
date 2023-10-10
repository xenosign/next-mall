import { useTheme } from '@/lib/ThemeContext';

export default function Setting() {
  const { theme, setTheme } = useTheme();

  const handleSelected = (e) => {
    setTheme(e.target.value)
  }

  return (
    <div>
      <select onChange={handleSelected}>
        <option value={'dark'}>다크 모드</option>
        <option value={'light'}>일반 모드</option>
      </select>
    </div>
  );
}
