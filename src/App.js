import { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";

import Filters from "./Filters";
import List from "./List";
import Map from "./Map";
import Pagination from "./Pagination";
import ViewButtons from "./ViewButtons";

function App() {
  const [response, setResponse] = useState();
  const [url, setUrl] = useState(
    "https://api.mobilize.us/v1/organizations/1/events?per_page=24"
  );

  // Attempting to replace the view/setView logic with `display: none` or
  // react-bootstrap/Tabs will cause janky behavior when the map renders.
  const [view, setView] = useState("list");

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
    <>
      <ViewButtons view={view} setView={setView} />
      <Filters url={url} setUrl={setUrl} />
      {view === "map" ? (
        <Map response={response} />
      ) : (
        <Container className="my-4">
          <List response={response} />
          <Pagination response={response} setUrl={setUrl} />
        </Container>
      )}
    </>
  );
}

export default App;
