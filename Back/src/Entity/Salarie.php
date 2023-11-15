<?php

namespace App\Entity;

use App\Repository\SalarieRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Delete;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Patch;
use ApiPlatform\Metadata\Post;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\Put;

#[ApiResource(
    normalizationContext: ['groups' => ['salarie:read']],
    denormalizationContext: ['groups' => ['salarie:read']],
    operations: [
        new GetCollection(),
        new Get(),
        new Post(),
        new Put(),
        new Patch(),
        new Delete()
    ],
   
)]

#[ORM\Entity(repositoryClass: SalarieRepository::class)]
#[ORM\Table(name: '`salarie`')]
class Salarie
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $nom = null;

    #[ORM\Column(length: 255)]
    private ?string $prenom = null;

    #[ORM\Column(type: Types::TIME_MUTABLE)]
    private ?\DateTimeInterface $horaire = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $conge = null;

    #[ORM\ManyToOne(inversedBy: 'salaries')]
    private ?Prestataire $prestataire = null;

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

    public function getPrenom(): ?string
    {
        return $this->prenom;
    }

    public function setPrenom(string $prenom): static
    {
        $this->prenom = $prenom;

        return $this;
    }

    public function getHoraire(): ?\DateTimeInterface
    {
        return $this->horaire;
    }

    public function setHoraire(\DateTimeInterface $horaire): static
    {
        $this->horaire = $horaire;

        return $this;
    }

    public function getConge(): ?\DateTimeInterface
    {
        return $this->conge;
    }

    public function setConge(\DateTimeInterface $conge): static
    {
        $this->conge = $conge;

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
