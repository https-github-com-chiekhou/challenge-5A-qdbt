<?php

namespace App\Action\Reservation;

use ApiPlatform\State\ProcessorInterface;
use App\Entity\Prestataire;
use App\Entity\Reservation as ReservationEntity;
use ApiPlatform\Metadata\Operation;
use App\Factory\Email;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Security\Core\User\UserInterface;

final class ReservationProcessor implements ProcessorInterface
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

    public function process(mixed $data, Operation $operation, array $uriVariables = [], array $context = [])
    {
        if ($this->user instanceof UserInterface) {
            if ($data instanceof ReservationEntity && $data->getId() !== null) {
                $existingReservation = $this->entityManager->getRepository(ReservationEntity::class)->find($data->getId());

                if ($existingReservation) {
                    $prestataire = $existingReservation->getPrestataire();

                    if ($prestataire) {
                        $prestataireId = $prestataire->getId();
                        $prestataireEntity = $this->entityManager->getRepository(Prestataire::class)->find($prestataireId);

                        if ($prestataireEntity) {
                            $clientEmail = $this->email->create(
                                'eddygomet@gmail.com',
                                $this->user->getEmail(),
                                'Confirmation de réservation n°' . $data->getId(),
                                $data->getContent()
                            );
                            $this->mailer->send($clientEmail);
                        }
                    }
                }
            }
        }else{
            dd('Aucun utilisateur trouvé');
        }

        return $data;
    }

}