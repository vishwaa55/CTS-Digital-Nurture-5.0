import java.util.Arrays;
import java.util.Comparator;

class Product {
    int productId;
    String productName;
    String category;

    Product(int productId, String productName, String category) {
        this.productId = productId;
        this.productName = productName;
        this.category = category;
    }

    void display() {
        System.out.println("Product ID : " + productId);
        System.out.println("Product Name : " + productName);
        System.out.println("Category : " + category);
        System.out.println();
    }
}

public class Search {

    // Linear Search
    public static Product linearSearch(Product[] products, int id) {

        for (Product product : products) {
            if (product.productId == id) {
                return product;
            }
        }

        return null;
    }

    // Binary Search
    public static Product binarySearch(Product[] products, int id) {

        int low = 0;
        int high = products.length - 1;

        while (low <= high) {

            int mid = (low + high) / 2;

            if (products[mid].productId == id) {
                return products[mid];
            }

            if (products[mid].productId < id) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        return null;
    }

    public static void main(String[] args) {

        Product[] products = {
                new Product(104, "Keyboard", "Electronics"),
                new Product(101, "Laptop", "Electronics"),
                new Product(105, "Chair", "Furniture"),
                new Product(102, "Phone", "Electronics"),
                new Product(103, "Table", "Furniture")
        };

        int searchId = 102;

        System.out.println("----- Linear Search -----");

        Product result1 = linearSearch(products, searchId);

        if (result1 != null)
            result1.display();
        else
            System.out.println("Product Not Found");

        Arrays.sort(products, Comparator.comparingInt(p -> p.productId));

        System.out.println("----- Binary Search -----");

        Product result2 = binarySearch(products, searchId);

        if (result2 != null)
            result2.display();
        else
            System.out.println("Product Not Found");

        System.out.println("Time Complexity Analysis");
        System.out.println("------------------------");
        System.out.println("Linear Search :");
        System.out.println("Best Case    : O(1)");
        System.out.println("Average Case : O(n)");
        System.out.println("Worst Case   : O(n)");

        System.out.println();

        System.out.println("Binary Search :");
        System.out.println("Best Case    : O(1)");
        System.out.println("Average Case : O(log n)");
        System.out.println("Worst Case   : O(log n)");

        System.out.println();

        System.out.println("Conclusion:");
        System.out.println("Binary Search is faster for large datasets because it repeatedly divides the search space into half.");
        System.out.println("However, it requires the array to be sorted.");
        System.out.println("Linear Search works on unsorted data but becomes slower as the number of products increases.");
    }
}