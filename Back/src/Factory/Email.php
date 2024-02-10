<?php

namespace App\Factory;

use Symfony\Component\Mime\Email as EmailComponent;

class Email implements EmailInterface
{

    public function create(string $from, string $to, string $subject, string $content): EmailComponent
    {
        return (new EmailComponent())
            ->from($from)
            ->to($to)
            ->subject(htmlentities($subject))
            ->html(sprintf("<p>%S</p>", htmlentities($content)));
    }
}