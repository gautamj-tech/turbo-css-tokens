import { GetStaticProps } from 'next';
import { useState } from 'react';
import { getThemeTokens, Themes } from '../tokens/themes';

export interface TokenEntry {
  tokenName: string;
  cssVariable: string;
  value: string;
}

export const fetchTokens = (theme: Themes): TokenEntry[] => {
  const tokens = getThemeTokens(theme);
  return Object.entries(tokens).map(([tokenName, cssVariable]) => {
    let value = "";
    if (cssVariable.startsWith("var(") && cssVariable.endsWith(")")) {
      const rootStyles = { /* provide default values */ };
      value = rootStyles[cssVariable.slice(4, -1).trim()]?.trim() || cssVariable;
    } else {
      value = cssVariable;
    }
    return { tokenName, cssVariable, value };
  });
};

export const getStaticProps: GetStaticProps = async () => {
  const tokensList = fetchTokens(Themes.Base);

  return {
    props: {
      tokensList,
    },
  };
};

const Home: React.FC<{ tokensList: TokenEntry[] }> = ({ tokensList }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredTokens, setFilteredTokens] = useState(tokensList);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
    setFilteredTokens(
      tokensList.filter(token =>
        token.value.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">CSS Tokens</h1>
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
