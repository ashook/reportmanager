package reportmanager

import grails.core.GrailsApplication;

import javax.servlet.http.Cookie

import org.springframework.beans.factory.annotation.Autowired;

class AccessController {
	
	@Autowired
	GrailsApplication grailsApplication	

	def login(){
		if (request.get) {
			return // render the login view
		}
		String ldapUrl = grailsApplication.config.getProperty("ldapserver.url");
		String domains = grailsApplication.config.getProperty("ldapserver.domains");
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
	
	def logout(){
		session.invalidate()
		redirect(controller: "access", action: "login")
	}
}
