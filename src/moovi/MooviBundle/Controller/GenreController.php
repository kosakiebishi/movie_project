<?php

namespace moovi\MooviBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

use moovi\MooviBundle\Entity\Genre;

use moovi\MooviBundle\Form\GenreType;

class GenreController extends Controller {

    /**
     * Add new genre
     */
    public function addAction(Request $request) {
    	$genre = new Genre();
    	$form = $this->createForm(new GenreType(), $genre);
    	$form->handleRequest($request);

    	if ( $request->isMethod('POST') && $form->isValid()) {
    		$em = $this->getDoctrine()->getManager();
    		$em->persist($genre);
    		$em->flush();
    		return $this->redirect($this->generateUrl('moovi_genre_add'));
    	}  	
        return $this->render('mooviMooviBundle:Genre:add.html.twig', array(
        	'form' => $form->createView()));
    }
}
