<?php

/* mooviMooviBundle:Movie:list.html.twig */
class __TwigTemplate_a42b7c907062d7fd3863526c62ec60ffafe49586faefff3f1d92a0eae77d7db8 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        try {
            $this->parent = $this->env->loadTemplate("mooviMooviBundle::layout-one.html.twig");
        } catch (Twig_Error_Loader $e) {
            $e->setTemplateFile($this->getTemplateName());
            $e->setTemplateLine(1);

            throw $e;
        }

        $this->blocks = array(
            'content' => array($this, 'block_content'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "mooviMooviBundle::layout-one.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 5
    public function block_content($context, array $blocks = array())
    {
        // line 6
        echo "
    <div class=\"row\">
        <div class=\"page-header\">
            <h1>Wszystkie filmy</h1>
        </div>


        ";
        // line 13
        $context['_parent'] = (array) $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["movies"]) ? $context["movies"] : $this->getContext($context, "movies")));
        foreach ($context['_seq'] as $context["_key"] => $context["movie"]) {
            // line 14
            echo "            <div class=\"col-sm-6 col-md-4\">
                <div class=\"thumbnail\">
                    <a href=\"";
            // line 16
            echo twig_escape_filter($this->env, $this->env->getExtension('routing')->getPath("moovi_movie_display", array("slug" => $this->getAttribute($context["movie"], "slug", array()))), "html", null, true);
            echo "\"><img src=\"";
            echo twig_escape_filter($this->env, $this->getAttribute($context["movie"], "cover", array()), "html", null, true);
            echo "\" alt=\"";
            echo twig_escape_filter($this->env, $this->getAttribute($context["movie"], "title", array()), "html", null, true);
            echo "\" height=\"200\" width=\"200\" /></a>
                    <div class=\"caption\">
                        <h3> <a href=\"";
            // line 18
            echo twig_escape_filter($this->env, $this->env->getExtension('routing')->getPath("moovi_movie_display", array("slug" => $this->getAttribute($context["movie"], "slug", array()))), "html", null, true);
            echo "\">";
            echo twig_escape_filter($this->env, $this->getAttribute($context["movie"], "title", array()), "html", null, true);
            echo "</a></h3>

                    </div>
                </div>
            </div>

        ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['movie'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 25
        echo "
    </div>
";
    }

    public function getTemplateName()
    {
        return "mooviMooviBundle:Movie:list.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  80 => 25,  65 => 18,  56 => 16,  52 => 14,  48 => 13,  39 => 6,  36 => 5,  11 => 1,);
    }
}
