<?php

namespace App\Controller;

use ApiPlatform\Metadata\ApiProperty;
use http\Env\Request;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ReservationController extends AbstractController
{
    #[Route('/reservation', name: 'app_reservation')]
    #[ApiProperty()]
    public function index(Request $request): Response
    {
        return $this->render('reservation/index.html.twig', [
            'controller_name' => 'ReservationController',
        ]);
    }

//    #[Route('/make-reservation/{id}', name: 'make_reservation')]
//    public function makeReservation(): Response
//    {
//        return;
//
//    }


//    #[Route('/cancel-reservation/{id}', name: 'cancel_reservation')]
//    public function cancelReservation(): Response
//    {
//        return;
//    }
//
//    #[Route('/move-reservation/{id}', name: 'move_reservation')]
//    public function moveReservation(): Response
//    {
//        return;
//    }
}
