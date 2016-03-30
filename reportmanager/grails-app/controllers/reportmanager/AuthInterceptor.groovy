package reportmanager

import javax.servlet.http.Cookie


class AuthInterceptor {

	AuthInterceptor() {
		matchAll()
				.excludes(controller:"access", action:"login")
	}
	boolean before() {
		if (!session.user && actionName != "login") {
			redirect(controller: "access", action: "login")
			return false
		}
		return true
	}

	boolean after() {
		true
	}

	void afterView() {
		// no-op
	}
}
