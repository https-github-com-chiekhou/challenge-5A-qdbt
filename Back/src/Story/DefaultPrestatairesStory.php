<?php

namespace App\Story;

use App\Factory\PrestataireFactory;
use Zenstruck\Foundry\Story;

final class DefaultPrestatairesStory extends Story
{
    public function build(): void
    {
        PrestataireFactory::createMany(30);
    }
}
