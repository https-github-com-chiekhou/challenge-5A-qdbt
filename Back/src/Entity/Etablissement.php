<?php

namespace App\Entity;

use App\Repository\EtablissementRepository;
use Doctrine\ORM\Mapping as ORM;
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

#[ORM\Entity(repositoryClass: EtablissementRepository::class)]
#[ApiResource(
    normalizationContext: ['groups' => ['etablissement:read']],
    denormalizationContext: ['groups' => ['etablissement:create', 'etablissement:update']],
    operations: [
        new GetCollection(),
        new Get(),
        new Post(denormalizationContext: ['groups' => ['etablissement:create']]),
        new Put(denormalizationContext: ['groups' => ['etablissement:update']]),
        new Patch(),
        new Delete()
    ],
)]
class Etablissement
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['etablissement:create', 'etablissement:update','etablissement:read'])]
    private ?string $name = null;

    #[Groups(['etablissement:create', 'etablissement:update','etablissement:read'])]
    #[ORM\Column(length: 255)]
    private ?string $adresse = null;

    #[Groups(['etablissement:read','etablissement:create'])]
    #[ORM\ManyToOne(inversedBy: 'etablissements')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Prestataire $prestataire = null;

    #[Groups(['etablissement:read'])]
    #[ORM\OneToMany(mappedBy: 'etablissement', targetEntity: Service::class)]
    private Collection $service;

    public function __construct()
    {
        $this->service = new ArrayCollection();
    }

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

    public function getAdresse(): ?string
    {
        return $this->adresse;
    }

    public function setAdresse(string $adresse): static
    {
        $this->adresse = $adresse;

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

    /**
     * @return Collection<int, Service>
     */
    public function getService(): Collection
    {
        return $this->service;
    }

    public function addService(Service $service): static
    {
        if (!$this->service->contains($service)) {
            $this->service->add($service);
            $service->setEtablissement($this);
        }

        return $this;
    }

    public function removeService(Service $service): static
    {
        if ($this->service->removeElement($service)) {
            // set the owning side to null (unless already changed)
            if ($service->getEtablissement() === $this) {
                $service->setEtablissement(null);
            }
        }

        return $this;
    }
}
