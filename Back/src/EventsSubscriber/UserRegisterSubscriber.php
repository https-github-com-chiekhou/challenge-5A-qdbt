<?php

namespace App\EventsSubscriber;

use App\Entity\User;
use App\Email\Mailer;
use App\Security\TokenGenerator;
use ApiPlatform\Symfony\EventListener\EventPriorities;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Event\ViewEvent;
use Symfony\Component\HttpKernel\KernelEvents;
use Symfony\Component\Mime\Email;
use Symfony\Component\Mailer\MailerInterface;

class UserRegisterSubscriber implements EventSubscriberInterface {
    

    /**
     * @var TokenGenerator
     */
    private $tokenGenerator;

     /**
     * @var Mailer
     */
    private $mailer;

    public function __construct(  
        TokenGenerator $tokenGenerator, 
        Mailer $mailer  
    ){
        $this->tokenGenerator = $tokenGenerator;
        $this->mailer = $mailer;
    }

    public static function getSubscribedEvents(){
        return [
            KernelEvents::VIEW => ['userRegistered', EventPriorities::PRE_WRITE],
        ];
    }

    public function userRegistered(ViewEvent $event): void
    {
        $user = $event->getControllerResult();
        $method = $event->getRequest()->getMethod();

        if(!$user instanceof User || Request::METHOD_POST !== $method) {
            return;
        }

        // Create confirmation token
        $user->setConfirmationToken(
            $this->tokenGenerator->getRandomSecureToken()
        );


        // // Send user email

        // $message = (new Email())
        // ->from('chiekhou.traore@gmail.com')
        // ->to('chiekhou.traore@gmail.com')
        // ->subject('Test')
        // ->text('Je suis en train de tester');

         $this->mailer->sendConfirmationEmail($user);
    }

}
