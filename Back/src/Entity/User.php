<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Delete;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Patch;
use ApiPlatform\Metadata\Post;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\Put;
use App\Repository\UserRepository;
use App\Action\ResetPassword;
use App\State\UserPasswordHasher;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Security\Core\Validator\Constraints\UserPassword;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

#[ApiResource(
    normalizationContext: ['groups' => ['user:read']],
    denormalizationContext: ['groups' => ['user:create', 'user:update']],
    operations: [
        new GetCollection(),
        new Get(),
        new Post(processor: UserPasswordHasher::class, validationContext: ['groups' => ['Default', 'user:create']]),
        new Put(
                // security: "is_granted('ROLE_USER') and object.owner == user",
                uriTemplate: '/users/{id}/reset-password',
                controller: ResetPassword::class,
                denormalizationContext: ['groups' => ['put-reset-password']],
                validationContext:[ 'groups' => [ "put-reset-password"]]
            ),
        new Put(processor: UserPasswordHasher::class,
        denormalizationContext: ['groups' => ['user:update']],),
        new Patch(processor: UserPasswordHasher::class),
        new Delete()
    ],
)]
#[ORM\Entity(repositoryClass: UserRepository::class)]
#[ORM\Table(name: '`user`')]
class User implements UserInterface, PasswordAuthenticatedUserInterface
{
    const ROLE_USER = 'ROLE_USER';
    const ROLE_ADMIN = 'ROLE_ADMIN';
    const ROLE_PRESTATAIRE = 'ROLE_PRESTATAIRE';
   

    
    #[Groups(['user:read'])]
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[Assert\NotBlank(groups: ['user:create'])]
    #[Assert\Email(groups: ['user:create','user:update'])]
    #[Groups(['user:read', 'user:create', 'user:update'])]
    #[ORM\Column(length: 180, unique: true)]
    private ?string $email = null;

