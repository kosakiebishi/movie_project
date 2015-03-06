<?php

/* FOSUserBundle:Security:login.html.twig */
class __TwigTemplate_3437521260b5bb833af953e1fccfb45d2d1cb12e43dad0694addbca9a2b02c38 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        try {
            $this->parent = $this->env->loadTemplate("FOSUserBundle::layout.html.twig");
        } catch (Twig_Error_Loader $e) {
            $e->setTemplateFile($this->getTemplateName());
            $e->setTemplateLine(1);

            throw $e;
        }

        $this->blocks = array(
            'content' => array($this, 'block_content'),
            'fos_user_content' => array($this, 'block_fos_user_content'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "FOSUserBundle::layout.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 2
    public function block_content($context, array $blocks = array())
    {
        // line 3
        echo "    ";
        $this->displayBlock('fos_user_content', $context, $blocks);
    }

    public function block_fos_user_content($context, array $blocks = array())
    {
        // line 4
        echo "    ";
        if ((isset($context["error"]) ? $context["error"] : $this->getContext($context, "error"))) {
            // line 5
            echo "        <div>";
            echo twig_escape_filter($this->env, $this->env->getExtension('translator')->trans((isset($context["error"]) ? $context["error"] : $this->getContext($context, "error")), array(), "FOSUserBundle"), "html", null, true);
            echo "</div>
    ";
        }
        // line 7
        echo "
    <form action=\"";
        // line 8
        echo $this->env->getExtension('routing')->getPath("fos_user_security_check");
        echo "\" method=\"post\"  class=\"form-horizontal\">
        <input type=\"hidden\" name=\"_csrf_token\" value=\"";
        // line 9
        echo twig_escape_filter($this->env, (isset($context["csrf_token"]) ? $context["csrf_token"] : $this->getContext($context, "csrf_token")), "html", null, true);
        echo "\" />

            <div class=\"form-group\">
                <label for=\"username\" class=\"col-sm-2 control-label\">";
        // line 12
        echo twig_escape_filter($this->env, $this->env->getExtension('translator')->trans("security.login.username", array(), "FOSUserBundle"), "html", null, true);
        echo "</label>
                <div class=\"col-sm-10\">
                    <input type=\"text\" class=\"form-control\" id=\"username\" name=\"_username\" value=\"";
        // line 14
        echo twig_escape_filter($this->env, (isset($context["last_username"]) ? $context["last_username"] : $this->getContext($context, "last_username")), "html", null, true);
        echo "\" required=\"required\" />
                </div>
            </div>
            <div class=\"form-group\">
                <label for=\"password\" class=\"col-sm-2 control-label\">";
        // line 18
        echo twig_escape_filter($this->env, $this->env->getExtension('translator')->trans("security.login.password", array(), "FOSUserBundle"), "html", null, true);
        echo "</label>
                <div class=\"col-sm-10\">
                    <input  type=\"password\" id=\"password\" name=\"_password\" required=\"required\"  class=\"form-control\" />
                </div>
            </div>

            <div class=\"form-group\">
                <div class=\"col-sm-offset-2 col-sm-10\">
                    <div class=\"checkbox\">
                        <label>
                            <input type=\"checkbox\" id=\"remember_me\" name=\"_remember_me\" value=\"on\" /> ";
        // line 28
        echo twig_escape_filter($this->env, $this->env->getExtension('translator')->trans("security.login.remember_me", array(), "FOSUserBundle"), "html", null, true);
        echo "
                        </label>
                    </div>
                </div>
            </div>

            <div class=\"form-group\">
                <div class=\"col-sm-offset-2 col-sm-10\">
                    <input type=\"submit\" id=\"_submit\" name=\"_submit\" value=\"";
        // line 36
        echo twig_escape_filter($this->env, $this->env->getExtension('translator')->trans("security.login.submit", array(), "FOSUserBundle"), "html", null, true);
        echo "\"  class=\"btn btn-default\" />
                </div>
            </div>
    </form>
    <a href=\"";
        // line 40
        echo $this->env->getExtension('routing')->getPath("fos_user_registration_register");
        echo "\">Nie masz konta? Zarejestruj się</a>
    ";
    }

    public function getTemplateName()
    {
        return "FOSUserBundle:Security:login.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  112 => 40,  105 => 36,  94 => 28,  81 => 18,  74 => 14,  69 => 12,  63 => 9,  59 => 8,  56 => 7,  50 => 5,  47 => 4,  40 => 3,  37 => 2,  11 => 1,);
    }
}
