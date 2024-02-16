<?php

namespace App;

use App\Entity\Reservation;
use App\Factory\Email;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\Mailer\MailerInterface;

class ReservationModifiedProcessor
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
    public function __invoke(Reservation $reservation){
        $currentUser = $this->user;

        $clientEmail = $this->email->create(
            'api-platform@api.com',
            $currentUser->getEmail(),
            'Confirmation de votre réservation n°' . $reservation->getId(),
            'Modification de votre réservation n°' . $reservation->getId() . ' effectuée'
        );
        $this->mailer->send($clientEmail);
    }
}