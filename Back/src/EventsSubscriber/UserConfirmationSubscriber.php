<?php

namespace App\EventsSubscriber;

use App\Entity\User;
use App\Entity\UserConfirmation;
use App\Security\UserConfirmationService;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use ApiPlatform\Symfony\EventListener\EventPriorities;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpKernel\Event\ViewEvent;
use Symfony\Component\HttpKernel\KernelEvents;
use Symfony\Component\Security\Core\Exception\NotFoundHttpException;


class UserConfirmationSubscriber implements EventSubscriberInterface {

    /**
     * @var UserConfirmationService
     */
    private $userConfirmationService;


    public function __construct(UserConfirmationService $userConfirmationService){
        $this->userConfirmationService = $userConfirmationService;
    }

    public static function getSubscribedEvents(){
        return [
            KernelEvents::VIEW => ['confirmUser', EventPriorities::POST_VALIDATE],
        ];
    }

    public function confirmUser(ViewEvent $event): void
    {
        $request = $event->getRequest();
        dump($request);

        if('_api_/users/confirm_post' !== $request->get('_route')) {
            return;
        }

        /** @var UserConfirmation $confirmationToken */
        $confirmationToken = $event->getControllerResult();

        dump($confirmationToken->confirmationToken);

        $this->userConfirmationService->confirmUser(
            $confirmationToken->confirmationToken
        );
        dump($user);
        
        $event->setResponse(new JsonResponse(null, Response::HTTP_OK));
    }
}