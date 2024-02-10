<?php

declare(strict_types=1);

namespace App\Controller;

use App\Entity\Reservation;
use App\Factory\Email;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Attribute\AsController;
use Symfony\Component\Mailer\MailerInterface;

#[AsController]
class ModifyReservation extends AbstractController
{
    private MailerInterface $mailer;
    private ?\Symfony\Component\Security\Core\User\UserInterface $user;
    private Email $email;
    private EntityManagerInterface $entityManager;

    public function __construct(
        MailerInterface        $mailer,
        Security               $security,
        Email                  $email,
        EntityManagerInterface $entityManager,
    )
    {
        $this->mailer = $mailer;
        $this->user = $security->getUser();
        $this->email = $email;
        $this->entityManager = $entityManager;
    }

    public function __invoke(Reservation $reservation): Reservation
    {
        $currentDate = new \DateTimeImmutable();

        if ($reservation->getDate() >= $currentDate && $reservation->getStartTime() >= $currentDate && $reservation->getEndTime() >= $currentDate) {
            // Mettre à jour la réservation avec les nouvelles valeurs
            $reservation->setDate(/* Nouvelle date */);
            $reservation->setStartTime(/* Nouvelle heure de début */);
            $reservation->setEndTime(/* Nouvelle heure de fin */);

            // Enregistrer les modifications dans la base de données
            $this->entityManager->flush();

            $clientEmail = $this->email->create(
                'eddygomet@gmail.com',
                $this->user->getEmail(),
                'Modification de votre renddez vous pour la réservation n°' . $reservation->getId(),
                'Modification effectuée'
            );
            // Retourner la réservation modifiée
        } else {
            // Gérer le cas où la date de réservation est antérieure à la date actuelle
            // Vous pouvez rejeter la modification ou effectuer d'autres actions nécessaires
        }
        return $reservation;
    }

}