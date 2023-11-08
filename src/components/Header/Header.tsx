import './Header.scss';

type Props = {
  query: string;
  changeQuery: (value: string) => void;
}

export const Header: React.FC<Props> = ({ query, changeQuery }) => {
  return (
    <header className="header bg-primary">
      <div className="header-container">
        <span className="logo">
          Memes
        </span>

        <span className="input-container">
          <input
            type="text"
            placeholder="Search"
            className="header-input"
            value={query}
            onChange={(e) => changeQuery(e.target.value)}
          />
        </span>
      </div>
    </header>
  );
}
