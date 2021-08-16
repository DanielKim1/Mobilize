import { useRef } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function Filters({ url, setUrl }) {
  const ref = useRef();

  return (
    <InputGroup>
      <Form.Control ref={ref} placeholder="ZIP Code" />
      <Button
        onClick={() => {
          if (/^\d{5}$/.test(ref.current.value)) {
            const newUrl = new URL(url);
            newUrl.searchParams.set("zipcode", ref.current.value);
            setUrl(newUrl.toString());
          }
        }}
      >
        Filter
      </Button>
    </InputGroup>
  );
}

export default Filters;
