<?php

namespace App\Story;

use App\Factory\CreneauFactory;
use Zenstruck\Foundry\Story;

final class DefaultCreneauxStory extends Story
{
    public function build(): void
    {
        CreneauFactory::createMany(50);
    }
}
