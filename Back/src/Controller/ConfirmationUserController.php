<?php

namespace App\Controller;

use App\Security\UserConfirmationService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;


class ConfirmationUserController extends AbstractController
{
    #[Route(path: '/confirm-user/{token}', name: 'default_confirm_token')]
    public function confirmUser(
        string $token,
        UserConfirmationService $userConfirmationService
    ) {
        $userConfirmationService->confirmUser($token);

        $user = $this->getUser();

        return $this->json([
            'email' => $user->getUserIdentifier(),
        ]);
    }
}