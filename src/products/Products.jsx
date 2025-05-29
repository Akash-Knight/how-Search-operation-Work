import image15 from '/image15.jpg';
import image12 from "/image12.jpg";
import img3 from "../assets/people.jpg";
import img4 from "../assets/image111.jpg";

const products = [
    {
        id: 1,
        image:image15,
        name: "Red",
        originPrice: 100,
        discount: 10,
        get finalPrice() {
            return this.originPrice - (this.originPrice * this.discount / 100);
        }
    },
    {
        id: 2,
        image: image12,
        name: "Blue",
        originPrice: 100,
        discount: 5,
        get finalPrice() {
            return this.originPrice - (this.originPrice * this.discount / 100);
        }
    },
    {
        id: 3,
        image: img3,
        name: "Yellow",
        originPrice: 100,
        discount: 4,
        get finalPrice() {
            return this.originPrice - (this.originPrice * this.discount / 100);
        }
    },
    {
        id: 4,
        image: img4,
        name: "Orange",
        originPrice: 100,
        discount: 8,
        get finalPrice() {
            return this.originPrice - (this.originPrice * this.discount / 100);
        }
    },

     {
        id: 5,
        image: img4,
        name: "Orange",
        originPrice: 100,
        discount: 8,
        get finalPrice() {
            return this.originPrice - (this.originPrice * this.discount / 100);
        }
    },

     {
        id: 6,
        image: img4,
        name: "Orange",
        originPrice: 100,
        discount: 8,
        get finalPrice() {
            return this.originPrice - (this.originPrice * this.discount / 100);
        }
    },

     {
        id: 7,
        image: img4,
        name: "Orange",
        originPrice: 100,
        discount: 8,
        get finalPrice() {
            return this.originPrice - (this.originPrice * this.discount / 100);
        }
    },

     {
        id: 8,
        image: img4,
        name: "Orange",
        originPrice: 100,
        discount: 8,
        get finalPrice() {
            return this.originPrice - (this.originPrice * this.discount / 100);
        }
    }
];

export default products;
