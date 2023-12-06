<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
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
        new GetCollection(
            uriTemplate: '/creneaux/list',
        ),
        new Get(
            uriTemplate: '/creneaux',
        ),
        new Post(
            uriTemplate: '/creneaux',
            denormalizationContext: ['groups' => ['creneau:create', 'user:update']]
        ),
        new Put(
            uriTemplate: '/creneaux/{id}',
            denormalizationContext: ['groups' => ['creneau:create', 'user:update']]
        ),
        new Patch(
            uriTemplate: '/creneaux/{id}',
        ),
        new Delete(
            uriTemplate: '/creneaux/{id}',
        )
    ],
)]
class Creneau
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;


    #[Groups(['creneau:create', 'creneau:update'])]
    #[ORM\Column(length: 9)]
    private ?string $day = null;

    #[Groups(['creneau:create', 'creneau:update'])]
    #[ORM\Column(type: Types::TIME_MUTABLE)]
    private ?\DateTimeInterface $startTime = null;

    #[Groups(['creneau:create', 'creneau:update'])]
    #[ORM\Column(type: Types::TIME_MUTABLE)]
    private ?\DateTimeInterface $endTime = null;

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
