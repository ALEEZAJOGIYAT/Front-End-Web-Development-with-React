import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";
import { DishDetail } from "./DishDetail";

export class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDish: null,
    };

    console.log("Menu component constructed");
  }

  onDishSelect(dish) {
    this.setState({
      selectedDish: dish,
    });
  }

  render() {
    console.log("renders menu component");

    const menu = this.props.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 col-md-5 m-1">
          <Card onClick={() => this.onDishSelect(dish)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle> {dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">{menu}</div>

        <DishDetail dish={this.state.selectedDish} />
      </div>
    );
  }

  componentDidMount() {
    console.log("Menu component is added");
  }
}

// import React, { useState } from "react";
// import {
//   Card,
//   CardImg,
//   CardImgOverlay,
//   CardText,
//   CardBody,
//   CardTitle,
// } from "reactstrap";

// export const Menu = (props) => {
//   //   const dishes = [
//   //     {
//   //       id: 0,
//   //       name: "Uthappizza",
//   //       image: "assets/images/uthappizza.png",
//   //       category: "mains",
//   //       label: "Hot",
//   //       price: "4.99",
//   //       description:
//   //         "A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.",
//   //     },
//   //     {
//   //       id: 1,
//   //       name: "Zucchipakoda",
//   //       image: "assets/images/zucchipakoda.png",
//   //       category: "appetizer",
//   //       label: "",
//   //       price: "1.99",
//   //       description:
//   //         "Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce",
//   //     },
//   //     {
//   //       id: 2,
//   //       name: "Vadonut",
//   //       image: "assets/images/vadonut.png",
//   //       category: "appetizer",
//   //       label: "New",
//   //       price: "1.99",
//   //       description:
//   //         "A quintessential ConFusion experience, is it a vada or is it a donut?",
//   //     },
//   //     {
//   //       id: 3,
//   //       name: "ElaiCheese Cake",
//   //       image: "assets/images/elaicheesecake.png",
//   //       category: "dessert",
//   //       label: "",
//   //       price: "2.99",
//   //       description:
//   //         "A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms",
//   //     },
//   //   ];
//   const [dishesList, setDishesList] = useState(props);
//   const [selectedDish, setSelectedDish] = useState(null);
//   console.log("data", selectedDish);

//   const onDishSelect = (dish) => {
//     setSelectedDish({ dish });

//     if (dish !== null) {
//       return (
//         <Card>
//           <CardImg top src={dish.image} alt={dish.name} />
//           <CardBody>
//             <CardTitle>{dish.name}</CardTitle>
//             <CardText>{dish.description}</CardText>
//           </CardBody>
//         </Card>
//       );
//     } else {
//       return (
//         <div>
//           <h2>heloooo</h2>
//         </div>
//       );
//     }
//   };

//   return (
//     <div className="container">
//       <div className="row">
//         {dishesList?.dishes?.map((dish) => {
//           return (
//             <div className="col-12 col-md-5 m-1">
//               <Card key={dish.id} onClick={() => onDishSelect(dish)}>
//                 <CardImg width="100%" src={dish.image} alt={dish.name} />
//                 <CardImgOverlay>
//                   <CardTitle>{dish.name}</CardTitle>
//                 </CardImgOverlay>
//               </Card>
//             </div>
//           );
//         })}
//       </div>
//       <div className="row">
//         <div className="col-12 col-md-5 m-1">{selectedDish}</div>
//       </div>
//     </div>
//   );
// };
