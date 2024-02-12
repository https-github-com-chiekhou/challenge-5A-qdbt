<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Delete;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\Link;
use ApiPlatform\Metadata\Post;
use App\Repository\FeedbackRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: FeedbackRepository::class)]
#[ApiResource(
    security: 'is_granted("ROLE_USER")',
    normalizationContext: ['groups' => ['feedback: read']],
    denormalizationContext: ['groups' => ['feedback: create']],
    operations: [
        new Post(
            uriTemplate: '/prestataire/{id}/comment',
            uriVariables: [
                'id' => new Link(fromClass: Prestataire::class, fromProperty: 'id', toProperty: 'prestataire')
            ],
            security: 'is_granted("ROLE_USER")',
        ),
        new Get(
            uriTemplate: '/prestataire/{id}/getComments',
            uriVariables: [
                'id' => new Link(fromClass: Prestataire::class, fromProperty: 'id', toProperty: 'prestataire')
            ],
            security: 'is_granted("ROLE_USER")',
        ),
        new Delete(
            uriTemplate: '/prestataire/{id}/deleteteComments',
            uriVariables: [
                'id' => new Link(fromClass: Prestataire::class, fromProperty: 'id', toProperty: 'prestataire')
            ],
            security: 'is_granted("ROLE_USER")',
        )
    ]
)]
class Feedback
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[Groups(['feedback: create', 'feedback: read'])]
    #[ORM\Column]
    private ?int $note = null;

    #[Groups(['feedback: create', 'feedback: read'])]
    #[ORM\Column(length: 255)]
    private ?string $commentaire = null;

    #[Groups(['feedback: read'])]
    #[ORM\ManyToOne(inversedBy: 'feedback')]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $client = null;

    #[Groups(['feedback: create','feedback: read'])]
    #[ORM\ManyToOne(inversedBy: 'feedback')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Prestataire $prestataire = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNote(): ?int
    {
        return $this->note;
    }

    public function setNote(int $note): static
    {
        $this->note = $note;

        return $this;
    }

    public function getCommentaire(): ?string
    {
        return $this->commentaire;
    }

    public function setCommentaire(string $commentaire): static
    {
        $this->commentaire = $commentaire;

        return $this;
    }

    public function getClient(): ?User
    {
        return $this->client;
    }

    public function setClient(?User $client): static
    {
        $this->client = $client;

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
