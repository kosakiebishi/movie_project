<?php

namespace moovi\MooviBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use moovi\MooviBundle\Repository\MoovieRepository;


class WelcomeController extends Controller {

    /**
     * homepage action, display most popular, most commented and lastest added movies
     */
    public function indexAction() {
        $movies = $this->getDoctrine()
            ->getRepository('mooviMooviBundle:Movie');
        $lastest = $movies->findByLastest();
        $most_popular = $movies->findByMostPopular();
        $most_comented = $movies->findByMostCommented();
        //var_dump($movies);die;
        return $this->render('mooviMooviBundle:Welcome:index.html.twig', array(
            'lastest' => $lastest,
            'most_popular' => $most_popular,
            'most_comented' => $most_comented
        ));
    }
}
