import { useRef } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function Filters({ url, setUrl }) {
  const ref = useRef();

  return (
    <InputGroup>
      <Form.Label className="visually-hidden">Zip code</Form.Label>
      <Form.Control ref={ref} placeholder="ZIP Code" />
      <Button
        onClick={() => {
          if (/^\d{5}$/.test(ref.current.value)) {
            const newUrl = new URL(url);
            newUrl.searchParams.set("zipcode", ref.current.value);
            newUrl.searchParams.delete("cursor");
            newUrl.searchParams.delete("page");
            setUrl(newUrl.toString());
          }
        }}
      >
        Filter by ZIP Code
      </Button>
    </InputGroup>
  );
}

export default Filters;
