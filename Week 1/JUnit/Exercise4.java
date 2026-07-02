import org.junit.Before;
import org.junit.After;
import org.junit.Test;
import static org.junit.Assert.assertEquals;
import java.util.ArrayList;
import java.util.List;

public class Exercise4 {
    private List<String> list;

    @Before
    public void setUp() {
        list = new ArrayList<>();
    }

    @Test
    public void testListAdd() {
        list.add("JUnit");
        assertEquals(1, list.size());
        assertEquals("JUnit", list.get(0));
    }

    @After
    public void tearDown() {
        list.clear();
    }
}
