package shoppingcartapi.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import shoppingcartapi.entities.Product;

import java.util.List;


public interface ProductRepository  extends MongoRepository<Product,String> {

    @Query(value = "{product_id: ?0 }",fields="{_id:0}")
    Product findProductById(int productId);
}
