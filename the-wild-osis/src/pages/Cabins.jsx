import { useState } from "react";
import CabinTable from "../features/cabins/CabinTable";
import { Button } from "../ui/Button";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CreateCabinForm from "../features/cabins/CreateCabinForm";

function Cabins() {
  const [shoFworm, setShoFworm] = useState(false);
  return (<>
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>TEST</p>
    </Row>
    <Row>
      <CabinTable />
      <Button onClick={() => setShoFworm(!shoFworm)}>
        Add new cabin
      </Button>
      {shoFworm && <CreateCabinForm/>}
    </Row>
  </>

  );
}

export default Cabins;
