<?php

namespace App\Entity;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Post;
use Symfony\Component\Validator\Constraints as Assert;


#[ApiResource(
    operations: [
        new Post(security: "is_granted('ROLE_PRESTATAIRE') and is_granted('ROLE_USER' and is_granted('ROLE_ADMIN') " , uriTemplate: '/users/confirm')
    ],
)]

class UserConfirmation {
    #[Assert\NotBlank]
    #[Assert\Length(min:30, max:30)]
    public $confirmationToken;
}


