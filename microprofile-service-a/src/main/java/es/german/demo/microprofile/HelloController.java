package es.german.demo.microprofile;

import java.util.logging.Logger;

import javax.inject.Singleton;
import javax.ws.rs.GET;
import javax.ws.rs.Path;

/**
 *
 */
@Path("/hello")
@Singleton
public class HelloController {
	
	Logger logger = Logger.getLogger(this.getClass().getName()); 

    @GET
    public String sayHello() {
    	String s = "Hello World";
    	logger.info(s);
    	
        return s;
    }
}
