<?php

namespace App\Story;

use App\Factory\SalarieFactory;
use Zenstruck\Foundry\Story;

final class DefaultSalariesStory extends Story
{
    public function build(): void
    {
        SalarieFactory::createMany(30);
    }
}
