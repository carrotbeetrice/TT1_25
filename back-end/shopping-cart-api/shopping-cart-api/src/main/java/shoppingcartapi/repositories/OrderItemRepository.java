package shoppingcartapi.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import shoppingcartapi.entities.OrderItem;

public interface OrderItemRepository extends MongoRepository<OrderItem,String> {
}
