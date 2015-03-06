(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '    <ul>                <li data-name="namespace:" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href=".html">moovi</a>                    </div>                    <div class="bd">                            <ul>                <li data-name="namespace:moovi_MooviBundle" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="moovi/MooviBundle.html">MooviBundle</a>                    </div>                    <div class="bd">                            <ul>                <li data-name="namespace:moovi_MooviBundle_Controller" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="moovi/MooviBundle/Controller.html">Controller</a>                    </div>                    <div class="bd">                            <ul>                <li data-name="class:moovi_MooviBundle_Controller_ActorController" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="moovi/MooviBundle/Controller/ActorController.html">ActorController</a>                    </div>                </li>                            <li data-name="class:moovi_MooviBundle_Controller_DefaultController" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="moovi/MooviBundle/Controller/DefaultController.html">DefaultController</a>                    </div>                </li>                            <li data-name="class:moovi_MooviBundle_Controller_GenreController" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="moovi/MooviBundle/Controller/GenreController.html">GenreController</a>                    </div>                </li>                            <li data-name="class:moovi_MooviBundle_Controller_MovieController" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="moovi/MooviBundle/Controller/MovieController.html">MovieController</a>                    </div>                </li>                            <li data-name="class:moovi_MooviBundle_Controller_UserController" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="moovi/MooviBundle/Controller/UserController.html">UserController</a>                    </div>                </li>                            <li data-name="class:moovi_MooviBundle_Controller_WelcomeController" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="moovi/MooviBundle/Controller/WelcomeController.html">WelcomeController</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:moovi_MooviBundle_DependencyInjection" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="moovi/MooviBundle/DependencyInjection.html">DependencyInjection</a>                    </div>                    <div class="bd">                            <ul>                <li data-name="class:moovi_MooviBundle_DependencyInjection_Configuration" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="moovi/MooviBundle/DependencyInjection/Configuration.html">Configuration</a>                    </div>                </li>                            <li data-name="class:moovi_MooviBundle_DependencyInjection_mooviMooviExtension" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="moovi/MooviBundle/DependencyInjection/mooviMooviExtension.html">mooviMooviExtension</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:moovi_MooviBundle_Entity" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="moovi/MooviBundle/Entity.html">Entity</a>                    </div>                    <div class="bd">                            <ul>                <li data-name="class:moovi_MooviBundle_Entity_Actor" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="moovi/MooviBundle/Entity/Actor.html">Actor</a>                    </div>                </li>                            <li data-name="class:moovi_MooviBundle_Entity_Comment" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="moovi/MooviBundle/Entity/Comment.html">Comment</a>                    </div>                </li>                            <li data-name="class:moovi_MooviBundle_Entity_Genre" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="moovi/MooviBundle/Entity/Genre.html">Genre</a>                    </div>                </li>                            <li data-name="class:moovi_MooviBundle_Entity_Movie" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="moovi/MooviBundle/Entity/Movie.html">Movie</a>                    </div>                </li>                            <li data-name="class:moovi_MooviBundle_Entity_Order" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="moovi/MooviBundle/Entity/Order.html">Order</a>                    </div>                </li>                            <li data-name="class:moovi_MooviBundle_Entity_User" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="moovi/MooviBundle/Entity/User.html">User</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:moovi_MooviBundle_Form" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="moovi/MooviBundle/Form.html">Form</a>                    </div>                    <div class="bd">                            <ul>                <li data-name="class:moovi_MooviBundle_Form_ActorType" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="moovi/MooviBundle/Form/ActorType.html">ActorType</a>                    </div>                </li>                            <li data-name="class:moovi_MooviBundle_Form_CommentType" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="moovi/MooviBundle/Form/CommentType.html">CommentType</a>                    </div>                </li>                            <li data-name="class:moovi_MooviBundle_Form_GenreType" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="moovi/MooviBundle/Form/GenreType.html">GenreType</a>                    </div>                </li>                            <li data-name="class:moovi_MooviBundle_Form_MovieType" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="moovi/MooviBundle/Form/MovieType.html">MovieType</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:moovi_MooviBundle_Repository" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="moovi/MooviBundle/Repository.html">Repository</a>                    </div>                    <div class="bd">                            <ul>                <li data-name="class:moovi_MooviBundle_Repository_MovieRepository" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="moovi/MooviBundle/Repository/MovieRepository.html">MovieRepository</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:moovi_MooviBundle_mooviMooviBundle" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="moovi/MooviBundle/mooviMooviBundle.html">mooviMooviBundle</a>                    </div>                </li>                </ul></div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    {"type": "Namespace", "link": "moovi.html", "name": "moovi", "doc": "Namespace moovi"},{"type": "Namespace", "link": "moovi/MooviBundle.html", "name": "moovi\\MooviBundle", "doc": "Namespace moovi\\MooviBundle"},{"type": "Namespace", "link": "moovi/MooviBundle/Controller.html", "name": "moovi\\MooviBundle\\Controller", "doc": "Namespace moovi\\MooviBundle\\Controller"},{"type": "Namespace", "link": "moovi/MooviBundle/DependencyInjection.html", "name": "moovi\\MooviBundle\\DependencyInjection", "doc": "Namespace moovi\\MooviBundle\\DependencyInjection"},{"type": "Namespace", "link": "moovi/MooviBundle/Entity.html", "name": "moovi\\MooviBundle\\Entity", "doc": "Namespace moovi\\MooviBundle\\Entity"},{"type": "Namespace", "link": "moovi/MooviBundle/Form.html", "name": "moovi\\MooviBundle\\Form", "doc": "Namespace moovi\\MooviBundle\\Form"},{"type": "Namespace", "link": "moovi/MooviBundle/Repository.html", "name": "moovi\\MooviBundle\\Repository", "doc": "Namespace moovi\\MooviBundle\\Repository"},
            
            {"type": "Class", "fromName": "moovi\\MooviBundle\\Controller", "fromLink": "moovi/MooviBundle/Controller.html", "link": "moovi/MooviBundle/Controller/ActorController.html", "name": "moovi\\MooviBundle\\Controller\\ActorController", "doc": "&quot;\n&quot;"},
                                                        {"type": "Method", "fromName": "moovi\\MooviBundle\\Controller\\ActorController", "fromLink": "moovi/MooviBundle/Controller/ActorController.html", "link": "moovi/MooviBundle/Controller/ActorController.html#method_addAction", "name": "moovi\\MooviBundle\\Controller\\ActorController::addAction", "doc": "&quot;Add new actor&quot;"},
            
            {"type": "Class", "fromName": "moovi\\MooviBundle\\Controller", "fromLink": "moovi/MooviBundle/Controller.html", "link": "moovi/MooviBundle/Controller/DefaultController.html", "name": "moovi\\MooviBundle\\Controller\\DefaultController", "doc": "&quot;\n&quot;"},
                                                        {"type": "Method", "fromName": "moovi\\MooviBundle\\Controller\\DefaultController", "fromLink": "moovi/MooviBundle/Controller/DefaultController.html", "link": "moovi/MooviBundle/Controller/DefaultController.html#method_indexAction", "name": "moovi\\MooviBundle\\Controller\\DefaultController::indexAction", "doc": "&quot;\n&quot;"},
            
            {"type": "Class", "fromName": "moovi\\MooviBundle\\Controller", "fromLink": "moovi/MooviBundle/Controller.html", "link": "moovi/MooviBundle/Controller/GenreController.html", "name": "moovi\\MooviBundle\\Controller\\GenreController", "doc": "&quot;\n&quot;"},
                                                        {"type": "Method", "fromName": "moovi\\MooviBundle\\Controller\\GenreController", "fromLink": "moovi/MooviBundle/Controller/GenreController.html", "link": "moovi/MooviBundle/Controller/GenreController.html#method_addAction", "name": "moovi\\MooviBundle\\Controller\\GenreController::addAction", "doc": "&quot;Add new genre&quot;"},
            
            {"type": "Class", "fromName": "moovi\\MooviBundle\\Controller", "fromLink": "moovi/MooviBundle/Controller.html", "link": "moovi/MooviBundle/Controller/MovieController.html", "name": "moovi\\MooviBundle\\Controller\\MovieController", "doc": "&quot;\n&quot;"},
                                                        {"type": "Method", "fromName": "moovi\\MooviBundle\\Controller\\MovieController", "fromLink": "moovi/MooviBundle/Controller/MovieController.html", "link": "moovi/MooviBundle/Controller/MovieController.html#method_indexAction", "name": "moovi\\MooviBundle\\Controller\\MovieController::indexAction", "doc": "&quot;Display list of movies&quot;"},
                    {"type": "Method", "fromName": "moovi\\MooviBundle\\Controller\\MovieController", "fromLink": "moovi/MooviBundle/Controller/MovieController.html", "link": "moovi/MooviBundle/Controller/MovieController.html#method_addAction", "name": "moovi\\MooviBundle\\Controller\\MovieController::addAction", "doc": "&quot;Add new movie&quot;"},
                    {"type": "Method", "fromName": "moovi\\MooviBundle\\Controller\\MovieController", "fromLink": "moovi/MooviBundle/Controller/MovieController.html", "link": "moovi/MooviBundle/Controller/MovieController.html#method_displayAction", "name": "moovi\\MooviBundle\\Controller\\MovieController::displayAction", "doc": "&quot;Display single movie&quot;"},
                    {"type": "Method", "fromName": "moovi\\MooviBundle\\Controller\\MovieController", "fromLink": "moovi/MooviBundle/Controller/MovieController.html", "link": "moovi/MooviBundle/Controller/MovieController.html#method_orderAction", "name": "moovi\\MooviBundle\\Controller\\MovieController::orderAction", "doc": "&quot;Get order&quot;"},
            
            {"type": "Class", "fromName": "moovi\\MooviBundle\\Controller", "fromLink": "moovi/MooviBundle/Controller.html", "link": "moovi/MooviBundle/Controller/UserController.html", "name": "moovi\\MooviBundle\\Controller\\UserController", "doc": "&quot;\n&quot;"},
                                                        {"type": "Method", "fromName": "moovi\\MooviBundle\\Controller\\UserController", "fromLink": "moovi/MooviBundle/Controller/UserController.html", "link": "moovi/MooviBundle/Controller/UserController.html#method_ordersAction", "name": "moovi\\MooviBundle\\Controller\\UserController::ordersAction", "doc": "&quot;Display user orders&quot;"},
            
            {"type": "Class", "fromName": "moovi\\MooviBundle\\Controller", "fromLink": "moovi/MooviBundle/Controller.html", "link": "moovi/MooviBundle/Controller/WelcomeController.html", "name": "moovi\\MooviBundle\\Controller\\WelcomeController", "doc": "&quot;\n&quot;"},
                                                        {"type": "Method", "fromName": "moovi\\MooviBundle\\Controller\\WelcomeController", "fromLink": "moovi/MooviBundle/Controller/WelcomeController.html", "link": "moovi/MooviBundle/Controller/WelcomeController.html#method_indexAction", "name": "moovi\\MooviBundle\\Controller\\WelcomeController::indexAction", "doc": "&quot;homepage action, display most popular, most commented and lastest added movies&quot;"},
            
            {"type": "Class", "fromName": "moovi\\MooviBundle\\DependencyInjection", "fromLink": "moovi/MooviBundle/DependencyInjection.html", "link": "moovi/MooviBundle/DependencyInjection/Configuration.html", "name": "moovi\\MooviBundle\\DependencyInjection\\Configuration", "doc": "&quot;This is the class that validates and merges configuration from your app\/config files&quot;"},
                                                        {"type": "Method", "fromName": "moovi\\MooviBundle\\DependencyInjection\\Configuration", "fromLink": "moovi/MooviBundle/DependencyInjection/Configuration.html", "link": "moovi/MooviBundle/DependencyInjection/Configuration.html#method_getConfigTreeBuilder", "name": "moovi\\MooviBundle\\DependencyInjection\\Configuration::getConfigTreeBuilder", "doc": "&quot;{@inheritdoc}&quot;"},
            
            {"type": "Class", "fromName": "moovi\\MooviBundle\\DependencyInjection", "fromLink": "moovi/MooviBundle/DependencyInjection.html", "link": "moovi/MooviBundle/DependencyInjection/mooviMooviExtension.html", "name": "moovi\\MooviBundle\\DependencyInjection\\mooviMooviExtension", "doc": "&quot;This is the class that loads and manages your bundle configuration&quot;"},
                                                        {"type": "Method", "fromName": "moovi\\MooviBundle\\DependencyInjection\\mooviMooviExtension", "fromLink": "moovi/MooviBundle/DependencyInjection/mooviMooviExtension.html", "link": "moovi/MooviBundle/DependencyInjection/mooviMooviExtension.html#method_load", "name": "moovi\\MooviBundle\\DependencyInjection\\mooviMooviExtension::load", "doc": "&quot;{@inheritdoc}&quot;"},
            
            {"type": "Class", "fromName": "moovi\\MooviBundle\\Entity", "fromLink": "moovi/MooviBundle/Entity.html", "link": "moovi/MooviBundle/Entity/Actor.html", "name": "moovi\\MooviBundle\\Entity\\Actor", "doc": "&quot;Actor&quot;"},
                                                        {"type": "Method", "fromName": "moovi\\MooviBundle\\Entity\\Actor", "fromLink": "moovi/MooviBundle/Entity/Actor.html", "link": "moovi/MooviBundle/Entity/Actor.html#method_getId", "name": "moovi\\MooviBundle\\Entity\\Actor::getId", "doc": "&quot;Get id&quot;"},
                    {"type": "Method", "fromName": "moovi\\MooviBundle\\Entity\\Actor", "fromLink": "moovi/MooviBundle/Entity/Actor.html", "link": "moovi/MooviBundle/Entity/Actor.html#method_setFirstname", "name": "moovi\\MooviBundle\\Entity\\Actor::setFirstname", "doc": "&quot;Set firstname&quot;"},
                    {"type": "Method", "fromName": "moovi\\MooviBundle\\Entity\\Actor", "fromLink": "moovi/MooviBundle/Entity/Actor.html", "link": "moovi/MooviBundle/Entity/Actor.html#method_getFirstname", "name": "moovi\\MooviBundle\\Entity\\Actor::getFirstname", "doc": "&quot;Get firstname&quot;"},
                    {"type": "Method", "fromName": "moovi\\MooviBundle\\Entity\\Actor", "fromLink": "moovi/MooviBundle/Entity/Actor.html", "link": "moovi/MooviBundle/Entity/Actor.html#method_setLastname", "name": "moovi\\MooviBundle\\Entity\\Actor::setLastname", "doc": "&quot;Set lastname&quot;"},
                    {"type": "Method", "fromName": "moovi\\MooviBundle\\Entity\\Actor", "fromLink": "moovi/MooviBundle/Entity/Actor.html", "link": "moovi/MooviBundle/Entity/Actor.html#method_getLastname", "name": "moovi\\MooviBundle\\Entity\\Actor::getLastname", "doc": "&quot;Get lastname&quot;"},
                    {"type": "Method", "fromName": "moovi\\MooviBundle\\Entity\\Actor", "fromLink": "moovi/MooviBundle/Entity/Actor.html", "link": "moovi/MooviBundle/Entity/Actor.html#method___construct", "name": "moovi\\MooviBundle\\Entity\\Actor::__construct", "doc": "&quot;Constructor&quot;"},
                    {"type": "Method", "fromName": "moovi\\MooviBundle\\Entity\\Actor", "fromLink": "moovi/MooviBundle/Entity/Actor.html", "link": "moovi/MooviBundle/Entity/Actor.html#method_addMovie", "name": "moovi\\MooviBundle\\Entity\\Actor::addMovie", "doc": "&quot;Add movies&quot;"},
                    {"type": "Method", "fromName": "moovi\\MooviBundle\\Entity\\Actor", "fromLink": "moovi/MooviBundle/Entity/Actor.html", "link": "moovi/MooviBundle/Entity/Actor.html#method_removeMovie", "name": "moovi\\MooviBundle\\Entity\\Actor::removeMovie", "doc": "&quot;Remove movies&quot;"},
                    {"type": "Method", "fromName": "moovi\\MooviBundle\\Entity\\Actor", "fromLink": "moovi/MooviBundle/Entity/Actor.html", "link": "moovi/MooviBundle/Entity/Actor.html#method_getMovies", "name": "moovi\\MooviBundle\\Entity\\Actor::getMovies", "doc": "&quot;Get movies&quot;"},
                    {"type": "Method", "fromName": "moovi\\MooviBundle\\Entity\\Actor", "fromLink": "moovi/MooviBundle/Entity/Actor.html", "link": "moovi/MooviBundle/Entity/Actor.html#method_getFullName", "name": "moovi\\MooviBundle\\Entity\\Actor::getFullName", "doc": "&quot;\n&quot;"},
            
            {"type": "Class", "fromName": "moovi\\MooviBundle\\Entity", "fromLink": "moovi/MooviBundle/Entity.html", "link": "moovi/MooviBundle/Entity/Comment.html", "name": "moovi\\MooviBundle\\Entity\\Comment", "doc": "&quot;Comments&quot;"},
                                                        {"type": "Method", "fromName": "moovi\\MooviBundle\\Entity\\Comment", "fromLink": "moovi/MooviBundle/Entity/Comment.html", "link": "moovi/MooviBundle/Entity/Comment.html#method_getId", "name": "moovi\\MooviBundle\\Entity\\Comment::getId", "doc": "&quot;Get id&quot;"},
                    {"type": "Method", "fromName": "moovi\\MooviBundle\\Entity\\Comment", "fromLink": "moovi/MooviBundle/Entity/Comment.html", "link": "moovi/MooviBundle/Entity/Comment.html#method_setText", "name": "moovi\\MooviBundle\\Entity\\Comment::setText", "doc": "&quot;Set text&quot;"},
                    {"type": "Method", "fromName": "moovi\\MooviBundle\\Entity\\Comment", "fromLink": "moovi/MooviBundle/Entity/Comment.html", "link": "moovi/MooviBundle/Entity/Comment.html#method_getText", "name": "moovi\\MooviBundle\\Entity\\Comment::getText", "doc": "&quot;Get text&quot;"},
                    {"type": "Method", "fromName": "moovi\\MooviBundle\\Entity\\Comment", "fromLink": "moovi/MooviBundle/Entity/Comment.html", "link": "moovi/MooviBundle/Entity/Comment.html#method_setCreatedAt", "name": "moovi\\MooviBundle\\Entity\\Comment::setCreatedAt", "doc": "&quot;Set createdAt&quot;"},
                    {"type": "Method", "fromName": "moovi\\MooviBundle\\Entity\\Comment", "fromLink": "moovi/MooviBundle/Entity/Comment.html", "link": "moovi/MooviBundle/Entity/Comment.html#method_getCreatedAt", "name": "moovi\\MooviBundle\\Entity\\Comment::getCreatedAt", "doc": "&quot;Get createdAt&quot;"},
                    {"type": "Method", "fromName": "moovi\\MooviBundle\\Entity\\Comment", "fromLink": "moovi/MooviBundle/Entity/Comment.html", "link": "moovi/MooviBundle/Entity/Comment.html#method_setUser", "name": "moovi\\MooviBundle\\Entity\\Comment::setUser", "doc": "&quot;Set user&quot;"},
                    {"type": "Method", "fromName": "moovi\\MooviBundle\\Entity\\Comment", "fromLink": "moovi/MooviBundle/Entity/Comment.html", "link": "moovi/MooviBundle/Entity/Comment.html#method_getUser", "name": "moovi\\MooviBundle\\Entity\\Comment::getUser", "doc": "&quot;Get user&quot;"},
                    {"type": "Method", "fromName": "moovi\\MooviBundle\\Entity\\Comment", "fromLink": "moovi/MooviBundle/Entity/Comment.html", "link": "moovi/MooviBundle/Entity/Comment.html#method_setMovie", "name": "moovi\\MooviBundle\\Entity\\Comment::setMovie", "doc": "&quot;Set movie&quot;"},
                    {"type": "Method", "fromName": "moovi\\MooviBundle\\Entity\\Comment", "fromLink": "moovi/MooviBundle/Entity/Comment.html", "link": "moovi/MooviBundle/Entity/Comment.html#method_getMovie", "name": "moovi\\MooviBundle\\Entity\\Comment::getMovie", "doc": "&quot;Get movie&quot;"},
            
            {"type": "Class", "fromName": "moovi\\MooviBundle\\Entity", "fromLink": "moovi/MooviBundle/Entity.html", "link": "moovi/MooviBundle/Entity/Genre.html", "name": "moovi\\MooviBundle\\Entity\\Genre", "doc": "&quot;Genre&quot;"},
                                                        {"type": "Method", "fromName": "moovi\\MooviBundle\\Entity\\Genre", "fromLink": "moovi/MooviBundle/Entity/Genre.html", "link": "moovi/MooviBundle/Entity/Genre.html#method_getId", "name": "moovi\\MooviBundle\\Entity\\Genre::getId", "doc": "&quot;Get id&quot;"},
                    {"type": "Method", "fromName": "moovi\\MooviBundle\\Entity\\Genre", "fromLink": "moovi/MooviBundle/Entity/Genre.html", "link": "moovi/MooviBundle/Entity/Genre.html#method_setName", "name": "moovi\\MooviBundle\\Entity\\Genre::setName", "doc": "&quot;Set name&quot;"},
                    {"type": "Method", "fromName": "moovi\\MooviBundle\\Entity\\Genre", "fromLink": "moovi/MooviBundle/Entity/Genre.html", "link": "moovi/MooviBundle/Entity/Genre.html#method_getName", "name": "moovi\\MooviBundle\\Entity\\Genre::getName", "doc": "&quot;Get name&quot;"},
                    {"type": "Method", "fromName": "moovi\\MooviBundle\\Entity\\Genre", "fromLink": "moovi/MooviBundle/Entity/Genre.html", "link": "moovi/MooviBundle/Entity/Genre.html#method___construct", "name": "moovi\\MooviBundle\\Entity\\Genre::__construct", "doc": "&quot;Constructor&quot;"},
                    {"type": "Method", "fromName": "moovi\\MooviBundle\\Entity\\Genre", "fromLink": "moovi/MooviBundle/Entity/Genre.html", "link": "moovi/MooviBundle/Entity/Genre.html#method_addMovie", "name": "moovi\\MooviBundle\\Entity\\Genre::addMovie", "doc": "&quot;Add movies&quot;"},
                    {"type": "Method", "fromName": "moovi\\MooviBundle\\Entity\\Genre", "fromLink": "moovi/MooviBundle/Entity/Genre.html", "link": "moovi/MooviBundle/Entity/Genre.html#method_removeMovie", "name": "moovi\\MooviBundle\\Entity\\Genre::removeMovie", "doc": "&quot;Remove movies&quot;"},
                    {"type": "Method", "fromName": "moovi\\MooviBundle\\Entity\\Genre", "fromLink": "moovi/MooviBundle/Entity/Genre.html", "link": "moovi/MooviBundle/Entity/Genre.html#method_getMovies", "name": "moovi\\MooviBundle\\Entity\\Genre::getMovies", "doc": "&quot;Get movies&quot;"},
            
            {"type": "Class", "fromName": "moovi\\MooviBundle\\Entity", "fromLink": "moovi/MooviBundle/Entity.html", "link": "moovi/MooviBundle/Entity/Movie.html", "name": "moovi\\MooviBundle\\Entity\\Movie", "doc": "&quot;Movie&quot;"},
                                                        {"type": "Method", "fromName": "moovi\\MooviBundle\\Entity\\Movie", "fromLink": "moovi/MooviBundle/Entity/Movie.html", "link": "moovi/MooviBundle/Entity/Movie.html#method_getId", "name": "moovi\\MooviBundle\\Entity\\Movie::getId", "doc": "&quot;Get id&quot;"},
                    {"type": "Method", "fromName": "moovi\\MooviBundle\\Entity\\Movie", "fromLink": "moovi/MooviBundle/Entity/Movie.html", "link": "moovi/MooviBundle/Entity/Movie.html#method_setTitle", "name": "moovi\\MooviBundle\\Entity\\Movie::setTitle", "doc": "&quot;Set title&quot;"},
                    {"type": "Method", "fromName": "moovi\\MooviBundle\\Entity\\Movie", "fromLink": "moovi/MooviBundle/Entity/Movie.html", "link": "moovi/MooviBundle/Entity/Movie.html#method_getTitle", "name": "moovi\\MooviBundle\\Entity\\Movie::getTitle", "doc": "&quot;Get title&quot;"},
                    {"type": "Method", "fromName": "moovi\\MooviBundle\\Entity\\Movie", "fromLink": "moovi/MooviBundle/Entity/Movie.html", "link": "moovi/MooviBundle/Entity/Movie.html#method_setYear", "name": "moovi\\MooviBundle\\Entity\\Movie::setYear", "doc": "&quot;Set year&quot;"},
                    {"type": "Method", "fromName": "moovi\\MooviBundle\\Entity\\Movie", "fromLink": "moovi/MooviBundle/Entity/Movie.html", "link": "moovi/MooviBundle/Entity/Movie.html#method_getYear", "name": "moovi\\MooviBundle\\Entity\\Movie::getYear", "doc": "&quot;Get year&quot;"},
                    {"type": "Method", "fromName": "moovi\\MooviBundle\\Entity\\Movie", "fromLink": "moovi/MooviBundle/Entity/Movie.html", "link": "moovi/MooviBundle/Entity/Movie.html#method_setCover", "name": "moovi\\MooviBundle\\Entity\\Movie::setCover", "doc": "&quot;Set cover&quot;"},
                    {"type": "Method", "fromName": "moovi\\MooviBundle\\Entity\\Movie", "fromLink": "moovi/MooviBundle/Entity/Movie.html", "link": "moovi/MooviBundle/Entity/Movie.html#method_getCover", "name": "moovi\\MooviBundle\\Entity\\Movie::getCover", "doc": "&quot;Get cover&quot;"},
                    {"type": "Method", "fromName": "moovi\\MooviBundle\\Entity\\Movie", "fromLink": "moovi/MooviBundle/Entity/Movie.html", "link": "moovi/MooviBundle/Entity/Movie.html#method_setSlug", "name": "moovi\\MooviBundle\\Entity\\Movie::setSlug", "doc": "&quot;Set slug&quot;"},
                    {"type": "Method", "fromName": "moovi\\MooviBundle\\Entity\\Movie", "fromLink": "moovi/MooviBundle/Entity/Movie.html", "link": "moovi/MooviBundle/Entity/Movie.html#method_getSlug", "name": "moovi\\MooviBundle\\Entity\\Movie::getSlug", "doc": "&quot;Get slug&quot;"},
                    {"type": "Method", "fromName": "moovi\\MooviBundle\\Entity\\Movie", "fromLink": "moovi/MooviBundle/Entity/Movie.html", "link": "moovi/MooviBundle/Entity/Movie.html#method___construct", "name": "moovi\\MooviBundle\\Entity\\Movie::__construct", "doc": "&quot;Constructor&quot;"},
                    {"type": "Method", "fromName": "moovi\\MooviBundle\\Entity\\Movie", "fromLink": "moovi/MooviBundle/Entity/Movie.html", "link": "moovi/MooviBundle/Entity/Movie.html#method_addGenre", "name": "moovi\\MooviBundle\\Entity\\Movie::addGenre", "doc": "&quot;Add genres&quot;"},
                    {"type": "Method", "fromName": "moovi\\MooviBundle\\Entity\\Movie", "fromLink": "moovi/MooviBundle/Entity/Movie.html", "link": "moovi/MooviBundle/Entity/Movie.html#method_removeGenre", "name": "moovi\\MooviBundle\\Entity\\Movie::removeGenre", "doc": "&quot;Remove genres&quot;"},
                    {"type": "Method", "fromName": "moovi\\MooviBundle\\Entity\\Movie", "fromLink": "moovi/MooviBundle/Entity/Movie.html", "link": "moovi/MooviBundle/Entity/Movie.html#method_getGenres", "name": "moovi\\MooviBundle\\Entity\\Movie::getGenres", "doc": "&quot;Get genres&quot;"},
                    {"type": "Method", "fromName": "moovi\\MooviBundle\\Entity\\Movie", "fromLink": "moovi/MooviBundle/Entity/Movie.html", "link": "moovi/MooviBundle/Entity/Movie.html#method_addActor", "name": "moovi\\MooviBundle\\Entity\\Movie::addActor", "doc": "&quot;Add actors&quot;"},
                    {"type": "Method", "fromName": "moovi\\MooviBundle\\Entity\\Movie", "fromLink": "moovi/MooviBundle/Entity/Movie.html", "link": "moovi/MooviBundle/Entity/Movie.html#method_removeActor", "name": "moovi\\MooviBundle\\Entity\\Movie::removeActor", "doc": "&quot;Remove actors&quot;"},
                    {"type": "Method", "fromName": "moovi\\MooviBundle\\Entity\\Movie", "fromLink": "moovi/MooviBundle/Entity/Movie.html", "link": "moovi/MooviBundle/Entity/Movie.html#method_getActors", "name": "moovi\\MooviBundle\\Entity\\Movie::getActors", "doc": "&quot;Get actors&quot;"},
                    {"type": "Method", "fromName": "moovi\\MooviBundle\\Entity\\Movie", "fromLink": "moovi/MooviBundle/Entity/Movie.html", "link": "moovi/MooviBundle/Entity/Movie.html#method_addOrder", "name": "moovi\\MooviBundle\\Entity\\Movie::addOrder", "doc": "&quot;Add orders&quot;"},
                    {"type": "Method", "fromName": "moovi\\MooviBundle\\Entity\\Movie", "fromLink": "moovi/MooviBundle/Entity/Movie.html", "link": "moovi/MooviBundle/Entity/Movie.html#method_removeOrder", "name": "moovi\\MooviBundle\\Entity\\Movie::removeOrder", "doc": "&quot;Remove orders&quot;"},
                    {"type": "Method", "fromName": "moovi\\MooviBundle\\Entity\\Movie", "fromLink": "moovi/MooviBundle/Entity/Movie.html", "link": "moovi/MooviBundle/Entity/Movie.html#method_getOrders", "name": "moovi\\MooviBundle\\Entity\\Movie::getOrders", "doc": "&quot;Get orders&quot;"},
                    {"type": "Method", "fromName": "moovi\\MooviBundle\\Entity\\Movie", "fromLink": "moovi/MooviBundle/Entity/Movie.html", "link": "moovi/MooviBundle/Entity/Movie.html#method_getOrdersCount", "name": "moovi\\MooviBundle\\Entity\\Movie::getOrdersCount", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "moovi\\MooviBundle\\Entity\\Movie", "fromLink": "moovi/MooviBundle/Entity/Movie.html", "link": "moovi/MooviBundle/Entity/Movie.html#method_setDescription", "name": "moovi\\MooviBundle\\Entity\\Movie::setDescription", "doc": "&quot;Set description&quot;"},
                    {"type": "Method", "fromName": "moovi\\MooviBundle\\Entity\\Movie", "fromLink": "moovi/MooviBundle/Entity/Movie.html", "link": "moovi/MooviBundle/Entity/Movie.html#method_getDescription", "name": "moovi\\MooviBundle\\Entity\\Movie::getDescription", "doc": "&quot;Get description&quot;"},
                    {"type": "Method", "fromName": "moovi\\MooviBundle\\Entity\\Movie", "fromLink": "moovi/MooviBundle/Entity/Movie.html", "link": "moovi/MooviBundle/Entity/Movie.html#method_addComment", "name": "moovi\\MooviBundle\\Entity\\Movie::addComment", "doc": "&quot;Add comments&quot;"},
                    {"type": "Method", "fromName": "moovi\\MooviBundle\\Entity\\Movie", "fromLink": "moovi/MooviBundle/Entity/Movie.html", "link": "moovi/MooviBundle/Entity/Movie.html#method_removeComment", "name": "moovi\\MooviBundle\\Entity\\Movie::removeComment", "doc": "&quot;Remove comments&quot;"},
                    {"type": "Method", "fromName": "moovi\\MooviBundle\\Entity\\Movie", "fromLink": "moovi/MooviBundle/Entity/Movie.html", "link": "moovi/MooviBundle/Entity/Movie.html#method_getComments", "name": "moovi\\MooviBundle\\Entity\\Movie::getComments", "doc": "&quot;Get comments&quot;"},
                    {"type": "Method", "fromName": "moovi\\MooviBundle\\Entity\\Movie", "fromLink": "moovi/MooviBundle/Entity/Movie.html", "link": "moovi/MooviBundle/Entity/Movie.html#method_setPrice", "name": "moovi\\MooviBundle\\Entity\\Movie::setPrice", "doc": "&quot;Set price&quot;"},
                    {"type": "Method", "fromName": "moovi\\MooviBundle\\Entity\\Movie", "fromLink": "moovi/MooviBundle/Entity/Movie.html", "link": "moovi/MooviBundle/Entity/Movie.html#method_getPrice", "name": "moovi\\MooviBundle\\Entity\\Movie::getPrice", "doc": "&quot;Get price&quot;"},
            
            {"type": "Class", "fromName": "moovi\\MooviBundle\\Entity", "fromLink": "moovi/MooviBundle/Entity.html", "link": "moovi/MooviBundle/Entity/Order.html", "name": "moovi\\MooviBundle\\Entity\\Order", "doc": "&quot;Order&quot;"},
                                                        {"type": "Method", "fromName": "moovi\\MooviBundle\\Entity\\Order", "fromLink": "moovi/MooviBundle/Entity/Order.html", "link": "moovi/MooviBundle/Entity/Order.html#method_getId", "name": "moovi\\MooviBundle\\Entity\\Order::getId", "doc": "&quot;Get id&quot;"},
                    {"type": "Method", "fromName": "moovi\\MooviBundle\\Entity\\Order", "fromLink": "moovi/MooviBundle/Entity/Order.html", "link": "moovi/MooviBundle/Entity/Order.html#method_setTitle", "name": "moovi\\MooviBundle\\Entity\\Order::setTitle", "doc": "&quot;Set title&quot;"},
                    {"type": "Method", "fromName": "moovi\\MooviBundle\\Entity\\Order", "fromLink": "moovi/MooviBundle/Entity/Order.html", "link": "moovi/MooviBundle/Entity/Order.html#method_getTitle", "name": "moovi\\MooviBundle\\Entity\\Order::getTitle", "doc": "&quot;Get title&quot;"},
                    {"type": "Method", "fromName": "moovi\\MooviBundle\\Entity\\Order", "fromLink": "moovi/MooviBundle/Entity/Order.html", "link": "moovi/MooviBundle/Entity/Order.html#method_setMovie", "name": "moovi\\MooviBundle\\Entity\\Order::setMovie", "doc": "&quot;Set movie&quot;"},
                    {"type": "Method", "fromName": "moovi\\MooviBundle\\Entity\\Order", "fromLink": "moovi/MooviBundle/Entity/Order.html", "link": "moovi/MooviBundle/Entity/Order.html#method_getMovie", "name": "moovi\\MooviBundle\\Entity\\Order::getMovie", "doc": "&quot;Get movie&quot;"},
                    {"type": "Method", "fromName": "moovi\\MooviBundle\\Entity\\Order", "fromLink": "moovi/MooviBundle/Entity/Order.html", "link": "moovi/MooviBundle/Entity/Order.html#method_setUser", "name": "moovi\\MooviBundle\\Entity\\Order::setUser", "doc": "&quot;Set user&quot;"},
                    {"type": "Method", "fromName": "moovi\\MooviBundle\\Entity\\Order", "fromLink": "moovi/MooviBundle/Entity/Order.html", "link": "moovi/MooviBundle/Entity/Order.html#method_getUser", "name": "moovi\\MooviBundle\\Entity\\Order::getUser", "doc": "&quot;Get user&quot;"},
                    {"type": "Method", "fromName": "moovi\\MooviBundle\\Entity\\Order", "fromLink": "moovi/MooviBundle/Entity/Order.html", "link": "moovi/MooviBundle/Entity/Order.html#method_setPrice", "name": "moovi\\MooviBundle\\Entity\\Order::setPrice", "doc": "&quot;Set price&quot;"},
                    {"type": "Method", "fromName": "moovi\\MooviBundle\\Entity\\Order", "fromLink": "moovi/MooviBundle/Entity/Order.html", "link": "moovi/MooviBundle/Entity/Order.html#method_getPrice", "name": "moovi\\MooviBundle\\Entity\\Order::getPrice", "doc": "&quot;Get price&quot;"},
                    {"type": "Method", "fromName": "moovi\\MooviBundle\\Entity\\Order", "fromLink": "moovi/MooviBundle/Entity/Order.html", "link": "moovi/MooviBundle/Entity/Order.html#method_setStatus", "name": "moovi\\MooviBundle\\Entity\\Order::setStatus", "doc": "&quot;Set status&quot;"},
                    {"type": "Method", "fromName": "moovi\\MooviBundle\\Entity\\Order", "fromLink": "moovi/MooviBundle/Entity/Order.html", "link": "moovi/MooviBundle/Entity/Order.html#method_getStatus", "name": "moovi\\MooviBundle\\Entity\\Order::getStatus", "doc": "&quot;Get status&quot;"},
            
            {"type": "Class", "fromName": "moovi\\MooviBundle\\Entity", "fromLink": "moovi/MooviBundle/Entity.html", "link": "moovi/MooviBundle/Entity/User.html", "name": "moovi\\MooviBundle\\Entity\\User", "doc": "&quot;\n&quot;"},
                                                        {"type": "Method", "fromName": "moovi\\MooviBundle\\Entity\\User", "fromLink": "moovi/MooviBundle/Entity/User.html", "link": "moovi/MooviBundle/Entity/User.html#method___construct", "name": "moovi\\MooviBundle\\Entity\\User::__construct", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "moovi\\MooviBundle\\Entity\\User", "fromLink": "moovi/MooviBundle/Entity/User.html", "link": "moovi/MooviBundle/Entity/User.html#method_getId", "name": "moovi\\MooviBundle\\Entity\\User::getId", "doc": "&quot;Get id&quot;"},
                    {"type": "Method", "fromName": "moovi\\MooviBundle\\Entity\\User", "fromLink": "moovi/MooviBundle/Entity/User.html", "link": "moovi/MooviBundle/Entity/User.html#method_addOrder", "name": "moovi\\MooviBundle\\Entity\\User::addOrder", "doc": "&quot;Add orders&quot;"},
                    {"type": "Method", "fromName": "moovi\\MooviBundle\\Entity\\User", "fromLink": "moovi/MooviBundle/Entity/User.html", "link": "moovi/MooviBundle/Entity/User.html#method_removeOrder", "name": "moovi\\MooviBundle\\Entity\\User::removeOrder", "doc": "&quot;Remove orders&quot;"},
                    {"type": "Method", "fromName": "moovi\\MooviBundle\\Entity\\User", "fromLink": "moovi/MooviBundle/Entity/User.html", "link": "moovi/MooviBundle/Entity/User.html#method_getOrders", "name": "moovi\\MooviBundle\\Entity\\User::getOrders", "doc": "&quot;Get orders&quot;"},
                    {"type": "Method", "fromName": "moovi\\MooviBundle\\Entity\\User", "fromLink": "moovi/MooviBundle/Entity/User.html", "link": "moovi/MooviBundle/Entity/User.html#method_addComment", "name": "moovi\\MooviBundle\\Entity\\User::addComment", "doc": "&quot;Add comments&quot;"},
                    {"type": "Method", "fromName": "moovi\\MooviBundle\\Entity\\User", "fromLink": "moovi/MooviBundle/Entity/User.html", "link": "moovi/MooviBundle/Entity/User.html#method_removeComment", "name": "moovi\\MooviBundle\\Entity\\User::removeComment", "doc": "&quot;Remove comments&quot;"},
                    {"type": "Method", "fromName": "moovi\\MooviBundle\\Entity\\User", "fromLink": "moovi/MooviBundle/Entity/User.html", "link": "moovi/MooviBundle/Entity/User.html#method_getComments", "name": "moovi\\MooviBundle\\Entity\\User::getComments", "doc": "&quot;Get comments&quot;"},
            
            {"type": "Class", "fromName": "moovi\\MooviBundle\\Form", "fromLink": "moovi/MooviBundle/Form.html", "link": "moovi/MooviBundle/Form/ActorType.html", "name": "moovi\\MooviBundle\\Form\\ActorType", "doc": "&quot;\n&quot;"},
                                                        {"type": "Method", "fromName": "moovi\\MooviBundle\\Form\\ActorType", "fromLink": "moovi/MooviBundle/Form/ActorType.html", "link": "moovi/MooviBundle/Form/ActorType.html#method_buildForm", "name": "moovi\\MooviBundle\\Form\\ActorType::buildForm", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "moovi\\MooviBundle\\Form\\ActorType", "fromLink": "moovi/MooviBundle/Form/ActorType.html", "link": "moovi/MooviBundle/Form/ActorType.html#method_setDefaultOptions", "name": "moovi\\MooviBundle\\Form\\ActorType::setDefaultOptions", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "moovi\\MooviBundle\\Form\\ActorType", "fromLink": "moovi/MooviBundle/Form/ActorType.html", "link": "moovi/MooviBundle/Form/ActorType.html#method_getName", "name": "moovi\\MooviBundle\\Form\\ActorType::getName", "doc": "&quot;\n&quot;"},
            
            {"type": "Class", "fromName": "moovi\\MooviBundle\\Form", "fromLink": "moovi/MooviBundle/Form.html", "link": "moovi/MooviBundle/Form/CommentType.html", "name": "moovi\\MooviBundle\\Form\\CommentType", "doc": "&quot;\n&quot;"},
                                                        {"type": "Method", "fromName": "moovi\\MooviBundle\\Form\\CommentType", "fromLink": "moovi/MooviBundle/Form/CommentType.html", "link": "moovi/MooviBundle/Form/CommentType.html#method_buildForm", "name": "moovi\\MooviBundle\\Form\\CommentType::buildForm", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "moovi\\MooviBundle\\Form\\CommentType", "fromLink": "moovi/MooviBundle/Form/CommentType.html", "link": "moovi/MooviBundle/Form/CommentType.html#method_setDefaultOptions", "name": "moovi\\MooviBundle\\Form\\CommentType::setDefaultOptions", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "moovi\\MooviBundle\\Form\\CommentType", "fromLink": "moovi/MooviBundle/Form/CommentType.html", "link": "moovi/MooviBundle/Form/CommentType.html#method_getName", "name": "moovi\\MooviBundle\\Form\\CommentType::getName", "doc": "&quot;\n&quot;"},
            
            {"type": "Class", "fromName": "moovi\\MooviBundle\\Form", "fromLink": "moovi/MooviBundle/Form.html", "link": "moovi/MooviBundle/Form/GenreType.html", "name": "moovi\\MooviBundle\\Form\\GenreType", "doc": "&quot;\n&quot;"},
                                                        {"type": "Method", "fromName": "moovi\\MooviBundle\\Form\\GenreType", "fromLink": "moovi/MooviBundle/Form/GenreType.html", "link": "moovi/MooviBundle/Form/GenreType.html#method_buildForm", "name": "moovi\\MooviBundle\\Form\\GenreType::buildForm", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "moovi\\MooviBundle\\Form\\GenreType", "fromLink": "moovi/MooviBundle/Form/GenreType.html", "link": "moovi/MooviBundle/Form/GenreType.html#method_setDefaultOptions", "name": "moovi\\MooviBundle\\Form\\GenreType::setDefaultOptions", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "moovi\\MooviBundle\\Form\\GenreType", "fromLink": "moovi/MooviBundle/Form/GenreType.html", "link": "moovi/MooviBundle/Form/GenreType.html#method_getName", "name": "moovi\\MooviBundle\\Form\\GenreType::getName", "doc": "&quot;\n&quot;"},
            
            {"type": "Class", "fromName": "moovi\\MooviBundle\\Form", "fromLink": "moovi/MooviBundle/Form.html", "link": "moovi/MooviBundle/Form/MovieType.html", "name": "moovi\\MooviBundle\\Form\\MovieType", "doc": "&quot;\n&quot;"},
                                                        {"type": "Method", "fromName": "moovi\\MooviBundle\\Form\\MovieType", "fromLink": "moovi/MooviBundle/Form/MovieType.html", "link": "moovi/MooviBundle/Form/MovieType.html#method_buildForm", "name": "moovi\\MooviBundle\\Form\\MovieType::buildForm", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "moovi\\MooviBundle\\Form\\MovieType", "fromLink": "moovi/MooviBundle/Form/MovieType.html", "link": "moovi/MooviBundle/Form/MovieType.html#method_setDefaultOptions", "name": "moovi\\MooviBundle\\Form\\MovieType::setDefaultOptions", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "moovi\\MooviBundle\\Form\\MovieType", "fromLink": "moovi/MooviBundle/Form/MovieType.html", "link": "moovi/MooviBundle/Form/MovieType.html#method_getName", "name": "moovi\\MooviBundle\\Form\\MovieType::getName", "doc": "&quot;\n&quot;"},
            
            {"type": "Class", "fromName": "moovi\\MooviBundle\\Repository", "fromLink": "moovi/MooviBundle/Repository.html", "link": "moovi/MooviBundle/Repository/MovieRepository.html", "name": "moovi\\MooviBundle\\Repository\\MovieRepository", "doc": "&quot;\n&quot;"},
                                                        {"type": "Method", "fromName": "moovi\\MooviBundle\\Repository\\MovieRepository", "fromLink": "moovi/MooviBundle/Repository/MovieRepository.html", "link": "moovi/MooviBundle/Repository/MovieRepository.html#method_findByLastest", "name": "moovi\\MooviBundle\\Repository\\MovieRepository::findByLastest", "doc": "&quot;Get movies by lastes&quot;"},
                    {"type": "Method", "fromName": "moovi\\MooviBundle\\Repository\\MovieRepository", "fromLink": "moovi/MooviBundle/Repository/MovieRepository.html", "link": "moovi/MooviBundle/Repository/MovieRepository.html#method_findByMostPopular", "name": "moovi\\MooviBundle\\Repository\\MovieRepository::findByMostPopular", "doc": "&quot;Get movies by most popular&quot;"},
                    {"type": "Method", "fromName": "moovi\\MooviBundle\\Repository\\MovieRepository", "fromLink": "moovi/MooviBundle/Repository/MovieRepository.html", "link": "moovi/MooviBundle/Repository/MovieRepository.html#method_findByMostCommented", "name": "moovi\\MooviBundle\\Repository\\MovieRepository::findByMostCommented", "doc": "&quot;Get movies by most commented&quot;"},
            
            {"type": "Class", "fromName": "moovi\\MooviBundle", "fromLink": "moovi/MooviBundle.html", "link": "moovi/MooviBundle/mooviMooviBundle.html", "name": "moovi\\MooviBundle\\mooviMooviBundle", "doc": "&quot;\n&quot;"},
                    
            
                                        // Fix trailing commas in the index
        {}
    ];

    /** Tokenizes strings by namespaces and functions */
    function tokenizer(term) {
        if (!term) {
            return [];
        }

        var tokens = [term];
        var meth = term.indexOf('::');

        // Split tokens into methods if "::" is found.
        if (meth > -1) {
            tokens.push(term.substr(meth + 2));
            term = term.substr(0, meth - 2);
        }

        // Split by namespace or fake namespace.
        if (term.indexOf('\\') > -1) {
            tokens = tokens.concat(term.split('\\'));
        } else if (term.indexOf('_') > 0) {
            tokens = tokens.concat(term.split('_'));
        }

        // Merge in splitting the string by case and return
        tokens = tokens.concat(term.match(/(([A-Z]?[^A-Z]*)|([a-z]?[^a-z]*))/g).slice(0,-1));

        return tokens;
    };

    root.Sami = {
        /**
         * Cleans the provided term. If no term is provided, then one is
         * grabbed from the query string "search" parameter.
         */
        cleanSearchTerm: function(term) {
            // Grab from the query string
            if (typeof term === 'undefined') {
                var name = 'search';
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
                var results = regex.exec(location.search);
                if (results === null) {
                    return null;
                }
                term = decodeURIComponent(results[1].replace(/\+/g, " "));
            }

            return term.replace(/<(?:.|\n)*?>/gm, '');
        },

        /** Searches through the index for a given term */
        search: function(term) {
            // Create a new search index if needed
            if (!bhIndex) {
                bhIndex = new Bloodhound({
                    limit: 500,
                    local: searchIndex,
                    datumTokenizer: function (d) {
                        return tokenizer(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace
                });
                bhIndex.initialize();
            }

            results = [];
            bhIndex.get(term, function(matches) {
                results = matches;
            });

            if (!rootPath) {
                return results;
            }

            // Fix the element links based on the current page depth.
            return $.map(results, function(ele) {
                if (ele.link.indexOf('..') > -1) {
                    return ele;
                }
                ele.link = rootPath + ele.link;
                if (ele.fromLink) {
                    ele.fromLink = rootPath + ele.fromLink;
                }
                return ele;
            });
        },

        /** Get a search class for a specific type */
        getSearchClass: function(type) {
            return searchTypeClasses[type] || searchTypeClasses['_'];
        },

        /** Add the left-nav tree to the site */
        injectApiTree: function(ele) {
            ele.html(treeHtml);
        }
    };

    $(function() {
        // Modify the HTML to work correctly based on the current depth
        rootPath = $('body').attr('data-root-path');
        treeHtml = treeHtml.replace(/href="/g, 'href="' + rootPath);
        Sami.injectApiTree($('#api-tree'));
    });

    return root.Sami;
})(window);

$(function() {

    // Enable the version switcher
    $('#version-switcher').change(function() {
        window.location = $(this).val()
    });

    
        // Toggle left-nav divs on click
        $('#api-tree .hd span').click(function() {
            $(this).parent().parent().toggleClass('opened');
        });

        // Expand the parent namespaces of the current page.
        var expected = $('body').attr('data-name');

        if (expected) {
            // Open the currently selected node and its parents.
            var container = $('#api-tree');
            var node = $('#api-tree li[data-name="' + expected + '"]');
            // Node might not be found when simulating namespaces
            if (node.length > 0) {
                node.addClass('active').addClass('opened');
                node.parents('li').addClass('opened');
                var scrollPos = node.offset().top - container.offset().top + container.scrollTop();
                // Position the item nearer to the top of the screen.
                scrollPos -= 200;
                container.scrollTop(scrollPos);
            }
        }

    
    
        var form = $('#search-form .typeahead');
        form.typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'search',
            displayKey: 'name',
            source: function (q, cb) {
                cb(Sami.search(q));
            }
        });

        // The selection is direct-linked when the user selects a suggestion.
        form.on('typeahead:selected', function(e, suggestion) {
            window.location = suggestion.link;
        });

        // The form is submitted when the user hits enter.
        form.keypress(function (e) {
            if (e.which == 13) {
                $('#search-form').submit();
                return true;
            }
        });

    
});


