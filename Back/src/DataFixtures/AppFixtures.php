<?php

namespace App\DataFixtures;

use App\Story\DefaultUsersStory;
use App\Story\DefaultPrestatairesStory;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        DefaultUsersStory::load();
        DefaultPrestatairesStory::load();
    }
}