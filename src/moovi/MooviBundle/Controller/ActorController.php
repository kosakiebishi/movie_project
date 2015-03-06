<?php

namespace moovi\MooviBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

use moovi\MooviBundle\Entity\Actor;

use moovi\MooviBundle\Form\ActorType;

class ActorController extends Controller {

    /**
     * Add new actor
     *
     */
    public function addAction(Request $request) {
    	$actor = new Actor();
    	$form = $this->createForm(new ActorType(), $actor);
    	$form->handleRequest($request);
    	if ( $request->isMethod('POST') && $form->isValid()) {
    		$em = $this->getDoctrine()->getManager();
    		$em->persist($actor);
    		$em->flush();
    		return $this->redirect($this->generateUrl('moovi_actor_add'));
    	}  	
        return $this->render('mooviMooviBundle:Actor:add.html.twig', array(
        	'form' => $form->createView()));
    }
}
