<?php

namespace App\Controller;

use App\Entity\Reservation;
use App\Factory\Email;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\Exception\ORMException;
use http\Env\Response;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpKernel\Attribute\AsController;
use Symfony\Component\Mailer\MailerInterface;

#[AsController]
class CancelReservation extends AbstractController
{
    private MailerInterface $mailer;
    private ?\Symfony\Component\Security\Core\User\UserInterface $user;
    private Email $email;
    private EntityManagerInterface $entityManager;

    public function __construct(
        EntityManagerInterface $entityManager,
        MailerInterface        $mailer,
        Email                  $email,
        Security               $security
    )
    {
        $this->entityManager = $entityManager;
        $this->user = $security->getUser();
        $this->mailer = $mailer;
        $this->email = $email;
    }

    /**
     * @throws ORMException
     */
    public function __invoke(Reservation $reservation)
    {
        // Envoyer un e-mail pour notifier la suppression de l'objet
        $clientEmail = $this->email->create(
            'eddygomet@gmail.com',
            $this->user->getEmail(),
            'Annulation de la réservation n°' . $reservation->getId(),
            'Reservation annulée'
        );
        $this->mailer->send($clientEmail);

        // Supprimer l'entité de la base de données
        $this->entityManager->remove($reservation);
        $this->entityManager->flush();

        // Retourner une réponse, par exemple un code de succès HTTP 204
        return $this->json([], 204);
    }


}