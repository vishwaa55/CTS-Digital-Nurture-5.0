class Logger {

    private static Logger instance;

    private Logger() {
        System.out.println("Logger Instance Created");
    }
    public static Logger getInstance() {
        if (instance == null) {
            instance = new Logger();
        }
        return instance;
    }
    public void log(String message) {
        System.out.println("Log: " + message);
    }
}

public class Singleton {

    public static void main(String[] args) {

        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();
        Logger logger3 = Logger.getInstance();

        logger1.log("Application Started");
        logger2.log("User Logged In");
        logger3.log("Application Closed");

        if (logger1 == logger2 && logger2 == logger3) {
            System.out.println("Only one Logger instance exists.");
        } else {
            System.out.println("Multiple Logger instances exist.");
        }
    }
}