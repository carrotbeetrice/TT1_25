package shoppingcartapi.entities;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "orderItems")
@Data
public class OrderItem {

    @Id
    private String id;

    private String productId;

    private String orderId;

    private int productQty;

    private double totalPrice;

}
