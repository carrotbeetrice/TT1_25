package shoppingcartapi.api;

import lombok.extern.slf4j.Slf4j;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import shoppingcartapi.entities.Cart;
import shoppingcartapi.entities.Product;
import shoppingcartapi.repositories.CartRepository;
import shoppingcartapi.repositories.ProductRepository;
import shoppingcartapi.vo.AddRemoveProductVo;
import shoppingcartapi.vo.ProductVo;

import java.util.Map;

@RestController
@Slf4j
public class Api {

    @Autowired
    ProductRepository productRepository;

    @Autowired
    CartRepository cartRepository;

    @PostMapping("/cart/add")
    public ResponseEntity<String> addToCart(@RequestBody AddRemoveProductVo addRemoveProductVo){
        int customerId = 1;
        int productId = addRemoveProductVo.getProductId();
        int productQtyToBeAdded = addRemoveProductVo.getProductQty();
        //Get Product Details
        Product productDetails = productRepository.findProductById(productId);
        //Get current cart
        Cart cart = cartRepository.findCartByCustomerId(customerId);
        //Get current list of products
        Map<Integer, ProductVo> products = cart.getProducts();
        //Check if product is currently in cart
        if(products.keySet().contains(productId)){
            //Get the particular product corresponding to product ID
            ProductVo currProduct = products.get(productId);
            int newProductQty = currProduct.getProductQty()+productQtyToBeAdded;
            currProduct.setProductQty(newProductQty);
            currProduct.setProductTotalPrice(newProductQty*productDetails.getPrice());
            cartRepository.save(cart);
        }
        else{
            ProductVo currProduct = new ProductVo();
            currProduct.setProductId(productId);
            currProduct.setProductName(productDetails.getTitle());
            currProduct.setProductImg(productDetails.getImage());
            currProduct.setProductQty(productQtyToBeAdded);
            currProduct.setProductTotalPrice(productDetails.getPrice()*productQtyToBeAdded);
        }
        return ResponseEntity.ok("Cart updated");
    }

    @PostMapping("/cart/remove")
    public ResponseEntity<String> removeFromCart(@RequestBody AddRemoveProductVo addRemoveProductVo) {
        int customerId = 1;
        int productId = addRemoveProductVo.getProductId();
        int productQtyToBeRemoved = addRemoveProductVo.getProductQty();
        //Get current cart
        Cart cart = cartRepository.findCartByCustomerId(customerId);
        //Get current list of products
        Map<Integer, ProductVo> products = cart.getProducts();
        //Check if product is currently in cart
        if(products.keySet().contains(productId)){
            ProductVo currProduct = products.get(productId);
            int newProductQty = Math.max(currProduct.getProductQty()-productQtyToBeRemoved,0);
            if(newProductQty == 0){
                products.remove(productId);
            }
            else{
                currProduct.setProductQty(newProductQty);
                currProduct.setProductTotalPrice(newProductQty*1);
                products.replace(productId,currProduct);
            }
            cartRepository.save(cart);
            return ResponseEntity.ok("Cart updated");
        }
        else{
            return ResponseEntity.ok("Item doesn't exist in cart");
        }
    }

    @GetMapping("/cart/view")
    public ResponseEntity<Cart> viewCart(){
        int customerId = 1;
        ResponseEntity<Cart> response = ResponseEntity.ok(cartRepository.findCartByCustomerId(customerId));
        return response;
    }

    @GetMapping("/test")
    public ResponseEntity<Product> getProduct(@RequestParam int id){
        //log.info(String.valueOf(productRepository.findProductById(id)));
        return ResponseEntity.ok(productRepository.findProductById(id));
        //return ResponseEntity.ok(null);
    }

}
