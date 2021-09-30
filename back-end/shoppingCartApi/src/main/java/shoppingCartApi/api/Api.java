package shoppingCartApi.api;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import shoppingCartApi.entities.Cart;
import shoppingCartApi.entities.Product;
import shoppingCartApi.repositories.CartRepository;
import shoppingCartApi.repositories.ProductRepository;
import shoppingCartApi.vo.ProductVo;

import java.util.*;

@RestController
@Slf4j
public class Api {

    @Autowired
    ProductRepository productRepository;

    @Autowired
    CartRepository cartRepository;

    @GetMapping("/cart/add")
    public ResponseEntity<String> addToCart(@RequestParam int id, @RequestParam int productQty){
        int customerId = 1;
        int productId = id;
        int productQtyToBeAdded = productQty;
        //Get Product Details
        Product productDetails = productRepository.findProductById(productId);
        System.out.println(productDetails);
        //Get current cart
        Cart cart;
        cart = cartRepository.findCartByCustomerId(customerId);
        System.out.println("found "+ cart);
        if(cart == null){
            System.out.println("no cart found");
            cart = new Cart();
            cart.setCustomerId(customerId);
            cart.setId(UUID.randomUUID().toString());
            cart.setProducts(new ArrayList<>());
        }
        //Get current list of products
        List<ProductVo> products = cart.getProducts();
        //Check if product is currently in cart
        boolean productFound = false;
        for(ProductVo productVo : products) {
            if (productId == productVo.getProductId()){
                ProductVo currProduct = productVo;
                int newProductQty = currProduct.getProductQty()+productQtyToBeAdded;
                currProduct.setProductQty(newProductQty);
                currProduct.setProductTotalPrice(newProductQty*productDetails.getPrice());
                productFound = true;
            }
        }
        if(productFound == false){
            ProductVo currProduct = new ProductVo();
            currProduct.setProductId(productId);
            currProduct.setProductName(productDetails.getTitle());
            currProduct.setProductImg(productDetails.getImage());
            currProduct.setProductQty(productQtyToBeAdded);
            currProduct.setProductTotalPrice(productDetails.getPrice()*productQtyToBeAdded);
            products.add(currProduct);
        }
        cartRepository.deleteById(cart.getId());
        cartRepository.save(cart);
        return ResponseEntity.ok("Cart updated");
    }
/*
    @GetMapping("/cart/remove")
    public ResponseEntity<String> removeFromCart(@RequestParam int id, @RequestParam int productQty) {
        int customerId = 1;
        int productId = id;
        int productQtyToBeRemoved = productQty;
        //Get current cart
        Cart cart;
        try{
            cart = cartRepository.findCartByCustomerId(customerId);
        }
        catch(Exception e){
            cart = new Cart();
            cart.setCustomerId(customerId);
            cart.setId(UUID.randomUUID().toString());
            cart.setProducts(new ArrayList<>());
        }
        //Get current list of products
        List<ProductVo> products = cart.getProducts();
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
*/
    @GetMapping("/cart/view")
    public ResponseEntity<Cart> viewCart(){
        int customerId = 1;
        ResponseEntity<Cart> response = ResponseEntity.ok(cartRepository.findCartByCustomerId(customerId));
        return response;
    }
/*
    @GetMapping("/cart/checkout")
    public ResponseEntity<String> checkoutCart(){
        int customerId = 1;
        //get cart
        Cart cart = cartRepository.findCartByCustomerId(customerId);
        //get products
        Map<Integer,ProductVo> products = cart.getProducts();
        for(ProductVo product: products.values()){
            int productId = product.getProductId();
            Product inventoryProduct = productRepository.findProductById(productId);
            if(inventoryProduct.getQty()<product.getProductQty()) {
                return ResponseEntity.ok("Product with id " + productId + " is out of stock");
            }
        }
        for(ProductVo product: products.values()){
            int productId = product.getProductId();
            Product inventoryProduct = productRepository.findProductById(productId);
            inventoryProduct.setQty(inventoryProduct.getQty()-product.getProductQty());
        }
        return ResponseEntity.ok("Checked out!");
    }
*/
    @GetMapping("/test")
    public ResponseEntity<Product> getProduct(@RequestParam int id){
        return ResponseEntity.ok(productRepository.findProductById(id));
    }

}
