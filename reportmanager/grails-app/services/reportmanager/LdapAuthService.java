package reportmanager;

import java.util.Hashtable;

import javax.naming.Context;
import javax.naming.NamingException;
import javax.naming.directory.DirContext;
import javax.naming.directory.InitialDirContext;

public enum LdapAuthService {	

    INSTANCE;

    DirContext ctx = null;
    
    public boolean authenticateUser(String ldapUrl, String username, String password, String domains) {

        String[] domainArr = domains.split(",");
        for (String domain : domainArr) {
            Hashtable env = new Hashtable();
            env.put(Context.INITIAL_CONTEXT_FACTORY, "com.sun.jndi.ldap.LdapCtxFactory");
            env.put(Context.PROVIDER_URL, ldapUrl);
            env.put(Context.SECURITY_AUTHENTICATION, "simple");
            env.put(Context.SECURITY_PRINCIPAL, domain + "\\" + username);
            env.put(Context.SECURITY_CREDENTIALS, password);
            try {
                ctx = new InitialDirContext(env);
                return true;
            } catch (Exception e) { 
            	e.printStackTrace();
            } finally {
                if (ctx != null) {
                    try {
                        ctx.close();
                    } catch (NamingException ex) {
                    	ex.printStackTrace();
                    }
                }
            }
        }
        return false;

    }
}
