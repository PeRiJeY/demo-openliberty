package es.german.demo.microprofile.config;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;

import org.eclipse.microprofile.config.spi.ConfigSource;

public class AdvancedPropertiesConfigSource implements ConfigSource {
	
	final int PRIORITY = 500;
	final String DEFAULT_ENVIRONMENT = "dev";  
	
	@Override
	public int getOrdinal() {
		return PRIORITY;
	}

	@Override
	public Map<String, String> getProperties() {
		Properties prop = readProperties();

		Map<String, String> mapProperties = new HashMap<>();
		prop.entrySet().forEach(entry -> {
			mapProperties.put(entry.getKey().toString(), entry.getValue().toString());
		});

		return mapProperties;
	}

	@Override
	public String getValue(String propertyName) {
		Properties prop = readProperties();
		return prop.getProperty(propertyName);
	}

	@Override
	public String getName() {
		return this.getClass().getName();
	}

	private Properties readProperties() {
		InputStream inputStream = null;
		String baseDir = "META-INF/";
		Properties prop = new Properties();

		try {
			String environment = getEnvironment();
			String propFileName = "microprofile-config-" + environment + ".properties";

			inputStream = getClass().getClassLoader().getResourceAsStream(baseDir + propFileName);

			if (inputStream != null) {
				prop.load(inputStream);
			} else {
				throw new FileNotFoundException("Property file '" + propFileName + "' not found in the classpath");
			}
		} catch (IOException e) {
			e.printStackTrace();
		} finally {
			try {
				inputStream.close();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}

		return prop;
	}
	
	private String getEnvironment() {
		String environment = System.getenv("ENVIRONMENT");
		if (environment != null && !"".equals(environment.trim())) {
			return environment.toLowerCase();
		} else {
			return DEFAULT_ENVIRONMENT;
		}
	}

}
