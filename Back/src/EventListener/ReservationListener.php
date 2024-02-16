<?php

namespace App\EventListener;

use App\Entity\Reservation;
use App\Entity\User;
use App\Factory\Email;
use Doctrine\Bundle\DoctrineBundle\Attribute\AsEntityListener;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\Events;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\Mailer\MailerInterface;

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
    private MailerInterface $mailer;
    private ?\Symfony\Component\Security\Core\User\UserInterface $user;
    private Email $email;

    public function __construct(
        MailerInterface $mailer,
        Security        $security,
        Email           $email

    )
    {
        $this->mailer = $mailer;
        $this->user = $security->getUser();
        $this->email = $email;
    }

    public function prePersist(Reservation $reservation): void
    {
        $currentUser = $this->user;
        $reservation->setClient($currentUser);

    }

    public function postPersist(Reservation $reservation): void
    {
        /** @var User $currentUser */
        $currentUser = $this->user;

        $clientEmail = $this->email->create(
            'api-platform@api.com',
            $currentUser->getEmail(),
            'Confirmation de votre réservation n°' . $reservation->getId(),
            'Réservation n°' . $reservation->getId() . ' effectuée'
        );
        $this->mailer->send($clientEmail);
    }
}