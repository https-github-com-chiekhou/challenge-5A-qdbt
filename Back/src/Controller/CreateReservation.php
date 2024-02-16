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

    public function __invoke(Request $request, PrestataireRepository $prestataireRepository, SalarieRepository $salarieRepository, Security $security, EntityManagerInterface $entityManager): Reservation
    {
        // Récupérer l'utilisateur actuel
        $user = $security->getUser();
        if (!$user instanceof User) {
            throw new \Exception("Utilisateur non valide.");
        }

        // Récupérer les données de la requête
        $data = json_decode($request->getContent(), true);

        // Créer une nouvelle réservation
        $reservation = new Reservation();
        $reservation->setClient($user);

        // Extraire les identifiants du prestataire et du salarié de la requête
        $prestataireId = $data['prestataire'] ?? null;
//        $salarieId = $data['salarie'] ?? null;

        // Vérifier si les identifiants du prestataire et du salarié sont présents dans la requête
        if ($prestataireId === null) {
            throw new \Exception("L'ID du prestataire est manquant.");
        }
//        if ($salarieId === null) {
//            throw new \Exception("L'ID du salarié est manquant.");
//        }

        // Récupérer l'entité du prestataire à partir de l'ID
        $prestataire = $prestataireRepository->find($prestataireId);
        if (!$prestataire) {
            throw new \Exception("Prestataire non trouvé pour l'ID spécifié.");
        }

        // Récupérer l'entité du salarié à partir de l'ID
//        $salarie = $salarieRepository->find($salarieId);
//        if (!$salarie) {
//            throw new \Exception("Salarié non trouvé pour l'ID spécifié.");
//        }

        // Définir le prestataire et le salarié pour la réservation
        $reservation->setPrestataire($prestataire);
//        $reservation->setSalarie($salarie);

        // Persist the reservation entity
        $entityManager->persist($reservation);
        $entityManager->flush();

        // Envoyer un email de confirmation
        $clientEmail = $this->email->create(
            'api-platform@api.com',
            $user->getEmail(),
            'Confirmation de réservation n°' . $reservation->getId(),
            'Réservation effectuée'
        );

        return $reservation;
    }


}