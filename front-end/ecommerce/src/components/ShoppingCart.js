import React, { useEffect, useState } from "react";
import { Segment, Image, Button, Input } from "semantic-ui-react";

const ProductSection = ({
    index,
    title,
    image,
    price,
    description,
    quantity,
    updateLocalStorage,
    productid,
}) => {
    const update = (quantity) => {
        setQuantity(quantity);
        updateLocalStorage(productid, quantity);
    };

    const [q, setQuantity] = useState(quantity);
    return (
        <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
            <Segment
                style={{ marginTop: "4px", width: "100%" }}
                padded="very"
                color="black"
            >
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <Image src={image} size="small" bordered />
                    <div style={{ marginLeft: "10px", width: "100%" }}>
                        <h1>{title}</h1>
                        <div style={{ overflow: "hidden", maxHeight: "30%" }}>
                            {description}
                        </div>
                        <h5>Quantity: </h5>{" "}
                        <Input
                            value={q}
                            onChange={(e) => update(e.target.value)}
                        />
                        <Button onClick={() => update(q + 1)}>+</Button>
                        <Button onClick={() => update(q - 1)}>-</Button>
                        <h5>Total Cost: ${price * q}</h5>
                    </div>
                </div>
            </Segment>
        </div>
    );
};

const ShoppingCart = () => {
    const [products, setProducts] = useState([]);
    var products_in_storage = localStorage.getItem("products_added");

    const updateLocalStorage = (productid, quantity) => {
        var product_to_update = products.findIndex((p) => p.id === productid);
        products[product_to_update].qty = quantity;

        setProducts([...products]);
        localStorage.setItem("products_added", JSON.stringify(products));
    };

    const checkout = () => {};
    const removeProduct = (idx) => {
        products.splice(idx, 1)
        console.log(products);
        setProducts([...products]);
        localStorage.setItem("products_added", JSON.stringify(products));
    };

    useEffect(() => {
        if (products_in_storage === null || products_in_storage.length === 0 || products_in_storage === "[]") {
            setProducts([
                {
                    id: 1,
                    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                    price: 109.95,
                    description:
                        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
                    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                    qty: 50,
                },
                {
                    id: 2,
                    title: "Mens Casual Premium Slim Fit T-Shirts ",
                    price: 22.3,
                    description:
                        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
                    category_id: 3,
                    image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
                    qty: 50,
                },
            ]);
        } else {
            setProducts(JSON.parse(products_in_storage));
        }
    }, []);

    return (
        <div>
            <h1>Your Shopping Cart</h1>
            <div
                style={{
                    width: "70%",
                    margin: "auto",
                }}
            >
                {products.map((p, index) => (
                    <div style={{display:"flex", flexDirection:"row"}}>
                        <div>
                        <Button color="red" onClick={()=>removeProduct(index)}size="mini">X</Button>
                        </div>
                        <ProductSection
                            key={index}
                            title={p.title}
                            image={p.image}
                            price={p.price}
                            quantity={p.qty}
                            description={p.description}
                            productid={p.id}
                            index={index + 1}
                            updateLocalStorage={updateLocalStorage}
                            onDelete={removeProduct}
                        />
                    </div>
                ))}
            </div>
            <Input
                style={{ marginTop: "30px", marginBottom: "50px" }}
                action={
                    <Button color="teal" onClick={checkout}>
                        Checkout
                    </Button>
                }
                actionPosition="left"
                placeholder="Search..."
                value={products.reduce((prev, curr) => {
                    return prev + curr.qty * curr.price;
                }, 0)}
            />
        </div>
    );
};

export default ShoppingCart;
