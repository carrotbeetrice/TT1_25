package shoppingcartapi.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import shoppingcartapi.entities.Cart;

public interface CartRepository extends MongoRepository<Cart,String> {

    @Query(value = "{customerId: ?0 }",fields = "{_id:0}")
    Cart findCartByCustomerId(int customerId);
}