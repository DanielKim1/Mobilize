import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

/**
 * @param {string} view
 * @param {function} setView
 * Hide for screen readers. The map view doesn't make sense for screen readers.
 */
function ViewButtons({ view, setView }) {
  return (
    <ButtonGroup aria-hidden className="w-100">
      <Button onClick={() => setView("list")} active={view === "list"}>
        List view
      </Button>
      <Button onClick={() => setView("map")} active={view === "map"}>
        Map view
      </Button>
    </ButtonGroup>
  );
}

export default ViewButtons;
