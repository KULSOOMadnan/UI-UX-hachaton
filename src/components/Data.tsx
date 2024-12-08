import { Stringifier } from "postcss";
import image from '../public/assests/livingsofa.jpeg'
import table from '../public/assests/table.png'
import white from '../public/assests/whitesofa.png'
import  chair from '../public/assests/whitechair.png'
import image1 from '../public/assests/sofa.png'
import pooty from '../public/assests/potty.jpeg'
import lamp from '../public/assests/lamp.png'
import gray from '../public/assests/graysofa.png'
import pinky from '../public/assests/pingy.jpeg'
import { StaticImageData } from "next/image";

interface ProductInterface {
  id: number;
  src: StaticImageData;
  title: string;
  description: string;
  disprice?: String;
  price: string;
  Details? : string
}


export const productImages = [
  {id :1 , img: image1  } ,
  {id :2 , img: image1  } ,
  {id :3 , img: image1  } ,
  {id :4 , img: image1  } ,
  {id :5 , img: image1  } ,
]

export const ProductData: ProductInterface[] = [
  {
    id: 1,
    title: "Sylterine",
    description: "Stylish cafe chair",
    price: "2.500.000",
    src: table,
    disprice: "3.500.000",
    Details : 'Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.'
  },
  {
    id: 2,
    title: "Leviosa",
    description: "Stylish cafe chair",
    price: "2.500.000",
    src: chair,
    disprice: "3.500.000",
  },
  {
    id: 3,
    title: "Lolito",
    description: "Luxuary big Sofa",
    price: "7.000.000",
    src: white ,
    disprice: "14.000.000",
  },
  {
    id: 4,
    title: "Respira",
    description: "outdoor",
    price: "500.000",
    src: image,
  },
  {
    id: 5,
    title: "Grifo",
    description: "NightLamp",
    price: "1.500.000",
    src: lamp,
    disprice: "3.500.000",
  },
  {
    id: 6,
    title: "Muggo",
    description: "Small mug",
    price: "2.500.000",
    src: gray,
  },
  {
    id: 7,
    title: "Pingky",
    description: "Cute bed set",
    price: "7.000.000",
    disprice :'14.000.000',
    src: pinky,
  },
  {
    id: 8,
    title: "Potty",
    description: "Minimalist flower pot",
    price: "500.000",
    src: pooty,
  },
];
