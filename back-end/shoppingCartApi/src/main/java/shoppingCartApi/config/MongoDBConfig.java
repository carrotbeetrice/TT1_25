package shoppingCartApi.config;

import com.mongodb.ConnectionString;
import com.mongodb.MongoClientSettings;
import com.mongodb.MongoCredential;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.config.AbstractMongoClientConfiguration;

@Configuration
public class MongoDBConfig extends AbstractMongoClientConfiguration {

    @Value("${mongodb.uri}")
    private String uri;

    @Value("${mongodb.username}")
    private String username;

    @Value("${mongodb.password}")
    private String password;

    @Value("${mongodb.authentication-database}")
    private String authenticationDatabase;

    @Value("${mongodb.database}")
    private String database;

    @Value("${mongodb.auto-index-creation}")
    private boolean autoIndexCreation;

    @Override
    public MongoClient mongoClient() {
        return MongoClients.create(MongoClientSettings.builder()
                .applyConnectionString(new ConnectionString((uri)))
                .credential(MongoCredential
                        .createCredential(username, authenticationDatabase, password.toCharArray()))
                .build());
    }

    @Override
    protected String getDatabaseName() {
        return database;
    }

    @Override
    protected boolean autoIndexCreation() {
        return autoIndexCreation;
    }
}
