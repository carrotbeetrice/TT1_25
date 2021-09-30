package shoppingcartapi.entities;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "products")
@Data
public class Product {

    @Id
    private int id;

    private String title;
    private double price;
    private String description;
    private int category_id;
    private String image;
    private int qty;

}
