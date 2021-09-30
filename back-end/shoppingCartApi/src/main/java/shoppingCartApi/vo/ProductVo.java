package shoppingCartApi.vo;

import lombok.Data;

@Data
public class ProductVo {

    private int productId;
    private String productName;
    private int productQty;
    private double productTotalPrice;
    private String productImg;

}
