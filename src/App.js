import { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";

import List from "./List";
import Pagination from "./Pagination";

function App() {
  const params = new URLSearchParams("per_page=24");
  const [url, setUrl] = useState(
    `https://api.mobilize.us/v1/organizations/1/events?${params.toString()}`
  );
  const [response, setResponse] = useState();

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => setResponse(result));
  }, [url]);

  if (!response) {
    return (
      <div className="d-flex justify-content-center mt-4">
        <Spinner animation="grow" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }
  return (
    <Container className="my-4">
      <List response={response} />
      <Pagination response={response} setUrl={setUrl} />
    </Container>
  );
}

export default App;
