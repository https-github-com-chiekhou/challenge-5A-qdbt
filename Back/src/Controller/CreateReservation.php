<?php

namespace App\Controller;

use App\Entity\Reservation;
use App\Entity\User;
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

    public function __invoke(Request $request, PrestataireRepository $prestataireRepository, SalarieRepository $salarieRepository, Security $security): Reservation
    {
        $user = $security->getUser();
        if (!$user) {
            throw new \Exception("Utilisateur non authentifié.");
        }

        if (!($user instanceof User)) {
            throw new \Exception("L'utilisateur n'est pas valide.");
        }

        $data = json_decode($request->getContent(), true);
        $reservation = new Reservation();
        $reservation->setClient($user);

        $prestataireId = $data['prestataire']['id'] ?? null;
        $salarieId = $data['salarie']['id'] ?? null;

        if ($prestataireId === null) {
            throw new \Exception("L'ID du prestataire est manquant.");
        }
        if ($salarieId === null) {
            throw new \Exception("L'ID du salarié est manquant.");
        }

        $prestataire = $prestataireRepository->find($prestataireId);
        if ($prestataire === null) {
            throw new \Exception("Aucun prestataire trouvé pour l'ID spécifié.");
        }
        $reservation->setPrestataire($prestataire);

        $salarie = $salarieRepository->find($salarieId);
        if ($salarie === null) {
            throw new \Exception("Aucun salarié trouvé pour l'ID spécifié.");
        }
        $reservation->setSalarie($salarie);

        $entityManager = $this->entityManager;
        $entityManager->persist($reservation);
        $entityManager->flush();

        $clientEmail = $this->email->create(
            'api-platform@api.com',
            $user->getEmail(),
            'Confirmation de réservation n°' . $reservation->getId(),
            'Reservation effectué'
        );

        return $reservation;
    }


}