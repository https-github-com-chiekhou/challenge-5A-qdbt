<?php

namespace App\Action;

use App\Entity\User;
use ApiPlatform\Validator\ValidatorInterface;
use Symfony\Component\HttpKernel\Attribute\AsController;
use Symfony\Component\Security\Core\Security;
use Lexik\Bundle\JWTAuthenticationBundle\Services\JWTTokenManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Doctrine\ORM\EntityManagerInterface;
#[AsController]
class ResetPassword
{
    /**
     *  @var ValidatorInterface
     */
    private $validator;

     /**
     * @var JWTTokenManagerInterface
     */
    private $tokenManager;

    /**
     * @var EntityManagerInterface
     */
    private $entityManager;

    private $security;

    public function __construct(ValidatorInterface $validator , Security $security, JWTTokenManagerInterface $tokenManager,
    private readonly UserPasswordHasherInterface $passwordHasher,EntityManagerInterface $entityManager,) {
        $this->validator = $validator;
        $this->security = $security;
        $this->entityManager = $entityManager;
        $this->tokenManager = $tokenManager;
    }

    public function __invoke(User $data)
    {
        // $reset = new ResetPassword();
        // $reset();

        // /** @var UserInterface|null $currentUser */
        // $currentUser = $this->security->getUser();

        // $currentUserEmail = $currentUser->getEmail();
        // $currentUserNom = $currentUser->getNom();
        // $currentUserPrenom = $currentUser->getPrenom();
        // $currentUserTelephone = $currentUser->getTelephone();
        // $currentUserIsValid = $currentUser->getIsValid();
        

        // if($currentUser !== null){
            $this->validator->validate($data);
        // }
        // else {
        //     // L'utilisateur n'est pas authentifié, vous pouvez gérer en conséquence (par exemple, lancer une exception ou renvoyer une réponse d'erreur)
        //     throw new \RuntimeException('L\'utilisateur n\'est pas authentifié. Impossible de réinitialiser le mot de passe.');
        // }
        $data->setPassword(
            $this->passwordHasher->hashPassword(
                $data, $data->getNewPassword()
            )
        );

        // $data->setPasswordChangeDate(time());
        // $data->setEmail($currentUserEmail);
        // $data->setNom($currentUserNom);
        // $data->setPrenom($currentUserPrenom);
        // $data->setTelephone($currentUserTelephone);
        // $data->setIsValid($currentUserIsValid);


        
        $this->entityManager->flush();
        
        $token = $this->tokenManager->create($data);

        // return new JsonResponse(['token' => $token]);

        return $data;

    }
}