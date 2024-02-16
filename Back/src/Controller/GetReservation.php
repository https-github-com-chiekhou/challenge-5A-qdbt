<?php

namespace App\Controller;

use App\Entity\Reservation;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Attribute\AsController;

#[AsController]
class GetReservation extends AbstractController
{
    private ?\Symfony\Component\Security\Core\User\UserInterface $user;
    private EntityManagerInterface $entityManager;

    public function __construct(
        EntityManagerInterface $entityManager,
        Security               $security,

    )
    {
        $this->user = $security->getUser();
        $this->entityManager = $entityManager;

    }

    public function __invoke(Request $request): Response
    {
        $user = $this->getUser();

        if ($this->isGranted('ROLE_PRESTATAIRE')) {
            $reservations = $this->entityManager->getRepository(Reservation::class)->findBy(['prestataire' => $user]);
        } else {
            $reservations = $this->entityManager->getRepository(Reservation::class)->findBy(['client' => $user]);
        }

        // Retourner les réservations au format JSON
        return $this->json($reservations, Response::HTTP_OK, [], ['groups' => 'reservation:read']);
    }

}