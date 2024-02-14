import { Button } from "@mui/material";
import { useState } from "react";
//import { CartContex } from "../contex/CartContex";

export default function CountCart({ onAdd }) {
  const [count, setCount] = useState(1);

  function sumar() {
    setCount(count + 1);
  }

  function restar() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  return (
    <div>
      <h2 style={{ fontSize: "1.4em", marginBottom: "0.3em" }}>
        Cantidad: {count}
      </h2>
      <div style={{ display: "flex" }}>
        <div
          style={{ marginRight: "5%", marginTop: "0.7em", fontSize: "1.3em" }}
        >
          <Button
            size="small"
            variant="contained"
            sx={{ backgroundColor: "black", color: " white" }}
            onClick={sumar}
          >
            +
          </Button>
        </div>
        <div
          style={{
            marginTop: "0.7em",
            fontSize: "1.3em",
            backgroundColor: "black",
            color: " white",
          }}
        >
          <Button
            size="small"
            variant="contained"
            sx={{ backgroundColor: "black", color: " white" }}
            onClick={restar}
          >
            -
          </Button>
        </div>
      </div>
      <Button
        size="small"
        sx={{
          marginTop: "0.7em",
          fontSize: "1.3em",
          backgroundColor: "black",
          color: " white",
        }}
        onClick={() => onAdd(count)}
      >
        Agregar
      </Button>
    </div>
  );
}
