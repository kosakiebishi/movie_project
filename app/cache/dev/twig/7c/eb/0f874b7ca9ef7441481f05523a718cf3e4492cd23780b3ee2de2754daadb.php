<?php

/* mooviMooviBundle:_partials:navbar.html.twig */
class __TwigTemplate_7ceb0f874b7ca9ef7441481f05523a718cf3e4492cd23780b3ee2de2754daadb extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 1
        echo "
<nav class=\"navbar navbar-default\">
\t<div class=\"container\">
\t\t<div class=\"navbar-header\">
  \t\t\t<button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">
    \t\t\t<span class=\"sr-only\">Toggle navigation</span>
    \t\t\t<span class=\"icon-bar\"></span>
    \t\t\t<span class=\"icon-bar\"></span>
   \t \t\t\t<span class=\"icon-bar\"></span>
  \t\t\t</button>
  \t\t\t<a class=\"navbar-brand\" href=\"";
        // line 11
        echo $this->env->getExtension('routing')->getPath("moovi_moovi_homepage");
        echo "\">moovi</a>
\t\t</div>
    \t<div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">
      \t\t<ul class=\"nav navbar-nav\">
                <li><a href=\"";
        // line 15
        echo $this->env->getExtension('routing')->getPath("moovi_movie_list");
        echo "\">Filmy</a></li>
          \t</ul>
      \t\t<ul class=\"nav navbar-nav navbar-right\">
      \t\t\t";
        // line 18
        if ($this->env->getExtension('security')->isGranted("ROLE_USER")) {
            // line 19
            echo "        \t\t\t<li><a href=\"";
            echo $this->env->getExtension('routing')->getPath("moovi_user_orders");
            echo "\">Zamówienia</a></li>
        \t\t\t<li><a href=\"";
            // line 20
            echo $this->env->getExtension('routing')->getPath("fos_user_security_logout");
            echo "\">wyloguj(";
            echo twig_escape_filter($this->env, $this->getAttribute($this->getAttribute((isset($context["app"]) ? $context["app"] : $this->getContext($context, "app")), "user", array()), "username", array()), "html", null, true);
            echo ")</a></li>
        \t\t";
        } else {
            // line 22
            echo "        \t\t\t<li><a href=\"";
            echo $this->env->getExtension('routing')->getPath("fos_user_security_login");
            echo "\">Zaloguj</a></li>
        \t\t\t<li><a href=\"";
            // line 23
            echo $this->env->getExtension('routing')->getPath("fos_user_registration_register");
            echo "\">Zarejestruj</a></li>
        \t\t";
        }
        // line 25
        echo "      \t\t</ul>
    \t</div>
\t\t</div>
</nav>";
    }

    public function getTemplateName()
    {
        return "mooviMooviBundle:_partials:navbar.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  68 => 25,  63 => 23,  58 => 22,  51 => 20,  46 => 19,  44 => 18,  38 => 15,  31 => 11,  19 => 1,);
    }
}
