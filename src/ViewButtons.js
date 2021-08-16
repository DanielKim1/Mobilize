import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

function ViewButtons({ view, setView }) {
  return (
    <ButtonGroup className="w-100">
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
