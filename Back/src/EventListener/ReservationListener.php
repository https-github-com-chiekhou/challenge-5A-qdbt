<?php

namespace App\EventListener;

use App\Entity\Reservation;
use App\Entity\User;
use App\Factory\Email;
use Doctrine\Bundle\DoctrineBundle\Attribute\AsEntityListener;
use Doctrine\ORM\Events;
use Symfony\Bundle\SecurityBundle\Security;

#[AsEntityListener(
    event: Events::prePersist,
    method: 'prePersist',
    entity: Reservation::class
)]
#[AsEntityListener(
    event: Events::postPersist,
    method: 'postPersist',
    entity: Reservation::class
)]
class ReservationListener
{
    public function __construct(
        private Security $security,
        private Email    $email

    )
    {
    }

    public function prePersist(Reservation $reservation): void
    {
        $currentUser = $this->security->getUser();
        $reservation->setClient($currentUser);

        dd($reservation);
    }

    public function postPersist(Reservation $reservation): void
    {
        /** @var User $currentUser */
        $currentUser = $this->security->getUser();

        $clientEmail = $this->email->create(
            'api-platform@api.com',
            $currentUser->getEmail(),
            'Confirmation de réservation n°' . $reservation->getId(),
            'Réservation effectuée'
        );
    }
}