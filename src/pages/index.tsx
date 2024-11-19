import { useEffect, useState } from "react";
import { getThemeTokens, Themes } from "../tokens/themes";

export interface TokenEntry {
  tokenName: string;
  cssVariable: string;
  value: string;
}

export const fetchTokens = (theme: Themes): TokenEntry[] => {
  const tokens = getThemeTokens(theme);
  return Object.entries(tokens).map(([tokenName, cssVariable]) => {
    const rootStyles = getComputedStyle(document.documentElement);
    let value = "";
    if (cssVariable.startsWith("var(") && cssVariable.endsWith(")")) {
      value = rootStyles
        .getPropertyValue(cssVariable.slice(4, -1).trim())
        .trim();
    } else {
      value = cssVariable;
    }
    return { tokenName, cssVariable, value };
  });
};

const Home: React.FC = () => {
  const [tokensList, setTokensList] = useState<TokenEntry[]>([]);
  const [currentTheme, setCurrentTheme] = useState<Themes>(Themes.Base);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    const tokenData = fetchTokens(currentTheme);
    setTokensList(tokenData);
  }, [currentTheme]);

  const handleThemeChange = (theme: Themes) => {
    setCurrentTheme(theme);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  // Filter tokens by value based on search query
  const filteredTokens = tokensList.filter(token =>
    token.value.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">CSS Tokens</h1>

      <div className="mb-4">
        <label htmlFor="theme-selector" className="mr-2">Select Theme:</label>
        <select
          id="theme-selector"
          value={currentTheme}
          onChange={(e) => handleThemeChange(e.target.value as Themes)}
          className="p-2 border border-gray-300"
        >
          <option value={Themes.Base}>Base</option>
          <option value={Themes.Blue}>Blue</option>
        </select>
      </div>

      {/* Search Input */}
      <div className="mb-4">
        <label htmlFor="search" className="mr-2">Search by Value:</label>
        <input
          id="search"
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search by value"
          className="p-2 border border-gray-300"
        />
      </div>

      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Token Name</th>
            <th className="border border-gray-300 p-2">CSS Variable</th>
            <th className="border border-gray-300 p-2">Value</th>
          </tr>
        </thead>
        <tbody>
          {filteredTokens.map(({ tokenName, cssVariable, value }) => (
            <tr key={tokenName}>
              <td className="border border-gray-300 p-2">{tokenName}</td>
              <td className="border border-gray-300 p-2">{cssVariable}</td>
              <td className="border border-gray-300 p-2">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;