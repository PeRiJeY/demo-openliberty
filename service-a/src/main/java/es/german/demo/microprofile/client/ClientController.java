package es.german.demo.microprofile.client;

import org.eclipse.microprofile.rest.client.inject.RestClient;

import java.net.InetAddress;
import java.net.UnknownHostException;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;

@Path("/client")
@ApplicationScoped
public class ClientController {

    @Inject
    @RestClient
    private Service service;

    @GET
    @Path("/test/{parameter}")
    public String onClientSide(@PathParam("parameter") String parameter) throws UnknownHostException {
    	InetAddress ip;
    	ip = InetAddress.getLocalHost();
        String hostname = ip.getHostName();
        
        String result = service.doSomething(parameter);
        
        return hostname + ": " + result;
    }
}
