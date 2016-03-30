<!doctype html>
<html lang="en" ng-app="reportApp">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Deem Analytics</title>
  
  <asset:stylesheet src="bootstrap.min.css"/>
  <asset:stylesheet src="dashboard.css"/>

  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular-route.js"></script>  
  <asset:javascript src="app.js"/>
  <asset:javascript src="controllers.js"/>
</head>
<body>
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Deem Analytics</a>
        </div>
      </div>
    </nav>
  
  <form action="${createLink(controller:'access', action: 'login')}" method="POST">
                    <!-- Content starts -->
                    <div class="row">
                        <div class="col-md-4">
                            &nbsp;
                        </div>
                        <div class="col-md-4">
                            <h2 class="text-center">Login</h2>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="row">
                                        <div class="col-md-12 text-center">
                                            <input type="text" name="username" class="form-control" placeholder="username" required autofocus>
                                            <br/>
                                            <input type="password" name="password" class="form-control" placeholder="password" required>
                                            <br/>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12 text-center">
                                            <p class="text-danger text-center"></p>
                                        </div>
                                    </div>
                                    
                                        
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <p class="text-success text-center">Login with your Outlook account (No Domain)</p>
                                                    <g:if test="${message}">
                                                    	<p class="text-success text-center" style="color:red">${message}</p>
                                                    </g:if>                                                    
                                                    <br/>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <button type="submit" name="action" value="login" class="btn btn-lg btn-primary btn-block">Login</button>
                                                </div>
                                            </div>
                                        
                                        
                                    
                                </div>
                            </div>
                        </div> 
                        <div class="col-md-4">
                            &nbsp;
                        </div>
                    </div>
                    <!-- Content ends -->
                </form>
  
  
  
</body>
</html>