import React, { useState } from "react";
import { useDebounce } from "use-debounce/lib";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import useUpdateEffect from "hooks/useUpdateEffect";

import "./SearchInput.css";

interface Props {
  initialValue?: string;
  onChange: (value: string) => void;
}

const SearchInput = (props: Props) => {
  const { initialValue = "", onChange } = props;
  const [value, setValue] = useState(initialValue);
  const [debouncedValue] = useDebounce(value, 500);

  useUpdateEffect(() => {
    onChange(debouncedValue);
  }, [debouncedValue]);

  return (
    <Input
      size="large"
      className="rqe__search-input"
      placeholder="Search for movies"
      value={value}
      prefix={<SearchOutlined />}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default SearchInput;
