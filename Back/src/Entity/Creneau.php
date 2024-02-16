<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Symfony\Component\Serializer\Annotation\Groups;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Patch;
use ApiPlatform\Metadata\Post;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\Put;
use ApiPlatform\Metadata\Delete;
use App\Repository\CreneauRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: CreneauRepository::class)]
#[ApiResource(
    normalizationContext: ['groups' => ['creneau:read']],
    denormalizationContext: ['groups' => ['creneau:create', 'user:update']],
    operations: [
        new GetCollection(security: "is_granted('ROLE_PRESTATAIRE')"),
        new Get(security: "is_granted('ROLE_PRESTATAIRE')"),
        new Post(security: "is_granted('ROLE_PRESTATAIRE')",denormalizationContext: ['groups' => ['creneau:create', 'user:update']]),
        new Put(security: "is_granted('ROLE_PRESTATAIRE')",denormalizationContext: ['groups' => ['creneau:create', 'user:update']]),
        new Patch(security: "is_granted('ROLE_PRESTATAIRE')"),
        new Delete(security: "is_granted('ROLE_PRESTATAIRE')")
    ],
)]
class Creneau
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;


    #[Groups(['creneau:create', 'creneau:update','creneau:read'])]
    #[ORM\Column(length: 9)]
    private ?string $day = null;

    #[Groups(['creneau:create', 'creneau:update','creneau:read'])]
    #[ORM\Column(type: Types::TIME_MUTABLE)]
    private ?\DateTimeInterface $startTime = null;

    #[Groups(['creneau:create', 'creneau:update','creneau:read'])]
    #[ORM\Column(type: Types::TIME_MUTABLE)]
    private ?\DateTimeInterface $endTime = null;

    #[Groups(['creneau:create','creneau:read'])]
    #[ORM\ManyToOne(inversedBy: 'creneaux')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Salarie $salarie = null;


    public function getId(): ?int
    {
        return $this->id;
    }


    public function getDay(): ?string
    {
        return $this->day;
    }

    public function setDay(string $day): static
    {
        $this->day = $day;

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

    public function getSalarie(): ?Salarie
    {
        return $this->salarie;
    }

    public function setSalarie(?Salarie $salarie): static
    {
        $this->salarie = $salarie;

        return $this;
    }



}
