package shoppingcartapi.entities;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import shoppingcartapi.vo.ProductVo;

import java.util.Map;

@Document(collection = "carts")
@Data
public class Cart {

    @Id
    private String id;

    @Indexed(unique = true)
    private int customerId;

    private Map<Integer, ProductVo> products;


}
