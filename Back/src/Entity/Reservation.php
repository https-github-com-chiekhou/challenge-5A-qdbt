<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiProperty;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Delete;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\HttpOperation;
use ApiPlatform\Metadata\Patch;
use ApiPlatform\Metadata\Post;
use App\Controller\CancelReservation;
use App\Controller\GetReservation;
use App\Controller\ModifyReservation;
use App\Repository\ReservationRepository;
use App\ReservationModifiedProcessor;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: ReservationRepository::class)]
#[ApiResource(
    security: 'is_granted("ROLE_USER")',
    normalizationContext: ['groups' => ['reservation:read']],
    denormalizationContext: ['groups' => ['reservation:create', 'reservation:update']],
    operations: [
        new GetCollection(
            uriTemplate: '/reservations/list',
            security: 'is_granted("ROLE_ADMIN")',
            normalizationContext: ['groups' => ['reservation:read']],
            securityMessage: 'Sorry but you are not amdin.'
        ),
        new Delete(
            security: 'is_granted("ROLE_USER")',
            controller: CancelReservation::class
        ),
        new Patch(
            security: 'is_granted("ROLE_USER")',
            controller: ModifyReservation::class,
            denormalizationContext: ['groups' => ['reservation:update']],
//            processor: ReservationModifiedProcessor::class
        ),
        new Post(
            security: 'is_granted("ROLE_USER")',
            uriTemplate: '/reservations',
            description: 'Créer une réservation',
            denormalizationContext: ['groups' => ['reservation:create']]
        ),
        new Get(
            uriTemplate: '/reservations',
            controller: GetReservation::class,
            normalizationContext: ['groups' => ['reservation:read']],
            security: 'is_granted("ROLE_USER")'
        )
    ],
)]
class Reservation
{
//    #[ApiProperty(identifier: true)]
    #[Groups(['reservation:read'])]
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[Assert\NotBlank()]
    #[Groups(['reservation:create', 'reservation:read', 'reservation:update'])]
    #[ORM\Column(length: 255)]
    private ?string $status = null;

    #[Groups(['reservation:create', 'reservation:read', 'reservation:update'])]
    #[ORM\Column(length: 255)]
    private ?string $commentaire = null;

    #[Groups(['reservation:create', 'reservation:read', 'reservation:update'])]
    #[ORM\Column(type: Types::DATE_IMMUTABLE)]
    private ?\DateTimeImmutable $date = null;

    #[Groups(['reservation:create', 'reservation:read', 'reservation:update'])]
    #[ORM\Column(type: Types::TIME_MUTABLE)]
    private ?\DateTimeInterface $startTime = null;

    #[Groups(['reservation:create', 'reservation:read', 'reservation:update'])]
    #[ORM\Column(type: Types::TIME_MUTABLE)]
    private ?\DateTimeInterface $endTime = null;

    #[Groups(['reservation:read'])]
    #[ORM\ManyToOne(inversedBy: 'reservations')]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $client = null;

    #[Assert\NotBlank()]
    #[Groups(['reservation:create', 'reservation:read'])]
    #[ORM\ManyToOne(inversedBy: 'reservations', targetEntity: Salarie::class, cascade: ['persist'])]
    #[ORM\JoinColumn(nullable: false)]
    private ?Salarie $salarie = null;

    #[Assert\NotBlank()]
    #[Groups(['reservation:create', 'reservation:read'])]
    #[ORM\ManyToOne(inversedBy: 'reservations', targetEntity: Prestataire::class, cascade: ['persist'])]
    #[ORM\JoinColumn(nullable: false)]
    private ?Prestataire $prestataire = null;


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getStatus(): ?string
    {
        return $this->status;
    }

    public function setStatus(string $status): static
    {
        $this->status = $status;

        return $this;
    }

    public function getCommentaire(): ?string
    {
        return $this->commentaire;
    }

    public function setCommentaire(string $commentaire): static
    {
        $this->commentaire = $commentaire;

        return $this;
    }

    public function getDate(): ?\DateTimeImmutable
    {
        return $this->date;
    }

    public function setDate(\DateTimeImmutable $date): static
    {
        $this->date = $date;

        return $this;
    }

    public function getStartTime(): ?\DateTimeInterface
    {
        return $this->startTime;
    }

    public function setStartTime(\DateTimeInterface $startTime): static
    {
        $this->startTime = $startTime;

        return $this;
    }

    public function getEndTime(): ?\DateTimeInterface
    {
        return $this->endTime;
    }

    public function setEndTime(\DateTimeInterface $endTime): static
    {
        $this->endTime = $endTime;

        return $this;
    }

    public function getClient(): ?User
    {
        return $this->client;
    }

    public function setClient(?User $client): static
    {
        $this->client = $client;

        return $this;
    }

    public function getSalarie(): ?Salarie
    {
        return $this->salarie;
    }

    public function setSalarie(?Salarie $salarie): static
    {
        $this->salarie = $salarie;

        return $this;
    }

    public function getPrestataire(): ?Prestataire
    {
        return $this->prestataire;
    }

    public function setPrestataire(?Prestataire $prestataire): static
    {
        $this->prestataire = $prestataire;

        return $this;
    }
}
