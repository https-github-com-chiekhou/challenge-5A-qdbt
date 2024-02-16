<?php

namespace App\Entity;

use App\Repository\SalarieRepository;
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
    normalizationContext: ['groups' => ['salarie:read']],
    denormalizationContext: ['groups' => ['salarie:create', 'salarie:update']],
    operations: [
        new GetCollection(security: "is_granted('ROLE_PRESTATAIRE')"),
        new Get(security: "is_granted('ROLE_PRESTATAIRE')"),
        new Post(security: "is_granted('ROLE_PRESTATAIRE')",denormalizationContext: ['groups' => ['salarie:create', 'salarie:update']]),
        new Put(security: "is_granted('ROLE_PRESTATAIRE')",denormalizationContext: ['groups' => ['salarie:create', 'salarie:update']]),
        new Patch(security: "is_granted('ROLE_PRESTATAIRE')"),
        new Delete(security: "is_granted('ROLE_PRESTATAIRE')")
    ],
)]
#[ORM\Entity(repositoryClass: SalarieRepository::class)]
class Salarie
{
    #[Groups(['salarie:read', 'reservation:read'])]
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[Groups(['salarie:create', 'salarie:update','salarie:read', 'reservation: read'])]
    #[ORM\Column(length: 255)]
    private ?string $nom = null;

    #[Groups(['salarie:create', 'salarie:update','salarie:read', 'reservation: read'])]
    #[ORM\Column(length: 255)]
    private ?string $prenom = null;

    #[Groups(['salarie:read'])]
    #[ORM\OneToMany(mappedBy: 'salarie', targetEntity: DayOff::class)]
    private Collection $dayOffs;

    #[Groups(['salarie:read'])]
    #[ORM\OneToMany(mappedBy: 'salarie', targetEntity: Creneau::class)]
    private Collection $creneaux;

    #[Groups(['salarie:read'])]
    #[ORM\OneToMany(mappedBy: 'salarie', targetEntity: Reservation::class)]
    private Collection $reservations;

    #[ORM\ManyToOne(inversedBy: 'salaries')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Prestataire $prestataire = null;

    public function __construct()
    {
        $this->dayOffs = new ArrayCollection();
        $this->creneaux = new ArrayCollection();
        $this->reservations = new ArrayCollection();
        $this->prestataires = new ArrayCollection();
    }

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

    /**
     * @return Collection<int, DayOff>
     */
    public function getDayOffs(): Collection
    {
        return $this->dayOffs;
    }

    public function addDayOff(DayOff $dayOff): static
    {
        if (!$this->dayOffs->contains($dayOff)) {
            $this->dayOffs->add($dayOff);
            $dayOff->setSalarie($this);
        }

        return $this;
    }

    public function removeDayOff(DayOff $dayOff): static
    {
        if ($this->dayOffs->removeElement($dayOff)) {
            // set the owning side to null (unless already changed)
            if ($dayOff->getSalarie() === $this) {
                $dayOff->setSalarie(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Creneau>
     */
    public function getCreneaux(): Collection
    {
        return $this->creneaux;
    }

    public function addCreneaux(Creneau $creneaux): static
    {
        if (!$this->creneaux->contains($creneaux)) {
            $this->creneaux->add($creneaux);
            $creneaux->setSalarie($this);
        }

        return $this;
    }

    public function removeCreneaux(Creneau $creneaux): static
    {
        if ($this->creneaux->removeElement($creneaux)) {
            // set the owning side to null (unless already changed)
            if ($creneaux->getSalarie() === $this) {
                $creneaux->setSalarie(null);
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
            $reservation->setSalarie($this);
        }

        return $this;
    }

    public function removeReservation(Reservation $reservation): static
    {
        if ($this->reservations->removeElement($reservation)) {
            // set the owning side to null (unless already changed)
            if ($reservation->getSalarie() === $this) {
                $reservation->setSalarie(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Prestataire>
     */
    public function getPrestataires(): Collection
    {
        return $this->prestataires;
    }

    public function addPrestataire(Prestataire $prestataire): static
    {
        if (!$this->prestataires->contains($prestataire)) {
            $this->prestataires->add($prestataire);
            $prestataire->setSalarie($this);
        }

        return $this;
    }

    public function removePrestataire(Prestataire $prestataire): static
    {
        if ($this->prestataires->removeElement($prestataire)) {
            // set the owning side to null (unless already changed)
            if ($prestataire->getSalarie() === $this) {
                $prestataire->setSalarie(null);
            }
        }

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
