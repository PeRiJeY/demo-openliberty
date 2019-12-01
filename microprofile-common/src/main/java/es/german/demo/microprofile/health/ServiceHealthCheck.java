package es.german.demo.microprofile.health;

import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.Date;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;

import org.eclipse.microprofile.config.inject.ConfigProperty;
import org.eclipse.microprofile.health.HealthCheck;
import org.eclipse.microprofile.health.HealthCheckResponse;
import org.eclipse.microprofile.health.Readiness;

@Readiness
@ApplicationScoped
public class ServiceHealthCheck implements HealthCheck {
	
	Logger logger = Logger.getLogger(this.getClass().getName());
	
	@Inject
    @ConfigProperty(name = "project.version", defaultValue = "Unknown")
    private String projectVersion;

	@Override
	public HealthCheckResponse call() {

		InetAddress ip;
		String hostname = null;
		try {
			ip = InetAddress.getLocalHost();
			hostname = ip.getHostName();
		} catch (UnknownHostException e) {
			logger.log(Level.WARNING, "Error getting IP", e);
		}

		return HealthCheckResponse.named(ServiceHealthCheck.class.getSimpleName()).up()
				.withData("time", new Date().toString())
				.withData("version", projectVersion)
				.withData("hostname", hostname).build();

	}
}
