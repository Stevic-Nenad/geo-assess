import "./SearchInput.style.scss";
import SearchInputProps from "./SearchInput.props.ts";

const SearchInput = ({text, onChange}: SearchInputProps) => {
  return (
    <input className="input-search"
           value={text}
           onChange={() => onChange(text)}
           placeholder="Search..."
    />
  );
}

export default SearchInput;
