package reportmanager

import javax.servlet.http.Cookie

class AccessController {
	
	String ldapUrl="ldap://10.38.24.11:3268/dc=mygazoo,dc=com";
	String domains="mygazoo,ket";
	
	def login(){
		if (request.get) {
			return // render the login view
		}
		boolean isUservalid = LdapAuthService.INSTANCE.authenticateUser(ldapUrl, params.username, params.password, domains)
		if (isUservalid) {
			UserData u = new UserData()
			u.userName=params.username
			session.user = u
			// redirect(controller:"report")
			redirect(uri:"/")
		}
		else {
			render(view: "login", model: [message: "Incorrect credentials"])
		}		
	}
}
