package es.german.demo.microprofile.client;

import java.net.InetAddress;
import java.net.UnknownHostException;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;

@Path("/client/service")
public class ServiceController {

    @GET
    @Path("/{parameter}")
    public String doSomething(@PathParam("parameter") String parameter) throws UnknownHostException {
    	InetAddress ip;
    	ip = InetAddress.getLocalHost();
        String hostname = ip.getHostName();

        return String.format("Node %s: Processed parameter value '%s'", hostname, parameter);
    }
}
