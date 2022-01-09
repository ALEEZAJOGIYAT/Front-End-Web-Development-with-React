import { Navbar, NavbarBrand } from "reactstrap";
import { Menu } from "./MenuComponent";
import { DISHES } from "./shared/dishes";
import { useState } from "react/cjs/react.development";
import { DishDetail } from "./DishDetail";

function MainComponent() {
  const [dishes, setDishes] = useState(DISHES);

  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={dishes} />
      <DishDetail dishes={dishes} />
    </div>
  );
}

export default MainComponent;
