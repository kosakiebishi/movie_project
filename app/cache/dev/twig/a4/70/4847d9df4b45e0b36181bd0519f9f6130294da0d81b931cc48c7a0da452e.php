<?php

/* mooviMooviBundle::layout-one.html.twig */
class __TwigTemplate_a4704847d9df4b45e0b36181bd0519f9f6130294da0d81b931cc48c7a0da452e extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
            'content' => array($this, 'block_content'),
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 1
        echo "
<!DOCTYPE HTML>
<html>
<head>
\t<title>VOD</title>
\t<link rel=\"stylesheet\" href=\"";
        // line 6
        echo twig_escape_filter($this->env, $this->env->getExtension('assets')->getAssetUrl("bundles/moovimoovi/css/bootstrap.min.css"), "html", null, true);
        echo "\" type=\"text/css\" />
\t<link rel=\"stylesheet\" href=\"";
        // line 7
        echo twig_escape_filter($this->env, $this->env->getExtension('assets')->getAssetUrl("bundles/moovimoovi/css/app.css"), "html", null, true);
        echo "\" type=\"text/css\" />
</head>
<body>
\t";
        // line 10
        $this->env->loadTemplate("mooviMooviBundle:_partials:navbar.html.twig")->display($context);
        // line 11
        echo "
\t<div class=\"container\">
\t\t<div class=\"row\">
\t\t\t<div class=\"col-md-12\">
\t\t\t\t";
        // line 15
        $this->displayBlock('content', $context, $blocks);
        // line 16
        echo "\t\t\t</div>
\t\t</div>
\t</div>
</body>
</html>";
    }

    // line 15
    public function block_content($context, array $blocks = array())
    {
    }

    public function getTemplateName()
    {
        return "mooviMooviBundle::layout-one.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  55 => 15,  47 => 16,  45 => 15,  39 => 11,  37 => 10,  31 => 7,  27 => 6,  20 => 1,);
    }
}
