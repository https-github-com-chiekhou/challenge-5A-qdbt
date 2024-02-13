<?php

namespace App\Entity;

use App\Repository\PrestataireRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
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
    normalizationContext: ['groups' => ['prestataire:read']],
    denormalizationContext: ['groups' => ['prestataire:create', 'prestataire:update']],
    operations: [
        new GetCollection(),
        new Get(),
        new Post(denormalizationContext: ['groups' => ['prestataire:create']]),
        new Put(denormalizationContext: ['groups' => ['prestataire:update']]),
        new Patch(),
        new Delete()
    ],
)]
#[ORM\Entity(repositoryClass: PrestataireRepository::class)]
class Prestataire
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[Groups(['prestataire:create', 'prestataire:update'])]
    #[ORM\Column(length: 255)]
    private ?string $nomEntreprise = null;

    #[Groups(['prestataire:create', 'prestataire:update'])]
    #[ORM\Column(length: 255)]
    private ?string $descriptionEntreprise = null;

    #[Groups(['prestataire:create', 'prestataire:update'])]
    #[ORM\Column(length: 255)]
    private ?string $contact = null;

    #[Groups(['prestataire:create', 'prestataire:update'])]
    #[ORM\Column(length: 255)]
    private ?string $kbis = null;

    #[Groups(['prestataire:create', 'prestataire:update'])]
    #[ORM\Column(length: 255,nullable: true)]
    private ?string $statistique = null;

    #[Groups(['prestataire:read','prestataire:create', 'prestataire:update'])]
    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    private ?User $user = null;

    #[ORM\OneToMany(mappedBy: 'prestataire', targetEntity: Etablissement::class)]
    private Collection $etablissements;

    #[ORM\OneToMany(mappedBy: 'prestataire', targetEntity: Reservation::class)]
    private Collection $reservations;

    #[ORM\OneToMany(mappedBy: 'prestataire', targetEntity: Feedback::class)]
    private Collection $feedback;

    #[ORM\OneToMany(mappedBy: 'prestataire', targetEntity: Salarie::class)]
    private Collection $salaries;

    #[ORM\OneToMany(mappedBy: 'prestataire', targetEntity: Service::class)]
    private Collection $services;



   
    public function __construct()
    {
        $this->etablissements = new ArrayCollection();
        $this->reservations = new ArrayCollection();
        $this->feedback = new ArrayCollection();
        $this->salaries = new ArrayCollection();
        $this->services = new ArrayCollection();
        $this->statistique =  null;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNomEntreprise(): ?string
    {
        return $this->nomEntreprise;
    }

    public function setNomEntreprise(string $nomEntreprise): static
    {
        $this->nomEntreprise = $nomEntreprise;

        return $this;
    }

    public function getDescriptionEntreprise(): ?string
    {
        return $this->descriptionEntreprise;
    }

    public function setDescriptionEntreprise(string $descriptionEntreprise): static
    {
        $this->descriptionEntreprise = $descriptionEntreprise;

        return $this;
    }

    public function getContact(): ?string
    {
        return $this->contact;
    }

    public function setContact(string $contact): static
    {
        $this->contact = $contact;

        return $this;
    }

    public function getKbis(): ?string
    {
        return $this->kbis;
    }

    public function setKbis(string $kbis): static
    {
        $this->kbis = $kbis;

        return $this;
    }

    public function getStatistique(): ?string
    {
        return $this->statistique;
    }

    public function setStatistique(string $statistique): static
    {
        $this->statistique = $statistique;

        return $this;
    }

    /**
     * @return Collection<int, Etablissement>
     */
    public function getEtablissements(): Collection
    {
        return $this->etablissements;
    }

    public function addEtablissement(Etablissement $etablissement): static
    {
        if (!$this->etablissements->contains($etablissement)) {
            $this->etablissements->add($etablissement);
            $etablissement->setPrestataire($this);
        }

        return $this;
    }

    public function removeEtablissement(Etablissement $etablissement): static
    {
        if ($this->etablissements->removeElement($etablissement)) {
            // set the owning side to null (unless already changed)
            if ($etablissement->getPrestataire() === $this) {
                $etablissement->setPrestataire(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Reservation>
     */
    public function getReservations(): Collection
    {
        return $this->reservations;
    }

    public function addReservation(Reservation $reservation): static
    {
        if (!$this->reservations->contains($reservation)) {
            $this->reservations->add($reservation);
            $reservation->setPrestataire($this);
        }

        return $this;
    }

    public function removeReservation(Reservation $reservation): static
    {
        if ($this->reservations->removeElement($reservation)) {
            // set the owning side to null (unless already changed)
            if ($reservation->getPrestataire() === $this) {
                $reservation->setPrestataire(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Feedback>
     */
    public function getFeedback(): Collection
    {
        return $this->feedback;
    }

    public function addFeedback(Feedback $feedback): static
    {
        if (!$this->feedback->contains($feedback)) {
            $this->feedback->add($feedback);
            $feedback->setPrestataire($this);
        }

        return $this;
    }

    public function removeFeedback(Feedback $feedback): static
    {
        if ($this->feedback->removeElement($feedback)) {
            // set the owning side to null (unless already changed)
            if ($feedback->getPrestataire() === $this) {
                $feedback->setPrestataire(null);
            }
        }

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): static
    {
        $this->user = $user;

        return $this;
    }


    /**
     * @return Collection<int, Salarie>
     */
    public function getSalaries(): Collection
    {
        return $this->salaries;
    }

    public function addSalary(Salarie $salary): static
    {
        if (!$this->salaries->contains($salary)) {
            $this->salaries->add($salary);
            $salary->setPrestataire($this);
        }

        return $this;
    }

    public function removeSalary(Salarie $salary): static
    {
        if ($this->salaries->removeElement($salary)) {
            // set the owning side to null (unless already changed)
            if ($salary->getPrestataire() === $this) {
                $salary->setPrestataire(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Service>
     */
    public function getServices(): Collection
    {
        return $this->services;
    }

    public function addService(Service $service): static
    {
        if (!$this->services->contains($service)) {
            $this->services->add($service);
            $service->setPrestataire($this);
        }

        return $this;
    }

    public function removeService(Service $service): static
    {
        if ($this->services->removeElement($service)) {
            // set the owning side to null (unless already changed)
            if ($service->getPrestataire() === $this) {
                $service->setPrestataire(null);
            }
        }

        return $this;
    }
}
