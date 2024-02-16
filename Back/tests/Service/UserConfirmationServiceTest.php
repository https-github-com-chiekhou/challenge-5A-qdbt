<?php

// tests/Service/UserConfirmationServiceTest.php

namespace App\Tests\Service;

use App\Entity\User;
use App\Exception\InvalidConfirmationTokenException;
use App\Repository\UserRepository;
use App\Security\UserConfirmationService;
use Doctrine\ORM\EntityManagerInterface;
use PHPUnit\Framework\TestCase;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class UserConfirmationServiceTest extends TestCase
{
    public function testConfirmUser(): void
    {
        // Créer un double de l'interface UserRepository
        $userRepository = $this->createMock(UserRepository::class);
        
        // Créer un double de l'interface EntityManagerInterface
        $entityManager = $this->createMock(EntityManagerInterface::class);
        
        // Créer un utilisateur avec un token de confirmation
        $user = new User();
        $user->setConfirmationToken('abc123');
        
        // Configurer le double de UserRepository pour renvoyer l'utilisateur créé
        $userRepository->method('findOneBy')->willReturn($user);
        
        // Créer une instance de UserConfirmationService en utilisant les doubles
        $userConfirmationService = new UserConfirmationService($userRepository, $entityManager);
        
        // Appeler la méthode confirmUser avec un token de confirmation valide
        $userConfirmationService->confirmUser('abc123');
        
        // Vérifier que l'utilisateur est maintenant validé
        $this->assertTrue($user->getIsValid());
        
        // Vérifier que le token de confirmation de l'utilisateur est null
        $this->assertNull($user->getConfirmationToken());
    }

    public function testConfirmUserWithInvalidToken(): void
    {
        // Créer un double de l'interface UserRepository
        $userRepository = $this->createMock(UserRepository::class);
        
        // Configurer le double de UserRepository pour ne pas renvoyer d'utilisateur
        $userRepository->method('findOneBy')->willReturn(null);
        
        // Créer un double de l'interface EntityManagerInterface
        $entityManager = $this->createMock(EntityManagerInterface::class);
        
        // Créer une instance de UserConfirmationService en utilisant les doubles
        $userConfirmationService = new UserConfirmationService($userRepository, $entityManager);
        
        // Essayer de confirmer un utilisateur avec un token de confirmation invalide
        $this->expectException(NotFoundHttpException::class);
        $userConfirmationService->confirmUser('invalid_token');
    }
}
