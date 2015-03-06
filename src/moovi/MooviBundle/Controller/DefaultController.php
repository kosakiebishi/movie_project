<?php

namespace moovi\MooviBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use moovi\MooviBundle\Entity\Movie;

class DefaultController extends Controller
{
    public function indexAction($name)
    {
    	$movie = new Movie();
		$movie->setTitle('zabili go i ucik');
		$movie->setYear(new \DateTime("11-11-1990"));
		$movie->setCover('sdfsd');		
		$em = $this->getDoctrine()->getManager();
		$em->persist($movie);
		$em->flush();

		//echo $movie->getSlug();
        return $this->render('mooviMooviBundle:Default:index.html.twig', array('name' => $name));
    }
}
