import React, { useState } from "react";
import { useDebouncedCallback } from "use-debounce/lib";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import "./SearchInput.css";

interface Props {
  initialValue?: string;
  onChange: (value: string) => void;
}

const SearchInput = (props: Props) => {
  const { initialValue = "", onChange } = props;
  const [value, setValue] = useState(initialValue);
  const onChangeDebounced = useDebouncedCallback(onChange, 500);

  return (
    <Input
      size="large"
      className="rqe__search-input"
      placeholder="Search for movies"
      value={value}
      prefix={<SearchOutlined />}
      onChange={(e) => {
        setValue(e.target.value);
        onChangeDebounced(e.target.value);
      }}
    />
  );
};

export default SearchInput;
