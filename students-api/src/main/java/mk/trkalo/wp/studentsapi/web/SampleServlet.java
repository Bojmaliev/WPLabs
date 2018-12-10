package mk.trkalo.wp.studentsapi.web;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * @author Riste Stojanov
 */
@WebServlet(urlPatterns = "/test", name = "hello-world-servlet")
public class SampleServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req,
                         HttpServletResponse resp) throws ServletException, IOException {

        String name = (String) req.getSession().getAttribute("firstName");
        String ipAddress = req.getRemoteHost();
        String clientAgent = req.getHeader("User-Agent");

        PrintWriter out = resp.getWriter();

        out.println("<html>");
        out.println("<body>");

        out.println("<h1>");
        out.println("Hello " + name);
        out.println("</h1>");

        out.println("<div>");
        out.println("Your IP address is: " + ipAddress);
        out.println("</div>");


        out.println("<div>");
        out.println("Your agent is: " + clientAgent);
        out.println("</div>");

        out.println("</body>");
        out.println("</html>");
    }
}
