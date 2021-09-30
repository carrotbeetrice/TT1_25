package shoppingCartApi.entities;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import shoppingCartApi.vo.ProductVo;

import java.util.List;
import java.util.Map;

@Document(collection = "carts")
@Data
public class Cart {

    @Id
    private String id;

    @Indexed(unique = true)
    private int customerId;

    List<ProductVo> products;


}
