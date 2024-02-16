<?php

namespace App\Email;

use AllowDynamicProperties;
use App\Entity\User;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;


#[AllowDynamicProperties] class Mailer
{
   
    private $mailer;

    public function __construct(
      
        MailerInterface $mailer ,
        UrlGeneratorInterface $urlGenerator 
    )
    {
        $this->mailer = $mailer;
        $this->urlGenerator = $urlGenerator;
    }

    public function sendConfirmationEmail(User $user)
    {
        $confirmationLink = $this->urlGenerator->generate(
            'default_confirm_token',
            ['token' => $user->getConfirmationToken()],
            UrlGeneratorInterface::ABSOLUTE_URL
        );

        $body="Bonjour" . $user->getConfirmationToken(). " de cliquer sur le lien suivant pour confirmer votre compte : ";

        $message = (new Email())
            ->from('api-platform@api.com')
            ->to($user->getEmail())
            ->subject('Please confirm your account!')
            ->html('<a href="'.$confirmationLink .'">lien</a>');

        $this->mailer->send($message);
    }
}