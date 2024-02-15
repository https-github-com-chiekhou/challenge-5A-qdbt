<?php

namespace App\Entity;

use App\Repository\ServiceRepository;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Delete;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Patch;
use ApiPlatform\Metadata\Post;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\Put;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: ServiceRepository::class)]
#[ApiResource(
    normalizationContext: ['groups' => ['services:read']],
    denormalizationContext: ['groups' => ['services:create', 'services:update']],
    operations: [
        new GetCollection(security: "is_granted('ROLE_PRESTATAIRE')"),
        new Get(security: "is_granted('ROLE_PRESTATAIRE')"),
        new Post(security: "is_granted('ROLE_PRESTATAIRE')",denormalizationContext: ['groups' => ['services:create', 'services:update']]),
        new Put(security: "is_granted('ROLE_PRESTATAIRE')",denormalizationContext: ['groups' => ['services:create', 'services:update']]),
        new Patch(security: "is_granted('ROLE_PRESTATAIRE')"),
        new Delete(security: "is_granted('ROLE_PRESTATAIRE')")
    ],
)]
class Service
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[Groups(['services:create', 'services:update','services:read'])]
    #[ORM\Column(length: 255)]
    private ?string $nom = null;

    #[Groups(['services:create', 'services:update','services:read'])]
    #[ORM\Column]
    private ?string $tarif = null;

    #[Groups(['services:create', 'services:update','services:read'])]
    #[ORM\Column(length: 255)]
    private ?string $categorie = null;

    #[Groups(['services:create', 'services:update','services:read'])]
    #[ORM\Column(length: 255)]
    private ?string $description = null;

    #[Groups(['services:create', 'services:update','services:read'])]
    #[ORM\ManyToOne(inversedBy: 'services')]
    private ?Prestataire $prestataire = null;

    #[Groups(['services:create', 'services:update','services:read'])]
    #[ORM\ManyToOne(inversedBy: 'service')]
    private ?Etablissement $etablissement = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNom(): ?string
    {
        return $this->nom;
    }

    public function setNom(string $nom): static
    {
        $this->nom = $nom;

        return $this;
    }

    public function getTarif(): ?string
    {
        return $this->tarif;
    }

    public function setTarif(string $tarif): static
    {
        $this->tarif = $tarif;

        return $this;
    }

    public function getCategorie(): ?string
    {
        return $this->categorie;
    }

    public function setCategorie(string $categorie): static
    {
        $this->categorie = $categorie;

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

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): static
    {
        $this->description = $description;

        return $this;
    }

    public function getEtablissement(): ?Etablissement
    {
        return $this->etablissement;
    }

    public function setEtablissement(?Etablissement $etablissement): static
    {
        $this->etablissement = $etablissement;

        return $this;
    }
}
