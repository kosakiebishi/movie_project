<?php

namespace moovi\MooviBundle\Controller;

use moovi\MooviBundle\Entity\Order;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

use moovi\MooviBundle\Entity\Movie;
use moovi\MooviBundle\Form\MovieType;
use moovi\MooviBundle\Entity\Comment;
use moovi\MooviBundle\Form\CommentType;

class MovieController extends Controller {


    /**
     * Display list of movies
     */
    public function indexAction() {
        $repository = $this->getDoctrine()->getRepository('mooviMooviBundle:Movie');
        $movies = $repository->findAll();
        return $this->render('mooviMooviBundle:Movie:list.html.twig', array(
            'movies' => $movies
        ));
    }

    /**
     * Add new movie
     */
    public function addAction(Request $request) {
    	$movie = new Movie();
    	$form = $this->createForm(new MovieType(), $movie);
    	$form->handleRequest($request);

    	if ( $request->isMethod('POST') && $form->isValid()) {
    		$em = $this->getDoctrine()->getManager();
    		$em->persist($movie);
    		$em->flush();
    		return $this->redirect($this->generateUrl('moovi_movie_add'));
    	}    	
        return $this->render('mooviMooviBundle:Movie:add.html.twig', array(
        	'form' => $form->createView()));
    }

    /**
     * Display single movie
     *
     * @param $slug string
     */
    public function displayAction($slug, Request $request) {
        $repository = $this->getDoctrine()->getRepository('mooviMooviBundle:Movie');
        $movie = $repository->findOneBySlug($slug);
        if ( !$movie ) {
            return $this->redirect($this->generateUrl('moovi_movie_list'));
        }

        $comment = new Comment();

        $form = $this->createForm(new CommentType(), $comment);
        $form->handleRequest($request);
        //var_dump($movie); die;
        if ( $request->isMethod('POST') && $form->isValid()) {
            $comment->setMovie($movie);
            $comment->setCreatedAt();
            $comment->setUser($this->getUser());
            $em = $this->getDoctrine()->getManager();
            $em->persist($comment);
            $em->flush();
            return $this->redirect($this->generateUrl('moovi_movie_display', array(
                'slug' => $movie->getSlug()
            )));
        }
        return $this->render('mooviMooviBundle:Movie:display.html.twig', array(
            'form' => $form->createView(),
            'movie' => $movie)
        );
        //return $this->render('mooviMooviBundle:Movie:display.html.twig', array('movie' => $movie));
    }


    /**
     * Get order
     *
     * @param $slug string
     */
    public function orderAction($slug, Request $request) {
        $repository = $this->getDoctrine()->getRepository('mooviMooviBundle:Movie');
        $movie = $repository->findOneBySlug($slug);
        if ( !$movie ) {
            return $this->redirect($this->generateUrl('moovi_movie_list'));
        }

        $order = new Order();
        $order->setMovie($movie);
        $order->setUser($this->getUser());
        $order->setPrice($movie->getPrice());
        $order->setStatus(0);
        $em = $this->getDoctrine()->getManager();
        $em->persist($order);
        $em->flush();

        return $this->render('mooviMooviBundle:Movie:order.html.twig', array(
                'order' => $order)
        );
    }


}