    /**
     * @var string The hashed password
     */
    #[ORM\Column]
    #[Assert\NotBlank(groups: ['user:create'])]
    #[Assert\Regex(
         pattern:"/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{7,}/",
         message:"Password must be seven characters long and contain at least one digit, one upper case letter and one lower case letter",
         groups: ['user:create']
        )]
    #[Groups(['user:create'])]
    private ?string $password = null;

    #[Assert\NotBlank(groups: ['user:create'])]
    #[Assert\Expression(
        "this.getPassword() === this.getPlainPassword()",
        message:"Password does not match",
        groups: ['user:create']
        )]
    #[Groups(['user:create'])]
    private ?string $plainPassword = null;


    #[Assert\NotBlank(groups: ['put-reset-password'])]
    #[Assert\Regex(
         pattern: '/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{7,}/' ,
         message:"Password must be seven characters long and contain at least one digit, one upper case letter and one lower case letter",
         groups: ['put-reset-password']
        )]
    #[Groups(['put-reset-password'])]
    private ?string $newPassword = null;

    #[Assert\NotBlank(groups: ['put-reset-password'])]
    #[Assert\Expression(
        "this.getNewPassword() === this.getNewPlainPassword()",
        message:"Password does not match",
        groups: ['put-reset-password']
        )]
    #[Groups(['put-reset-password'])]
    private ?string $newPlainPassword = null;

    #[Assert\NotBlank(groups: ['put-reset-password'])]
    #[Groups(['put-reset-password'])]
    #[UserPassword(groups: ['put-reset-password'])]
    private ?string $oldPassword = null;

    #[ORM\Column]
    #[Groups(['get-admin', 'get-owner','user:create', 'user:read'])]
    private array $roles = [];

    #[Groups(['user:read'])]
    #[ORM\Column]
    private ?\DateTimeImmutable $createdAt = null;

    #[Groups(['user:read','user:create', 'user:update'])]
    #[ORM\Column(length: 255)]
    private ?string $nom = null;

    #[Groups(['user:read','user:create', 'user:update'])]
    #[Assert\NotBlank(groups: ['user:create'])]
    #[ORM\Column(length: 255)]
    private ?string $prenom = null;

    #[Groups(['user:read','user:create', 'user:update'])]
    #[ORM\Column(length: 255)]
    private ?string $telephone = null;


    #[Groups(['user:read'])]
    #[ORM\Column(nullable: true)]
    private ?bool $isValid = null;

    #[ORM\Column(length: 50, nullable: true)]
    private ?string $confirmationToken = null;

    #[ORM\Column(nullable: true)]
    private ?int $passwordChangeDate = null;


    #[Groups(['user:read'])]
    #[ORM\OneToMany(mappedBy: 'client', targetEntity: Reservation::class)]
    private Collection $reservations;

    
    #[Groups(['user:read'])]
    #[ORM\OneToMany(mappedBy: 'client', targetEntity: Comment::class)]
    private Collection $comments;

    #[Groups(['user:read'])]
    #[ORM\OneToMany(mappedBy: 'client', targetEntity: FeedBack::class)]
    private Collection $feedback;

    public function __construct()
    {
        $this->createdAt = new \DateTimeImmutable();
        $this->roles =  ['ROLE_USER'];
        $this->isValid = false;
        $this->reservations = new ArrayCollection();
        $this->feedback = new ArrayCollection(); 
        $this->comments = new ArrayCollection();
    }


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }
    
    /**
     * @see PasswordAuthenticatedUserInterface
     */
    public function getPassword(): ?string
    {
        return $this->password;
    }

    public function setPassword(string $password): static
    {
        $this->password = $password;

        return $this;
    }


    public function getPlainPassword(): ?string
    {
        return $this->plainPassword;
    }

    public function setPlainPassword(string $plainPassword): self
    {
        $this->plainPassword = $plainPassword;

        return $this;
    }


    public function getNewPassword(): ?string
    {
        return $this->newPassword;
    }

    public function setNewPassword(string $newPassword): self
    {
        $this->newPassword = $newPassword;

        return $this;
    }

    public function getNewPlainPassword(): ?string
    {
        return $this->newPlainPassword;
    }

    public function setNewPlainPassword(string $newPlainPassword): self
    {
        $this->newPlainPassword = $newPlainPassword;

        return $this;
    }

    public function getOldPassword(): ?string
    {
        return $this->oldPassword;
    }

    public function setOldPassword(string $oldPassword): self
    {
        $this->oldPassword = $oldPassword;

        return $this;
    }

        public function getPasswordChangeDate(): ?int
    {
        return $this->passwordChangeDate;
    }

    public function setPasswordChangeDate(?int $passwordChangeDate): static
    {
        $this->passwordChangeDate = $passwordChangeDate;

        return $this;
    }

  
    
    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUserIdentifier(): string
    {
        return (string) $this->email;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials(): void
    {
        // If you store any temporary, sensitive data on the user, clear it here
        $this->plainPassword = null;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeImmutable $createdAt): static
    {
        $this->createdAt = $createdAt;

        return $this;
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

    public function getTelephone(): ?string
    {
        return $this->telephone;
    }

    public function setTelephone(string $telephone): static
    {
        $this->telephone = $telephone;

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
            $reservation->setClient($this);
        }

        return $this;
    }

    public function removeReservation(Reservation $reservation): static
    {
        if ($this->reservations->removeElement($reservation)) {
            // set the owning side to null (unless already changed)
            if ($reservation->getClient() === $this) {
                $reservation->setClient(null);
            }
        }

        return $this;
    }


    public function getIsValid(): ?bool
    {
        return $this->isValid;
    }

    public function setIsValid(?bool $isValid): static
    {
        $this->isValid = $isValid;

        return $this;
    }

    public function getConfirmationToken(): ?string
    {
        return $this->confirmationToken;
    }

    public function setConfirmationToken(?string $confirmationToken): static
    {
        $this->confirmationToken = $confirmationToken;

        return $this;
    }

    /**
     * @return Collection<int, Comment>
     */
    public function getComments(): Collection
    {
        return $this->comments;
    }

    public function addComment(Comment $comment): static
    {
        if (!$this->comments->contains($comment)) {
            $this->comments->add($comment);
            $comment->setClient($this);
        }

        return $this;
    }

    public function removeComment(Comment $comment): static
    {
        if ($this->comments->removeElement($comment)) {
            // set the owning side to null (unless already changed)
            if ($comment->getClient() === $this) {
                $comment->setClient(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, FeedBack>
     */
    public function getFeedBack(): Collection
    {
        return $this->feedback;
    }

    public function addFeedBack(FeedBack $feedback): static
    {
        if (!$this->feedback->contains($feedback)) {
            $this->feedback->add($feedack);
            $feedback->setClient($this);
        }

        return $this;
    }

    public function removeFeedBack(FeedBack $feedback): static
    {
        if ($this->feedback->removeElement($feedback)) {
            // set the owning side to null (unless already changed)
            if ($feedback->getClient() === $this) {
                $feedback->setClient(null);
            }
        }

        return $this;
    }



   
}
