<?php
namespace App\EventListener;

use Lexik\Bundle\JWTAuthenticationBundle\Event\JWTCreatedEvent;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

class AddCreatedIdListener implements EventSubscriberInterface
{
    public static function getSubscribedEvents(): array
    {
        return [
            'lexik_jwt_authentication.on_jwt_created' => 'onJWTCreated',
        ];
    }

    public function onJWTCreated(JWTCreatedEvent $event): void
    {
        // Récupérez l'utilisateur depuis l'événement
        $user = $event->getUser();

        // Ajoutez l'ID de l'utilisateur dans le payload sous la clé 'id'
        $payload = $event->getData();
        $payload['id'] = $user->getId();

        // Mettez à jour les données du token
        $event->setData($payload);
    }
}
