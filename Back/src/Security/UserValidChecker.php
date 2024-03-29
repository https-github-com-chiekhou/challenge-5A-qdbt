<?php

namespace App\Security;

use App\Entity\User;
use Symfony\Component\Security\Core\Exception\AccountStatusException;
use Symfony\Component\Security\Core\Exception\DisabledException;
use Symfony\Component\Security\Core\User\UserCheckerInterface;
use Symfony\Component\Security\Core\User\UserInterface;

class UserValidChecker implements UserCheckerInterface
 {

     /**
     * Checks the user account after authentication.
     *
     * @throws AccountStatusException
     */

    public function checkPreAuth(UserInterface $user)
    {
        if(!$user instanceof User){
            return;
        }

        if(!$user->getIsValid()){
            throw new DisabledException();
        }
    }

    /**
     * Checks the user account after authentication.
     *
     * @throws AccountStatusException
     */
    public function checkPostAuth(UserInterface $user){}
}
 