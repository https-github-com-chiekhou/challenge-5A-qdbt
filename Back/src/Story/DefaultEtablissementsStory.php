<?php

namespace App\Story;

use App\Factory\EtablissementFactory;
use Zenstruck\Foundry\Story;

final class DefaultEtablissementsStory extends Story
{
    public function build(): void
    {
        EtablissementFactory::createMany(30); 
    }
}
