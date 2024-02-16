<?php

declare(strict_types=1);

namespace App\Controller;

use App\Entity\DayOff;
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

    public function __invoke(Request $request, Reservation $reservation): Reservation
    {
        $currentDate = new \DateTimeImmutable();
        $requestData = json_decode($request->getContent(), true);
        $newDate = new \DateTimeImmutable($requestData['date']);
        $newStartTime = new \DateTime($requestData['startTime']);
        $newEndTime = new \DateTime($requestData['endTime']);

        if ($reservation->getDate() >= $currentDate && $reservation->getStartTime() >= $currentDate && $reservation->getEndTime() >= $currentDate) {

            $reservation->setDate($newDate);
            $reservation->setStartTime($newStartTime);
            $reservation->setEndTime($newEndTime);

            $this->entityManager->flush();

            $clientEmail = $this->email->create(
                'api-platform@api.com',
                $this->user->getEmail(),
                'Modification de votre rendez-vous pour la réservation n°' . $reservation->getId(),
                'Modification effectuée'
            );

            $this->mailer->send($clientEmail);
        } else {
            if ($reservation->getDate() < $currentDate) {
                throw new \Exception("La date de la réservation est dans le passé.");
            } elseif ($reservation->getEndTime() < $reservation->getStartTime()) {
                throw new \Exception("L'heure de fin est antérieure à l'heure de début.");
            } elseif ($reservation->getEndTime() < $currentDate) {
                throw new \Exception("La réservation est déjà passée et ne peut pas être modifiée.");
            }
        }

        return $reservation;
    }


}