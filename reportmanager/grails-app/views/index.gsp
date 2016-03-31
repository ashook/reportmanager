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
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav navbar-right">
            <li class="active"><a href="#">Reports</a></li>
            <li><a href="#">Schedules</a></li>
            <li><a href="#">Admin</a></li>
            <li><a href="#">Help</a></li>
            <li><a href="${createLink(controller:'access', action: 'logout')}">Logout</a></li>
          </ul>
        </div>
      </div>
    </nav>
  <div ng-view></div>  
</body>
</html>
