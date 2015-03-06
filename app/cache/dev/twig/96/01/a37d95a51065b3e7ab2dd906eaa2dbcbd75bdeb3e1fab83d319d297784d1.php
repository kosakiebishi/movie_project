<?php

/* FOSUserBundle::layout.html.twig */
class __TwigTemplate_9601a37d95a51065b3e7ab2dd906eaa2dbcbd75bdeb3e1fab83d319d297784d1 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
            'content' => array($this, 'block_content'),
            'fos_user_content' => array($this, 'block_fos_user_content'),
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 1
        echo "<!DOCTYPE HTML>
<html>
<head>
\t<title>VOD</title>
\t<link rel=\"stylesheet\" href=\"";
        // line 5
        echo twig_escape_filter($this->env, $this->env->getExtension('assets')->getAssetUrl("bundles/moovimoovi/css/bootstrap.min.css"), "html", null, true);
        echo "\" type=\"text/css\" />
\t<link rel=\"stylesheet\" href=\"";
        // line 6
        echo twig_escape_filter($this->env, $this->env->getExtension('assets')->getAssetUrl("bundles/moovimoovi/css/app.css"), "html", null, true);
        echo "\" type=\"text/css\" />
</head>
<body>
\t";
        // line 9
        $this->env->loadTemplate("mooviMooviBundle:_partials:navbar.html.twig")->display($context);
        // line 10
        echo "
\t<div class=\"container\" id=\"security\">
\t\t<div class=\"row\">
\t\t\t<div class=\"col-md-12\">
\t\t\t\t";
        // line 14
        $this->displayBlock('content', $context, $blocks);
        // line 17
        echo "\t\t\t</div>
\t\t</div>
\t</div>
</body>
</html>";
    }

    // line 14
    public function block_content($context, array $blocks = array())
    {
        // line 15
        echo "\t\t\t\t\t";
        $this->displayBlock('fos_user_content', $context, $blocks);
        // line 16
        echo "\t\t\t\t";
    }

    // line 15
    public function block_fos_user_content($context, array $blocks = array())
    {
    }

    public function getTemplateName()
    {
        return "FOSUserBundle::layout.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  65 => 15,  61 => 16,  58 => 15,  55 => 14,  47 => 17,  45 => 14,  39 => 10,  37 => 9,  31 => 6,  27 => 5,  21 => 1,);
    }
}
