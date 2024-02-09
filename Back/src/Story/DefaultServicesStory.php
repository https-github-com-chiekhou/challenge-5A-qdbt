<?php

namespace App\Story;

use App\Factory\ServiceFactory;
use Zenstruck\Foundry\Story;

final class DefaultServicesStory extends Story
{
    public function build(): void
    {
        ServiceFactory::createMany(30);
    }
}
