<?php

namespace App\Entity;

use App\Repository\PlanningRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Delete;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Patch;
use ApiPlatform\Metadata\Post;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\Put;
use Symfony\Component\Serializer\Annotation\Groups;


#[ApiResource(
    normalizationContext: ['groups' => ['planning:read']],
    denormalizationContext: ['groups' => ['planning:create', 'planning:update']],
    operations: [
        new GetCollection(),
        new Get(),
        new Post(denormalizationContext: ['groups' => ['planning:create', 'planning:update']]),
        new Put(),
        new Patch(),
        new Delete()
    ],
)]
#[ORM\Entity(repositoryClass: PlanningRepository::class)]
class Planning
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[Groups(['planning:read', 'planning:create', 'planning:update'])]
    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $datePlanning = null;

    #[Groups(['planning:read', 'planning:create', 'planning:update'])]
    #[ORM\ManyToOne(inversedBy: 'plannings')]
    private ?Salarie $salarie = null;

    #[Groups(['planning:read', 'planning:create', 'planning:update'])]
    #[ORM\ManyToOne(inversedBy: 'plannings')]
    private ?DayOff $dayOff = null;

    #[Groups(['planning:read', 'planning:create', 'planning:update'])]
    #[ORM\ManyToOne(inversedBy: 'plannings')]
    private ?Creneau $creneau = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDatePlanning(): ?\DateTimeInterface
    {
        return $this->datePlanning;
    }

    public function setDatePlanning(\DateTimeInterface $datePlanning): static
    {
        $this->datePlanning = $datePlanning;

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

    public function getDayOff(): ?DayOff
    {
        return $this->dayOff;
    }

    public function setDayOff(?DayOff $dayOff): static
    {
        $this->dayOff = $dayOff;

        return $this;
    }

    public function getCreneau(): ?Creneau
    {
        return $this->creneau;
    }

    public function setCreneau(?Creneau $creneau): static
    {
        $this->creneau = $creneau;

        return $this;
    }
}
