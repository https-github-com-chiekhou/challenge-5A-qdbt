<?php

namespace App\Controller;

use App\Entity\Reservation;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Bundle\SecurityBundle\Security;
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

    public function __invoke(Reservation $reservation): Reservation
    {

        return $reservation;
    }

}