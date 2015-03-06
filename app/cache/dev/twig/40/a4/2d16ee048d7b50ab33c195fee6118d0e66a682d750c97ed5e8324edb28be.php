<?php

/* mooviMooviBundle:Welcome:index.html.twig */
class __TwigTemplate_40a42d16ee048d7b50ab33c195fee6118d0e66a682d750c97ed5e8324edb28be extends Twig_Template
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

    // line 2
    public function block_content($context, array $blocks = array())
    {
        // line 3
        echo "    <div class=\"row\">
        <div class=\"page-header\">
            <h1>Najnowsze <small>Ostatnio dodane</small></h1>
        </div>


        ";
        // line 9
        $context['_parent'] = (array) $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["lastest"]) ? $context["lastest"] : $this->getContext($context, "lastest")));
        foreach ($context['_seq'] as $context["_key"] => $context["movie"]) {
            // line 10
            echo "            <div class=\"col-sm-6 col-md-4\">
                <div class=\"thumbnail\">
                    <a href=\"";
            // line 12
            echo twig_escape_filter($this->env, $this->env->getExtension('routing')->getPath("moovi_movie_display", array("slug" => $this->getAttribute($context["movie"], "slug", array()))), "html", null, true);
            echo "\"><img src=\"";
            echo twig_escape_filter($this->env, $this->getAttribute($context["movie"], "cover", array()), "html", null, true);
            echo "\" alt=\"";
            echo twig_escape_filter($this->env, $this->getAttribute($context["movie"], "title", array()), "html", null, true);
            echo "\" height=\"200\" width=\"200\" /></a>
                    <div class=\"caption\">
                        <h3> <a href=\"";
            // line 14
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
        // line 22
        echo "
    </div>


    <div class=\"row\">
        <div class=\"page-header\">
            <h1>Najpopularniejsze <small>Najczęściej kupowane przez klientów</small></h1>
        </div>


        ";
        // line 32
        $context['_parent'] = (array) $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["most_popular"]) ? $context["most_popular"] : $this->getContext($context, "most_popular")));
        foreach ($context['_seq'] as $context["_key"] => $context["movie"]) {
            // line 33
            echo "            <div class=\"col-sm-6 col-md-4\">
                <div class=\"thumbnail\">
                    <a href=\"";
            // line 35
            echo twig_escape_filter($this->env, $this->env->getExtension('routing')->getPath("moovi_movie_display", array("slug" => $this->getAttribute($context["movie"], "slug", array()))), "html", null, true);
            echo "\"><img src=\"";
            echo twig_escape_filter($this->env, $this->getAttribute($context["movie"], "cover", array()), "html", null, true);
            echo "\" alt=\"";
            echo twig_escape_filter($this->env, $this->getAttribute($context["movie"], "title", array()), "html", null, true);
            echo "\" height=\"200\" width=\"200\" /></a>
                    <div class=\"caption\">
                        <h3> <a href=\"";
            // line 37
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
        // line 45
        echo "
    </div>

    <div class=\"row\">
        <div class=\"page-header\">
            <h1>Najczęściej komentowane <small>Najczęściej mówi się o</small></h1>
        </div>


        ";
        // line 54
        $context['_parent'] = (array) $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["most_comented"]) ? $context["most_comented"] : $this->getContext($context, "most_comented")));
        foreach ($context['_seq'] as $context["_key"] => $context["movie"]) {
            // line 55
            echo "            <div class=\"col-sm-6 col-md-4\">
                <div class=\"thumbnail\">
                    <a href=\"";
            // line 57
            echo twig_escape_filter($this->env, $this->env->getExtension('routing')->getPath("moovi_movie_display", array("slug" => $this->getAttribute($context["movie"], "slug", array()))), "html", null, true);
            echo "\"><img src=\"";
            echo twig_escape_filter($this->env, $this->getAttribute($context["movie"], "cover", array()), "html", null, true);
            echo "\" alt=\"";
            echo twig_escape_filter($this->env, $this->getAttribute($context["movie"], "title", array()), "html", null, true);
            echo "\" height=\"200\" width=\"200\" /></a>
                    <div class=\"caption\">
                        <h3> <a href=\"";
            // line 59
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
        // line 66
        echo "
    </div>
";
    }

    public function getTemplateName()
    {
        return "mooviMooviBundle:Welcome:index.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  168 => 66,  153 => 59,  144 => 57,  140 => 55,  136 => 54,  125 => 45,  109 => 37,  100 => 35,  96 => 33,  92 => 32,  80 => 22,  64 => 14,  55 => 12,  51 => 10,  47 => 9,  39 => 3,  36 => 2,  11 => 1,);
    }
}
