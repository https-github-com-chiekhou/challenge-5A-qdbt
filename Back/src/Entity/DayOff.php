<?php

namespace App\Entity;

use App\Repository\DayOffRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Patch;
use ApiPlatform\Metadata\Post;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\Put;
use ApiPlatform\Metadata\Delete;


#[ApiResource(
    normalizationContext: ['groups' => ['dayoff:read']],
    denormalizationContext: ['groups' => ['dayoff:create', 'dayoff:update']],
    operations: [
        new GetCollection(security: "is_granted('ROLE_PRESTATAIRE')"),
        new Get(security: "is_granted('ROLE_PRESTATAIRE')"),
        new Post(security: "is_granted('ROLE_PRESTATAIRE')",denormalizationContext: ['groups' => ['dayoff:create', 'dayoff:update']]),
        new Put(security: "is_granted('ROLE_PRESTATAIRE')",denormalizationContext: ['groups' => ['dayoff:create', 'dayoff:update']]),
        new Patch(security: "is_granted('ROLE_PRESTATAIRE')"),
        new Delete(security: "is_granted('ROLE_PRESTATAIRE')")
    ],
)]
#[ORM\Entity(repositoryClass: DayOffRepository::class)]
class DayOff
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[Groups(['dayoff:read','dayoff:create', 'dayoff:update'])]
    #[ORM\Column(length: 255,nullable: true)]
    private ?string $name = null;

    #[Groups(['dayoff:read','dayoff:create', 'dayoff:update'])]
    #[ORM\Column(type: Types::DATE_MUTABLE,nullable: true)]
    private ?\DateTimeInterface $dateStart = null;

    #[Groups(['dayoff:read','dayoff:create', 'dayoff:update'])]
    #[ORM\Column(type: Types::DATE_MUTABLE,nullable: true)]
    private ?\DateTimeInterface $dateEnd = null;
  

    #[Groups(['dayoff:read','dayoff:create'])]
    #[ORM\ManyToOne(inversedBy: 'dayOffs')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Salarie $salarie = null;

    

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = $name;

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

    public function getDateStart(): ?\DateTimeInterface
    {
        return $this->dateStart;
    }

    public function setDateStart(\DateTimeInterface $dateStart): static
    {
        $this->dateStart = $dateStart;

        return $this;
    }

    public function getDateEnd(): ?\DateTimeInterface
    {
        return $this->dateEnd;
    }

    public function setDateEnd(\DateTimeInterface $dateEnd): static
    {
        $this->dateEnd = $dateEnd;

        return $this;
    }


}
