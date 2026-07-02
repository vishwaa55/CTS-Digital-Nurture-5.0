public class Finance {

    // Recursive method
    public static double futureValue(double amount, double growthRate, int years) {
        if (years == 0)
            return amount;

        return futureValue(amount * (1 + growthRate), growthRate, years - 1);
    }

    public static void main(String[] args) {

        double initialAmount = 10000;   
        double growthRate = 0.10;      
        int years = 5;

        double result = futureValue(initialAmount, growthRate, years);

        System.out.println("Initial Amount : Rs." + initialAmount);
        System.out.println("Growth Rate    : " + (growthRate * 100) + "%");
        System.out.println("Years          : " + years);
        System.out.printf("Future Value   : Rs.%.2f%n", result);

        System.out.println("\nTime Complexity : O(n)");
        System.out.println("Space Complexity: O(n) (Recursion Stack)");

        System.out.println("\nOptimization:");
        System.out.println("Use an iterative loop or the formula");
        System.out.println("Future Value = Principal × (1 + Rate)^Years");
        System.out.println("to avoid recursive calls.");
    }
}