package es.german.demo.microprofile;

import java.util.logging.Logger;

import javax.inject.Inject;
import javax.inject.Singleton;
import javax.ws.rs.GET;
import javax.ws.rs.Path;

import org.eclipse.microprofile.config.inject.ConfigProperty;

/**
 *
 */
@Path("/hello")
@Singleton
public class HelloController {
	
	Logger logger = Logger.getLogger(this.getClass().getName());
	
	@Inject
    @ConfigProperty(name = "server.environment", defaultValue = "Unknown")
    private String environment;

    @GET
    public String sayHello() {
    	String s = "Hello World from " + environment;
    	logger.info(s);
    	
        return s;
    }
}
