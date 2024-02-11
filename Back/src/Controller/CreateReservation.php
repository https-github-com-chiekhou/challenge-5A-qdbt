<?php

namespace App\Controller;

use App\Entity\Reservation;
use App\Factory\Email;
use App\Repository\PrestataireRepository;
use App\Repository\SalarieRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpKernel\Attribute\AsController;
use Symfony\Component\Mailer\MailerInterface;

#[AsController]
class CreateReservation extends AbstractController
{
    private MailerInterface $mailer;
    private ?\Symfony\Component\Security\Core\User\UserInterface $user;
    private Email $email;
    private EntityManagerInterface $entityManager;
    private PrestataireRepository $prestataireRepository;
    private SalarieRepository $salarieRepository;

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

    public function __invoke(Request $request): Reservation
    {
        $data = json_decode($request->getContent(), true);
        $reservation = new Reservation();

        $prestataireId = $data['prestataire'] ?? null;
        if ($prestataireId) {
            $prestataire = $this->prestataireRepository->find($prestataireId);
            $reservation->setPrestataire($prestataire);
        }

        $salarieId = $data['salarie'] ?? null;
        if($salarieId){
            $salarie = $this->salarieRepository->find($salarieId);
            $reservation->setSalarie($salarie);
        }

        // Enregistrer la réservation dans la base de données
        $entityManager = $this->entityManager;
        $entityManager->persist($reservation);
        $entityManager->flush();

        $clientEmail = $this->email->create(
            'api-platform@api.com',
            $this->user->getEmail(),
            'Confirmation de réservation n°' . $reservation->getId(),
            'Reservation effectué'
        );

        return $reservation;
    }
}