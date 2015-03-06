<?php

namespace moovi\MooviBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;



class UserController extends Controller {

    /**
     * Display user orders
     */
    public function ordersAction(Request $request) {
        // lista zamowien
        $user = $this->getUser();
        return $this->render('mooviMooviBundle:User:orders.html.twig', array(
                'user' => $user)
        );
    }
} 